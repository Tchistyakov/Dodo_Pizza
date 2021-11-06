import { showSlides } from '../slider/sld.js'

export function slider() {
    showSlides()
    return `
    <div class="item">
      <img src="../pictures/slide_1.png">
    </div>
    <div class="item">
      <img src="../slider/IMG_1936.JPG">
    </div>
    <div class="item">
      <img src="../slider/IMG_1937.JPG">
    </div>
    <a class="previous" onclick="previousSlide()">&#10094;</a>
    <a class="next" onclick="nextSlide()">&#10095;</a>
    `
}