/*
-	összegzés algoritmusa:
összeg = 0
CIKLUS AMÍG van még szám, ADDIG
	szám = következő elem
	összeg = összeg + szám
CIKLUS VÉGE
*/
var numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
var amount = 0;
for (var i = 0; i < numericArray.length; i++) {
    amount += numericArray[i];
}
console.log("Összegzési algoritmus eredménye: " + i + " db elem, összesen " + amount);


/*
-	számlálás algoritmusa feltétel alapján: hány darab szám van, ami nagyobb mint 3?
db = 0
CIKLUS AMÍG van még szám, ADDIG
szám = következő elem
HA igaz a feltétel a számra, AKKOR
db = db+1
FELTÉTEL VÉGE
CIKLUS VÉGE
*/
var numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
var count = 0;
for (var i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > 3) {
        count++;
    }
}
console.log("3-nál nagyobb elemek darabszáma: " + count);


/*
-	szélsőérték keresés algoritmusa
legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
	szám = következő szám
	HA szám > legnagyobb, AKKOR
		legnagyobb = szám
	FELTÉTEL VÉGE
CIKLUS VÉGE
*/
numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("Legnagyobb érték: " + biggest);


/*
-	eldöntés tétele 1 / algoritmusa (leáll a futtatás, ha a számok között van hatos)
találat = HAMIS
CIKLUS AMÍG van elem ÉS találat = HAMIS
	szám = következő elem
	HA igaz a feltétel a számra, AKKOR
		találat = IGAZ
	FELTÉTEL VÉGE
CIKLUS VÉGE
*/
numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
let find = 6;
let found = false;
for (let i = 0; i < numericArray.length && !found; i++) {
    if (numericArray[i] == find) {
        found = true;
        console.log("Döntés 1: Megtaláltuk a hatost, ez a " + (i + 1) * 1 + ". szám");
    }
}



/*
-	eldöntés tétele 2 / algoritmusa (leáll a futtatás, ha egy elem nem felel meg a feltételnek)
találat = HAMIS
CIKLUS AMÍG van elem ÉS találat = HAMIS
	szám = következő elem
	HA igaz a feltétel a számra, AKKOR
		találat = IGAZ
	FELTÉTEL VÉGE
CIKLUS VÉGE
*/
numericArray = [1, 3, -2, 6, 5, 3, -4, 6, 7];
let all = true;
for (let i = 0; i < numericArray.length && all; i++) {
    if (numericArray[i] < 0) {
        all = false;
        console.log("Döntés 2: A " + (i + 1) * 1 + ". elem (" + numericArray[i] + ") már kisebb, mint nulla");
    }
}

// formatNumber
function formatNumber(num) {
    return '$' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//   console.info(formatNumber(2665)) // 2,665
//   console.info(formatNumber(102665)) // 102,665
//   console.info(formatNumber(111102665)) // 111,102,665