let acc='123456789';
function accnum(acc){
    return acc.replace(acc.slice(2,-2),'*****');
}
console.log(accnum(acc));