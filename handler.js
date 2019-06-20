"use strict";

const fetch = require('node-fetch');

module.exports.issues = async event => {
  const reposUrl = 'https://api.github.com/repos/leapdao/';
  const response = await fetch(
    `${reposUrl}${event.path.repo}/issues${event.query.labels ? '?labels=' + event.query.labels : ''}`, {
      headers: {
        'Authorization': `token ${process.env.API_TOKEN}`
      }
  });
  return await response.json();
};
