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


// function Homework1(a, b) {
//     if (a === b) {
//         return "ტოლია"
//     } else {
//         return "არ არის ტოლი"
//     }
// }

// console.log(Homework1(4, 4)) // ტოლია
// console.log(Homework1(3, 4)) // არ არის ტოლი

// //მეორე ვარიანტი
// function EqualsOrNot(a , b) {
//     if(typeof(a) != typeof(b)) {
//         return 'შეიყვანეთ ერთნაირი ტიპის პარამეტრo';
//     } else {
//         if(a == b) {
//             return 'ტოლია'
//         } else {
//             return 'არ არის ტოლი';
//         }
//     }
// }


//დავალება 2
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ტემპერატურას ფარენჰეიტებში
// და დააბრუნებს ტემპერატურას ცელსიუსში. თუ პარამეტრი არ არის რიცხვითი 
// მონაცემი დააბრუნეთ false.

// function toCelsius(fahrenheit) {
//     let fTemp = fahrenheit;
//     let ftoCel = 5 / 9 * (fTemp - 32);
//     let message =fTemp + "is" + ftoCel;
    
    
//     if (typeof(fahrenheit) === "string") {
//         return "False"
//       } else {
//         return message
//       }
//   }

// console.log(toCelsius("ilia")) // false
// console.log(toCelsius(10)) // -12.2

// //მეორე ვარიანტი
// function temperature (fahr) {
//     if (typeof fahr == "number") {
//         return (fahr - 32) / 1.8
//     } else {
//         return "false"
//     }
// }

// //მესამე ვარიანტი
// function ConvertToCelsius(f) {
//     if(typeof(f) != Number) {
//         return false;
//     }
//     return f*5/(9*32);
// }


//დავალება 3
// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს a (პირველი რიცხვი), 
// b(მეორე რიცხვი) და operation(+,-,*,/) და დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე operation ცვლადში განსაზღვრული ოპერაციით.
// თუ a და b არიან რიცხვები ან თუ operation ცვლადში არის უცნობი ოპერაია
// დააბრუნეთ false.
// function homework3 (a, b, operation) {
//     if (operation === "*") return a * b;
//     if (operation === "-") return a - b;
//     if (operation === "+") return a + b;
//     if (operation === "/") return b === 0 ? "can not divide" : a / b;
//     if (operation !== "/" && operation !== "*" && operation !== "-" && operation !== "+")
//     return "Please enter correct number"
// }

// console.log(homework3(2, 5, "*")) // 10
// console.log(homework3(10, 5, "/")) // 2
// console.log(homework3(2, 5, "+")) // 7
// console.log(homework3(2, 5, "-")) // -3
// console.log(homework3(2, 5, "&")) //Please enter correct number

// //მეორე ვარიანტი
// function myFunction (a, b, operation) {
//     if (operation == "+") {
//         return a + b
//     } else if (operation == "-") {
//         return a - b
//     } else if (operation == "*") {
//         return a * b
//     } else if (operation == "/") {
//         return a / b
//     } else {
//         return "false"
//     }
// }

//მესამე ვარიანტი

// function ReturnNew(a,b,operation) {
//     if(typeof(a) != Number || typeof(b) != Number || operation != '+' || operation != '-' || operation != '/' || operation != '*') {
//         return false;
//     }
//     if(operation == '+') {
//         return a+b;
//     } 
//     if(operation == '-') {
//         return a-b;
//     } 
//     if(operation == '/') {
//         return a/b;
//     } 
//     if (operation == '*') {
//         return a*b;
//     }
// }



//ობიექტები

//ობიექტი არის თვისებების კოლექცია, ხოლო თვისება არის ასოციაცია სახელს(ან გასაღებს) და მნიშვნელობას შორის.
//თვისების მნიშვნელობა შეიძლება იყოს ფუნქცია, ამ შემთხვევაში თვისება ცნობილია როგორც მეთოდი
//მაგ:
// const user = {
//     name : "James",
//     lastname : "Bond",
//     username : "007",
//     sayHello : function () {
//         return "hello";
//     }
// }

// console.log(
//     user.name,
//     user.lastname,
//     user.username,
//     user.sayHello()
// );


//primitive vs non-primitive data types
//პრიმიტიული ტიპის მნიშვნელობები ინახება ცვლადებში
//არაპრიმიტიული ტიპის მნიშვნელობების მისამართები ინახება ცვლადში
//მაგ:
// const age = 30; //variable "age" holds value 30

// //variable "user" holds the reference to the object
// const user = {
//     name : "James",
//     lastname : "Bond",
//     username : "007",
// }

//პრიმიტიული ტიპი
// userAge ცვლადში ვინახავთ age ცვლადის მნიშვნელობას
// იმის გამო, რომ number არის პრიმიტიული ტიპი, userAge და age ცვლადები არიან ერთმანეთისგან დამოუკიდებლები და ერთის ცვლილება
//მეორეზე გავლენას ვერ მოახდენს.
//მაგ:
// const age = 30;
// let userAge = age;
// userAge = 40;
// console.log(age); //30

//არაპრიმიტიული ტიპი 
//user ცვლადში ვინახავთ "user" ობიექტის მისამართს.
// newUser ცვლადში ვაკოპირებთ user ცვლადს, რომელიც არის ობიექტის მისამართი.
//newUser და user ცვლადები ორივე მიუთითებს ერთი და იგივე მისამართზე
//მაგ:
// const user = {
//     name : "James",
//     lastName : "Bond",
//     username : "007",
// }
// const newUser = user;
// newUser.username = "Agent 007";
// console.log(user.username); //Agent 007


// //რა გვექნება company ადგილზე
// let company = {
//     name : "skillwill"
// };
// function changeCompany(company) {
//     company.name = "Sweeft";
// }
// changeCompany(company)
// console.log(company.name);


//მასივები
//მასივი საშუალებას გვაძლევს შევინახოთ მონაცემების ერთობლიობა ერთ ცვლადში და მას აქვს შემდეგი თვისებები:
// 1)მასივების ზომის ცვლილება შესაძლებელია
// 2)მნიშვნელობებზე წვდომა შესაძლებელია ინდექსით (დადებითი მთელი რიცხვები)
// 3)ინდექსაცია იწყება 0-დან
// 4)მასივი ჯავასკრიპტში წარმოდგენილია ობიექტის სახით. შესაბამისად არის არაპრიმიტიული ტიპი
//მაგ:
// const numbers = [1, 2, 3, 4, 5];
// console.log(
//     numbers[0],
//     numbers[1],
//     numbers[2],
//     numbers[3],
//     numbers[4]
// );

//მასივი შეიძლება შეიცავდეს ნებისმიერი რაოდენობის სხვადასხვა ტიპის მონაცემებს
//მაგ:
// const arr = [
//     1,
//     "skillwill",
//     {company: "sweeft"},
//     true,
//     [1, 2, "Test"],
//     null
// ]

// const arr = [1, "skillwill", {name : "James Bond"}];
// const newArr = arr; //ვაკოპირებთ მოცემულ მისამართს ახალ კონსტანტაში
// newArr[1] = "sweeft";
// console.log(arr); //ამ დროს იცვლება სქილვილი სვიფტიტ და ეგ გამოვა

//for loop (ციკლი)
//მასივზე იტერაცია შესაძლებელია for ციკლის გამოყენებით, რომელიც საშუალებას გვაძლევს შევასრულოთ Array.length იტერაცია და ყოველ
//იტერაციაზე მივწვდეთ i-ურ ელემენტს.
// const arr = ["skillwill", "sweeft", 30, null]

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// Skillwill
// Sweeft
// 30
// null

//for... of lop (ციკლი)
//მასივზე იტერაცია შესაძლებელია for...of ციკლის გამოყენებით, რომელიც ყოველ იტერაციაზე გვაძლევს i-ურ ელემენტს
// const arr = ["skillwill", "Sweeft", 30, null]

// for (const item of arr) {
//     console.log(item);
// }
//Skillwill
//Sweeft
//30
//null

//for...in loop (ციკლი)
//ობიექტის ველებზე იტერაცია შესაძლებელია for...in ციკლის გამოყენებით, რომელიც ყოველ იტერაციაზე გვაძლევს თვისების(ველის) სახელს
const user2 = {
    name: "James",
    age: 30,
    title: "MR",
}

for(const field in user2) {
    console.log(`${field}: ${user2[field]}`);//ეს ჩანაწერი იგივეა რაც 
    //აი ეს ჩანაწერი:
    console.log(field + ":" + user2[field]);
}
//name : James
//lastName : Bond
//username : 007


//while loop (ციკლი)
//while ციკლის გამოყენება შესაძლებელია for ციკლის ალტერნატივად, თუმცა მიზანშეწოლია მისი გამოყენება თუ წინასწარ არ ვიცით თუ
// რამდენი იტერაცია დაგვჭირდება სასურველი შედეგის მისაღწევად.
function getRandomNumber() {
    //return random number between 0 and 10
    return parseInt(Math.random() * 10);
}
let randomNumber = getRandomNumber();
while(randomNumber !== 7) {
    randomNumber = getRandomNumber();
    console.log(randomNumber);
}

//Array functions : forEach(), map(), filter(), find().
//მაგ:
const numbers = [1, 2, 5, 4, 3];

numbers.forEach(function(item, index) {
    console.log(`${index} - ${item}`);
})

console.log(numbers.map(function(item, index){
    return "#" + item;
})) 

console.log(numbers.filter(function(item, index) {
    return item < 3;
}))

console.log(numbers.find(function(item, index) {
    return item > 3;
}))


// მოცემულია მასივი [{name: "Temo", age:25}, {name: "Lasha", age:21}, {name:"Ana", age:28}]. დაწერე ფუნქცია, რომელიც პარამეტრად 
// მიიღებს user-ების მასივს და დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს.
const array = [
    {
      name: "Temo",
      age: 25,
    },
    {
      name: "Lasha",
      age: 21,
    },
    {
      name: "Ana",
      age: 28,
    },
  ];
  
  const FirstFunc = (param)=>{
   const newName = param.reduce((acc, curr)=>curr.age < acc.age ? curr.name :acc)
   console.log(newName)
  }
  FirstFunc(array) 

//დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ(განსვავებულ) ობიექტს.
const info = {
    name:'Dima',
    lastName:'Tchilaia',
    age:25,
    about:'React Developer'
  }
  const secondInfo = {
    ...info
  }
  console.log(secondInfo)

//დაწერე პროგრამა, სადაც ორი a და b მომხმარებლები აგორებენ კამათელს მანამ, სანამ არ გაგორდება 3. რომელიც უფრო ნაკლებ ცდაში 
//გააგორებს სამიანს ის არის გამარჯვებული.
const ThirdFunction = () => {
    while (true) {
      const FirstPlayerNumb = Math.trunc(Math.random() * 6) + 1;
      const SecondPlayerNumb = Math.trunc(Math.random() * 6) + 1;
      console.log(
        "First Player Number is" + ` ${FirstPlayerNumb}`,
        "And Second Player Number is" + ` ${ SecondPlayerNumb}`
      );
      if (FirstPlayerNumb === 3) {
        console.log("A is Winner!");
        console.log(FirstPlayerNumb);
      } else if (SecondPlayerNumb === 3) {
        console.log("B is winner!");
        console.log(SecondPlayerNumb);
      } else {
        console.log("Draw!");
      }
      break;
    }
  };