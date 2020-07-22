// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};
//get routing 
app.get('/sendAll', sendData);
function sendData(req, res) {
    res.json(projectData);
    projectData = [];
};

//post routing
app.post('/sendAll', response);
function response (req, res) {
    projectData = req.body;
    res.send(projectData);
};
