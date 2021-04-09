const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};
const showSucces = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control succes';
};

//Check if passwords match

const checkPasswordsMatch = (input1, input2) => {
    if (input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

//Check Email is Valid

const checkEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSucces(email);
  } else {
    showError(email, 'Email is not valid');
  }
};

//Check required fields

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, ` ${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
};

//Check the length of the inputs

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    showSucces(input);
  }
};
const getFieldName = (input) => {
  return input.id[0].toUpperCase() + input.id.slice(1);
};
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 13);
  checkLength(password, 5, 20);
  checkEmail(email);
  checkPasswordsMatch(password, password2)
});
