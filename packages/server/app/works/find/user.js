const User = require('../../model/User');

const works = {
  findUserById(id) {
    return next = User.findById(id).then(data => ({
      status: data ? 200 : 204,
      data: data || {}
    }));
  },
  findUserByEmail(email) {
    return next = User.findOne({ email }).then(data => ({
      status: data ? 200 : 204,
      data: data || {}
    }));
  }
};

module.exports = works;
