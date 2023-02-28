const fs = require("fs");

const myStream = fs.ReadStream("./bigdata.txt");

let arr = [];
myStream.on("data", (chunk) => {
  //   console.log(chunk);
  //   console.log(chunk.toString());
  arr.push(chunk.toString());
});

myStream.on("end", () => {
  //   console.log(arr);
  //   console.log("Stream finished");
  console.log(arr.toString());
});
