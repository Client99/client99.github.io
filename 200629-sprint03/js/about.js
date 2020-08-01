/*
<tr class="table-success">
    <td>1</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn btn-info"><i class="fas fa-sync-alt"></i></button>
            <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
    </td>
</tr>
*/
// Create users array
let users = [
    { surname: "Berger", firstname: "Whitney", age: "22" },
    { surname: "Nagy", firstname: "Árpád", age: "19" },
    { surname: "Kiss", firstname: "Bence", age: "32" },
    { surname: "Papp", firstname: "Csaba", age: "42" },
    { surname: "Doe", firstname: "John", age: "52" },
    { surname: "Rostás", firstname: "Anita", age: "54" },
    { surname: "Piros", firstname: "Gizella", age: "12" }
];
/*
let tableBody = document.querySelector("#userTable tbody");
for (let k in users) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = parseInt(k) + 1;
    tr.appendChild(td);
    tableBody.appendChild(tr);
    // tableBody.appendChild(tr).appendChild(td);
}
*/
/*
// cellák létrehozása és hozzáadása kiszervezve a createTD függvénybe:
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    tableBody.appendChild(tr);
}
*/

/*
// belső ciklus létrehozása az összes oszlop hozzáadására:
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr)
    }
    tableBody.appendChild(tr);
}
*/

// Create createTD function
let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

// Create button group:
/*
td>
    <div class="btn-group">
      	<button class="btn btn-info"><i class="fas fa-sync-alt"></i></button>
        <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
</td>
*/
let createButtonGroup = parent => {
        let group = document.createElement("div");
        group.className = "btn-group";

        let btnInfo = document.createElement("button");
        btnInfo.className = "btn btn-info";
        btnInfo.innerHTML = '<i class="fas fa-sync-alt">';

        let btnDanger = document.createElement("button");
        btnDanger.className = "btn btn-danger";
        btnDanger.innerHTML = '<i class="fas fa-trash-alt">';

        group.appendChild(btnInfo);
        group.appendChild(btnDanger);

        let td = document.createElement("td");
        // td.innerHTML = html;
        td.appendChild(group);
        parent.appendChild(td);
    }
    // Create table with for in and for of loops
    // goes through each object in the users array:
    // it is an ARRAY, so the keys are serial numbers:
    // users[0] → {surname: "Berger", firstname: "Whitney", age: "22"}
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    // goes through each VALUE OF the elements of the selected object:
    // Object.values(users[0])[0] → "Berger"
    // for (let value of Object.values(users[k])) {
    //     createTD(value, tr)
    // }
    // alternatively you can use for IN loop as well:
    // goes through each KEY in the selected element:
    // users[k][key] on the first run → "Berger" (key → "surname")
    for (let key in users[k]) {
        createTD(users[k][key], tr);
        // console.log(key, users[k][key])
    }

    createButtonGroup(tr);
    tableBody.appendChild(tr);
}

// Create table using ordinary for and for of loops
let users1 = [{
    "_id": "5cdad500da7a3648b7f5a3f3",
    "name": "Berger Whitney",
    "company": "ENAUT",
    "email": "berger.whitney@enaut.name"
}, {
    "_id": "5cdad50017e5fdde3c44bc5b",
    "name": "Laverne Dale",
    "company": "PYRAMIS",
    "email": "laverne.dale@pyramis.io"
}];

let table = document.querySelector("#demoTable");
// goes through each object of the users array:
// users1[0] → {_id: "5cdad500da7a3648b7f5a3f3", name: "Berger Whitney", company: "ENAUT", email: "berger.whitney@enaut.name"}
for (let i = 0; i < users1.length; i++) {
    let tr = document.createElement("tr");
    // goes through each VALUE OF the elements in the selected object:
    // Object.values(users1[0])[0] → "5cdad500da7a3648b7f5a3f3"
    for (let data of Object.values(users1[i])) {
        let td = document.createElement("td");
        td.innerHTML = data;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}