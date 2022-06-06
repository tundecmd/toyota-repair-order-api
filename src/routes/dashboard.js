const express = require("express");
const { requireSignin } = require("../common-middleware");
const {
  getCustomerOrderForms, createCustomerOrderForm
} = require("../controllers/customerOrderForm");
// const { requireSignin } = require("../common-middleware");
const router = express.Router();


router.get("/customer-order-form", getCustomerOrderForms);

router.post("/customer-order-form", createCustomerOrderForm);
//new update


module.exports = router;