

let movieList = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];
let padre = document.querySelector("#sectionXD");

if(movieList.length > 0){

    movieList.map((movie)=>{
     crearColumna(movie);
        
    })

}else{
    // show a messagge to the user
    padre.innerHTML = ' <h1 class="text-center">No hay peliculas cargadas</h1>'
}


function crearColumna(movie){


    padre.innerHTML += `
        <aside class="col-12 col-md-4 col-lg-3 my-3">
         <div class="card">
           <img src="${movie.img}" class="card-img-top w-100 cardXD"  alt="img">
           <div class="card-body">
             <h5 class="card-title">${movie.title}<br><span class="badge text-bg-danger rounded-pill ">Nuevo</span></h5>
             <button class="btn btn-primary" type="button" onclick="verDetalle('${movie.code}')">Ver mas</button>
           </div>
         </div>
       </aside>`;

}

function verDetalle (code){

  console.log(window.location.origin+'/pag/detalle.html?codigo='+code);
  window.location.href = window.location.origin+'/pag/detalle.html?codigo='+code;

}