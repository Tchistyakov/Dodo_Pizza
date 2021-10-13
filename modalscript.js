let modul = `
<h1>привет)</h1>
<style>
h1 {
    font-size: 30px;
}
.modul {
    position: absolute;
    top: 100px;
    text-align: center;
    color:#D15700;
}
</style>
`
let hello = document.createElement('div')
hello.className = 'modul'
hello.innerHTML = modul

function modal_open() {
    console.log('jhk')
    document.getElementById('root').append(hello)
}