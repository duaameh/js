// const month = prompt(" enter your birth month as a number:");

// switch (month) {
//   case "1":
//     console.log("January");
//     break;
//   case "2":
//     console.log("February");
//     break;
//   case "3":
//     console.log("March");
//     break;
//   case "4":
//     console.log("April");
//     break;
//   case "5":
//     console.log("May");
//     break;
//   case "6":
//     console.log("June");
//     break;
//   case "7":
//     console.log("July");
//     break;
//   case "8":
//     console.log("August");
//     break;
//   case "9":
//     console.log("September");
//     break;
//   case "10":
//     console.log("October");
//     break;
//   case "11":
//     console.log("November");
//     break;
//   case "12":
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid input. Please enter a number between 1 and 12.");
// }
/* QUS2 */

// let currentNumber = 1;

// for (let i = 1; i <= 4; i++) {
    
//     for (let j = 1; j <= i; j++) {
//         console.log(currentNumber +" ");
//         currentNumber++;
//     }
//     console.log("\n")
// }
/*QUS3 */
for(let i=0 ;i<=100; i++)
{
    if (i %13 ===0){console.log(i);}
}
/* QUS 4 */
function multiply (num1,num2){console.log(num1*num2)}
multiply(3,4)


/* QUS 5 */
function triangleArea(base, height) {
    return 0.5 * base * height;
  }


  /* QUS6 */
  function isPandigital(num) {
    let numStr = num.toString();
    let allDigits = new Set('0123456789');
    let numDigits = new Set(numStr);
    for (let digit in allDigits) {
        if (!numDigits.has(digit)) {
            return false;
        }
    }
    
    return true;
}

console.log(isPandigital(1234567890));  
console.log(isPandigital(1023456789));  

/*qus 7 */
function getDrinkPrice() {
    
    let drink = prompt("what would to drink?");
    drink = drink.toLowerCase();
    let price;
    switch(drink) {
        case 'banana':
            price = 20;
            break;
        case 'apple':
            price = 15;
            break;
        case 'orange':
            price = 10;
            break;
        case 'mango':
            price = 25;
            break;
        case 'grape':
            price = 18;
            break;
        default:
            price = "unknown";
    }

    if (price !== "unknown") {
       console.log(`The price of a ${drink} drink is ${price} dollars`);
    } else {
        console.log("Sorry, we don't have the price for that drink.");
    }
}getDrinkPrice();
/*  QUS 8*/
function fullName(firstName, lastName) {
    console.log( firstName + " " + lastName);
}
fullName("duaa" ,"mehdawi");