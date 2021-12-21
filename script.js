//Write a logic to search the data 

function search(){
  const url="https://jsonplaceholder.typicode.com/users"

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(users){
    //Call a function which take users as a parameter
    getData(users);
  })
  //Error using catch block 
  .catch(function(error){
    console.log(error);
  })
}



function getData(users){
//will use div which contains empty result
let userDiv=document.querySelector("#users")
userDiv.innerHTML="";


//create a table element 
let table =document.createElement("table")


//Iterate over user data 
users.forEach(function(currentUser){
  //create a row 
  let row =table.insertRow();
 let name= row.insertCell()
 name.innerHTML=currentUser.name;

 let city=row.insertCell()
  city.innerHTML=currentUser.address.city;

  let email=row.insertCell()
  email.innerHTML=currentUser.email;

  let phone=row.insertCell()
  phone.innerHTML=currentUser.phone;

  let website=row.insertCell()
  website.innerHTML=currentUser.website;

  let company=row.insertCell()
  company.innerHTML=currentUser.company.name;

  let company_catch=row.insertCell()
  company_catch.innerHTML=currentUser.company.catchPhrase;
  
})



//Append the data of the table with user div 
userDiv.appendChild(table);

}


// async await with more exericse and dom manipulation 