import { Movie } from "./crearPelis.js";

const movieList = []; 

let title = document.getElementById('title');
let description = document.getElementById('description');
let url = document.getElementById('url');
let form = document.getElementById('modalForm');
let padre = document.querySelector("#section1");
let createButton = document.getElementById('createMovie');


// modal instance

const modalAdmin = new bootstrap.Modal(document.getElementById('modal'))

// modalAdmin.show();

createButton.addEventListener('click', createMovie);
form.addEventListener('submit', saveMovie);

// console.log(uuidv4()) this library provides an id 

const createMovie = () => {

    modalAdmin.show();

    code.value = uuidv4();

}

const saveMovie = (e) => { 
    e.preventDefault();

    let newMovie = new Pelicula(code, title, description, img , genre);
}


