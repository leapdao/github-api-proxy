"use strict";

const fetch = require('node-fetch');

module.exports.issues = (event, context, callback) => {
  const reposUrl = 'https://api.github.com/repos/leapdao/';
  fetch(`${reposUrl}${event.pathParameters.repo}/issues?labels=${event.queryStringParameters.labels}`, {
    headers: {
      'Authorization': `token ${process.env.API_TOKEN}`
    }
  })
  .then(response => response.json())
  .then(data => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: data
    };
    callback(null, response);
  });
};
