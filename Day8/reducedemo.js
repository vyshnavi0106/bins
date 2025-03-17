let arr=[10,20,30,40,50];
//print summ of ele in array
let res=arr.reduce((prev,next)=>{
    console.log(prev,next);
    return prev+next;//1st iteration 10+20=30//next iteration prev=30,next=30, 30+30=60//next 60+40=100//next 100+50=150
}, 0);//initial value is not required as all elements are of same datatype
console.log(`sum: ${res}`);

let str='entertainment';//output={e:3,n:2,r:1...}
let result=str.split('').reduce((obj,char)=>{
    console.log(obj,char);
  obj[char]=obj[char] ? obj[char]+1 : 1
  return obj;
},{});//default/initial value is must when the end output is a diff datatype or each ele is diff datatype then it s must to pass the default value
console.log(result);

let cart=[
    {itemid:1 , itemname:'tomato', qty:2, price:10},
    {itemid:2 , itemname:'lays', qty:3, price:5}
]
let cartAmt=cart.reduce((amount,product)=>{
    console.log(amount,product);
    return amount+(product.price*product.qty);
},0);
console.log(cartAmt);