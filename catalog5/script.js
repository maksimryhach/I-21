"use strict";
//zavdannya 1
console.log("JavaScript успішно підключено!");

//zavdannya 2
const studentName = "Олександр";
let studentAge = 17;
const averageGrade = 91.5;
let isStudent = true;

let notDefined;
let emptyValue = null;
const largeNumber = 90071n;
const uniqueId = Symbol("id");

console.log(studentName, typeof studentName);
console.log(studentAge, typeof studentAge);
console.log(averageGrade, typeof averageGrade);
console.log(isStudent, typeof isStudent);

console.log(notDefined, typeof notDefined);
console.log(emptyValue, typeof emptyValue);
console.log(largeNumber, typeof largeNumber);
console.log(uniqueId, typeof uniqueId);

//zavdannya 3

const val1 = "125";
const res1 = Number(val1);
console.log(val1, typeof val1,  res1, typeof res1);

const val2 = "15.75";
const res2 = Number(val2);
console.log(val2, typeof val2,  res2, typeof res2);

const val3 = 250;
const res3 = String(val3);
console.log(val3, typeof val3,  res3, typeof res3);

const val4 = true;
const res4 = String(val4);
console.log(val4, typeof val4,  res4, typeof res4);

const val5 = "false";
const res5 = Boolean(val5);
console.log(val5, typeof val5,  res5, typeof res5);

const val6 = 0;
const res6 = Boolean(val6);
console.log(val6, typeof val6,  res6, typeof res6);

const val7 = 1;
const res7 = Boolean(val7);
console.log(val7, typeof val7,  res7, typeof res7);

const val8 = null;
const res8 = Number(val8);
console.log(val8, typeof val8,  res8, typeof res8);

const val9 = "45px";
const res9 = parseInt(val9);
console.log(val9, typeof val9,  res9, typeof res9);

const val10 = "12.5kg";
const res10 = parseFloat(val10);
console.log(val10, typeof val10,  res10, typeof res10);

//zavdannya 4
const strNum1 = "25";
const strNum2 = "5";

const num1 = Number(strNum1);
const num2 = Number(strNum2);

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;

console.log("Сума:", sum);
console.log("Різниця:", difference);
console.log("Добуток:", product);

const concatResult = strNum1 + strNum2;
console.log("Результат '25' + '5' без перетворення:", concatResult);

//zavdannya 5
console.log('1. Number("hello") =', Number("hello")); // NaN
console.log('2. Number("") =', Number(""));     // 0 
console.log('3. Boolean("0") =', Boolean("0"));     // true 
console.log('4. Boolean("") =', Boolean(""));       // false
console.log('5. String(null) =', String(null));     // "null" 
console.log('6. "10" + 5 =', "10" + 5);             // "105"
console.log('7. "10" - 5 =', "10" - 5);             // 5
console.log('8. typeof null =', typeof null);       // "object"