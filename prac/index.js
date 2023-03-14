Function.prototype.svcall = function(context={}, ...args){
   context.fun = this;
   context.fun(...args);
}

let obj = {
  name: "sourav",
  age: 25
}

function showDetails(){
  console.log(this.name, this.age);
}

showDetails.svcall(obj);