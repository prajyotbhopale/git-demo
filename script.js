//  let marks = 93;
//  if(marks>60){
//     console.log("B grade")
//  }
// else if(marks>80){
//     console.log("A grade")
// }

// else if(marks>90){
//     console.log("A+ grade")
// }

// else {
//     console.log("you are fail")
// }

// let age = 39;

// let result = age > 18 ? "adult": "not adult";

// console.log(result);

// let subject = 80;

// let result = subject > 9 ? "yes": "no";
// console.log(result);

// let num =prompt("Enter a number");

// console.log(num);

// if(num % 5 === 0){
//     console.log("the number is divisible by 5");

// }else{

//     console.log("number is not divisible by 5");
// }

// let str = "BBBBBB";

// str = str.toLowerCase();//javascript are immutable means it does not change

// console.log(str);

// let s= prompt("Enter your full name");

// let username = "@" + s + s.length;
// console.log(username);

// const tagline = "MDN - Resources for developers, by developers";
// console.log(tagline.indexOf("MDN")); // 20

// let heros = ["batman","spiderman","hanuman","doremon","shaktiman"]

// // for(let i=0; i<heros.length; i++){

// // console.log(heros[i]);
// // }

// // for(let hero in heros){
// //     console.log(hero);
// // }

// let marks = [85,97,44,37,76,60]
// let sum=0;
// // for(let i=0; i<marks.length; i++){
// //     sum+=marks[i];
// // }

// // let average = sum/marks.length;

// // console.log(average);

// for(let val of marks){
//     sum = sum +val;
// }

// let average=sum/marks.length;
// console.log(average)

// let prices = [250, 645, 300, 900, 50];

// for(let val of prices){
//     // console.log(val)
//     let offer = val/10;
//     val = val - offer;
//     console.log(val)
// }

// let items = [250,645,300,900,50];

// for (let i=0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
// }

// console.log(items)

// const arrowMul = (a,b)=>{
//     return a*b
// }

//     arrowMul();

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;

//         }
        
//     }

//     console.log(count);
// }

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        // Updated condition here
        if ("aeiou".includes(char.toLowerCase())) {
            count++;
        }
    }
    console.log(count);
}
