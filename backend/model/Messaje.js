const mongoose = require("mongoose");

const Message = new mongoose.Schema({
    Message: { type: String},
    phone: { type: String },
    email: { type: String },
    name: { type: String },

}, { timestamps: true });

module.exports = mongoose.model("message", Message);