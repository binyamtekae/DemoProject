console.log("hello world");

const btn = document.querySelector(".btn-open");
const form= document.querySelector(".fact-form");

btn.addEventListener('click', function(){
   if(form.classList.contains("hidden")){
    form.classList.remove("hidden");
    btn.textContent = "Close";
   }
   else{
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
   }
});



/*

// let votesInteresting = 23;
// let votesMindlowing = 5;
// const text = "lisbon is the capital of portugal"; 

// votesInteresting = votesInteresting + 1 ; 
// votesInteresting++;
// console.log(votesInteresting);
 
// let totalUpvotes = votesInteresting + votesMindlowing;

// console.log("Upvotes:", totalUpvotes);


// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);

// console.log(parseInt("24.533ccc"));
*/

/*
function calcFactAge(year){
   const currentYear = new Date().getFullYear();
   const age = currentYear - year ;

   if(age >= 0)
   
   return age;

   else 
   return `Impossibel year. Year needs to be less or equal ${currentYear}` ;
}


const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

//const calcFactAge2 = (year) => 2022 - year;

const calcFactAge2 = (year) => 
year <= new Date().getFullYear()
 ? new Date().getFullYear() - year :
 `Impossibel year. Year needs to be less or equal ${new Date().getFullYear()}`;

console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));
/*
let votesInteresting = 20;
let votesMindlowing = 5;

if(votesInteresting === votesMindlowing){
   alert("This fact is equally interesing and mindblowing");
} else if(votesInteresting > votesMindlowing){
   console.log("Intersteing fact!!");
}else if(votesInteresting < votesMindlowing){
   console.log("Mindblowing fact!!");
}

// falsy value: 0, '' , null, undefind
// truthy value: everything else.

if (votesMindlowing){
   console.log("Mindblowing");

}else {
   console.log("Not so specile");

}

let votesFalse = 20;
 const totalUpvotes = votesInteresting + 
 votesMindlowing;

 const message= totalUpvotes > votesFalse
  ? "The fact is true" :
   "Might be false, check more sources...";

 //alert(message); 

 const text = "Lisbon is the capital of portugal"; 
 const upperText = text.toUpperCase();
 console.log(upperText);
 
 // working with string.

 const str = `The current fact is "${text}". It is ${clacFactAge(2015)} years old. It is probably 
 ${totalUpvotes > votesFalse 
   ? "correct" : "not correct"}`;
 console.log(str);
*/

// Arrey 

const fact = ['lisbon is the capital of portugal',
2015, true];
console.log(fact);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(createdIn);

const newFact = [...fact, 'society'];
console.log(newFact);

//Object

const factObj = {
   text: 'Lisbon is the capital of portugal',
   catagory: 'society',
   createdIn: 2015,
   isCorrect: true,
   createSummary: function(){
      return`The fact "${this.text} is from 
      the catagory " ${this.catagory.toUpperCase()}`;
   }
};

console.log(factObj.text);
console.log(factObj["text"]);

const {catagory, isCorrect} = factObj;
console.log(catagory);
console.log(factObj.createSummary());

//Arrey , Loop, Map method, and foreach

// [2,4,6,8].forEach(function(el){
//    console.log(el);

// });

// const time10= [2,6,4,8].map(function(el){
//    return el * 10;
// })

const time10 = [2,4,6,8].map((el) => el * 10);
console.log(time10);

//arrey of object

const CATEGORIES = [
   { name: "technology", color: "#3b82f6" },
   { name: "science", color: "#16a34a" },
   { name: "finance", color: "#ef4444" },
   { name: "society", color: "#eab308" },
   { name: "entertainment", color: "#db2777" },
   { name: "health", color: "#14b8a6" },
   { name: "history", color: "#f97316" },
   { name: "news", color: "#8b5cf6" },
 ];

 const allCatagories = CATEGORIES.map((el) => el.name);
 console.log(allCatagories);


 const initialFacts = [
   {
     id: 1,
     text: "React is being developed by Meta (formerly facebook)",
     source: "https://opensource.fb.com/",
     category: "technology",
     votesInteresting: 24,
     votesMindblowing: 9,
     votesFalse: 4,
     createdIn: 2021,
   },
   {
     id: 2,
     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
     source:
       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
     category: "society",
     votesInteresting: 11,
     votesMindblowing: 2,
     votesFalse: 0,
     createdIn: 2019,
   },
   {
     id: 3,
     text: "Lisbon is the capital of Portugal",
     source: "https://en.wikipedia.org/wiki/Lisbon",
     category: "society",
     votesInteresting: 8,
     votesMindblowing: 3,
     votesFalse: 1,
     createdIn: 2015,
   },
 ];

 function calcFactAge(year){
   const currentYear = new Date().getFullYear();
   const age = currentYear - year ;
   if(age >= 0) 
   return age; else 
   return `Impossibel year. Year needs to be less or equal ${currentYear}` ;
}
 const factAges = initialFacts.map((el) => calcFactAge
 (el.createdIn));
 console.log(factAges);

