const findUser = require('./findUser');
const saveUser = require('./saveUser');
const updateUser = require('./updateUser');
const findChannel = require('./findChannel');
const saveChannel = require('./saveChannel');
const joinChannel = require('./joinChannel');

const works = {
  ...findUser,
  ...saveUser,
  ...updateUser,
  ...findChannel,
  ...saveChannel,
  ...joinChannel
};

module.exports = works;
