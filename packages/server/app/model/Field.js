const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FieldSchema = new Schema({
  title: {
    type: String,
    index: true,
    isRequired: true
  },
  users: {
    type: Array,
    isRequired: true
  }
});

const Field = mongoose.model('Field', FieldSchema);

module.exports = Field;
