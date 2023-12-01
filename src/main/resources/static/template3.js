let baseUrl = `http://localhost:8080`;
let infos = [];

function cargarInformacion(){
    fetch(baseUrl + "/infos/all")
    .then((response) => {response.json()
        .then((json) => {
                infos = json;
                ImprimirContainers();
            });
        })
        .catch(error => {
            console.error("Error al obtener las películas:", error);
        });
}

function ImprimirContainers(){
    let contenedor1 = document.getElementById("container1");
    let contenedor2 = document.getElementById("container2");
    let contenedor3 = document.getElementById("container3");

	contenedor1.innerHTML = "";
	contenedor2.innerHTML = "";
	contenedor3.innerHTML = "";


    contenedor1.innerHTML = MapearContainer1(infos);
    contenedor2.innerHTML = MapearContainer2(infos);
    contenedor3.innerHTML = MapearContainer3(infos);
}

function MapearContainer1(info){
    return `
    <img
		class="image1" 
		src="${info[3].descripcion}" alt="" style="width: 100%; height: 100%; object-fit: cover;">
    `;
}

function MapearContainer2(info){
    return `
    <h1>${info[0].descripcion}</h1>
	<p>
		${info[1].descripcion}
	</p>
	<p>${info[2].descripcion}</p>
	<button>Leer más</button>
    `;
}

function MapearContainer3(info){
	return `
	<img class="logo" src="${info[4].descripcion}" alt="" />
	<label class="hamburger menu">
	<input type="checkbox">
	<svg viewBox="0 0 32 32">
		<path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
		<path class="line" d="M7 16 27 16"></path>
	</svg>
	</label>
	`;
}