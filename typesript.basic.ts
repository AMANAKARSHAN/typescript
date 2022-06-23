var message: string = "Hello World";
var num: number = 3;
console.log(message, num);

var name1: string = "John";
var score1: number = 50;
var score2: number = 42.5;
var sum = score1 + score2;
console.log("name" + name1);
console.log("first score: " + score1);
console.log("second score: " + score2);

//Operator
var num: number = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);

//loops
var num: number = 0;
var count: number = 0;

for (num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    continue;
  }
  count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count);

//functions

//optional parameter
function disp_details(id: number, name: string, mail_id?: string) {
  console.log("ID:", id);
  console.log("Name", name);

  if (mail_id != undefined) console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");

function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);

//Number
console.log("TypeScript Number Properties: ");
console.log(
  "Maximum value that a number variable can hold: " + Number.MAX_VALUE
);
console.log(
  "The least value that a number variable can hold: " + Number.MIN_VALUE
);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);

//Array

var str: string[];
str = ["1", "2", "3", "4"];
console.log(str[0]);
console.log(str[1]);
