//Section 1

//what types are these? Write your answer in a comment beside it.

1; // number
"cat"; // string
true; // boolean
[]; // object
{}; // object
1.1; // number
undefined; //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; // true
NaN; // false
[]; //true
{};// true
undefined; //false
""; //false
0; // false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var myNum = 24;
//3.2 Assign a variable that is a string
var myString = "Hi, My name is Sam";
//3.3 Assign a variable that is a boolean
var myBoolean = true;
//3.4 Assign a variable that is an object
var myObject = [];

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var hiOrBye = function(greeting){
  if (greeting){
    console.log("hello")
  } else {
    console.log("bye")
  }
}
hiOrBye(true);

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstAnimal = animals[0];
//5.2. Assign the last element to a variable
var lastAnimal = animals.pop;
//5.3. Assign the length of an array to a variable
var animalLength = animals.length
//5.4. Add an item to the end of the array
animals.push("dog");
//5.5. Add an item to the start of the array
animals[0].push("cat");
//5.6. Assign the index of hedgehog to a variable
var hedgehog = animals[1];

//Section 6

//6.1 Create an array of 5 vegetables
var veggies = ["carrot", "potato", "courgette", "brocolli", "pumpkin"];
//6.2 Loop over the array and write to the console using a "while"
var i = 0;
while(i < veggies.length) {
  console.log(veggies[i]);
  i++;
}
//6.3 Loop again using a "for" with a counter
for (var i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}
//6.4 Loop again using a "for in"
for (var veggie in veggies) {
  console.log(veggies[veggie]);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
counter = 0;
for (var i = 0; i < accounts.length; i++) {
  console.log(accounts.amount);
  counter + i;
}

//7.1 Calculate the total cash in accounts
//7.2 Find the name of the account with the largest balance
//7.3 Find the name of the account with the smallest balance
//7.4 Calculate the average bank account value
//7.5 Find the value of marcs bank account
//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food