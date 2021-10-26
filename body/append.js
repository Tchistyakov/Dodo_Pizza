import half from "../card/card.js"
import combos from "../card/cardkombo.js"
import snacks from "../card/cardsnack.js"
import pizzas from "../card/cardpizza.js"
import deserts from "../card/carddesert.js"
import beverages from "../card/cardbeverage.js"
import popnew from "../card/newpop.js"

                    

function appendToHTML() {

document.getElementById('pizza').append(half)
combos()
snacks()
pizzas()
deserts()
beverages() 
popnew() 
}
export default appendToHTML