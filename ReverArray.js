const { reverse } = require("dns");


let a=['a','b','c','d'];
function ReversArray(arr){
    let b=[]
    let n=0;
    for(let i=arr.length-1;i>=0;i--){
         let x=arr[i];
         b[n]=x;
         n++;
    }
    a=b;
    return a;
     

}
console.log(ReversArray(a));

