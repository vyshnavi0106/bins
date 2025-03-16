let str='I am in JavaScript class';
    function longest(str){
        
        return str.split(' ').reduce((longest, word) => word.length>longest.length ? word : longest );
    }
    console.log(longest(str));