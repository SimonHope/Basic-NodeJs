const util = require('./modules/mymodules');
const now = require('./modules/mymodules').getCurrentTime;
const plus = require('./modules/mymodules').add;


console.log(now())
console.log(util.add(50,100))