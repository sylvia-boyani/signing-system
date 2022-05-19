const tableBody = document.querySelector(".tableBody");
const getUsers = () => {
//   let tableRow = document.createElement("tr");
  console.log(tableBody)
  fetch("http://localhost:8080/api/v1/students")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        tableBody.innerHTML += `<tr>      
           <td>${user.id}</td>
           <td>${user.firstName}</td>
           <td>${user.lastName}</td>
           <td>${user.email}</td>
           <td>${user.laptopId}</td>
           <td>${user.id}</td>
           <td>${user.id}</td>
           <td>
             <div class="actions">
               <button class="view">View</button>
               <button class="edit">Edit</button>
             </div>
           </td>        
       </tr>`;       
      });
    });
};

getUsers();
