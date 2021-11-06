export const Kombos = async () => {
    let res = await fetch('http://localhost:3000/kombos')
    let kombo = await res.json()
    return kombo
}