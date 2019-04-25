var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var d = new Date();

var orderSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default:
      d.getTime() + (d.getTimezoneOffset() * 60 * 1000 - 3) * 60 * 60 * 1000
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    default: 0 //setting status 0 as default
  },
  phone: {
    type: String,
    default: 0 //setting status 0 as default
  }
});

var Order = (module.exports = mongoose.model("order", orderSchema));

module.exports.get = function(callback, limit) {
  Order.find(callback).limit(limit);
};
