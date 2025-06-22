const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var osType = os.type();

console.log("Total Memory: ", totalMemory);
console.log("Free Memory: ", freeMemory);
console.log("Os Type: ", osType);

// template string ES6
console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`);

// ternary operator
// var y = (x>10) ? "Greater" : "Lesser";

// if (x>10){
//     var y = "Greater"
// } else {
//     var y = "Lesser"
// }

