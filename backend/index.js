const express = require("express");
const cors=require("cors");

const app= express();
const PORT=3001;

app.use(cors());

app.use(express.json);
app.use(express.urlencoded({extended:false}));

 app.get('')
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
});
