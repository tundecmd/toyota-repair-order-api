const express = require("express");
const { requireSignin } = require("../common-middleware");
const { getPartsStockConfirmations, getPartStockConfirmationById, updatePartStockConfirmation } = require("../controllers/partsStockConfirmation");
const router = express.Router();


router.get("/parts-stock-confirmation", requireSignin, getPartsStockConfirmations);

router.get("/part-stock-confirmation/:orderId/:line_no", getPartStockConfirmationById);

router.put("/part-stock-confirmation/:orderId/:line_no", updatePartStockConfirmation);


module.exports = router;