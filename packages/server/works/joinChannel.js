const { findChannelByIdAndPassword } = require('./findChannel');
const { updateUserVisitedChannel } = require('./updateUser');

function joinChannel(user_id, channel_id, password) {
  const next = findChannelByIdAndPassword(channel_id, password).then(({ status, channelData }) => {
    switch(status) {
      case 200:
        if (user_id === channelData.master_id) {
          return {
            status: 200,
            channelData
          }
        } else {
          return updateUserVisitedChannel(user_id, channel_id).then(() => ({
            status: 200,
            channelData
          }));
        }
      case 204:
        return {
          status: 401,
          channelData: {}
        };
      default:
        return {
          status: 500,
          channelData: {}
        };
    }
  });
  
  return next;
}

const works = {
  joinChannel
};

module.exports = works;

