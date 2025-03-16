let num='1234567891235642';
function ccnum(num){
    return num.match(/.{1,4}/g).join('-');//'.' means matches any character, 'g' global flag ensures it applies to entire string
    //{1,4} means matches 1 to 4 characters at a time
}
console.log(ccnum(num));