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
      <button onclick = "deleteFunction(this)">delete</button>
      <button onclick = "editFunction(this)">edit</button>
			`;
      table.appendChild(tablerow);
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

function deleteFunction(tablerow) {
  let row = tablerow.parentNode.rowIndex;
  table.deleteRow(row);
}

function editFunction(tablecol) {
  let tableData = document.querySelector("td");
  let name = document.querySelector(".name");
  console.log(tableData);
  let i = 0;
  for (i = 0; i < tableData.length; i++) {
    console.log(tableData);
  }
}
