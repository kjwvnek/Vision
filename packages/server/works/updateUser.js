const Types = require('mongoose').Types;
const User = require('../model/User');

function updateUserVisitedChannel(user_id, channel_id) {
  let hasVisitedChannel = false;
  
  const mongo_user_id = Types.ObjectId(user_id),
    mongo_channel_id = Types.ObjectId(channel_id);
  
  const next = User.findById(user_id).then(userData => {
    hasVisitedChannel = userData.visited_channels.some(
      visited_channel_id => visited_channel_id.toString() === channel_id
    );
    
    if (!hasVisitedChannel) {
      return User.updateOne({
        _id: mongo_user_id
      }, {
        $push: {
          visited_channels: mongo_channel_id
        }
      }).then(() => ({
        status: 200
      }));
    } else {
      return {
        status: 204
      };
    }
  });
  
  return next;
}

const works = {
  updateUserVisitedChannel
};

module.exports = works;
