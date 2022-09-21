//Definimos la clase que dará vida, que representa a un costo y su información.
class cost{
    name = "";
    email = "";
    resume = "";
    id = 0;
    static total = 0;
    constructor (name, email, resume){ //es el albañil
        this.name = name.toUpperCase();
        this.email = email.toLowerCase();
        this.resume = resume;
        cost.total++;
        this.id=cost.total; // asigno valor cada vez que sume
    }//constructor
    printInfo(div){   //método para imprimir la información del costo también se ocupa así para más fácil
        div.innerHTML +=`<div id="card_${this.id}" class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">${this.id}.- ${this.name}</div>
  <div class="card-body">
    <h5 class="card-title">${this.email}</h5>
    <p class="card-text">${this.resume}</p>
    </div>
 </div>`;
 
 
        //console.log(this.name, this.email, this.resume);
    }//printInfo
    static printTotal = function(div){
        //crear el método printTotal, que debe escribir un alert de bootstrap con el número total de costos, al final de los cards.
   div.innerHTML += `<br/><div class="alert alert-primary" role="alert">
   <strong>Total de Costos ${cost.total}
 </strong></div>`;
    }//printTotal
}//class cost
class costs extends cost {//extiende la clase costo
 department ="";
 price = 0.0;
 constructor(name, email, resume, department, price){
 super(name, email, resume);
 this.department = department;
 this.price = price;
 }//constructor
 printInfo(div){
 super.printInfo(div);
 let cardBody= document.getElementById(`card_${this.id}`)
 .getElementsByClassName("card-body")[0];
  cardBody
  .insertAdjacentHTML("beforeend",`<p class="card-text">Departmento: ${this.department}</p>`); 
  cardBody
  .insertAdjacentHTML("beforeend",`<p class="card-text"><strong>Precio: $ ${this.calculatePrice()}</strong></p>`);
 }//printInfo
 calculatePrice(){
    return((this.price * 1.16).toFixed(2));
 }//calculatecost
}//class costs
class manager extends costs {
numberOfCosts = 0 ;
bonus = 0.0;
constructor(name, email, resume, department, price, numberOfCosts, bonus){
super(name, email, resume, department, price);
this.numberOfCosts = numberOfCosts;
this.bonus = bonus;
}//constructor

printInfo(div){
    super.printInfo(div);
    let cardBody= document.getElementById(`card_${this.id}`)
 .getElementsByClassName("card-body")[0];
  cardBody
  .insertAdjacentHTML("beforeend",`<p class="card-text">Number of Costs: ${this.numberOfCosts}</p>`); 
  cardBody
  .insertAdjacentHTML("beforeend",`<p class="card-text">Bonus: <strong>$ ${this.bonus}</strong></p>`);
}//printInfo
calculatePrice(){
    return (parseFloat(super.calculatePrice()) + 
    (this.numberOfCosts*this.bonus)).toFixed(2);
}//calculatePrice
}//class manager
let divCard = document.getElementById("divCard");
let divTotal = document.getElementById("divTotal");
let payroll = [];
payroll.push(
new costs ("Personalizado", "cienciadedatos@gmail.com", "Brindamos ayuda a pequeñas y medianas empresas", "Desarrollo", 3000),
new costs ("Empresarial", "cienciadedatos@gmail.com", "Ofrecemos los mejores servicios a empresas grandes", "Desarrollo", 9000),
 new costs ("General", "cienciadedatos@gmail.com", "Solución inmediata en la empresa que trabajass", "Desarrollo", 6000),
 
 );
 payroll.forEach(e => { //para no tener que definir cada variable
   e.printInfo(divCard);
  }) ;
  cost.printTotal(divTotal);


