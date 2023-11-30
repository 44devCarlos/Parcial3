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
    let contenedor4 = document.getElementById("container4");
    let contenedor5 = document.getElementById("container5");
    let contenedor6 = document.getElementById("container6");
    let contenedor7 = document.getElementById("container7");
    let contenedor8 = document.getElementById("container8");
    let contenedor9 = document.getElementById("container9");

	contenedor1.innerHTML = "";
	contenedor2.innerHTML = "";
	contenedor3.innerHTML = "";
	contenedor4.innerHTML = "";
	contenedor5.innerHTML = "";
	contenedor6.innerHTML = "";
	contenedor7.innerHTML = "";
	contenedor8.innerHTML = "";
	contenedor9.innerHTML = "";


    contenedor1.innerHTML = MapearContainer1(infos);
    contenedor2.innerHTML = MapearContainer2(infos);
    contenedor3.innerHTML = MapearContainer3(infos);
    contenedor4.innerHTML = MapearContainer4(infos);
    contenedor5.innerHTML = MapearContainer5(infos);
    contenedor6.innerHTML = MapearContainer6(infos);
    contenedor7.innerHTML = MapearContainer7(infos);
    contenedor8.innerHTML = MapearContainer8(infos);
    contenedor9.innerHTML = MapearContainer9(infos);
}

function MapearContainer1(info){
    return `
    <img
		class="image1" 
		src="${info[41].descripcion}" alt="" style="width: 100%; height: 100%; object-fit: cover;">
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
    <img class="background-section2" src="${info[42].descripcion}" alt=""/>
    `;
}

function MapearContainer4(info){
    return `
    <section class="container2-item1">
		<img src="${info[43].descripcion}" alt=""/>
		<h2>${info[3].descripcion}</h2>
	</section>
	<section class="container2-item2">
		<img src="${info[44].descripcion}" alt="" />
		<h2>${info[4].descripcion}</h2>
	</section>
	<section id="container6" class="container2-item3">
		<img src="${info[45].descripcion}" alt="" />
		<h2>${info[5].descripcion}</h2>
	</section>
	<section id="container7" class="container2-item4">
		<img src="${info[46].descripcion}" alt="" />
		<h2>${info[6].descripcion}</h2>
	</section>
	<p>${info[7].descripcion}</p>
    `;
}

function MapearContainer5(info){
    return `
    <section class="container3-item1" style="background: url('${info[47].descripcion}'); background-size: cover; background-position: center;"></section>
	<section class="container3-item2" style="background: url('${info[48].descripcion}'); background-size: cover; background-position: center;"></section>
	<section class="container3-item3" style="background: url('${info[49].descripcion}'); background-size: cover; background-position: center;"></section>
	<section class="container3-item4" style="background: url('${info[50].descripcion}'); background-size: cover; background-position: center;"></section>
	<section class="container3-item5">
		<section class="container3-text">
			<h1>${info[3].descripcion}</h1>
			<p>
				${info[8].descripcion}
			</p>
			<p>${info[2].descripcion}</p>
			<button>Leer más</button>
		</section>
	</section>
    `;
}
function MapearContainer6(info){
    return `
    <h1 class="container4-title">
		${info[9].descripcion}
	</h1>
	<section class="container4-item1">
		<p>${info[10].descripcion}</p>
	</section>
	<section class="container4-item2">
		<p>${info[11].descripcion}</p>
	</section>
	<section class="container4-item3">
		<p>${info[12].descripcion}</p>
	</section>
	<section class="container4-item4">
		<p>${info[13].descripcion}</p>
	</section>
	<section class="container4-item5">
		<p>${info[14].descripcion}</p>
	</section>
	<section class="container4-item6">
		<p>${info[15].descripcion}</p>
	</section>
	<button>Leer Más</button>
    `;
}
function MapearContainer7(info){
    return `
    <section class="container5-item1"></section>
	<section class="container5-item2">
		<section class="container5-text">
			<h1>${info[16].descripcion}</h1>
			<!--Aqui pusimos una imagen en cada linea para que simulara la palomita o el checkmark ese-->
			<p>
				<img src="img/check.png" alt="checkp" />${info[17].descripcion}
			</p>
			<p>
				<img src="img/check.png" alt="checkp" />${info[18].descripcion}
			</p>
			<p>
				<img src="img/check.png" alt="checkp" />${info[19].descripcion}
			</p>
			<p>${info[2].descripcion}</p>
			<button>Leer más</button>
		</section>
	</section>
	<section class="container5-item3" style="background: url('${info[51].descripcion}'); background-size: cover; background-position: center;"></section>
	<section class="container5-item4" style="background: url('${info[52].descripcion}'); background-size: cover; background-position: center;"></section>
    `;
}

function MapearContainer8(info){
    return `
    <section class="section6-border">
    <!--Contiene texto-->
    <h1 class="container6-title">${info[20].descripcion}</h1>
    <p class="container6-text1">
        ${info[21].descripcion}
    </p>
    <p class="container6-text2">${info[2].descripcion}</p>
    <button>Leer Más</button>
    </section>
    <!--Section con imagen de fondo-->
    <section class="section6-image"  style="background: url('${info[53].descripcion}'); background-size: cover; background-position: center;"></section>

    <!--Aqui estan los 4 contenedores en horizontal del section6-->
    <section class="section6-item1">
        <section class="section6-boxes">
            <h1 class="container6box-title">${info[22].descripcion}</h1>
            <p class="container6box-subtitle">${info[23].descripcion}</p>
        </section>
    </section>
    <section class="section6-item2">
        <section class="section6-boxes">
            <h1 class="container6box-title2">${info[24].descripcion}</h1>
            <p class="container6box-subtitle2">${info[25].descripcion}</p>
        </section>
    </section>
    <section class="section6-item3">
        <section class="section6-boxes">
            <h1 class="container6box-title3">${info[27].descripcion}</h1>
            <p class="container6box-subtitle3">${info[26].descripcion}</p>
        </section>
    </section>
    <section class="section6-item4">
        <section class="section6-boxes">
            <h1 class="container6box-title4">${info[28].descripcion}</h1>
            <p class="container6box-subtitle4">${info[29].descripcion}</p>
        </section>
    </section>
    `;
}
function MapearContainer9(info){
    return `
    <!--Este contenedor contiene formulario y una caja de texto ademas de 4 contenedores y a su vez
	esos contenedores contiene una caja que es donde se le aplica el fondo, luego su titulo y subtitulo-->
	<section class="section7-item1">
		<section class="section7-boxes">
			<h1 class="container7box-title">${info[30].descripcion}</h1>
			<p class="container7box-subtitle">${info[31].descripcion}</p>
		</section>
	</section>
	<section class="section7-item2">
		<section class="section7-boxes">
			<h1 class="container7box-title2">${info[32].descripcion}</h1>
			<p class="container7box-subtitle2">${info[33].descripcion}</p>
		</section>
	</section>
	<section class="section7-item3">
		<section class="section7-boxes">
			<h1 class="container7box-title3">${info[34].descripcion}</h1>
			<p class="container7box-subtitle3">${info[35].descripcion}</p>
		</section>
	</section>
	<section class="section7-item4">
		<section class="section7-boxes">
			<h1 class="container7box-title4">${info[36].descripcion}</h1>
			<p class="container7box-subtitle4">${info[37].descripcion}</p>
		</section>
	</section
	<!--Formulario de correo-->
	<fieldset class="mail-container">
		<legend for="">Correo</legend>
		<input
			type="email"
			name=""
			id="correo"
			placeholder="Enter a valid email address"
		/>
	</fieldset
	<!--Formulario del nombre-->
	<fieldset class="name-container">
		<legend for="">Nombre</legend>
		<input type="text" id="nombre" placeholder="Enter your name" />
	</fieldset
	<!--Formulario del mensaje-->
	<fieldset class="msg-container">
		<legend for="">Mensaje</legend>
		<textarea
			id="msg"
			placeholder="Enter your message"
			name=""
			rows="4"
			cols="50"
		></textarea>
	</fieldset>
	<button>SUBMIT</button
	<!--Aqui hay texto y las redes sociales-->
	<section class="text-container7">
		<h1>${info[38].descripcion}</h1>
		<h2>${info[39].descripcion}</h2>
		<p>
            ${info[40].descripcion}
		</p>
		<!--Imagen de las redes sociales-->
		<img
			class="img-container7-1"
			src="img/facebooklogo.png"
			width="38"
			height="38"
		/>
		<img
			class="img-container7-2"
			src="img/twitter-logo.png"
			width="38"
			height="38"
		/>
		<img
			class="img-container7-3"
			src="img/iglogo.png"
			width="25"
			height="25"
		/>
		<img
			class="img-container7-4"
			src="img/linkdinlogo.png"
			width="25"
			height="25"
		/>
	</section>
    `;
}