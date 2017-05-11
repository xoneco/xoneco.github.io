const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const uuid = require('uuid');
const fetch = require('node-fetch');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const mapsAPIKey = process.env.MAPS_API_KEY;

module.exports.setLocation = (event, context, callback) => {
  const data = JSON.parse(event.body);

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=${mapsAPIKey}`)
  .then(response => response.json())
  .then((json) => {
    const addressComponents = json.results[0].address_components;
    const requiredComponents = {};
    for (let i = 0; i < addressComponents.length; i += 1) {
      if (addressComponents[i].types.indexOf('country') > -1) {
        requiredComponents.country = addressComponents[i].short_name;
      } else if (addressComponents[i].types.indexOf('postal_town') > -1) {
        requiredComponents.postalTown = addressComponents[i].long_name;
      } else if (addressComponents[i].types.indexOf('locality') > -1) {
        requiredComponents.Locality = addressComponents[i].long_name;
      }
    }

    let publicLocationString = requiredComponents.country;

    if (requiredComponents.locality) {
      publicLocationString = `${requiredComponents.locality}, ${requiredComponents.country}`;
    } else if (requiredComponents.postalTown) {
      publicLocationString = `${requiredComponents.postalTown}, ${requiredComponents.country}`;
    }

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        createdAt: data.timestamp,
        accuracy: data.coords.accuracy,
        altitude: data.coords.altitude,
        heading: data.coords.heading,
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        speed: data.coords.speed,
        publicLocationString,
      },
    };

    dynamodb.put(params, (error) => {
      if (error) {
        console.error(error);
        callback(new Error('Couldn\'t create set the location.'));
        return;
      }

      const response = {
        statusCode: 200,
        body: JSON.stringify(params.Item),
      };
      callback(null, response);
    });
  });
};
