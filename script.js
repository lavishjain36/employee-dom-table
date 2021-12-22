let employees=[
  {
    id:1,
    first_name:"Sourav",
    last_name:"Das",
    email:"sourav@gmail.com",
    gender:"Male",
    ip_address:"160.192.178.21"
  },

  {
    id:2,
    first_name:"John",
    last_name:"Paul",
    email:"john@gmail.com",
    gender:"Male",
    ip_address:"160.292.178.21"
  },


  {
    id:3,
    first_name:"Pavan",
    last_name:"Sai",
    email:"pavan@gmail.com",
    gender:"Male",
    ip_address:"160.292.278.21"
  },

  {
    id:4,
    first_name:"Sangeetha",
    last_name:"Paul",
    email:"sangeetha@gmail.com",
    gender:"Female",
    ip_address:"160.092.378.21"
  },
  


  {
    id:5,
    first_name:"Pavni",
    last_name:"Dhillon",
    email:"pavni@gmail.com",
    gender:"Female",
    ip_address:"160.082.378.21"
  },


  {
    id:6,
    first_name:"Tushar",
    last_name:"Vinocha",
    email:"tushar@gmail.com",
    gender:"Male",
    ip_address:"160.092.378.21"
  },
]


//ALL the Employee Data 
let allEmpButton=document.querySelector("#all-emp-btn");
allEmpButton.addEventListener("click",function(){
displayEmployees(employees)
})


//Male employee data 
let maleEmpButton=document.querySelector("#male-emp-btn");
maleEmpButton.addEventListener("click",function(){
  //Logic to filter out male data 
  let maleEmployee=employees.filter(function(employee){
    return employee.gender==="Male"

  });
  //call the function 
  displayEmployees(maleEmployee)
})


//Female

let femaleEmpButton=document.querySelector("#female-emp-btn");
femaleEmpButton.addEventListener("click",function(){
  //Logic to filter out Female data 
  let femaleEmployee=employees.filter(function(employee){
    return employee.gender==="Female"

  });
  //call the function 
  displayEmployees(femaleEmployee)
})


//Search Functionality
let searchBox=document.querySelector("#search-box");

searchBox.addEventListener("keyup",function(){
 let textEntered= searchBox.value
console.log(textEntered);


//create an empty array 
let filteredEmployees=[];
if(textEntered!==""){
  filteredEmployees=employees.filter(function(employee){
  return employee.first_name.toUpperCase().startsWith(textEntered.toUpperCase())
  });
  document.querySelector("#table-body").innerHTML="";
  displayEmployees(filteredEmployees);

}else{
  document.querySelector("#table-body").innerHTML="";
}

})























//Displaying the data for the selected employee
let displayEmployees=(employees)=>{

  //select table body  to target the data 
  let tableBody=document.querySelector("#table-body");

  //lets create one table row which is initially empty 
  let tableRow="";

  for(let employee of employees){
    tableRow +=`<tr>
   <td>${employee.id}</td>
    <td>${employee.first_name}</td>
    <td>${employee.last_name}</td>
    <td>${employee.email}</td>
    <td>${employee.gender}</td> 
    <td>${employee.ip_address}</td> 
    </tr>`;
    tableBody.innerHTML=tableRow
  }
};