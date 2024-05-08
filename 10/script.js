
function createPerson(name, surname) {
     return {
          name,
          surname,
          getFullName() {
               let str = "";
               Object.values(this).forEach((value) => {
                    if (typeof value !== "function") {
                         str += `${value} `;
                    }
               });
               return str;
          },
     };
}

// createPersonClosure


// createPersonClosure
const createPersonClosure = (name, surname) => {
     let fatherName;
     let age;

     function checkText(char = "") {
          return !!char.match(/[A-ZА-Я]/);
     }

     function getName() {
          return name;
     }
     function getSurname() {
          return surname;
     }
     function getFatherName() {
          return fatherName;
     }
     function getAge() {
          return age;
     }
     function getFullName() {
          return `${surname || ""} ${name || ""} ${fatherName || ""}`;
     }
     function setName(newName) {
          if (checkText(newName[0])) {
               name = newName;
          }
          return name;
     }
     function setSurname(newName) {
          if (checkText(newName[0])) {
               surname = newName;
          }
          return surname;
     }
     function setFatherName(newName) {
          if (checkText(newName[0])) {
               fatherName = newName;
          }
          return fatherName;
     }
     function setAge(newAge) {
          if (newAge >= 0 && newAge <= 100) {
               age = newAge;
          }
          return age;
     }
     function setFullName(newFullName) {
          const [newSurname = "", newName = "", newFatherName = ""] =
               newFullName.split(" ");

          if (checkText(newSurname[0])) {
               surname = newSurname;
          }
          if (checkText(newName[0])) {
               name = newName;
          }
          if (checkText(newFatherName[0])) {
               fatherName = newFatherName;
          }
          return getFullName();
     }

     return {
          getName,
          getSurname,
          getFatherName,
          getAge,
          getFullName,
          setName,
          setSurname,
          setFatherName,
          setAge,
          setFullName,
     };
};

const a = createPersonClosure("Вася", "Пупкін");
const b1 = createPersonClosure("Ганна", "Іванова");
a.setName("Taras");
console.log(a.getName());
a.setAge(15);
a.setAge(150); //не працює

b1.setFullName("Петрова Ганна Миколаївна");
console.log(b1.getFatherName()); //Миколаївна


const createPersonClosureDestruct = ({ name = 'іван', surname = 'Іванов', fatherName = 'Іванович', age = 0 }) => {
     function checkText(char = "") {
          return !!char.match(/[A-ZА-Я]/);
     }

     function getName() {
          return name;
     }
     function getSurname() {
          return surname;
     }
     function getFatherName() {
          return fatherName;
     }
     function getAge() {
          return age;
     }
     function getFullName() {
          return `${surname || ""} ${name || ""} ${fatherName || ""}`;
     }
     function setName(newName) {
          if (checkText(newName[0])) {
               name = newName;
          }
          return name;
     }
     function setSurname(newName) {
          if (checkText(newName[0])) {
               surname = newName;
          }
          return surname;
     }
     function setFatherName(newName) {
          if (checkText(newName[0])) {
               fatherName = newName;
          }
          return fatherName;
     }
     function setAge(newAge) {
          if (newAge >= 0 && newAge <= 100) {
               age = newAge;
          }
          return age;
     }
     function setFullName(newFullName) {
          const [newSurname = "", newName = "", newFatherName = ""] =
               newFullName.split(" ");

          if (checkText(newSurname[0])) {
               surname = newSurname;
          }
          if (checkText(newName[0])) {
               name = newName;
          }
          if (checkText(newFatherName[0])) {
               fatherName = newFatherName;
          }
          return getFullName();
     }

     return {
          getName,
          getSurname,
          getFatherName,
          getAge,
          getFullName,
          setName,
          setSurname,
          setFatherName,
          setAge,
          setFullName,
     };
}



// console.log(b2.setName());

// isSorted

const isSorted = (arr) => {

     if (arr.length === 0) {
          return true;
     }

     for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== 'number') {
               return false;
          }
     }
     let index = 0

     for (let j = 1; j < arr.length; j++) {
          if (arr[j] <= arr[index]) {
               return false;
          }
          index++;
     }

     return true;
}


// Test isSorted

const isSortedTest = () => {
     const arr = []

     while (true) {
          const arrVal = +prompt('введіть щось')
          arr.push(arrVal)

          if (!confirm('продовжити?')) {
               break
          }
     }

     if (arr.length === 0) {
          return true;
     }

     for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== 'number') {
               return false;
          }
     }
     let index = 0

     for (let j = 1; j < arr.length; j++) {
          if (arr[j] <= arr[index]) {
               return false;
          }
          index++;
     }

     console.log(arr);
     return true;
}

// personForm


const personForm = (parent, person) => {

     const createInput = (type, value, setter) => {
          const input = document.createElement('input');
          parent.appendChild(input);
          input.type = type;
          input.value = value;
          input.oninput = (event) => {
               const newValue = event.target.value;
               setter(newValue);
               updateFullName();
          };


          return input;
     }

     const updateFullName = () => {
          fullNameInput.value = person.getFullName();
     }

     const nameInput = createInput('text', person.getName(), person.setName, person.getName);
     const surnameInput = createInput('text', person.getSurname(), person.setSurname, person.getSurname);
     const fatherNameInput = createInput('text', person.getFatherName(), person.setFatherName, person.getFatherName);
     const ageInput = createInput('number', person.getAge(), person.setAge, person.getAge);

     const fullNameInput = createInput('text', person.getFullName(), person.setFullName, person.getFullName);

     updateFullName();
}

const b = createPersonClosure("Ганна", "Іванова");
b.setAge(15);
b.setFullName("Петрова Ганна Миколаївна");

const inputContainer = document.getElementById('inputContainer');
personForm(inputContainer, b);


const getSetForm = (element, obj) => {
     const inputs = {};

     const updateValues = () => {
          for (const key in inputs) {
               const value = obj[`get${key}`]();
               inputs[key].value = value ?? "";
          }
     };

     for (const key in obj) {
          const prop = key.slice(3);

          if (!inputs[prop]) {
               const input = document.createElement("input");
               input.placeholder = prop;
               input.name = prop;
               input.disabled = !obj[`set${prop}`];

               const value = obj[`get${prop}`]();
               input.value = value ?? "";

               const type = typeof value === "number" ? "number" : "text";
               input.type = type;

               inputs[prop] = input;
               element.append(input);

               input.addEventListener("input", (e) => {
                    const value = e.target.value;
                    const newValue = type === "number" ? +value : value;
                    obj[`set${prop}`](newValue);
                    updateValues();
               });
          }
     }
     console.log("🚀 ~ getSetForm ~ inputs==>>", inputs);
};

getSetForm(document.body, a);
