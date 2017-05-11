/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import BackgroundJob from 'react-native-background-job';
import { API_DOMAIN, API_KEY } from 'react-native-dotenv';

const myJobKey = 'location_update';

// This has to run outside of the component definition since the component is never
// instantiated when running in headless mode
function updateLocation() {
  const maximumAgeHours = 2;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      fetch(`${API_DOMAIN}/location`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({
          timestamp: position.timestamp,
          coords: position.coords,
        }),
      })
      .then(response => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch(error => console.log(error));
    },
    error => Alert.alert(JSON.stringify(error)),
    { enableHighAccuracy: false, timeout: 60000, maximumAge: (maximumAgeHours * 60 * 60 * 1000) },
  );
}

BackgroundJob.register({
  jobKey: myJobKey,
  job: () => updateLocation(),
});

const styles = StyleSheet.create({
  button: { padding: 20, backgroundColor: '#ccc', marginBottom: 10 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: { fontSize: 20, textAlign: 'center', margin: 10 },
  instructions: { textAlign: 'center', color: '#333333', marginBottom: 5 },
});

export default class WilhelmKloppMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    BackgroundJob.getAll({
      callback: (jobs) => {
        this.setState({ jobs });
        console.log('Jobs:', jobs);
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {'Wilhelm Klopp: Update Location service'}
        </Text>
        <Text>
          Scheduled jobs:
          {this.state.jobs.map(({ jobKey }) => jobKey)}
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.schedule({
              jobKey: myJobKey,
              period: (2 * 60 * 60 * 1000),
              timeout: 60000,
              networkType: BackgroundJob.NETWORK_TYPE_ANY,
            });
            this.getAll();
          }}
        >
          <Text>Schedule</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            BackgroundJob.cancelAll();
            this.getAll();
          }}
        >
          <Text>CancelAll</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            updateLocation();
          }}
        >
          <Text>Update Location Now</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('WilhelmKloppMobile', () => WilhelmKloppMobile);
