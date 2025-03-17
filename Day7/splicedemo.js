//splice(position/index,deleteCount, ...items to insert)
//1.only delete   2.only insert  3.both delete & insert

let arr=[10,20,30,40,50];
arr.splice(1,2);//only delete from index1 delete 2 items i.e, 20,30
console.log('after 1st splice', arr);

arr.splice(1,0,20,30)
console.log('after second splice',arr);[10,20,30,40,50]

arr.splice(1,2,25,35);
console.log('afterthird splice',arr);

arr.toSpliced(1,3,30,40,50,50,60);
console.log('after to splice splice',arr);