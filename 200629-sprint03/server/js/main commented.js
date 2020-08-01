// Key of users: defines the names and their order for the (empty) table
let keys = ["id", "name", "email"];

//GET data from the server using fetch
let url = "http://localhost:3000/users";

function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cash: "n-cache",
    };
    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}

// aux function to call fillDataTable (by adding then/Promise to getServerData)
function startGetUsers() {
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
}
// addEventListener to the button, to call fillDataTable
document.querySelector("#getDataBtn").addEventListener("click", startGetUsers);

// Create and fill table with server data
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`Table "${tableID}" is not found.`);
        return;
    }
    let tBody = table.querySelector("tbody");
    tBody.innerHTML = ""; // first clear table content to prevent duplicate rows

    // Add new user row to the table
    let newRow = newUserRow();
    tBody.appendChild(newRow);

    for (let row of data) { // goes through each row (user object) of the data array (row contains the elements of the selected object)
        let tr = createAnyElement("tr");
        for (let k of keys) { // goes through each name (key) of the selected object (keys contains the names of the elements of the selected object)
            let td = createAnyElement("td");
            let input = createAnyElement("input", {
                class: "form-control",
                value: row[k], // value of the current element (defined by its name k)
                name: k // name (key) of the current element 
            });
            if (k == "id") { // id cannot be overwritten
                input.setAttribute("readonly", true);
            }
            td.appendChild(input);
            tr.appendChild(td);
        }
        let btnGroup = createBtnGroup();
        tr.appendChild(btnGroup);
        tBody.appendChild(tr);
    }
}

function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}

function createBtnGroup() {
    let td = createAnyElement("td");
    let group = createAnyElement("div", { class: "btn btn-group" });
    let infoBtn = createAnyElement("button", { class: "btn btn-info", onclick: "setRow(this)" });
    infoBtn.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>';
    let delBtn = createAnyElement("button", { class: "btn btn-danger", onclick: "delRow(this)" });
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    group.appendChild(infoBtn);
    group.appendChild(delBtn);
    td.appendChild(group);
    return td;
}

function delRow(btn) {
    let tr = btn.parentElement.parentElement.parentElement; // find row through button's div, td and row parent
    let id = tr.querySelector("td:first-child").querySelector("input:first-child").value; // find id through row's td, input child
    let fetchOptions = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache"
    };
    fetch(`${url}/${id}`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => {
            startGetUsers();
        }
    )
}

// Create new table row to input new data
function newUserRow() {
    let tr = createAnyElement("tr");
    for (let k of keys) {
        let td = createAnyElement("td");
        let input = createAnyElement("input", {
            class: "form-control",
            name: k
        });
        if (k == "id") {
            input.setAttribute("readonly", true);
        }
        td.appendChild(input);
        tr.appendChild(td);
    }
    let newBtn = createAnyElement("button", {
        class: "btn btn-success",
        onclick: "createUser(this)"
    });
    newBtn.innerHTML = '<i class="fa fa-plus-circle" aria-hidden="true"></i>';
    let td = createAnyElement("td");
    td.appendChild(newBtn);
    tr.appendChild(td);
    return tr;
}
// ADD data to the database
function createUser(btn) {
    let tr = btn.parentElement.parentElement; // find row through button's td and row parent
    let data = getRowData(tr); // collets data from the table row
    delete data.id;
    let fetchOptions = {
        method: "POST", // POST is used to ADD new data to the database
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json' // content to be parsed by the server
        },
        body: JSON.stringify(data) // stringified data sent in the body section
    }
    fetch(url, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => startGetUsers()
    );
}
// collets data from the input cells of the table's selected row
function getRowData(tr) {
    let inputs = tr.querySelectorAll("input.form-control");
    let data = {};
    for (let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value; // selects name of input, and defines its value by the value of selected input
    }
    return data;
}

// Set data (REPLACE, OVERWRITE)
function setRow(btn) {
    let tr = btn.parentElement.parentElement.parentElement;
    let data = getRowData(tr);
    //console.log(data);

    // Send data to server
    let fetchOptions = {
        method: "PUT", // PUT is used to REPLACE/OVERWRITE database
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json' // content to be parsed by the server
        },
        body: JSON.stringify(data) // stringified data sent in the body section
    };
    fetch(`${url}/${data.id}`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => startGetUsers()
    );
}