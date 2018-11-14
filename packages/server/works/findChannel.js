const Types = require('mongoose').Types;
const { findUserById } = require('./findUser');
const Channel = require('../model/Channel');

function findChannelsByUserId(id) {
  const next = findUserById(id).then(({ status, userData }) => {
    if (!userData) {
      return;
    }
    
    const channels = userData.visited_channels;
    
    if (channels.length > 0) {
      const promises = [];
      
      channels.forEach((channelId, index) => {
        promises[index] = findChannelById(channelId).then(({ channelData }) => channelData);
      });
  
      return Promise.all(promises).then(channelsData => ({
        status: 200,
        channelsData
      }));
    } else {
      return {
        status: 204,
        channelsData: []
      };
    }
  });
  
  return next;
}

function findChannelsByMasterId(id) {
  const master_id = Types.ObjectId(id);
  
  const next = Channel.find({ master_id }).then(channelsData => ({
    status: channelsData ? 200 : 204,
    channelsData: channelsData || []
  }));
  
  return next;
}

function findChannelById(id) {
  const next = Channel.findById(id).then(channelData => ({
    status: channelData ? 200 : 204,
    channelData: channelData || {}
  }));
  
  return next;
}

function findChannelByIdAndPassword(id, password) {
  const mongo_id = Types.ObjectId(id);
  
  const next = Channel.findOne({
    _id: mongo_id,
    password
  }).then(channelData => ({
    status: channelData ? 200 : 204,
    channelData: channelData || {}
  }));
  
  return next;
}

const works = {
  findChannelsByUserId,
  findChannelsByMasterId,
  findChannelById,
  findChannelByIdAndPassword
};

module.exports = works;
