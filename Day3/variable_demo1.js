var a=10;
let b=20;
const c=30;
console.log(a,b,c);
console.log(`Global scope- a:${a}, b:${b}, c:${c}`);

a=15;
b=25;
//c=35;//cannot be changed to 35
console.log(`a:${a}, b:${b}, c:${c}`);

const students=['vyshnavi','sai'];
console.log(students);
students.push('Vijay');//push is allowed
console.log(students);

let user={name:'vyshu',add:'harrisburg'};
user.age=25; //add a new property-yes
console.log(user);
user={name:'vijay',add:'PA'};
console.log(user);

function demo(){
    var a=100;
    let b=200;
    const c=300;
    console.log(`function scope- a:${a}, b:${b}, c:${c}`);

    if(true){
        var a=1000;
        let b=2000;
        const c=3000;
        console.log(`Block scope- a:${a}, b:${b}, c:${c}`)
    }
}
demo();