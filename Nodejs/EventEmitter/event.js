const events = require('events');

const emitter = new events.EventEmitter();

emitter.on("myEvent", ()=>{
    console.log("This is my event emitter")
})

emitter.emit("myEvent")