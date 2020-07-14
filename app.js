const sum = require("./tutorial");

console.log("hello from node js");
const tutorialInclude=require('./tutorial')
//sum(4,5);
console.log(tutorialInclude);
console.log(tutorialInclude.Pi);
console.log(tutorialInclude.sum(10,20));

console.log(new tutorialInclude.Math());

const EventEmitter=require('events');

const eventemitterobj=new EventEmitter();
/*eventemitterobj.on('tutorial',()=>{
    console.log("tutorial event triggerred");*/

    eventemitterobj.on('tutorial',(num1,num2)=>{
        console.log(num1+num2);   
});
//eventemitterobj.emit('tutorial');
eventemitterobj.emit('tutorial',15,20);