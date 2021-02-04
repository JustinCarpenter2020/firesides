export default class Character{
  constructor(str){
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