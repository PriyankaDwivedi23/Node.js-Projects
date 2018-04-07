//get passport npm module
const passport = require('passport');

module.exports = app =>{
//route to google auth homepage
//google_strategy has internal name as google which tell its google authentication
app.get(
  '/auth/google',
  passport.authenticate('google',{
  scope: ['profile','email']
}));

//route handler to get callback from google
app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=> {
  res.redirect('/surveys');
});

app.get('/api/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});

app.get('/api/current_user', (req,res)=>{
  res.send(req.user)
});
};
//prod key : 91568140000-5q872iecfs9h69frva89k8nfmeq7v7t0.apps.googleusercontent.com
//secret : Mb9ejFAefB77Z979UT-pochS
