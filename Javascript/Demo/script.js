const students = [
  {
    rollNo: 10001,
    name: 'John',
    age: 20,
    dept: 'CSE',
    year: 2023,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque illum at perspiciatis mollitia qui itaque soluta fuga quos reiciendis.',
  },
  {
    rollNo: 10002,
    name: 'Jack',
    age: 19,
    dept: 'IT',
    year: 2022,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque illum at perspiciatis mollitia qui itaque soluta fuga quos reiciendis.',
  },
  {
    rollNo: 10003,
    name: 'Robert',
    age: 18,
    dept: 'EEE',
    year: 2020,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque illum at perspiciatis mollitia qui itaque soluta fuga quos reiciendis.',
  },
  {
    rollNo: 10004,
    name: 'Mary',
    age: 19,
    dept: 'ECE',
    year: 2022,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque illum at perspiciatis mollitia qui itaque soluta fuga quos reiciendis.',
  },
  {
    rollNo: 10005,
    name: 'Prince',
    age: 21,
    dept: 'IT',
    year: 2022,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque illum at perspiciatis mollitia qui itaque soluta fuga quos reiciendis.',
  },
];

const result = document.querySelector('.result');
let btn = document.querySelector('#btn');
let rollnumber = document.querySelector('#rollno');

btn.addEventListener('click', () => {
  let searchText = rollnumber.value;

  let newStudent = students.filter((student) => student.rollNo === Number(searchText));
  console.log(newStudent);
  displayDetails(newStudent);
});

function displayDetails(students) {
  let data = students.map((student) => {
    return `
       <h1>Name: ${student.name}</h1>
       <h2>Dept: ${student.dept}</h2>
       <h2>Roll No: ${student.rollNo}</h2>
       <h3>Age: ${student.age}</h3>
       <p><strong>Year:</strong> ${student.year}</p>
       <p>Desc: ${student.description}</p>
       `;
  });

  result.innerHTML = data.join(' ');
}

displayDetails(students);
