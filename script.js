/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



// Konstruktoriaus funkcija "Calculator"
function Calculator() {
    return {
      sum: (a, b) => { 
          return a + b; 
        },
      subtraction: (a, b) => {
           return a - b; 
        },
      division: (a, b) => { 
          return a / b; 
        },
      multiplication: (a, b) => { 
          return a * b; 
        }
    };
  }
  
  // keturi objektai sukurti pasinaudojant ta pacia funkcija
  let calc1 = Calculator();
  let calc2 = Calculator();
  let calc3 = Calculator();
  let calc4 = Calculator();
  // bet tai nera tas pats objektas
  console.log(calc1 === calc2);
  
  
  console.log(calc1.sum(1, 1));
  console.log(calc3.division(1,1));
  console.log(calc2.subtraction(3, 3));
  console.log(calc4.multiplication(1,1));
  
  
  