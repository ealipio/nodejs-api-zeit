/***
 * This file is to serve an api in zeit.co
 */
const comments = require('./comments-data.json');

module.exports = async (req, res) => {
  res.json(comments);
};
