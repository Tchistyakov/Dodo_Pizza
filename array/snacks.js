export const Snacks = async () => {
    let res = await fetch('http://localhost:3000/snacks')
    let snacks = await res.json()
    
    console.log(snacks)
}