// Array 

const names = ['sandra', 'stefan', 'marcos'];
console.log(names[0])

// Objects

// - naming in singular as they represent 1 "thing"
// - we use {} when working with objects

const student = {
  // key : value
  firstName: "marcos",
  lastName: "palacios",
  bootcamp: "web dev",
  age: 33,
  isCareerChanger: true,
  favoriteSubjects: ['JavaScript', 'CSS']
};

// each element in object is separated by comma
// objects are represented with key : value pairs
// we use DOT notation when getting the value of an object

// 2 ways to get the values of a property of an object
console.log(student.firstName);

// we can use brackets too (but we won't do it on our class)
// console.log(student["age"])

console.log(student.isCareerChanger);

// add
student.year = "2016";

console.log(student);

// {
//   firstName: 'marcos',
//   lastName: 'palacios',
//   bootcamp: 'web dev',
//   age: 33,
//   isCareerChanger: true,
//   favoriteSubjects: [ 'JavaScript', 'CSS' ],
//   year: '2016'
// }

const house = {
  windows: 12
};

house.doors = 7;

console.log(house); // { windows: 12, doors: 7 }

console.log("--------------------------------");

// remove

delete student.age;

console.log(student);

// {
//   firstName: 'marcos',
//   lastName: 'palacios',
//   bootcamp: 'web dev',
//   isCareerChanger: true,
//   favoriteSubjects: [ 'JavaScript', 'CSS' ],
//   year: '2016'
// }

console.log("--------------------------------");

// update

student.year = "2017";

console.log(student);

// {
//   firstName: 'marcos',
//   lastName: 'palacios',
//   bootcamp: 'web dev',
//   isCareerChanger: true,
//   favoriteSubjects: [ 'JavaScript', 'CSS' ],
//   year: '2017'
// }

console.log("--------------------------------");

// list properties/keys

const studentObjectKeys = Object.keys(student);

console.log(studentObjectKeys);

// [
//   'firstName',
//   'lastName',
//   'bootcamp',
//   'isCareerChanger',
//   'favoriteSubjects',
//   'year'
// ]

// list the values

const studentObjectValues = Object.values(student);

console.log(studentObjectValues);

// [
//   'marcos',
//   'palacios',
//   'web dev',
//   true,
//   [ 'JavaScript', 'CSS' ],
//   '2017'
// ]

console.log("--------------------------------");

// special type of for loop for objects = for ... in

for (const key in student){
  console.log(key);
}

// firstName
// lastName
// bootcamp
// isCareerChanger
// favoriteSubjects
// year

console.log("--------------------------------");

// check if some property exists in an object

console.log("firstName" in student); // true

console.log("name" in student); // false

console.log("--------------------------------");

console.log(student.favoriteSubjects); // [ 'JavaScript', 'CSS' ]

console.log(student.favoriteSubjects[0]);

console.log("--------------------------------");

// add an element to nested array in the object

student.favoriteSubjects.push("HTML");

console.log(student);

// {
//   firstName: 'marcos',
//   lastName: 'palacios',
//   bootcamp: 'web dev',
//   isCareerChanger: true,
//   favoriteSubjects: [ 'JavaScript', 'CSS', 'HTML' ],
//   year: '2017'
// }


house.bathrooms = ["half"];

console.log(house);  // { windows: 12, doors: 7, bathrooms: [ 'half' ] }

house.bathrooms.unshift("full");

console.log(house); 
// { 
  // windows: 12, 
  // doors: 7, 
  // bathrooms: [ 'full', 'half' ] 
// }
