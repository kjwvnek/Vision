const User = require('../model/User');

function saveUser(email, nickname) {
  const user = new User({
    email,
    nickname
  });
  
  const next = user.save().then(userData => ({
    status: 201,
    userData
  }));
  
  return next;
}

const works = {
  saveUser
};

module.exports = works;
