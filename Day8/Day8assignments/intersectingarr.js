
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [30, 50, 70, 90, 10];

function Intersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}

console.log(Intersection(arr1, arr2));