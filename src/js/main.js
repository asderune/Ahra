import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

let header = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("change-bg-nav", windowPosition);

});

header.addEventListener('show.bs.collapse', function () {

        header.classList.add("change-bg-nav");
 
})

header.addEventListener('hide.bs.collapse', function () {
     header.classList.remove("change-bg-nav");
})

document.querySelectorAll('.bx-heart').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('bxs-heart')
    })
})