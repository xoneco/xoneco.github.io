const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamodb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: process.env.DYNAMODB_TABLE,
};


module.exports.getLocation = (event, context, callback) => {
  dynamodb.scan(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t get location.'));
      return;
    }

    const locations = result.Items;
    locations.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return -1;
    });
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        location: locations[0].publicLocationString,
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    callback(null, response);
  });
};
