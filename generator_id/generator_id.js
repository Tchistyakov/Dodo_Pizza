// Generate random id for array 

const myId = (string) => {
    let result = string + "-"
    let num = parseInt(Math.random()*(10**6))
    result = result + num
    return result
}

export default myId