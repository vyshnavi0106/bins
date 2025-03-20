//second highest element in an array

/*let arr=[2,5,8,6,3,7];
function secondhighele(arr){
    let secondhigh=arr.sort((a,b)=>b-a);
    return secondhigh[1];
}
console.log(secondhighele(arr));*/


//first highest ele in array
let arr1=[2,5,8,6,3,7];
function secondhighele(arr1){
    let secondhigh=arr1.sort((a,b)=>b-a);
    return secondhigh[0];
}
console.log(secondhighele(arr1));