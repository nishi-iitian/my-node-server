//serverjs
const express = require('express');
const app = express(); 
const port = 3000; // port where the server is exposed to

//Enable CORS to allow requests from different machines in the same network 
const cors= require("cors"); 
app.use(cors());

// endpoint
app.get("/api/data", (req, res) => { 
  res.json({message: 'Hello from Nishi server running again, yay'}); 
});

//Start the server 
app.listen(port, ()=> {
  console.log("Server Started on 3000 port");
});
