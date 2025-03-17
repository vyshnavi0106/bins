let str='abcxyz'
function shiftchar(str){
    return str.replace(/[a-zA-Z]/g, char=>
        char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0)+1));  
}//char.charCodeAt(0)->gets ASCII/unicode code of the char at index 0
//String.fromCharCode -> coverts the character code back to string
console.log(shiftchar(str));
//or
/*function shiftChar(str) {
    if (char === 'z') return 'a';
    if (char === 'Z') return 'A';
    return String.fromCharCode(str.charCodeAt(0) + 1);
}
console.log(shiftchar(str));*/