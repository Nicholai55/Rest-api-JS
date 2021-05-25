const mongoose = require("mongoose");

const Room = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  lotacao: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("room", Room);
