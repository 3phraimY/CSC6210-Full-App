const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Number: {
    type: Number,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
});
playerSchema.set("collection", "Roster");
module.exports = mongoose.model("Player", playerSchema);
