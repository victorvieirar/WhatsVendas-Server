const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res
    .status(200)
    .send(
      "Hi, there! This is a beautiful workspace from WhatsVendas systems! =)"
    );
});

module.exports = router;
