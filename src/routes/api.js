const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.status(200).send({
    title: "API",
    message: "API working fine"
  });
});

var orderController = require("../controllers/order");

router
  .route("/order")
  .get(orderController.index)
  .post(orderController.new);

router
  .route("/order/:order_id")
  .get(orderController.view)
  .patch(orderController.update)
  .put(orderController.update)
  .delete(orderController.delete);

module.exports = router;
