'use strict';
/*
let zurichBtn = document.getElementById('zurych_circle');
let genewaBtn = document.getElementById('genewa_circle');
let bazyleaBtn = document.getElementById('bazylea_circle');
let bernoBtn = document.getElementById('berno_circle');
let lozannaBtn = document.getElementById('lozanna_circle');
let wintherthurBtn = document.getElementById('wintherthur_circle');
let lucernaBtn = document.getElementById('lucerna_circle');
let stgallenBtn = document.getElementById('stgallen_circle');
let luganoBtn = document.getElementById('lugano_circle');
let bielBtn = document.getElementById('biel_circle');



zurichBtn.addEventListener('click',showZurich);

function showZurich(){
    const zurichText = document.querySelector('#zurych_description');
    zurichText.classList.remove("hidden")
};
*/

const btns = document.querySelector('.btn_container');
const citiesText = document.querySelectorAll('.cities');
console.log(btns)

btns.addEventListener('click',function(e){
    let clicked = e.target.closest('.circle')
    console.log(e)
    console.log(clicked.dataset)
    console.log(citiesText)

    if(!clicked) return

    citiesText.forEach(city => city.classList.add('hidden'))
    document.querySelector(`.cities--${clicked.dataset.tab}`).classList.remove('hidden')
    
})