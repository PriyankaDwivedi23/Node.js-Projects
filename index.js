const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const keys  = require('./config/keys');
const passort = require('passport');
//load passport after model because models is used in passport
//if declared before it will throw error
require('./models/user');
require('./services/passport');
mongoose.connect(keys.mongoURI);
const app = express();
//cookie to last for 30 days
app.use(cookieSession({
  maxAge : 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passort.initialize());
app.use(passort.session());
require('./routes/authRoutes')(app);
//port get from heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT);
