"use strict";

const fetch = require('node-fetch');

module.exports.issues = (event, context, callback) => {
  const reposUrl = 'https://api.github.com/repos/leapdao/';
  fetch(`${reposUrl}${event.path.repo}/issues?labels=${event.query.labels}`, {
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
