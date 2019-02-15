import express = require("express");
import handler from "./handler";

// Our Express APP config
const app = express();
app.set("port", 3000);

// API Endpoints
app.get('/set', (req, res) => {
    var key = req.query.key;
    var value= req.query.value;
    res.send("key"+key+"value"+value);
    handler.Setdata(key,value);


    
    
})
 app.get('/get',async(req,res)=>{
    var key=req.query.key;
   var value= await handler.getdata(key);
   await res.send("value is"+value);

})

// export our app
export default app;