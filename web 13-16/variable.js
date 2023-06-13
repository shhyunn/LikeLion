var num;
num = 10;
console.log(num);

var student = {
    grade: 1,
    school: "lion school",
};

console.log(student);

var gradeInfo = student.grade;
console.log(gradeInfo);

var key = Object.keys(student)[0];
console.log(key);

student.class = 3;

var name1 = "김멋사";
var name2 = Symbol("김멋사");

var a = 10;
var b = 15;
console.log(a++);
console.log(a);

var greeting = "Hello!";
var farewell = 'Bye' + 1;

var a = `안녕하세요!
여러분`;
console.log(a);

var mbti = ['INFP', 'ENFJ', 'INTJ'];
var value = mbti.shift()

var a = 2;
if (a > 2) {
    console.log('a > 2');
} else {
    console.log('a <= 2');
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

function multiply(a, b) {
    return a * b;
}

console.log(multiply(10, 5));

let plus = (a, b) => {
    return a + b;
}