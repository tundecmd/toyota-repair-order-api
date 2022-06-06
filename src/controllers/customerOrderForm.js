const axios = require("axios");

const oldUrl = "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderPMGR/${orderId}";

//const baseURL = `http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderComplete${orderId}`;

// const oldEditURL = `http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderPMGR/${orderId}`;

exports.getCustomerOrders = async (req, res) => {
  const result = await axios.get('/', {
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    url: "/",
    baseURL: `http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderComplete`,
    auth: {
      username: "webuser",
      password: "Simple@123"
    },
    responseType: "json",

  });
  // console.log('result', result.data.value.length);
  return res.status(result.status).json(result.data)
};

exports.getCustomerOrderById = async (req, res) => {
  // console.log('req', req.params.orderId);
  const orderId = req.params.orderId;

  try {
    const result = await axios.get('/', {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      url: "/",
      params: {
        orderId: orderId
      },
      baseURL: "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderComplete/"+orderId,
      auth: {
        username: "webuser",
        password: "Simple@123"
      },
      responseType: "json",
    });
    const aaa = result.data;
    // console.log('aaa', aaa.Reception_Time);
    // console.log('aaa', typeof aaa.Reception_Time);
    // console.log('aaa', typeof aaa.Reception_Date);
  return res.status(result.status).json(result.data)
  } catch (error) {
    console.log('error', error)
    // return res.status(error.status).json(error.data)
  }
};



// exports.createCustomerOrder = async (req, res) => {
//   // console.log('req.body', req.body);

//   const result = await axios.post("/", {
//     method: "post",
//     url: "/",
//     headers: {
//       "X-Requested-With": "XMLHttpRequest"
//     },
//     url: "/",
//     baseURL: `http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderPMGR/`,
//     auth: {
//       username: "webuser",
//       password: "Simple@123"
//     },
//     data: {
//     "Reception_Date": req.body.Reception_Date,
//     "Reception_Time": req.body.Reception_Time,
//     "Reception_Type": req.body.Reception_Type,
//     "Customer_No": req.body.Customer_No,
//     "Customer_Name": req.body.Customer_Name,
//     "Model_No": req.body.Model_No,
//     "Model_Name": req.body.Model_Name,
//     "Vehicle_Registration_No": req.body.Vehicle_Registration_No,
//     "Operation_Code": req.body.Operation_Code,
//     "Odometer_Reading": req.body.Odometer_Reading,
//     "Job_Details": req.body.Job_Details,
//     "Stage": req.body.Stage,
//     "Walk_Around_Reception_Date": req.body.Walk_Around_Reception_Date,
//     "PM_Amount": req.body.PM_Amount,
//     "GR_Amount": req.body.GR_Amount,
//     "VAT_Amount": req.body.VAT_Amount
//     },
//     responseType: "json",

//   });
//   console.log('result', result.status)
//   // console.log('status', result.status);
//   // console.log('status text', result.statusText);
//   console.log('result', result.status);

//   return res.status(result.status).json({"resu": result.config.data.data});
// };

// exports.updateCustomerOrder = async (req, res) => {
//   const orderId = req.params.orderId;

//   const result = await axios
//     .put("http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderComplete/COF0000002", {
//     method: "put",
//     headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//       "If-Match": "*",
//       "Host": "*"
//     },
//     auth: {
//       username: "webuser",
//       password: "Simple@123"
//     },
//     data: {
    
//       "No": "COF0000002",
//       "Reception_Date": "2022-05-21",
//       "Checked_In": false,
//       "Courtesy_Vehicle": "No need",
//       "Reception_Time": "11:00:00",
//       "Reception_Type": "Customer Bring-In",
//       "Customer_No": "C00950",
//       "Customer_Name": "Salami Wale",
//       "Model_No": "",
//       "Model_Name": "",
//       "Vehicle_Registration_No": "MUS657GT",
//       "Operation_Code": "",
//       "Odometer_Reading": 0,
//       "Job_Details": "",
//       "Stage": "N-2",
//       "Walk_Around_Reception_Date": "0001-01-01",
//       "PM_Amount": 0,
//       "GR_Amount": 0,
//       "VAT_Amount": 0,
//       "Address": "No 65, Allen Avenue",
//       "Telephone_No": "08187654321",
//       "Vehicle_Driven_By": "Other"
//   },
//     responseType: "json",

//   }).then(a => {
//     console.log('result', a.status)
//     return res.status(a.status).json(a.data)
    
//   },
//   e => {
//     console.log(e)
//     return res.status(500).json(e)
//   })
//   //console.log('result', result.status)
  

// };

exports.updateCustomerOrder = async (req, res) => {
  console.log('req params id', req.params.orderId);
  const orderId = req.params.orderId;

  try {
    // console.log(service.IsUpdated(obj.Key))

    // const get = await this.getCustomerOrderById();
    // console.log('get', get)

    const CustomerOrderToUpdate = await axios({
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      method: "GET",
      url: "/",
      params: {
        orderId: orderId
      },
      baseURL: "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderComplete/"+orderId,
      auth: {
        username: "webuser",
        password: "Simple@123"
      },
      responseType: "json",
    });

    // console.log('CustomerOrderToUpdate', CustomerOrderToUpdate)
    // console.log('req.body', req.body)

    const updatedResult = await axios({
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'If-Match': `${CustomerOrderToUpdate.data['@odata.etag']}`
      },
      method: "PUT",
      url: "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderComplete/"+orderId,
      // params: {
      //   orderId: orderId
      // },
      // baseURL: "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderComplete/"+orderId,
      auth: {
        username: "webuser",
        password: "Simple@123"
      },
      data: {
        ...req.body
      },
      responseType: "json",
    });
    
    // console.log('req.body', req.body)
    // console.log('res', aaa)
    // console.log('result.res:', result.status)
    return res.status(updatedResult.status).json(updatedResult.data)
  } catch (error) {
    console.log('error status ==>', error.response.status)
    console.log('error status text ==>', error.response.statusText)
    // return res.status(error.status).json(error.data)
  }
};

// exports.deleteCustomerOrder = async (req, res) => {
//   const result = await axios.delete('/', {
//     method: "delete",
//     headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//       "If-Match": "W/\"JzQ0O2oyR3l6cWJ4WEhCZmpRZ0VTenNGNENrODU5RzJSNnV5VllaS01zVVJrTjg9MTswMDsn\"",
//     },
//     url: "/",
//     // params: {
//     //   orderId: COF0000002
//     // },
//     baseURL: `http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderPMGR/`,
//     auth: {
//       username: "webuser",
//       password: "Simple@123"
//     },
//     responseType: "json",

//   });
//   console.log('result', result.status)
//   return res.status(result.status).json(result.data)
// };