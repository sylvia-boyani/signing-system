const inputs = document.querySelectorAll(".input");

const submitBtn = document.querySelector(".submit");

const data = [
  {
    firstName: "",
    lastName: "",
    email: "",
    group: "",
  },
];

const errors = [];

const errorMessage = ["Invalid name", "Invalid email", "Invalid serial number"];

const isValidEmailFormat = (email) => {
  let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  console.log(validEmail);
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
  input.addEventListener("blur", () => {
    let value = input.value;
    if (input.classList.contains("name") && value && isValidNameFormat(value)) {
      data[0].firstName = value;
      input.classList.add("border-success");
      document.querySelector(".name-error").textContent = "";
      document.querySelector(".last-name-error").textContent = "";
      errorMessage[0];
    } else {
      input.classList.add("border-warning");
      if (input.classList.contains("border-success")) {
        input.classList.remove("border-success");
      }
      document.querySelector(".name-error").textContent = errorMessage[0];
      errors.push(errorMessage[0]);
    }

    if (
      input.classList.contains("email") &&
      value &&
      isValidEmailFormat(value)
    ) {
      data[0].firstName = value;
      input.classList.add("border-success");
      document.querySelector(".email-error").textContent = "";
    } else {
      input.classList.add("border-warning");
      document.querySelector(".email-error").textContent = errorMessage[1];
      errors.push(errorMessage[1]);
    }

    if (
      input.classList.contains("serial") &&
      value &&
      isValidSerialNumberFormat(value)
    ) {
      data[0].firstName = value;
      input.classList.add("border-success");
      document.querySelectorAll(".serial_error").textContent = "";
    } else {
      input.classList.add("border-warning");
      document.querySelectorAll(".serial_error").textContent = errorMessage[2];
      errors.push(errorMessage[2]);
    }
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (errors.length > 0) {
    document.querySelector(".all-error-message").textContent =
      "Kindly ensure you fill all the required input.";
  }else{
    console.log(data)
  }
});
