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
  fields: {
    type: Array,
    default: []
  },
  phone: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  },
  mentees: {
    type: Array,
    default: []
  },
  mentors: {
    type: Array,
    default: []
  },
  description: {
    type: String,
    default: ''
  },
  user_image_url: {
    type: String,
    default: ''
  },
  last_modified: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
