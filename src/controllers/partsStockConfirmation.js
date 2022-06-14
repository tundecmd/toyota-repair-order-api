const axios = require("axios");

// const oldUrl = "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderPMGR/${orderId}";

const partsStockURL = "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderLineAPI";


exports.getPartsStockConfirmations = async (req, res) => {
  const result = await axios.get('/', {
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    url: "/",
    baseURL: partsStockURL,
    auth: {
      username: "webuser",
      password: "Simple@123"
    },
    responseType: "json",

  });
  return res.status(result.status).json(result.data)
};

exports.getPartStockConfirmationById = async (req, res) => {
  const orderId = req.params.orderId;
  const line_no = parseInt(req.params.line_no);

  try {
    const result = await axios.get('/', {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      baseURL: partsStockURL,
      url: partsStockURL + "(Document_No=" + orderId + "," + "Line_No=" +  line_no + ")",
      auth: {
        username: "webuser",
        password: "Simple@123"
      },
      responseType: "json",
    });
    return res.status(result.status).json(result.data)
  } catch (error) {
    console.log('error', error)
    return res.status(error.status).json(error.data)
  }

};


exports.updatePartStockConfirmation = async (req, res) => {

    const orderId = req.params.orderId;
    const line_no = parseInt(req.params.line_no);
    const item_no = req.params.item_no;

    try {
        const lineItemToUpdate = await axios('/', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
            method: "GET",
            baseURL: partsStockURL,
            // url: partsStockURL + "(Document_No=" + orderId + "," + "Line_No=" +  line_no + ")",
            url: "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderLineAPI(Document_No='COF0000002',Line_No=10000)",
            auth: {
                username: "webuser",
                password: "Simple@123"
            },
            responseType: "json",
        });

        // lineItemToUpdate.data['No']
        // console.log('lineItemToUpdate', lineItemToUpdate.data.value[0]['@odata.etag'])

        console.log('lineItemToUpdate', lineItemToUpdate)
        const item = lineItemToUpdate.data.value.filter((item) => item);
        console.log('item', item)

        const updatedResult = await axios({
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              // 'If-Match': `${lineItemToUpdate.data['@odata.etag']}`
              'If-Match': '*'
            },
            method: "PUT",
            url: "http://tnlapps.westeurope.cloudapp.azure.com:7048/bc130/ODataV4/Company('CRONUS%20International%20Ltd.')/CustomerOrderLineAPI(Document_No='COF0000002',Line_No=10000)",
            auth: {
              username: "webuser",
              password: "Simple@123"
            },
            data: {
              ...req.body
            },
            responseType: "json",
        });
        
        console.log('updatedResult.data', updatedResult.data)
        return res.status(updatedResult.status).json(updatedResult.data.value);
    } catch (error) {
        // console.log('error', error);
        return res.json(error)
    }
    
};
