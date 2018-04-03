//which set of credential to use
if(process.env.NODE_ENV === 'production'){
  //in production use production keys
  module.exports =  require('./prod');
}else{
  //in devlop use dev keys
  module.exports =  require('./dev');
}
