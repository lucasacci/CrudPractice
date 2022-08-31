
let parametro = window.location.search;


let urlParametro = new URLSearchParams(parametro);


let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];

let peliBuscada = listaPeliculas.find((pelicula)=> pelicula.code === urlParametro.get('codigo'));

console.log(peliBuscada);

let seccion = document.querySelector('#seccionDetalle');

seccion.innerHTML = `<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${peliBuscada.img}" class="img-fluid rounded-start" alt="${peliBuscada.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${peliBuscada.title}</h5>
                <p class="card-text">${peliBuscada.description}</p>
                <p class="card-text">Genero: <span class="badge rounded-pill bg-info"></span></p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          </div>`