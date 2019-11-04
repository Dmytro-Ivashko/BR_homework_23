// let age = prompt("Введiть свiй вік?");

// if (age < 12) {
//     console.log("Дитина");
// } else if (age <= 18) {
//     console.log("Підліток");
// } else if (age <= 60) {
//     console.log("Дорослий");
// } else {
//     console.log("Пенсіонер");
// }



// let key = prompt("Введіть число від 0 до 9");


// if (key == 1) {
//     console.log("!");
// } else if (key == 2) {
//     console.log("@");
// } else if (key == 3) {
//     console.log("#");
// } else if (key == 4) {
//     console.log("$");
// } else if (key == 5) {
//     console.log("%");
// } else {
//     console.log("аналогічно");
// }

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// let a = prompt("Введiть 3-x значне число");

// if (a[0] == a[1] || a[1] == a[2] || a[0] == a[2] ) {
//     console.log("yes");
// } else {
//     console.log("No");
// }

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let year =  prompt("Превірка на високрсність, введiть рік народження");

// function leapYear()
// {
//   return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
// }

// console.log(leapYear(year));


// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let number = prompt("Введіть 5-ти значне чисоло")
//     if (number.length == 5) {
//         if (number[0] == number[4] && number[1] == number[3]) {
//             console.log("Поліндром")
//         } else{
//             console.log("НЕ Поліндром")
//         }
//     } else {
//         console.log("Не вірно введене число")
//     }

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let cash =  prompt("Введіть суму");
let cashType = prompt("Введіть валюту на яку обмінюємо: EUR UAN AZN");
    cashType = cashType.toUpperCase();
const EUR = 1.13;
const UAN = 3.13;
const AZN = 5.13;

function convert(cash, currency) {
    yourCash = cash * currency;
    console.log(yourCash.toFixed(2) + " " + cashType);

} 

if (cashType == "EUR") {
    convert(cash, EUR);
} else if (cashType == "UAN") {
    convert(cash, UAN);
} else if(cashType == "AZN") {
    convert(cash, AZN);   
} else {
    console.log("Не вірно введена валюта");

}
