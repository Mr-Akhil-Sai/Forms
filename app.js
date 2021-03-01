let submitButton = document.querySelector("#submit");
let tabelDiv = document.querySelector("#tabelDiv");

function submit(){
	let tabel = document.createElement("tabel")
	tabel.innerText = `<tr>
				<th>Name</th>
				<th>Phone-Number</th>
				<th>Percentage</th>`
	tabelDiv.appendChild(tabel);
}

