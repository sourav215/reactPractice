const fs = require('fs');

const reader = fs.ReadStream("./bigdata.txt");
const writer = fs.WriteStream("./newData.txt");

reader.on("data", (chunk) =>{
    writer.write(chunk);
})

// reader.pipe(writer);