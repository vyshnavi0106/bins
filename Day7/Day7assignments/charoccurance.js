/*1. Print the occurence of each character in a string
   input: 'entertainment'
   output: { e:3 , n:2 , t: 3 ....}*/
   let str='entertainment';
   
   function charocc(str){
    let charCount={};//initially undefined
    for(let char of str){
        charCount[char]=(charCount[char]||0)+1;
    }
    return charCount;
   }
   console.log(charocc(str));