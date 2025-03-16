let a='hello@#hi&';

function spe(str){
    b=a.split('');
    console.log(b);
    let alphanumeric="";
    let specialchars="";
/*for(let i=0;i<b.length;i++){
    if(b[i]=(/[a-zA-Z0-9]/)){
       // b[i]=alphanumeric;
    alphanumeric+=b[i];
    console.log(alphanumeric);
    }
    else{
        b[i]=specialchars;
        specialchars=b[i];
    }*/
   for(let char of str){
    if(char.match(/[a-zA-Z0-9]/)){
        alphanumeric += char;
    }
    else{
        specialchars += char;
    }

   }
   return alphanumeric+specialchars;
}
//return alphanumeric+specialchars;
//}

console.log(spe('hello@#hi&'));