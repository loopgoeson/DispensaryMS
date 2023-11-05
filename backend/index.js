const express = require("express");
const cors=require("cors");
const connectToMongo = require("./db");

const app= express();
const PORT=3001;
connectToMongo();

app.use(cors());
app.use(express.json);

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
});
