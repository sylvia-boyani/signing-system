const tableBody = document.querySelector(".tableBody");
const getUsers = () => {
  //   let tableRow = document.createElement("tr");
  console.log(tableBody);
  fetch("https://signing-system.herokuapp.com/api/v1/students")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        tableBody.innerHTML += `<tr>  
      <td><input type="checkbox" name="" id=""> </td>
           <td class="user-id">${user.id}</td>
           <td>${user.firstName}</td>
           <td>${user.lastName}</td>
           <td>${user.email}</td>
           <td>${user.laptopId}</td>
           <td>${user.id}</td>
           <td>${user.id}</td>
           <td>
             <div class="actions">
             <button ${onClick(user.id)} class="delete actions">Delete</button>
               <button class="view actions">View</button>              
             </div>
           </td>        
       </tr>`;
      });
    });
};

const onClick = (id) => {
  const actions = document.querySelector(".actions");
  actions.forEach((action) => {
    action.addEventListener("click", (e) => {
      id = parseInt(e.target.data);
      deleteStudent(
        `https://signing-system.herokuapp.com/api/v1/students/${id}`
      );
    });
  });
};

const deleteStudent = async (url = "") => {
  console.log(id);
  const response = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(...data),
  });
  console.log(response);
};
getUsers();
