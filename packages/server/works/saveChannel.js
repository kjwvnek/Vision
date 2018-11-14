const Types = require('mongoose').Types;
const Channel = require('../model/Channel');

function saveChannel(master_id, title, password, description) {
  const mongo_master_id = Types.ObjectId(master_id);
  
  const channel = new Channel({
    master_id: mongo_master_id,
    title,
    password,
    description
  });
  
  const next = channel.save().then(channelData => ({
    status: 201,
    channelData
  }));
  
  return next;
}

const works = {
  saveChannel
};

module.exports = works;
