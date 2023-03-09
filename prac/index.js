let promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    let flag = true;
    if(flag){
      resolve("sdfjsl;jfd");
    }else{
      reject("failed");
    }
  }, 8000)
})

promise.then((res) => {
  console.log(res);
  console.dir(promise);
})
.catch((err) => console.log(err));

console.dir(promise);