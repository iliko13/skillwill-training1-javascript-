//მონაცემთა ტიპები//

//boolean -  კი/არა
//string - ტექსტური ინფორმაცია
//symbol - უნიკალური მნიშვნელობა
//number - რიცხვითი მონაცემი
//bignit - დიდი ზომის რიცხვითი მონაცემი
//null - არის მონაცემთა ტიპი, რომელსაც აქვს ერთადერთი მნიშვნელობა, რომელიც არის ასევე null
//undefined - არის მონაცემთა ტიპი, რომელსაც აქვს ერთადერთი მნიშვნელობა, რომელიც არის ასევე undefined

// ცვლადების შექმნა

// const - ქმნის კონსტანტას, რომლის შეცვლაც არ შეგვიძლია
// let - ქმნის ცვლადს, რომლის შეცვლაც შეგვიძლია


// == vs ===

// == - თუ სხვადასხვა ტიპის მონაცემებს ვადარებთ ჯავასკრიპტი ეცდება ისინი
//      ერთ ტიპში გადაიყვანოს და შემდეგ შეადარებს მნიშვნელობებს. შესაძლოა
//      სხვადასხვა ტიპის მონაცემები ტოლები აღმოჩდნენ.

// === - სხვადასხვა ტიპის მონაცემები ვერასდროს ვერ იქნებიან ტოლები.
//       დააბრუნებს "true"-ს მხოლოდ იმ შემთხვევაში თუ ტიპებიც და 
//       მნიშვნელობების ტოლია.
//მაგალითად:
// const ageNumber = 30;
// const ageString = "30";

// console.log(ageNumber == ageString); // true
// console.log(ageNumber === ageString);//false


// let company = "skillwill";
// company = "sweeft";

// console.log(company, typeof company);//string

// const myAge = -30.87;
// console.log(myAge, typeof myAge); //number

// // საინტერესო გადახვევა! 
// console.log(null == undefined); //true
// console.log(null === undefined); //false


// //ფუნქციები
// // 1) ფუნქცია აბრუნებს მნიშვნელობას
// // 2) ფუნქცია არ აბრუნებს მნიშვნელობას
// // 3) ფუნქცია ხან აბრუნებს მნიშვნელობას ხან არა
// //მაგალითები:
// function calculateSum1(a , b) {
//     return a + b;
// }

// function calculateSum2(a , b) {
//     console.log(a + b);
// }

// function calculateSum3(a ,b) {
//     if (a !== b){
//         return a + b
//     }
// }

// console.log(calculateSum1(4, 5)); //9
// calculateSum2(4, 5) //9
// console.log(calculateSum3(4, 5))//9
// console.log(calculateSum3(5, 5)) // undefined


// //ფუნქცია 1
// function calculateSum1(a, b){
//     return(a + b);
// } //ეს ფუნქცია არის ფუნქცია, რომელსაც დავარქვით სახელად aclculateSum1

// //ფუნქცია 2
// const calculateSum2 = function(a, b) {
//     return a + b;
// }// ეს არის ანონიმური ფუნქცია, რომელიც შენახული გვაქვს ცვლადში სახელად calculateSum2

// console.log(calculateSum1(4, 5)); //9
// console.log(calculateSum2(4, 5)); //9

// //განსხვავებები:
// //calculateSum1 გამოძახება შეგვიძია ინიციალიზაციამდე
// //calculateSum2 გამოძახება შეგვიძლია მხოლოდ მისი ინიციალიზაციის შემდეგ

// console.log(calculateSum1(4, 5)); //9
// console.log(calculateSum2(4, 5)); // გამოიწვევს შეცდომას

// function calculateSum1(a, b) {
//     return a + b;
// }

// function calculateSum2(a, b) {
//     return a + b;
// }

// //მაგალითები:
// let company = "skillwill";

// function changeCompany() {
//     company = "sweeft";
// }

// changeCompany();
// console.log(company); // sweeft



//დავალება 1
// დაწერეთ ფუნქცია, რომელიც მიიღებს a და b პარამეტრებს და დააბრუნებს ტექსტს
// "ტოლია" თუ a უდრის b-ს, ხოლო წინააღდეგ შემთხვევაში დააბრუნებს "არ არის ტოლი".
// გაითვალისწინეთ, რომ a და ბ ყოველთვის ერთი და იგივე ტიპის არ არის.


function Homework1(a, b) {
    if (a === b) {
        return "ტოლია"
    } else {
        return "არ არის ტოლი"
    }
}

console.log(Homework1(4, 4)) // ტოლია
console.log(Homework1(3, 4)) // არ არის ტოლი

//დავალება 2
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას ფარენჰეიტებში
// და დააბრუნებს ტემპერატურას ცელსიუსში. თუ პარამეტრი არ არის რიცხვითი 
// მონაცემი დააბრუნეთ false.

function toCelsius(fahrenheit) {
    let fTemp = fahrenheit;
    let ftoCel = 5 / 9 * (fTemp - 32);
    let message =fTemp + "is" + ftoCel;
    
    
    if (typeof(fahrenheit) === "string") {
        return "False"
      } else {
        return message
      }
  }

console.log(toCelsius("ilia")) // false
console.log(toCelsius(10)) // -12.2

//მეორე ვარიანტი
function temperature (fahr) {
    if (typeof fahr == "number") {
        return (fahr - 32) / 1.8
    } else {
        return "false"
    }
}


//დავალება 3
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს a (პირველი რიცხვი), 
// b(მეორე რიცხვი) და operation(+,-,*,/) და დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე operation ცვლადში განსაზღვრული ოპერაციით.
// თუ a და b არიან რიცხვები ან თუ operation ცვლადში არის უცნობი ოპერაია
// დააბრუნეთ false.
function homework3 (a, b, operation) {
    if (operation === "*") return a * b;
    if (operation === "-") return a - b;
    if (operation === "+") return a + b;
    if (operation === "/") return b === 0 ? "can not divide" : a / b;
    if (operation !== "/" && operation !== "*" && operation !== "-" && operation !== "+")
    return "Please enter correct number"
}

console.log(homework3(2, 5, "*")) // 10
console.log(homework3(10, 5, "/")) // 2
console.log(homework3(2, 5, "+")) // 7
console.log(homework3(2, 5, "-")) // -3
console.log(homework3(2, 5, "&")) //Please enter correct number

//მეორე ვარიანტი
function myFunction (a, b, operation) {
    if (operation == "+") {
        return a + b
    } else if (operation == "-") {
        return a - b
    } else if (operation == "*") {
        return a * b
    } else if (operation == "/") {
        return a / b
    } else {
        return "false"
    }
}