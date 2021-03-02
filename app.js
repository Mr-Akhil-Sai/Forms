let submitButton = document.querySelector("#submit");
let tabelDiv = document.querySelector("#tabelDiv");

submitButton.addEventListener("click", () => {
  let name = document.querySelector(".name");
  let phone = document.querySelector(".phone");
  let mail = document.querySelector(".mail");

  if (name.value != "" && phone.value != "" && mail.value != "") {
    let table = document.querySelector("table");
    let tablerow = document.createElement("tr");
    tablerow.innerHTML = `
	 <td>${name.value}</td> 
	 <td>${phone.value}</td> 
	 <td>${mail.value}</td> 
	  `;
    table.appendChild(tablerow);
    clearInputs(name, phone, mail);
  } else {
    alert("enter the given fileds");
  }
});

function clearInputs(name, phone, mail) {
  name.value = "";
  phone.value = "";
  mail.value = "";
}
