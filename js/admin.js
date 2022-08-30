import { Movie } from "./crearPelis.js";
import {
  validarCode,
  validarDescription,
  validarTitle,
  validarUrl,
} from "./helpers.js";

let movieList = JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

let title = document.getElementById("title");
let description = document.getElementById("description");
let url = document.getElementById("url");
let form = document.getElementById("modalForm");
let createButton = document.getElementById("createMovie");
let code = document.getElementById("code");

let x = true; //if x == true i create a new movie else i update the movie data

code.addEventListener("change", () => {
  validarCode(code);
});
title.addEventListener("blur", () => {
  validarTitle(title);
});
description.addEventListener("blur", () => {
  validarDescription(description);
});
url.addEventListener("blur", () => {
  validarUrl(url);
});

const modalAdmin = new bootstrap.Modal(document.getElementById("modal111"));

// the library uuidv4 provides an unique id to the movie

const cargaInicial = () => {
  if (movieList.length > 0) {
    movieList.forEach((movieItem) => {
      crearFilas(movieItem);
    });
  }
};

const crearFilas = (movieItem) => {
  // draw a tr

  let movieTable = document.querySelector("#movieTable");

  movieTable.innerHTML += `<tr>
    <th scope="row">${movieItem.code}</th>
    <td>${movieItem.title}</td>
    <td>
      ${movieItem.description}
    </td>
    <td>${movieItem.img}</td>
    <td>${movieItem.genre}</td>
    <td>
      <button class="btn btn-warning" onClick='editMovie("${movieItem.code}")'>
        Editar
      </button>
      <button class="btn btn-danger" onClick='deleteMovie("${movieItem.code}")'>
        Borrar
      </button>
    </td>
  </tr>`;
};

const createMovie = () => {

  x = true;

  cleanForm();

  modalAdmin.show();

  code.value = uuidv4();
};

const saveMovie = (e) => {
  e.preventDefault();


  if (
    validarTitle(title) &&
    validarDescription(description) &&
    validarUrl(url)
  ) {
    if(x ){


      let newMovie = new Movie(
        code.value,
        title.value,
        description.value,
        url.value
      );
      movieList.push(newMovie);
      saveMovieLs();
      cleanForm();
      console.log(movieList);
      modalAdmin.hide();
  
      Swal.fire("Pelicula creada con exito!");
    }else{
      updateMovie();
    }
  } else {
    alert("Ingrese datos correctos");
  }

  

};

const cleanForm = () => {
  form.reset();
};

cargaInicial();
createButton.addEventListener("click", createMovie);
form.addEventListener("submit", saveMovie);

const saveMovieLs = () => {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(movieList));
};

window.deleteMovie = function (code) {
  console.log(code);

  let movieListCopy = movieList.filter((movieItem) => movieItem.code != code);
  movieList = movieListCopy;

  saveMovieLs();
  borrarTabla();
  cargaInicial();

};

function borrarTabla() {
  let movieTable = document.querySelector("#movieTable");
  movieTable.innerHTML = "";
}

window.editMovie = function(codex){

  x = false;

  let movie = movieList.find((movie)=>(movie.code)=== codex)

  modalAdmin.show();

  code.value = movie.code;
  title.value = movie.title;
  description.value = movie.description;
  url.value = movie.img;
}

function updateMovie(){

  let position = movieList.findIndex((movie)=>code.value === movie.code);
  

  movieList[position].title = title.value;
  movieList[position].img = url.value;
  movieList[position].description = description.value;

  saveMovieLs();


  borrarTabla();
  cargaInicial();

  Swal.fire(
    'Pelicula Actualizada!',
    'Datos actualizados con exito',
    'success'
  )

  modalAdmin.hide();

  cleanForm();
}


