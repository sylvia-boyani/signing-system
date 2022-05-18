const inputs = document.querySelectorAll(".input");

const data = [
  {
    firstName: "",
    lastName: "",
    email: "",
    group: "",
  },
];

const errorMessage = ["Invalid name", "Invalid email", "Invalid serial number"];

const isValidEmailFormat = (email) => {
  let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return validEmail.test(email) ? true : false;
};

const isValidNameFormat = (name) => {
  let validName = /^[a-z ,.'-]+$/i;
  return validName.test(name) ? true : false;
};

const isValidSerialNumberFormat = (serialNumber) => {
  let validSerialNumber = /^[\\s\\da-zA-Z.-]+$/;
  return validSerialNumber.test(serialNumber) ? true : false;
};

inputs.forEach((input) => {
  let value = input.value;
  if (input.className.contains("name") && value && isValidNameFormat()) {
    data[0].firstName = value;
    input.classList.add("border-success");
  }
  else{
    input.classList.add("border-warning");
    document.querySelectorAll(".first_name_error").textContent = errorMessage[0];
  }

  if (input.className.contains("email") && value && isValidEmailFormat()) {
    data[1].firstName = value;
    input.classList.add("border-success");
  }
  else{
    input.classList.add("border-warning");
    document.querySelectorAll(".first_name_error").textContent = errorMessage[1];
  }

  if (input.className.contains("serial") && value && isValidSerialNumberFormat()) {
    data[2].firstName = value;
    input.classList.add("border-success");
  }
  else{
    input.classList.add("border-warning");
    document.querySelectorAll(".first_name_error").textContent = errorMessage[2];
  }
});
