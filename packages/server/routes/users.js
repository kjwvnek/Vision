const router = require('express').Router();
const works = require('../works/index');

// Create
router.post('/', function(req, res, next) {
  const { email, nickname } = req.body;
  
  works.saveUser(email, nickname).then(({ status, userData }) => {
    res.status(status).json(userDataToJson(userData));
  }).catch(err => {
    next(err.message);
  });
});

// Read by id
router.get('/:user_id', function(req, res, next) {
  const id = decodeURIComponent(req.params.user_id);
  
  works.findUserById(id).then(({ status, userData }) => {
    res.status(status).json(userDataToJson(userData));
  }).catch(err => {
    next(err.message);
  });
});

// Read
router.get('/', function(req, res, next) {
  const { req_type, email } = req.query;
  
  switch(req_type) {
    case 'email':
      works.findUserByEmail(decodeURIComponent(email)).then(({ status, userData }) => {
        res.status(status).json(userDataToJson(userData));
      }).catch(err => {
        next(err.message);
      });
  }
});

// Update
router.put('/:user_id', function(req, res, next) {
  const user_id = req.params.user_id;
  const channel_id = decodeURIComponent(req.query.channel_id);
  
  works.updateUserVisitedChanel(user_id, channel_id).then(({ status }) => {
    res.status(status).send();
  }).catch(err => {
    next(err.message);
  });
});

function userDataToJson(userData) {
  return {
    user_id: userData.id,
    email: userData.email,
    nickname: userData.nickname,
    visited_channels: userData.visited_channels
  };
}

module.exports = router;
