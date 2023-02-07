let obj = {
    name: "abc"
}
let obj2 = {
    age: "25"
}
obj2.__proto__ = obj;
console.log(obj2.name);
