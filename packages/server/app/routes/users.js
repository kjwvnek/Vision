const router = require('express').Router();
const { findUserById, findUserByEmail } = require('../works/find/user');
const { saveUser } = require('../works/save/user');

router.get('/:id', (req, res, next) => {
  const id = decodeURIComponent(req.params.id);
  const { type } = req.query;
  
  switch(type) {
    case 'ID':
      findUserById(id).then(({ status, data }) => {
        res.status(status).json({
          id: data.id,
          email: data.email,
          nickname: data.nickname,
          mentees: data.mentees,
          mentors: data.mentors
        });
      }).catch(err => {
        next(err.message);
      });
      break;
    case 'EMAIL':
      findUserByEmail(id).then(({ status, data }) => {
        res.status(status).json({
          id: data.id,
          email: data.email,
          nickname: data.nickname,
          mentees: data.mentees,
          mentors: data.mentors
        });
      }).catch(err => {
        next(err.message);
      });
      break;
    default:
      res.status(400).json({
        message: 'invalid request'
      });
      console.error('[parameter] get/user/:id')
  }
});

router.post('/', (req, res, next) => {
  const { email } = req.body;
  
  saveUser(email).then(({ status, data }) => {
    res.status(status).json({
      id: data.id,
      email: data.email,
      nickname: data.nickname,
      mentees: data.mentees,
      mentors: data.mentors
    });
  }).catch(err => {
    next(err.message);
  })
});

module.exports = router;
