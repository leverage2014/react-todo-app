// function add(a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];

// var final = [3, ...groupA];
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeting(name, age) {
	var str = 'Hi ' + name + ', you are ' + age;
	console.log(str);
}

greeting(...person);
greeting(...personTwo);