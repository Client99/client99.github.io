// alert("Hello Javascript!");
// console.log("Hello, this is a console message");
// calcAmount 
function calcAmount() {
    // price definiálása:
    let price = 1000;
    // amountInput definiálása az input mezőre hivatkozva:
    let amountInput = document.querySelector("input[name='amount-input']");

    // definiáljuk az input értékét:
    let amountNumber = parseInt(amountInput.value);

    // ha üres vagy nem szám az input, akkor 0-ra tesszük az értéket:
    if (isNaN(amountNumber) == true) {
        amountNumber = 0;
    };
    // ugyanez 3 operandusos if formájában:
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    // hibaüzenetet és összeget kiíró segédfüggvény meghívása:
    showSumPrice(amountNumber, price);
}

function showSumPrice(amountNumber = 1, price = 1000) {
    // hibaüzenet, ha nem megfelelő az input:
    if (amountNumber > 10) {
        alert("Maximum 10 hamburger rendelhető");
    } else if (amountNumber < 1) {
        alert("Minimum 1 hamburger rendelhető");
    } else {
        // amount kiszámítása az input mező értéke és a price szorzataként:
        let amount = amountNumber * price;
        // showAmount definiálása az input mezőre hivatkozva:
        let showAmount = document.querySelector("span.show-amount");
        // a <span> elem tartalmát – ami az innerHTML – az összegként definiáljuk:
        showAmount.innerHTML = amount;
        // alert("Fizetendő: " + amount + "Ft");
    }
}

// Remove/add element
let elToRemove = document.querySelector("div.form-group:nth-child(2)").querySelector("small");
let parent = elToRemove.parentElement;
// parent.removeChild(elToRemove);
let elSmall = document.createElement("small");
elSmall.className = "form-text text-muted";
elSmall.innerHTML = "Minimum 1, maximum 10 hamburger rendelhető! (by JS)";
parent.appendChild(elSmall);


// add helpText
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";
// console.log(helpText);
parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);
// parent.removeChild(helpText);

// Egér és űrlap események - input és select tartalmának elérése
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    console.log("this = orderForm: ", this);

    let values = {};
    let selects = this.querySelectorAll("select");
    for (let i = 0; i < selects.length; i++) {
        values[selects[i].name] = selects[i].selectedOptions[0].text;
        // console.log(i, selects[i].name, selects[i].selectedOptions[0].text);
    }
    let inputs = this.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
        // console.log(i, inputs[i].name, inputs[i].value);
    }
    console.log("Kigyűjtött form-adatok: ", values);
});

// Change event listening
function fillPre(content) {
    document.querySelector('.btn-primary').innerHTML = content;
}
var inputList = document.querySelectorAll('input');
for (var i = 0; i < inputList.length; i++) {
    if (inputList[i].addEventListener) {
        inputList[i].addEventListener('change', function(event) {
            fillPre(this.id + ': ' + this.value);
        });
    }
}
var selectList = document.querySelectorAll('select');
for (var i = 0; i < selectList.length; i++) {
    if (selectList[i].addEventListener) {
        selectList[i].addEventListener('change', function(event) {
            fillPre(this.id + ': ' + this.selectedOptions[0].text);
        });
    }
}


// Parent element kezelése
let alertCloseEventHandlerFunction = function(ev) {
    console.log("This is the content of the event clicked: ", ev);
    this.parentElement.style.display = "none";
};
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction)
};

// Select elem kitöltése
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#top-input");
// let index = 0;
// while (index < toppings.length) {
//     let option = document.createElement("option");
//     option.value = index;
//     option.innerHTML = toppings[index];
//     toppingSelect.appendChild(option);
//     index++;
// }
// ugyanez a feltöltés for ciklussal
for (let index = 0; index < toppings.length; index++) {
    let newOptionEl = document.createElement("option");
    newOptionEl.value = index;
    newOptionEl.innerHTML = toppings[index];
    toppingSelect.appendChild(newOptionEl);
}
// Select elem options tartalmainak az elérése:
let values = {};
let select = document.querySelector("#top-input");

for (let i = 0; i < select.options.length; i++) {
    // values[select.options[i].text] = select.options[i].value;
    values[select.options[i].text] = select.options[i].value;
}

console.log("Kigyűjtött select-options adatok: ", values);