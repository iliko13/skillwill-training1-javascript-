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


//ფუნქციები
// 1) ფუნქცია აბრუნებს მნიშვნელობას
// 2) ფუნქცია არ აბრუნებს მნიშვნელობას
// 3) ფუნქცია ხან აბრუნებს მნიშვნელობას ხან არა
//მაგალითები:
function calculateSum1(a , b) {
    return a + b;
}

function calculateSum2(a , b) {
    console.log(a + b);
}

function calculateSum3(a ,b) {
    if (a !== b){
        return a + b
    }
}

console.log(calculateSum1(4, 5)); //9
calculateSum2(4, 5) //9
console.log(calculateSum3(4, 5))//9
console.log(calculateSum3(5, 5)) // undefined


//ფუნქცია 1
function calculateSum1(a, b){
    return(a + b);
} //ეს ფუნქცია არის ფუნქცია, რომელსაც დავარქვით სახელად aclculateSum1

//ფუნქცია 2
const calculateSum2 = function(a, b) {
    return a + b;
}// ეს არის ანონიმური ფუნქცია, რომელიც შენახული გვაქვს ცვლადში სახელად calculateSum2

console.log(calculateSum1(4, 5)); //9
console.log(calculateSum2(4, 5)); //9

//განსხვავებები:
//calculateSum1 გამოძახება შეგვიძია ინიციალიზაციამდე
//calculateSum2 გამოძახება შეგვიძლია მხოლოდ მისი ინიციალიზაციის შემდეგ

console.log(calculateSum1(4, 5)); //9
console.log(calculateSum2(4, 5)); // გამოიწვევს შეცდომას

function calculateSum1(a, b) {
    return a + b;
}

function calculateSum2(a, b) {
    return a + b;
}

//მაგალითები:
let company = "skillwill";

function changeCompany() {
    company = "sweeft";
}

changeCompany();
console.log(company); // sweeft
