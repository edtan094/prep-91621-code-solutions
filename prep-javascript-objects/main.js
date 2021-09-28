var person = {
  firstName: 'Edwin',
  lastName: 'Tan',
  hobby: 'Surfing'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'specialist';
console.log('This persons job is: ' + person.job);

person.previousJob = 'Concierge';
console.log('This persons previous job is: ' + person.previousJob);

console.log(person);
