function receivesAFunction(callback){
  return callback();
}
function returnsANamedFunction(){
  return function fn(){
      console.log("joseph")
  }
}
function returnsAnAnonymousFunction(){
  return function(){
      console.log("returns an anonymous function")
  }
}