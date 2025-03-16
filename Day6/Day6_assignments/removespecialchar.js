function rsc(str){
    return str.replace(/[^a-zA-Z0-9]/g,'');
}
console.log(rsc("hello@!/hi"));