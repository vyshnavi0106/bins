/*let str='vyshnavi';
function nonrepeat(str){

}*/

function nrpcfun(a)
  {
   let nrpc=a.split("");
   console.log(nrpc);
   for(i=0;i<nrpc.length;i++)
   {
      if (a.indexOf(nrpc[i]) === a.lastIndexOf(nrpc[i])){
         console.log(nrpc[i]);
         break;
      }
   }
}
let r = nrpcfun('entertainment');


let str='entertainment';
    for(char of str){//this will iterate trough all the string
        if(str.indexOf(char)==str.lastIndexOf(char)){//checks for non-repeated char
            console.log(char);
            break;
        }
    }