import { validarCode, validarDescription, validarTitle, validarUrl } from './helpers.js';

let code = document.getElementById('code');
let title = document.getElementById('title');
let description = document.getElementById('description');
let url = document.getElementById('url');
let form = document.getElementById('modalForm');
let padre = document.querySelector("#section1");

console.log(padre)
form.addEventListener('submit', ()=>{createCard()});
code.addEventListener('blur', ()=>{validarCode(code)});
title.addEventListener('blur', ()=>{validarTitle(title)})
description.addEventListener('blur', ()=>{validarDescription(description)});
url.addEventListener('blur', ()=>{validarUrl(url)})

let n = [];

const createCard = ()=> {
  // e.preventDefault();

    let card = document.createElement('aside');
    card.className = 'col-12 col-md-4 col-lg-3 my-3'

    card.innerHTML = `<div class="card">
      <img src="${url.value}" class="card-img-top" alt="img" id="${code.value}">
      <div class="card-body">
        <h5 class="card-title">${title.value}<span class="badge text-bg-danger rounded-pill">Nuevo</span></h5>
        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalMedialuna">Ver mas</button>
      </div>
    </div>`

    n.push(code.value);

    padre.appendChild(card);

    console.log(padre)
}