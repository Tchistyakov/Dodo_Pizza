export const Pizzas = async () => {
    let res = await fetch('http://localhost:3000/pizzas')
    let arr = await res.json()
    return arr
}

export const Kombos = async () => {
    let res = await fetch('http://localhost:3000/kombos')
    let arr = await res.json()
    return arr
}

export const Snacks = async () => {
    let res = await fetch('http://localhost:3000/snacks')
    let arr = await res.json()
    return arr
}

export const Deserts = async () => {
    let res = await fetch('http://localhost:3000/deserts')
    let arr = await res.json()
    return arr
}

export const Beverages = async () => {
    let res = await fetch('http://localhost:3000/beverages')
    let arr = await res.json()
    return arr
}

export const Newpops = async () => {
    let res = await fetch('http://localhost:3000/newpops')
    let arr = await res.json()
    return arr
}

// export const App = async () => {
    
//     let res = await fetch('http://localhost:3000/pizzas')
//     let pizzas = await res.json()

//     res = await fetch('http://localhost:3000/kombos')
//     let kombos = await res.json()

//     res = await fetch('http://localhost:3000/snacks')
//     let snacks = await res.json()

//     res = await fetch('http://localhost:3000/deserts')
//     let deserts = await res.json()

//     res = await fetch('http://localhost:3000/beverages')
//     let beverages = await res.json()

//     res = await fetch('http://localhost:3000/newpops')
//     let newpops = await res.json()

//     console.log(pizzas)
//     console.log(kombos)
//     console.log(snacks)
//     console.log(deserts)
//     console.log(beverages)
// }

// async function getPizzaOne () {
//     const data = await fetch('http://localhost:3000/pizzas').then(data => data.json())
//     console.log(data)
//     htm (data)
//     openModal()
// }