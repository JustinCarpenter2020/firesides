export default class FoodItem{
  constructor({name, price, quantity}){
  this.name = name,
  this.price= price,
  this.quantity = quantity,
  this.isPublic = true
  }


  get Template(){
    return /*html*/`
    <div class="card col-3">
      <div class="card-body ${this.isPublic ? "fa-spin": ""}">
        <h4 class="card-title">${this.name} x ${this.quantity}</h4>
        <p class="card-text">${this.price}</p>
        <button class="btn btn-success foodButton ${this.price > 2 ? 'text-danger' : 'text-warning'}" ${this.quantity > 0 ? " ": 'disabled'} onclick="app.vendingController.buyItem('${this.name}')">Buy now</button>
      </div>
    </div>
    
    `
  }
}