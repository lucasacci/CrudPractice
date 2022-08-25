import { Movie } from "./crearPelis.js";
import { validarCode, validarDescription, validarTitle, validarUrl } from './helpers.js';

let movieList = JSON.parse(localStorage.getItem('listaPeliculasKey')) || []; 

let title = document.getElementById('title');
let description = document.getElementById('description');
let url = document.getElementById('url');
let form = document.getElementById('modalForm');
let createButton = document.getElementById('createMovie');
let code = document.getElementById('code');


code.addEventListener('change', ()=>{validarCode(code)});
title.addEventListener('blur', ()=>{validarTitle(title)})
description.addEventListener('blur', ()=>{validarDescription(description)});
url.addEventListener('blur', ()=>{validarUrl(url)})

 const modalAdmin = new bootstrap.Modal(document.getElementById('modal111'))

// the library uuidv4 provides an unique id to the movie 



const cargaInicial = () =>{
    
    if(movieList.length > 0){
        movieList.forEach((movieItem)=>{ crearFilas(movieItem) })
    }
    
}

const crearFilas = (movieItem) =>{
// draw a tr

    let movieTable = document.querySelector('#movieTable');

    movieTable.innerHTML += `<tr>
    <th scope="row">${movieItem.code}</th>
    <td>${movieItem.title}</td>
    <td>
      ${movieItem.description}
    </td>
    <td>${movieItem.img}</td>
    <td>${movieItem.genre}</td>
    <td>
      <button class="btn btn-warning">
        Editar
      </button>
      <button class="btn btn-danger" onClick='deleteMovie("${movieItem.code}")'>
        Borrar
      </button>
    </td>
  </tr>`

}

const createMovie = () => {

    modalAdmin.show();
    
    code.value = uuidv4();
    console.log(code.value)
    
}

const saveMovie = (e) => { 
    e.preventDefault();
    
    if(validarTitle(title) && validarDescription(description) && validarUrl(url)){
        
            let newMovie = new Movie(code.value, title.value, description.value, url.value);
            movieList.push(newMovie);
            saveMovieLs();
            cleanForm();
            console.log(movieList)
            modalAdmin.hide();

            Swal.fire(
                'Pelicula creada con exito!'
              )

    }else{
        alert('Ingrese datos correctos')
    }
}


const cleanForm = () => {

    form.reset();

}

cargaInicial();
createButton.addEventListener('click', createMovie);
form.addEventListener('submit', saveMovie);


const saveMovieLs = () => {

    localStorage.setItem('listaPeliculasKey', JSON.stringify(movieList));


}

window.deleteMovie = function (code) { 
    console.log(code);

    let movieListCopy = movieList.filter((movieItem) => movieItem.code != code);
    movieList = movieListCopy;

    saveMovieLs();

    borrarTabla();
    cargaInicial();
    cargaInicial2();
}

function borrarTabla(){
    let movieTable = document.querySelector('#movieTable');
    movieTable.innerHTML = '';
}





// const cargaInicial2 = () =>{
    
//   if(movieList.length > 0){
//       movieList.forEach((movieItem)=>{ crearCard(movieItem) })
//   }
  
// }

// cargaInicial2();
// form.addEventListener('submit', crearCard);
// console.log(crearCard);

// function crearCard(movieItem){


//   let padre = document.querySelector("#seccionXD");

//     let card = document.createElement('aside');
//     card.className = 'col-12 col-md-4 col-lg-3 my-3'
    
//     card.innerHTML += `<aside class="col-12 col-md-4 col-lg-3 my-3">
//     <div class="card">
//       <img src="${movieItem.img}" class="card-img-top" alt="img">
//       <div class="card-body">
//         <h5 class="card-title ">${movieItem.title}<span class="badge text-bg-danger rounded-pill">Nuevo</span></h5>
//         <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalMedialuna">Ver mas</button>
//       </div>
//     </div>
//   </aside>`
    
//     padre.appendChild(card);
  

// }