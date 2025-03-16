/*let a='vyshnavi';
console.log(a);
let b=a.split('');
console.log(b);
let c=b.reverse();
console.log(c);
let d=c.join('');
console.log(d);*/


let str='vyshnavi';
//let reverseString;
function reverseString(str){
    reverseString=str.split('').reverse().join('');
    return reverseString;
}
console.log(reverseString(str));