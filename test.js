const { watch } = require("nodemon/lib/monitor");

console.log("show ticket 1");
console.log("show ticket 2");
console.log("ticket 3 wait my wife is coming");
let a=async()=>{
    let b=new Promise((resolve,reject)=>{
       console.log("husband let go to movie");
       console.log("wife i am hungry");
       resolve();
    })
    let e=new Promise((resolve,reject)=>{
        console.log("here is the popcorn");
        console.log("where is the butter");
        resolve();
     })
     let f=new Promise((resolve,reject)=>{
        console.log("here is the butter");
       
        resolve();
     });
     let j=new Promise((resolve,reject)=>{
        console.log(" i want cold drink");
       
        resolve();
     })
    let c=await b;
    let g=await e;
    let h=await f;
    let k=await j;
    return k;
    
}
a().then(()=>{console.log("lets go")});
console.log("show ticket 4");
console.log("show ticket 5");