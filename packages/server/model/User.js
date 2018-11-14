const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    index: true,
    isRequired: true
  },
  nickname: {
    type: String,
    isRequired: true
  },
  last_modified: {
    type: Date,
    default: Date.now
  },
  visited_channels: {
    type: Array,
    default: []
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
