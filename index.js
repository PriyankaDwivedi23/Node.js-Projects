const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const keys  = require('./config/keys');
const passort = require('passport');
const bodyParser = require('body-parser');
//load passport after model because models is used in passport
//if declared before it will throw error
require('./models/user');
require('./services/passport');
mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
//cookie to last for 30 days
app.use(cookieSession({
  maxAge : 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passort.initialize());
app.use(passort.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
//code in production for express to route to the client like
if(process.env.NODE_ENV === 'production'){
  //for main.js and class
  app.use(express.static('client/build'));
  //index.html
   const path = require('path');
   app.get('*', (req,res)=> {
     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
   });
  }


//port get from heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);
