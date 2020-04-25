const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const HealthRecordSchema = new Schema({
  name: String,
  gender: String,
  age: String,
  medications: Boolean,
  center: String,
  operation: Boolean,
  diagnosis: String,
  date: {
    type: String,
    default: Date.now()
  }
});

const HealthRecord = mongoose.model("HealthRecord", HealthRecordSchema);

module.exports = HealthRecord;