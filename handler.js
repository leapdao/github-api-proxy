"use strict";

const fetch = require('node-fetch');

module.exports.issues = async (event) => {
  const reposUrl = 'https://api.github.com/repos/leapdao/';
  const response = await fetch(
    `${reposUrl}${event.path.repo}/issues?labels=${event.query.labels}`,
    {
      headers: {
        'Authorization': `token ${process.env.API_TOKEN}`
      }
  });

  const data = await response.json();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: data
  };
};
