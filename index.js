//require('dotenv').config();
const express = require('express');
//const bodyParser = require('body-parser');
const awsServerlessExpress = require('aws-serverless-express');
const app = express();
const {
    connection
} = require('./connection.js');
app.use(express.static("public"));

const {
    getProductType
} = require('./get_product_type');
const cors = require('cors');
app.use(cors());
app.use(express.json());





app.post('/product/getProductTypes', async function (req, res) {
    res.send(await getProductType());
});




///////////////////////////////////////////END_OF_GET_PRODUCT_TYPE////////////////////////////////////////////////////////


//////////////////////////////////////////////GET_TEST_TYPE/////////////////////////////////////////////////////////


////////////////////////////////////////////END_OF_SEND_EMAIL////////////////////////////////////////////////


// app.listen(3000, function(req,res){
//     console.log(`server is listening`);
// })
const server=awsServerlessExpress.createServer(app);
exports.handler=(event,context)=>{
	console.log("Event handler :"+JSON.stringify(event));
	awsServerlessExpress.proxy(server,event,context);
}