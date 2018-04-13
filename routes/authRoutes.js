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
//successful logout
app.get('/api/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
});
//to extract the profile
app.get('/api/current_user', (req,res)=>{
  res.send(req.user)
});

};
