const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//When you call mongoose.model() on a schema, Mongoose compiles a model for you.
// The first argument is the singular name of the collection your model is for.
// ** Mongoose automatically looks for the plural, lowercased version of your model name.
// ** Thus, for the example below, the model Item is for the items collection in the database.
module.exports = mongoose.model("Item", ItemSchema);
