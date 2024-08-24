const express = require('express');
const app = express();
const PORT = 8080;

app.get('/',(req,res)=>{
    res.send("helloo your welcome");
})

app.listen(PORT,()=>{
    console.log("server running on "+PORT);
});