const express = require('express');
const app = express();

const db = require("./config/db");

const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

 const router = require("./routes/router");
 
app.use(express.json());


app.use ("/api",router);

app.listen(8000,() =>{
    console.log("server started on running port 8000");
});


