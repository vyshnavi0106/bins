let input=[10,20,30,40,50,10,30,50];
function eleocc(arr){
    let occurance={};
    input.forEach(num=>{//for each loops through each ele in array
        occurance[num]=(occurance[num]||0)+1;
    });
    return occurance;
}
console.log(eleocc(input));