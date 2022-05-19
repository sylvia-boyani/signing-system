const studentIdInput = document.querySelector(".student-id");

const buttons = document.querySelectorAll(".controls");

const isValidId = (id) => {
  let validId = /[0-9]/;
  return validId.test(id) ? true : false;
};

const checkinStudent = (id) => {
  fetch(`http://localhost:8080/api/v1/students/${id}`)
    .then((response) => response.json())
    .then((data) => {
      location.href = `../pages/success.html?name=${data.lastName}`;
    })
    .catch((error) => console.log(error));
};

const checkoutStudent = (id) => {
  fetch(`http://localhost:8080/api/v1/students/${id}`)
    .then((response) => response.json())
    .then((data) => {
      location.href = `../pages/success.html?name=${data.lastName}`;
    })
    .catch((error) => console.log(error));
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = parseInt(studentIdInput.value);
    if (isValidId(value)) {
      studentIdInput.classList.add("border-success");
      studentIdInput.classList.remove("border-warning");
      if (button.classList.contains("check-in")) {
        checkinStudent(value);
      } else {
        checkoutStudent(value);
      }
    } else {
      studentIdInput.classList.add("border-warning");
      studentIdInput.classList.remove("border-success");
    }
  });
});
