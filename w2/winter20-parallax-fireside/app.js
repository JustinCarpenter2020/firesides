//4. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
  from: 'BOI',
  to: 'LAX',
  prices: {
      standard: 500,
      firstClass: 2200
  }
}, {
  from: 'BOI',
  to: 'SEA',
  prices: {
      standard: 800,
      firstClass: 1200
  }
}, {
  from: 'BOI',
  to: 'CAN',
  prices: {
      standard: 750,
      firstClass: 6200
  }
}]
function flightCost(destination, firstClass) {

//***hint: use the find method***
    // console.log(destination, firstClass, flights,"from flightcost function ")

    // let flight = flights.find(f=> f.to.toLowerCase() == destination.toLowerCase())

    let flight;
    for (let i = 0; i < flights.length; i++) {
        let f = flights[i];
        if(f.to.toLowerCase() == destination.toLowerCase()){
            flight = f
        }
    }

    // console.log(flight)
    // if(firstClass){
    //     return flight.prices.firstClass
    // }else {
    //     return flight.prices.standard
    // }

    return firstClass ?  flight.prices.firstClass : flight.prices.standard
  }