const mongoose = require('mongoose');

const customerOrderFormSchema = new mongoose.Schema({
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    Reception_date: {
      type: date
    },
    Reception_time: {
      type: time
    },
    Parts_Ordered_Date: {
      type: date
    },
    Parts_Ordered_Time: {
      type: time
    },
    Reception_type: {
      type: String,
      enum: ["Customer Bring-In", "Dealer Delivery"]
    },
    Stage: {
      type: String,
      enum: ["Checked-In", "Received", "Waiting for Invoicing", "N-2"]
    },
    Customer_Name: {
      type: String
    },
    Customer_No: {
      type: String
    },
    Model_Name: {
      type: String
    },
    Vehicle_Registration_No: {
      type: String
    },
    Operation_Code: {
      type: String
    },
    Job_Details: {
      type: String
    },
    Odometer_Reading: {
      type: Number
    },
    WalkAround_Reception_Date: {
      type: Date
    },
    PM_Amount: {
      type: Number
    },
    GR_Amount: {
      type: Number
    },
    VAT_Number: {
      type: Number
    }


}, { timestamps: true });


module.exports = mongoose.model('Cart', customerOrderFormSchema);