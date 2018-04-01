const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send("My first deployment on heroku");
});
//port get from heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT);
