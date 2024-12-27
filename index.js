const express = require('express')
const web_server = express();

web_server.use(express.json());

web_server.listen(3000,"localhost",()=>{
    console.log("server started");
    console.log("http://localhost:3000")
})