let submitButton = document.querySelector("#submit");
let tabelDiv = document.querySelector("#tabelDiv");
let tablerow = document.createElement("tr");

submitButton.addEventListener("click", () => {
  let name = document.querySelector(".name");
  let phone = document.querySelector(".phone");
  let mail = document.querySelector(".mail");

  if (name.value != "" && phone.value != "" && mail.value != "") {
    let email = mail.value;
    if ((typeof phone.value == Number, email.includes("@"))) {
      let table = document.querySelector("table");
      tablerow.innerHTML = `
			<td>${name.value}</td>
			<td>${phone.value}</td>
			<td>${mail.value}</td>
			<td><button onclick= "editFunction()">edit</button></td>
			<td><button onclick= "deleteFunction()" >delete</button></td>
			`;
      table.appendChild(tablerow);
      clearInputs(name, phone, mail);
    } else {
      alert("enter the fields correctly");
    }
  } else {
    alert("enter the given fileds");
  }
});

function clearInputs(name, phone, mail) {
  name.value = "";
  phone.value = "";
  mail.value = "";
}

function editFunction() {}

function deleteFunction() {
  tablerow.remove();
}
