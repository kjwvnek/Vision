const User = require('../../model/User');

const works = {
  findUserById(id) {
    return User.findById(id).then(data => ({
      status: data ? 200 : 204,
      data: data || {}
    }));
  },
  findUserByEmail(email) {
    return User.findOne({ email }).then(data => ({
      status: data ? 200 : 204,
      data: data || {}
    }));
  }
};

module.exports = works;
