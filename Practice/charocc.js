let str='my name is vyshnavi';
//let count={};
function charcount(str){
    let count={};
    let maxcount=0;
    let maxchar='';
for(let char of str){
    count[char]=(count[char]||0)+1;
    if (char!=' ' && count[char]>maxcount){
        maxcount=count[char];
        maxchar=char;
    }
}
return maxchar;
}
console.log(charcount(str));

