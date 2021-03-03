let submitButton = document.querySelector("#submit");
let tabelDiv = document.querySelector("#tabelDiv");
let table = document.querySelector("table");

submitButton.addEventListener("click", () => {
  table.style.display = "block";
  let name = document.querySelector(".name");
  let phone = document.querySelector(".phone");
  let mail = document.querySelector(".mail");

  if (name.value != "" && phone.value != "" && mail.value != "") {
    let email = mail.value;
    if ((typeof phone.value == Number, email.includes("@"))) {
      let tablerow = document.createElement("tr");
      tablerow.innerHTML = `
			<td>${name.value}</td>
			<td>${phone.value}</td>
			<td>${mail.value}</td>
      <button onclick = "deleteFunction()">delete</button>
      <button onclick = "editFunction()">edit</button>
			`;
      table.appendChild(tablerow);
      console.log(table.innerText);
      clearInputs(name, phone, mail);
    } else {
      alert("enter the fields correctly");
      clearInputs(name, phone, mail);
    }
  } else {
    alert("enter the given fileds");
    clearInputs(name, phone, mail);
  }
});

function clearInputs(name, phone, mail) {
  name.value = "";
  phone.value = "";
  mail.value = "";
}

function deleteFunction() {
  this.remove();
}

function editFunction() {}
