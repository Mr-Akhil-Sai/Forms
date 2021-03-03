let submitButton = document.querySelector("#submit");
let tabelDiv = document.querySelector("#tabelDiv");
let table = document.querySelector("table");
let name = document.querySelector(".name");
let phone = document.querySelector(".phone");
let mail = document.querySelector(".mail");

submitButton.addEventListener("click", () => {
  table.style.display = "block";

  if (name.value != "" && phone.value != "" && mail.value != "") {
    let email = mail.value;
    if ((typeof phone.value == Number, email.includes("@"))) {
      let tablerow = document.createElement("tr");
      tablerow.innerHTML =  `
			<td id = "col1">${name.value}</td>
			<td id = "col2">${phone.value}</td>
			<td id = "col3">${mail.value}</td>
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
	if (row <= 1){
		console.log("hi");
		console.log(row);
	}
}

function editFunction(tablecol) {
	let row = tablecol.parentNode;
	let values = row.innerText;
	let value = values.split("\t");
	name.value = value[0];
	phone.value = value[1];
	mail.value = value[2];
	submitButton.style.display = "none";
	let addButton = document.querySelector("#add");
	addButton.style.display = "block";
	addButton.style.margin = "1em 6em";
	addButton.addEventListener("click", ()=>{
		let col1 = document.querySelector("#col1");
		let col2 = document.querySelector("#col2");
		let col3 = document.querySelector("#col3");

		col1.innerText = name.value;
		col2.innerText = phone.value;
		col3.innerText = mail.value;
	});
}

