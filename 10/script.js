
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


const createPersonClosure = (name, surname) => {
     let age;
     let fatherName;

     function checkText(char) {
          return !!char.match(/[A-ZА-Я]/);
     }

     function getName() {
          return name
     }
     function getSurname() {
          return surname
     }
     function getFatherName() {
          return fatherName
     }
     function getAge() {
          return age
     }
     function getFullName() {
          return `${surname} ${name} ${fatherName}`
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
          } else {
               alert('введіть вік від 0-100')
          }
          return age;
     }
     function setFullName(newFullName) {
          const [newSurname, newName, newFatherName] = newFullName.split(" ");

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
     }
}

// const a = createPersonClosure("Вася", "Пупкін")
// const b = createPersonClosure("Ганна", "Іванова")
// a.getFatherName = () => 'Петрович'
// console.log(a.getFatherName());
// console.log(a.getName())
// console.log(a.setAge(15));
// console.log(a.setAge(150));//не працює

// b.setFullName("Петрова Ганна Миколаївна")
// console.log(b.getFatherName()) //Миколаївна

// createPersonClosureDestruct

const createPersonClosureDestruct = ({ name = 'іван', surname = 'Іванов', fatherName = 'Іванович', age = 0 }) => {
     function checkText(char) {
          return !!char.match(/[A-ZА-Я]/);
     }

     function getName() {
          return name
     }
     function getSurname() {
          return surname
     }
     function getFatherName() {
          return fatherName
     }
     function getAge() {
          return age
     }
     function getFullName() {
          return `${surname} ${name} ${fatherName}`
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
          } else {
               alert('введіть вік від 0-100')
          }
          return age;
     }
     function setFullName(newFullName) {
          const [newSurname, newName, newFatherName] = newFullName.split(" ");

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
     }
}



// console.log(b2.setName());

// isSorted

// const isSorted = (arr) => {

//      if (arr.length === 0) {
//           return true;
//      }

//      for (let i = 0; i < arr.length; i++) {
//           if (typeof arr[i] !== 'number') {
//                return false;
//           }
//      }
//      let index = 0

//      for (let j = 1; j < arr.length; j++) {
//           if (arr[j] <= arr[index]) {
//                return false;
//           }
//           index++;
//      }

//      return true;
// }


// // Test isSorted

// const isSortedTest = () => {
//      const arr = []

//      while (true) {
//           const arrVal = +prompt('введіть щось')
//           arr.push(arrVal)

//           if (!confirm('продовжити?')) {
//                break
//           }
//      }

//      if (arr.length === 0) {
//           return true;
//      }

//      for (let i = 0; i < arr.length; i++) {
//           if (typeof arr[i] !== 'number') {
//                return false;
//           }
//      }
//      let index = 0

//      for (let j = 1; j < arr.length; j++) {
//           if (arr[j] <= arr[index]) {
//                return false;
//           }
//           index++;
//      }

//      console.log(arr);
//      return true;
// }

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


const getSetForm = (parent, getSet) => {
     const inputs = {};

     const form = document.createElement('form');
     form.setAttribute('id', 'dynamicForm');

     const updateInputs = () => {
          for (const prop in inputs) {
               const getter = getSet[`get${prop}`];
               inputs[prop].value = getter();
          }
     };

     for (const getSetName in getSet) {
          const getOrSet = getSetName.substring(0, 3);
          const fieldName = getSetName.substring(3);

          const setKey = `set${fieldName}`;
          const getKey = `get${fieldName}`;

          if (!inputs[fieldName]) {
               const input = document.createElement('input');
               input.setAttribute('type', 'text');
               input.value = getSet[getKey]();

               if (getOrSet === 'set') {
                    input.disabled = true;
               }

               input.oninput = () => {
                    const setter = getSet[setKey];
                    if (typeof setter === 'function') {
                         setter(input.value);
                         updateInputs();
                    }
               };

               inputs[fieldName] = input;
               form.appendChild(input);
          }
     }

     parent.appendChild(form)
     updateInputs();
}



let car;
{
     let brand = 'BMW',
          model = 'X5',
          volume = 2.4;
     car = {
          getBrand() {
               return brand;
          },
          setBrand(newBrand) {
               if (newBrand && typeof newBrand === 'string') {
                    brand = newBrand;
               }
               return brand;
          },
          getModel() {
               return model;
          },
          setModel(newModel) {
               if (newModel && typeof newModel === 'string') {
                    model = newModel;
               }
               return model;
          },
          getVolume() {
               return volume;
          },
          setVolume(newVolume) {
               newVolume = +newVolume;
               if (newVolume && newVolume > 0 && newVolume < 20) {
                    volume = newVolume;
               }
               return volume;
          },
          getTax() {
               return volume * 100;
          }
     };
}

getSetForm(document.body, car);
