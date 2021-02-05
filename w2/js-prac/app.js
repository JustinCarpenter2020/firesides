// loop that goes backwards / decrements / increments by more than one (just to show it isnt always ++)

  for(let i = 100; i > 0; i--){
    console.log(i)
  }

// iterate with a variable as your condition

  function varLoop(start, condition){
    for(let i = start; i < condition; i++){
      console.log(i)
    }
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


  console.log(i%2 == 0)
}



//loop with a break and continue