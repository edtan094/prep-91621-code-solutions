function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addtwonumbers', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name;
}

var getGreetingResult = getGreeting('Edwin');
console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}

var getAddAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5', getAddAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var getMultiplyAndDvideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5', getMultiplyAndDvideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var getSubtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers', getSubtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * radius * 3.141592653589793;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Edwin', 'Tan');
console.log('getFullName', getFullNameResult);

function cube(number) {
  return number * number * number;
}
var getCubeResult = cube(5);
console.log('cube', getCubeResult);
