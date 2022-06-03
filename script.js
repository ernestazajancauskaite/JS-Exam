/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

console.log(audi)

function showObjectKeys(make, model, year, color){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}
let showObjectKeysArray=[audi] ;

//console.log(showObjectKeysArray)