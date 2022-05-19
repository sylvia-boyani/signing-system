const inputs = document.querySelectorAll(".input");

const submitBtn = document.querySelector(".submit");

const data = [
  {
    firstName: "",
    lastName: "",
    email: "",
    laptopId: "",
    // studentGroup: "",
  },
];
const errors = [];

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
  input.addEventListener("input", () => {
    if (input.classList.contains("first-name")) {
      value = input.value;
      if (value != "" && isValidNameFormat(value)) {
        data[0].firstName = value;
        input.classList.add("border-success");
        input.classList.remove("border-warning");
        document.querySelector(".first-name-error").textContent = "";
        errorMessage[0];
      } else {
        if (input.classList.contains("border-success")) {
          input.classList.remove("border-success");
        }
        document.querySelector(".first-name-error").textContent =
          errorMessage[0];
        errors.push(errorMessage[0]);
      }
    }

    if (input.classList.contains("last-name")) {
      value = input.value;
      if (value != "" && isValidNameFormat(value)) {
        data[0].lastName = value;
        input.classList.add("border-success");
        input.classList.remove("border-warning");
        document.querySelector(".last-name-error").textContent = "";
        errorMessage[0];
      } else {
        input.classList.add("border-warning");
        if (input.classList.contains("border-success")) {
          input.classList.remove("border-success");
        }
        document.querySelector(".last-name-error").textContent =
          errorMessage[0];
        errors.push(errorMessage[0]);
      }
    }

    if (input.classList.contains("email")) {
      value = input.value;
      if (value != "" && isValidEmailFormat(value)) {
        data[0].email = value;
        input.classList.add("border-success");
        input.classList.remove("border-warning");
        document.querySelector(".email-error").textContent = "";
      } else {
        input.classList.add("border-warning");
        document.querySelector(".email-error").textContent = errorMessage[1];
        errors.push(errorMessage[1]);
      }
    }

    if (input.classList.contains("serial")) {
      value = input.value;
      if (value != "" && isValidSerialNumberFormat(value)) {
        data[0].laptopId = value;
        input.classList.add("border-success");
        input.classList.remove("border-warning");
        document.querySelectorAll(".serial_error").textContent = "";
      } else {
        input.classList.add("border-warning");
        input.classList.remove("border-success");
        document.querySelectorAll(".serial_error").textContent =
          errorMessage[2];
        errors.push(errorMessage[2]);
      }
    }
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (errors.length > 0 && Object.values(...data) < 4) {
    document.querySelector(".all-error-message").textContent =
      "Kindly ensure you fill all the required input.";
    errors.length = 0;  
  } else {
    document.querySelector(".all-error-message").textContent = "";
    registerUser("https://signing-system.herokuapp.com/api/v1/students", data);
    document.querySelector("form").reset();
  }
});

const registerUser = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(...data),
  });
  console.log(response.json());
};

