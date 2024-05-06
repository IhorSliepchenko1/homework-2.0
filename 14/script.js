{// Person Constructor
     function Person(name, surname) {
          this.name = name;
          this.surname = surname;

          this.getFullName = function () {
               let str = "";
               Object.values(this).forEach((value) => {
                    if (typeof value !== "function") {
                         str += `${value} `;
                    }
               });
               return str;
          }
     }

     const a = new Person("Вася", "Пупкін")
     const b = new Person("Ганна", "Іванова")
     const c = new Person("Єлизавета", "Петрова")

     //      console.log(a.getFullName())
     //      a.fatherName = 'Іванович'
     //      console.log(b.getFullName())
     //      console.log(a.getFullName());
}


{// Person Prototype

     function Person(name, surname) {
          this.name = name;
          this.surname = surname;
     }

     Person.prototype.getFullName = function () {
          let str = "";
          Object.values(this).forEach((value) => {
               if (typeof value !== "function") {
                    str += `${value} `;
               }
          });
          return str;
     }

     const a = new Person("Вася", "Пупкін")
     const b = new Person("Ганна", "Іванова")
     const c = new Person("Єлизавета", "Петрова")

     // console.log(a.getFullName())
     // a.fatherName = 'Іванович'
     // console.log(b.getFullName())
     // console.log(a.getFullName());
}

// Password
function Password(parent, open) {
     const passInput = document.createElement('input')
     passInput.type = 'password'
     passInput.placeholder = 'Your password'
     parent.append(passInput)

     const checkBox = document.createElement('input')
     parent.append(checkBox)
     checkBox.type = 'checkbox'
     checkBox.checked = open;

     this.setValue = function (value) {
          passInput.value = value;
     };

     this.getValue = function () {
          return passInput.value
     }

     this.setOpen = function (state) {
          passInput.type = state ? 'text' : 'password';
          checkBox.checked = !state;
          if (this.onOpenChange) this.onOpenChange(state);
     };

     this.getOpen = function () {
          return passInput.type === 'text';
     };

     passInput.addEventListener('input', () => {
          if (this.onChange) this.onChange(passInput.value);
     });

     checkBox.addEventListener('change', () => {
          this.setOpen(!checkBox.checked);
     });


     this.setStyle = function (property, value) {
          passInput.style = `${property}: ${value};`
     };
}
// let p = new Password(document.body, true)
// p.setStyle('background', 'red')


// LoginForm
function LoginForm(parent, open) {
     const login = document.createElement('input')
     parent.append(login)
     login.type = 'text'
     login.placeholder = 'Your login'

     const passSlot = document.createElement('div')
     parent.append(passSlot)
     const password = new Password(passSlot, open);

     const disBtn = () => {
          if (password.getValue().length > 0 && login.value.length > 0) {
               button.disabled = false
          }
     }

     password.onChange = () => {
          disBtn()
     }

     login.onChange = () => {
          disBtn()
     }


     const button = document.createElement('button')
     parent.append(button)
     button.innerText = 'send'
     button.disabled = true

     button.addEventListener('click', () => {
          alert(`
          Login: ${login.value}
          Password: ${password.getValue()}
          `)
     })

}
// const form = document.getElementById('form')
// let p = new LoginForm(form, true);


// LoginForm Constructor
function LoginFormConstructor(parent, open) {
     const login = document.createElement('input')
     parent.append(login)
     login.type = 'text'
     login.placeholder = 'Your login'

     const passSlot = document.createElement('div')
     parent.append(passSlot)
     const password = new Password(passSlot, open);

     this.setValue = function (value) {
          login.value = value;
     };

     this.getValue = function () {
          return login.value
     }

     login.addEventListener('input', () => {
          if (this.onChange) this.onChange(login.value);
     });

     const disBtn = () => {
          if (password.getValue().length > 0 && login.getValue().length > 0) {
               button.disabled = false
          }
     }

     password.onChange = () => {
          disBtn()
     }

     login.onChange = () => {
          disBtn()
     }


     const button = document.createElement('button')
     parent.append(button)
     button.innerText = 'send'
     button.disabled = true

     button.addEventListener('click', () => {
          alert(`
          Login: ${login.value}
          Password: ${password.getValue()}
          `)
     })

}
// const form = document.getElementById('form')
// let p = new LoginForm(form, true);


// Password Verify
function PasswordVerify(parent, open) {
     // ** main password ** \\
     const passMainContainer = document.createElement('div')
     passMainContainer.className = 'inputPassContainer'
     const mainPass = new Password(passMainContainer, open)

     // ** chekc password ** \\
     const passCheckContainer = document.createElement('div')
     passCheckContainer.className = 'inputPassContainer'
     const checkPass = new Password(passCheckContainer, open)

     parent.append(passMainContainer, passCheckContainer)

     mainPass.onOpenChange = () => {
          passCheckContainer.style.display = mainPass.getOpen() ? 'none' : ''
     }

     let info = document.createElement('p')

     const checkValue = () => {
          parent.append(info)

          if (mainPass.getValue() === checkPass.getValue()) {
               mainPass.setStyle('border', '1px solid green');
               checkPass.setStyle('border', '1px solid green')

               info.innerText = `Passwords match!`
               info.style.color = 'green'

          } else {
               mainPass.setStyle('border', '1px solid red');
               checkPass.setStyle('border', '1px solid red')

               info.innerText = `Password mismatch!`
               info.style.color = 'red'
          }

     }

     mainPass.onChange = () => {
          checkValue()
     }

     checkPass.onChange = () => {
          checkValue()
     }
}

const div = document.createElement('div')
div.className = 'passSlot'
document.body.appendChild(div)

let p = new PasswordVerify(div, true);