import footer from './../footer/footer.js'
import header from './../header/header.js'
import main from './main.js'


const body = () => {
    let foot = document.createElement('footer')
    foot.className = 'main-footer'
    foot.innerHTML = footer
    document.getElementById('root').prepend(foot)

    let midlle = document.createElement('main')
    midlle.className = 'main'
    midlle.innerHTML = main
    document.getElementById('root').prepend(midlle)

    let head = document.createElement('header')
    head.className = 'main-header'
    head.innerHTML = header
    document.getElementById('root').prepend(head)
}

export default body