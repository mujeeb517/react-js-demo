// let, const: block scoped { }
// var: function scoped

const name = "John";
const dept = "IT";

// var str = name + " is working for " + dept + " Dept";
var str = `${name} is working for ${dept} Dept`
console.log(str);

var mobile = {
    width: 5,
    height: 10,
    color: 'black'
}

var mobile2 = { ...mobile };
mobile2.width = 1000;
console.log(mobile);
// var width = mobile.width;
// var height = mobile.height;

// Destructering 
// const { width, height, color } = mobile;
var arr = [1, 2, 3, 4];
var arr2 = [...arr]
console.log(arr2)
// // const first = arr[0]
// // const second = arr[1]

// const [first] = arr

// console.log(width, height);

// arrow function
function fn(a, b) {
    return a + b;
}
//anonymous
() => {
    a++;
    b++;
    return a + 10;
}
