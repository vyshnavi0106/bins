let arr1=[10,30,40,20,50];
arr1.sort();
console.log(arr1);

let cars=['toyota','honda','bmw','maruthi'];
cars.sort();
console.log(cars);

let arr2=[10,109,91,94,93,9,7,6,105,103]
arr2.sort();
console.log(arr2);

//numeric sort
arr2.sort((a,b)=>a-b);//a,b are the adjacent elements in the array//idf 
console.log(arr2);
//decending sort
arr2.sort((a,b)=>b-a);//a,b are the adjacent elements in the array//idf 
console.log(arr2);