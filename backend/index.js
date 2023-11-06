const express = require('express');
const connectToMongo = require("./db");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const appointRoute =require('../backend/Routes/appoint');
const orderRoute=require('../backend/Routes/order');
const feedRoute=require('../backend/Routes/feed')

const app = express();
connectToMongo();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
 
app.use('/api', appointRoute);
app.use('/api',orderRoute);
app.use('/api',feedRoute)
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
