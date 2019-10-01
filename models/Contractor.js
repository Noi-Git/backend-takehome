const mongoose = require('mongoose');

const ContractorSchema = new mongoose.Schema({
  constructor_name: {
    type: String,
    required: true
  },
  constructor_permit_number: {
    type: String,
    required: true
  },
  constructor_address: {
    type: String
  },
  constructor_suite: {
    type: String
  },
  constructor_floor: {
    type: String
  },
  constructor_street: {
    type: String
  },
  constructor_city: {
    type: String
  },
  constructor_state: {
    type: String
  },
  constructor_zip_code: {
    type: Number
  }
});

module.exports = Contractor = mongoose.model('contractor', ContractorSchema);
