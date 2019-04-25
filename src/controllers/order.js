Order = require("../models/order");

exports.index = function(req, res) {
  Order.get(function(err, orders) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Orders retrieved successfully",
      data: orders
    });
  });
};

exports.new = function(req, res) {
  var order = new Order();

  order.date = req.body.date ? req.body.date : order.date;
  order.name = req.body.name ? req.body.name : order.name;
  order.price = req.body.price ? req.body.price : order.price;
  order.address = req.body.address ? req.body.address : order.address;
  order.phone = req.body.phone ? req.body.phone : order.phone;

  order.save(function(err) {
    if (err) res.send(err);
    res.json({
      message: "New order created!",
      data: order
    });
  });
};

exports.view = function(req, res) {
  Order.findById(req.params.order_id, function(err, order) {
    if (err) res.send(err);
    res.json({
      message: "Order details loading...",
      data: order
    });
  });
};

exports.update = function(req, res) {
  Order.findById(req.params.order_id, function(err, order) {
    if (err) res.send(err);

    order.date = req.body.date ? req.body.date : order.date;
    order.name = req.body.name ? req.body.name : order.name;
    order.price = req.body.price ? req.body.price : order.price;
    order.address = req.body.address ? req.body.address : order.address;
    order.phone = req.body.phone ? req.body.phone : order.phone;

    order.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "Order Info updated",
        data: order
      });
    });
  });
};

exports.delete = function(req, res) {
  Order.remove(
    {
      _id: req.params.order_id
    },
    function(err, order) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Order deleted"
      });
    }
  );
};
