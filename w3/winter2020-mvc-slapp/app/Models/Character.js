export default class Character{
  constructor(str){
    //if all you take in a single str to construct you dont need to take in an object in ctor
    this.health = 100
    this.name = str
    this.attacks = {
      slap: 1,
      kick: 5,
      punch: 10
    }
  }
  // attacks['slap'] => 1
  // attacks['kick'] => 5

}