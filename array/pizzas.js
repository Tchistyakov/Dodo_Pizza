export const Pizzas = async () => {
    let res = await fetch('http://localhost:3000/pizzas')
    let arr = await res.json()
    return arr
}