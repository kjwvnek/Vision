const User = require('../../model/User');

const works = {
  saveUser(email) {
    const user = new User({
      email,
      nickname: email
    });
    
    return user.save().then(data => ({
      status: 201,
      data: data || {}
    }));
  }
};

module.exports = works;
