import { Movie } from "./crearPelis.js";
import { validarCode, validarDescription, validarTitle, validarUrl } from './helpers.js';

const movieList = JSON.parse(localStorage.getItem('listaPeliculasKey')) || []; 

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

createButton.addEventListener('click', createMovie);
form.addEventListener('submit', saveMovie);


const saveMovieLs = () => {

    localStorage.setItem('listaPeliculasKey', JSON.stringify(movieList));


}