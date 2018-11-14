const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  master_id: {
    type: Schema.Types.ObjectId,
    isRequired: true
  },
  title: {
    type: String,
    isRequired: true
  },
  password: {
    type: String,
    isRequired: true
  },
  description: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  closed_at: Date
});

const Channel = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;
