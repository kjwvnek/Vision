const User = require('../../model/User');

const works = {
  saveUser(email) {
    const user = new User({
      email,
      nickname: email
    });
    
    return next = user.save().then(data => ({
      status: 201,
      data: data || {}
    }));
  }
};

module.exports = works;
