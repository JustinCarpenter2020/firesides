// loop that goes backwards / decrements / increments by more than one (just to show it isnt always ++)

  //forloop that counts from 100 - 0 


  for(let i = 100; i > 0; i--){
    console.log(i)
  }

// iterate with a variable as your condition

  function varLoop(start, condition){
  //write a forloops using these params
  }
  varLoop(25, 50)

// for vs for each vs for in (when to use for in and when not to)
let people = [{
  name: 'D$',
  role: 'Instruct'
},
{
  name: 'Harrison',
  role: 'TA'
},
{
  name: 'Mark',
  role: 'Instruct'
},
{
  name: 'Brittany',
  role: 'Admin'
}]


for(let i = 0; i < people.length; i++){
  let person = people[i]
  if(person.role ==  "TA"){
    console.log(`Hello ${person.role} ${person.name}`)
  } else if ( person.role == 'Admin'){
    console.log(`Hello ${person.role} ${person.name}, Have a nice day`)
  } else {
    console.log(`${person.name} is probably an instructor`);
  }
}

people.forEach(p => {
  if(p.role ==  "TA"){
    console.log(`Hello ${p.role} ${p.name}`)
  } else if ( p.role == 'Admin'){
    console.log(`Hello ${p.role} ${p.name}, Have a nice day`)
  } else {
    console.log(`${p.name} is probably an instructor`);
  }
})

//NOTE 
//only use a for in loop if you are iterating over an object
//for in on an array causes it to be looped over as an object which is ultimately
//slower than iterating by index on an array.
//it also is not guaranteed to return the properties in sequential order as you might expect

// ternary vs if
people.forEach(p => { p.role ==  "TA" ? console.log(`Hello ${p.role} ${p.name}`) : p.role == 'Admin' ?console.log(`Hello ${p.role} ${p.name}, Have a nice day`) : console.log(`${p.name} is probably an instructor`);})


// alternative to return true; return false
//console log false if num is odd or true if num is even

for(let i = 0; i < 10; i++){
  if( i % 2 == 1){
    console.log(false)
  }else {
    console.log(true)
  }

  //no need to do if statement if youre just doing true/false 
  console.log(i%2 == 0)
}


//loop with a break and continue
for(let i =0; i<25; i++){
  console.log(i)
  if(i != 20){
    continue;
  }else {
    break;
  }
//continue tells your loop to keep looping while break stops your loop even if the
//loop condition has not been met yet
}


let basket = [
{
  name: "Apple",
  type: 'Fruit'
},
{
  name: "Carrot",
  type: 'Vegetable'
},
{
  name: "Banana",
  type: 'Fruit'
},
{
  name: "Lettuce",
  type: 'Vegetable'
},
{
  name: "Steak",
  type: 'Meat'
},
{
  name: "D$ Special",
  type: 'Other'
}
]

basket.forEach(item=>{
switch(item.type){
  case 'Vegetable':
    console.log('this a vege');
    break;
  case 'Fruit':
    console.log('this a froot');
    break;
  default:
    console.log("this not froot or vege");
    break;
}
})