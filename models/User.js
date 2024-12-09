const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  premiumActivatedAt: {
    type: Date,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);