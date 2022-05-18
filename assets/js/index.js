const inputs = document.querySelectorAll(".input");

const errorMessage = ["Invalid name", "Invalid email", "Invalid serial number"]

const isValidEmailFormat = (email) => {
  let validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return validEmail.test(email) ? true : false;
};


const isValidNameFormat = (name) => {
    let validName =  /^[a-z ,.'-]+$/i;
    return validName.test(name) ? true : false;
}

const isValidSerialNumberFormat = (serialNumber) => {
    let validSerialNumber =  /^[\\s\\da-zA-Z.-]+$/;
    return validSerialNumber.test(serialNumber) ? true : false;
}


inputs.forEach(input => {
    let value = input.value;
    if(value &&  isValidNameFormat()){
       input.classList.add("border-success")
    }
    
});