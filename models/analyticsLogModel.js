const mongoose = require('mongoose');

const analyticsLogSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: [true, 'Action name is required!'],
    },
    requestUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    payload: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

//TODO: check if trying to save password

const AnalyticsLog = mongoose.model('AnalyticsLog', analyticsLogSchema);

module.exports = AnalyticsLog;