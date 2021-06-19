const students = [
  {
    firstName: "marko",
    age: 39,
    favorites: ["JavaScript", "Node"],
    isSatisfied: true,
    worksAt: "Google",
    isRemote: false
  },
  {
    firstName: "stefan",
    age: 39,
    favorites: ["HTML"],
    isSatisfied: false,
    worksAt: "Dropbox",
    isRemote: false
  },
  {
    firstName: "ana",
    age: 39,
    favorites: ["HTML", "React", "MongoDB"],
    isSatisfied: true,
    worksAt: "Facebook",
    isRemote: true
  }
];

console.log(students[1].firstName); // stefan

console.log("--------------------------------");

console.log(students[2].worksAt); // Facebook

console.log("--------------------------------");

for (let i = 0; i < students.length; i++) {
  console.log(students[i].firstName);
}

// marko
// stefan
// ana

console.log("--------------------------------");

students.forEach(function (oneStudent) {
  console.log(oneStudent.firstName);
});

// marko
// stefan
// ana

console.log("--------------------------------");

for (let elem of students) {
  console.log(elem.firstName);
}

// marko
// stefan
// ana

console.log("--------------------------------");

const strings = ["apple", "strawbeeries"];

strings.forEach((element) => {
  console.log(element);
});

console.log("--------------------------------");

// array of arrays

const devs = [
  ["callie", "camilo"],
  ["fernando", "diego"],
  ["dria", "david", "kyle"]
];

console.log(devs[0][1]); // camilo
console.log(devs[2][1]); // david
console.log(devs[1][1]); // diego
console.log(devs[2][0]); // dria

for (let i = 0; i < devs.length; i++) {
  console.log(devs[i][1]);
}

// camilo
// diego
// david

for (let i = 0; i < devs.length; i++) {
  console.log(devs[i][0]);
}

// callie
// fernando
// dria

// objects with nested objects

const classroom = {
  teacher: {
    firstName: "sandra",
    lastName: "boskovic",
    address: {
      street: "1234 Some Street",
      city: "Miami",
      state: "FL"
    }
  }
};

console.log(classroom.teacher.firstName); // sandra

console.log(classroom.teacher.address.street); // 1234 Some Street
