const express = require("express");
const { requireSignin } = require("../common-middleware");
const {
  getCustomerOrders, getCustomerOrderById, createCustomerOrder, updateCustomerOrder
} = require("../controllers/customerOrderForm");
// const { requireSignin } = require("../common-middleware");
const router = express.Router();


router.get("/customer-order-form", requireSignin, getCustomerOrders);

router.get("/customer-order-form/:orderId", getCustomerOrderById);

// router.post("/customer-order-form", createCustomerOrder);

// router.put("/customer-order-form/:orderId", updateCustomerOrder);

router.put("/customer-order-form/:orderId", updateCustomerOrder);

// router.delete("/customer-order-form/", deleteCustomerOrder);

//new update


module.exports = router;