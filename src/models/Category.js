const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    require: true,
  }
  
});

module.exports = model("category", categorySchema);
