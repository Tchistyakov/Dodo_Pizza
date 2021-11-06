

let N = 5
let slideWidth = 50
let layoutWidth = slideWidth*5
let frameWidth = 100
let height = 30

let layout = document.createElement('div')
let frame = document.createElement('div')

layout.id = 'layout'
frame.id = 'frame'

frame.style = `
    width: ${frameWidth}px;
    height: ${height}px;
    border: 3px dashed black;
    margin: 0 auto;
    `
document.getElementById('slide').append(layout);

for (let i = 0; i < N; i++) {
    let slide = document.createElement('div')
    slide.innerText = i + 1
    slide.style = `
        width: ${slideWidth}px;
        height: ${height}px;
        border: 1px solid red;`
}
