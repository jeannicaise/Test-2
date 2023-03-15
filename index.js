const userInfo = require('./information');

// console.log(`Hi, my name is ${userInfo.nameStudent} from ${userInfo.campus} `);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.nameStudent} from ${userInfo.campus} `,
    e : "oO",
    T : "U "
}));
