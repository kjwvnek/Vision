const User = require('../model/User');

function findUserById(id) {
  const next = User.findById(id).then(userData => ({
    status: userData ? 200 : 204,
    userData: userData || {}
  }));
  
  return next;
}

function findUserByEmail(email) {
  const next = User.findOne({ email }).then(userData => ({
    status: userData ? 200 : 204,
    userData: userData || {}
  }));
  
  return next;
}

const works = {
  findUserById,
  findUserByEmail
};

module.exports = works;
