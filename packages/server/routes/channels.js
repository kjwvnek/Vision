const router = require('express').Router();
const works = require('../works/index');

// Create
router.post('/', function(req, res, next) {
  const { master_id, title, password, description } = req.body;
  
  works.saveChannel(
    master_id, title, password, description
  ).then(({ status, channelData }) => {
    res.status(status).json(channelDataToJson(channelData));
  }).catch(err => {
    next(err.message);
  });
});

router.post('/:channel_id', function(req, res, next) {
  const { channel_id } = req.params;
  const { user_id, password } = req.body;
  
  works.joinChannel(user_id, channel_id, password).then(({ status, channelData }) => {
    res.status(status).json(channelDataToJson(channelData));
  });
});

// Read
router.get('/', function(req, res, next) {
  const { req_type, user_id, master_id } = req.query;
  
  switch(req_type) {
    case 'user_id':
      works.findChannelsByUserId(user_id).then(({ status, channelsData }) => {
        res.status(status).json({
          channels: channelsData.map(channelData => channelDataToJson(channelData))
        });
      }).catch(err => {
        next(err.message);
      });
      break;
    case 'master_id':
      works.findChannelsByMasterId(master_id).then(({ status, channelsData }) => {
        res.status(status).json({
          channels: channelsData.map(channelData => channelDataToJson(channelData))
        });
      }).catch(err => {
        next(err.message);
      });
      break;
  }
});

function channelDataToJson(channelData) {
  return {
    master_id: channelData.master_id,
    channel_id: channelData.id,
    title: channelData.title,
    description: channelData.description
  };
}

module.exports = router;
