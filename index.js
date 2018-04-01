const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send("Hey, Second commit");
});
//port get from heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT);
