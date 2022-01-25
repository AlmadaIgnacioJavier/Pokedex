let page = document.getElementById("container");
let body = document.getElementById("body");
const spinner = document.createElement("DIV")
spinner.innerHTML = `<div id="container-spin">
  <svg viewBox="0 0 100 100">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="0" stdDeviation="1.5" 
          flood-color="#fc6767"/>
      </filter>
    </defs>
    <circle id="spinner" style="fill:transparent;stroke:#dd2476;stroke-width: 7px;stroke-linecap: round;filter:url(#shadow);" cx="50" cy="50" r="45"/>
</svg>
</div>`


async function PokemonGrande(id){
	try {
			let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			let data = await res.json()
			let pokemon = {
				img: data.sprites.other.dream_world.front_default,
				name: data.forms[0].name.toUpperCase(),
				hp: data.stats[0].base_stat,
				experience: data.base_experience,
				atack: data.stats[1].base_stat,
				defense: data.stats[2].base_stat,
				special: data.stats[3].base_stat,
				speed: data.stats[5].base_stat,
				specialDefense: data.stats[4].base_stat,
				type: data.types[0].type.name			
			}
			printBigCard(pokemon)
	}
	catch (error){
		console.log(error)
	}
}

const printBigCard = (pokemon) =>{
	var page = document.getElementById("container")
	var BigCard = document.getElementById("big-card");
	BigCard.innerHTML += 	 `
	<section id="containerBigCard" onclick="exit()">
		<button id="exit" onclick="exit()" class="exit">
		<div class="exit-image"></div>
		</button>
		<section class="card-complete">
			<article class="card-head">
			</article>
			<article class="info">
				<img class="img-big" src="${pokemon.img}">
				<p class="name-big"><b class="name-b">${pokemon.name}</b> <span class="hp">${pokemon.hp} Hp</span> </p>
				<h2 id="type" class="type">${pokemon.type}</h2>
				<div class="item-box-container">				
					<div class="item-container">
						<h3 class="item-1">Atack</h3>
						<h3 class="item-2">${pokemon.atack}</h3>
					</div>
					<div class="item-container">
						<h3 class="item-1">Experience</h3>
						<h3 class="item-2">${pokemon.experience}</h3>
					</div>						
					<div class="item-container">
						<h3 class="item-1">Defense</h3>
						<h3 class="item-2">${pokemon.defense}</h3>
					</div>				
					<div class="item-container">
						<h3 class="item-1">Special</h3>
						<h3 class="item-2">${pokemon.special}</h3>
					</div>
					<div class="item-container">
						<h3 class="item-1">Speed</h3>
						<h3 class="item-2">${pokemon.speed}</h3>
					</div>	
					<div class="item-container">
						<h3 class="item-1">Special Defense</h3>
						<h3 class="item-2">${pokemon.specialDefense}</h3>
					</div>									
				</div>
			</article>
		</section>
		</section>`;
		var type = document.getElementById("type")
		if (pokemon.type === "water") {
			type.style.background = "#00cccc"
		} 
		else if(pokemon.type === "rock"){
			type.style.background = "rgb(204, 182, 0) none repeat scroll 0% 0%"
		}
		else if(pokemon.type === "normal"){
			type.style.background = "#ccc"
		}
		else if(pokemon.type === "fire"){
			type.style.background = "#ff5733"
		}
		else if(pokemon.type === "grass"){
			type.style.background = "#48bb38"
		}
		else if(pokemon.type === "electric"){
			type.style.background = "#c9d339"
		}
		else if(pokemon.type === "ice"){
			type.style.background = "#00ffff"
		}
		else if(pokemon.type === "fighting"){
			type.style.background = "#ce2018"
		}
		else if(pokemon.type === "poison"){
			type.style.background = "#aa18ce"
		}
		else if(pokemon.type === "ground"){
			type.style.background = "#ce7318"
		}
		else if(pokemon.type === "flying"){
			type.style.background = "#2f798d"
		}
		else if(pokemon.type === "psychic"){
			type.style.background = "#ea20a1"
		}
		else if(pokemon.type === "bug"){
			type.style.background = "#178521"
		}
		else if(pokemon.type === "ghost"){
			type.style.background = "#1b4798"
		}
		else if(pokemon.type === "dragon"){
			type.style.background = "#e39a2a"
		}
		else if(pokemon.type === "dark"){
			type.style.background = "#777"
		}
		else if(pokemon.type === "fairy"){
			type.style.background = "#ff5733"
		}
		else if(pokemon.type === "steel"){
			type.style.background = "#777"
		}
}
// PokemonGrande(150)

async function PokemonChico(empezar, terminar){
	var body = document.getElementById("body")
	var filtrerSection = document.getElementById("panelsStayOpen-collapseOne")
	body.appendChild(spinner)
	var inputs = document.querySelectorAll(`input[name="select"]`)
	inputs.forEach(e=>{
		e.disabled = true;
	})

	var inputName = document.getElementById("searchNameInput")

	inputName.disabled = true;

	for (let i = empezar; i <= terminar; i++){
	
	try {
			let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
			let data = await res.json()
			let pokemon = {
				img: data.sprites.other.dream_world.front_default,
				name: data.forms[0].name.toUpperCase(),
				hp: data.stats[0].base_stat,
				experience: data.base_experience,
				atack: data.stats[1].base_stat,
				defense: data.stats[2].base_stat,
				special: data.stats[3].base_stat,
				speed: data.stats[5].base_stat,
				specialDefense: data.stats[4].base_stat,
				type: data.types[0].type.name,
				id: data.id		
			}
			if (pokemon.img != null) {
				printLittleCard(pokemon)
			}
	}
	catch (error){
		console.log(error)
	}
};
inputs.forEach(e=>{
	e.disabled = false;
})
inputName.disabled = false;
body.removeChild(spinner)
var contenedor = document.querySelector("#container");
console.log(contenedor.lastChild.children[0].value)
	console.log(contenedor.children)
verifyVisibility = (entries, entry) => {
		if ((entries[0] != undefined) && entries[0].isIntersecting === true) {
			var array = [];
			for (var i = 1 ; i <= 35 ; i++) {
				array.push(20*i)
			}
			
			var number = (entries[0].target.firstElementChild.attributes[1].value)
			console.log(array.includes(contenedor.children.length))
			MorePokemons(number)
		}
}
let observer = new IntersectionObserver(verifyVisibility);
verifyVisibility(contenedor.lastChild)
observer.observe(contenedor.lastChild)

}

function MorePokemons(e) {
	var finish = (parseInt(e) + 20) 
	PokemonChico(e, finish)
}


class pokeItem{
	constructor(element,id){
		this.element = element;
		this.id = id;
	}
}
let allButtons = []
const printLittleCard = (pokemon) =>{
	page.innerHTML +=	 `
		<section class="card-l">
		<button class="button-card" value="${pokemon.id}" onclick="seeMore(${pokemon.id})">
			<article class="card-head-l">
			</article>
			<article class="info">
				<img src="${pokemon.img}">
				<p class="name-l">
					<b class="name-b-l">${pokemon.name}</b>
					<span class="hp-l">${pokemon.hp} Hp</span> 
				</p>
				<h2 class="type-l">${pokemon.type}</h2>
				<div class="item-box-container-l">				
					<div class="item-container-l">
						<h3 class="item-1-l">Atack</h3>
						<h3 class="item-2-l">${pokemon.atack}</h3>
					</div>					
					<div class="item-container-l">
						<h3 class="item-1-l">Defense</h3>
						<h3 class="item-2-l">${pokemon.defense}</h3>
					</div>												
				</div>
			</article>
		</button>
		</section>`;
		var type = document.querySelectorAll('.type-l');
		type.forEach(e=>{
			if (e.innerHTML.includes("water")){
			e.style.background = "#00cccc"
			} 		
			else if(e.innerHTML.includes("rock")){
			e.style.background = "rgb(204, 182, 0) none repeat scroll 0% 0%"
			}
			else if(e.innerHTML.includes("normal")){
				e.style.background = "#ccc"
			}
			else if(e.innerHTML.includes("fire")){
				e.style.background = "#ff5733"
			}
			else if(e.innerHTML.includes("grass")){
				e.style.background = "#48bb38"
			}
			else if(e.innerHTML.includes("electric")){
				e.style.background = "#c9d339"
			}
			else if(e.innerHTML.includes("ice")){
				e.style.background = "#00ffff"
			}
			else if(e.innerHTML.includes("fighting")){
				e.style.background = "#ce2018"
			}
			else if(e.innerHTML.includes("poison")){
				e.style.background = "#aa18ce"
			}
			else if(e.innerHTML.includes("ground")){
				e.style.background = "#ce7318"
			}
			else if(e.innerHTML.includes("flying")){
				e.style.background = "#2f798d"
			}
			else if(e.innerHTML.includes("psychic")){
				e.style.background = "#ea20a1"
			}
			else if(e.innerHTML.includes("bug")){
				e.style.background = "#178521"
			}
			else if(e.innerHTML.includes("ghost")){
				e.style.background = "#1b4798"
			}
			else if(e.innerHTML.includes("dragon")){
				e.style.background = "#e39a2a"
			}
			else if(e.innerHTML.includes("dark")){
				e.style.background = "#777"
			}
			else if(e.innerHTML.includes("fairy")){
				e.style.background = "#ff5733"
			}
			else if(e.innerHTML.includes("steel"))			
				e.style.background = "#777"
			}) 


}





// BIG CARD

function seeMore(id){
	PokemonGrande(id)
}
function exit(){
	var BigCard = document.getElementById("big-card");
	BigCard.removeChild(document.getElementById("containerBigCard"));
	page.style.display = "flex"

}

// SECTIONS



function section1(){
	page.innerHTML = "";
	PokemonChico(1,20)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button1.classList.add("active")
}


// FILTRER

// FOR TYPE

async function PokemonChicoFiltroNuevo(filtro, empezar, terminar){
	var body = document.getElementById("body")
	body.appendChild(spinner)
	for (var i = empezar ; i <= 700; i++) {
	
	try {

			let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
			let data = await res.json()
			let pokemon = {
				img: data.sprites.other.dream_world.front_default,
				name: data.forms[0].name.toUpperCase(),
				hp: data.stats[0].base_stat,
				experience: data.base_experience,
				atack: data.stats[1].base_stat,
				defense: data.stats[2].base_stat,
				special: data.stats[3].base_stat,
				speed: data.stats[5].base_stat,
				specialDefense: data.stats[4].base_stat,
				type: data.types[0].type.name,
				id: data.id			
			}
			if (pokemon.type === filtro && pokemon.img != null) {
				printLittleCard(pokemon)
			} 
			var contenedor = document.querySelector("#container")
			console.log(contenedor.children.length)

			if (contenedor.children.length >= terminar ) {
				break;
			}
			console.log(terminar)
	}
	catch (error){
		console.log(error)
	}
}
body.removeChild(spinner)
	var inputs = document.querySelectorAll(`input[name="select"]`)
	
	inputs.forEach(e=>{
		e.disabled = false;
	})
	var inputName = document.getElementById("searchNameInput")
	inputName.disabled = false;
	var contenedor = document.querySelector("#container");
	console.log(contenedor.children)
	verifyVisibility = (entries, entry) => {
		if ((entries[0] != undefined) && entries[0].isIntersecting === true) {

			var contenedor = document.querySelector("#container");
			var number = (entries[0].target.firstElementChild.attributes[1].value)
			var array = [];
			for (var i = 1 ; i <= 35 ; i++) {
				array.push(20*i)
			}

			if (array.includes(contenedor.children.length) && verificatorFunction(parseInt(number))) {
				numberNext = (parseInt(number) + 1)
				MorePokemonsFiltrer(numberNext, filtro)
			}
		}
	}
	let observer = new IntersectionObserver(verifyVisibility);
	verifyVisibility(contenedor.lastChild)
	observer.observe(contenedor.lastChild)

}
function MorePokemonsFiltrer(e, filtrer) {
	var container = document.getElementById("container")
	var finish = (container.children.length + 20) 
	PokemonChicoFiltroNuevo(filtrer,e,finish)
}

var verificator = []
 

function verificatorFunction(e){
	if (e === "clean"){
		verificator.length = 0;
		secondValidator = false
	} else{

		var validator = verificator.includes(e)
		if (validator === false) {
			verificator.push(e)
			secondValidator = true
		} else{
			secondValidator = false
		}
		console.log(verificator)

	}
	return secondValidator
}



// FOR NAME

async function PokemonNameFiltrer(name, empezar, terminar){
	var body = document.getElementById("body")
	body.appendChild(spinner)
	var inputs = document.querySelectorAll(`input[name="select"]`)
	inputs.forEach(e=>{
		e.disabled = true;
	})

	// INPUT TEXT STYLE
	var inputName = document.getElementById("searchNameInput")

	inputName.disabled = true;
	inputName.classList.add("inputAfterSearch")
	inputName.classList.remove("inputBeforeSearch")

	// ALERT AND BACKGROUND

	var typeContainer = document.getElementById("type-container")
	typeContainer.classList.add("notFund")	
	for (var i = empezar ; i <= terminar; i++) {
	
	try {

			let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
			let data = await res.json()
			let pokemon = {
				img: data.sprites.other.dream_world.front_default,
				name: data.forms[0].name.toUpperCase(),
				hp: data.stats[0].base_stat,
				experience: data.base_experience,
				atack: data.stats[1].base_stat,
				defense: data.stats[2].base_stat,
				special: data.stats[3].base_stat,
				speed: data.stats[5].base_stat,
				specialDefense: data.stats[4].base_stat,
				type: data.types[0].type.name,
				id: data.id			
			}
			nameValidator = pokemon.name.includes(name.toUpperCase())
			if (nameValidator === true) {
				printLittleCard(pokemon)
			} 
			
	}
	catch (error){
		console.log(error)
	}
}
body.removeChild(spinner)

	var inputs = document.querySelectorAll(`input[name="select"]`)
	
	inputs.forEach(e=>{
		e.disabled = false;
	})
	var inputName = document.getElementById("searchNameInput")
	inputName.disabled = false;	
	var results = page.children.length
	if (results === 0) {
		page.innerHTML = `	
		<section class="no-results">
			<h1 class="text-center m-auto">No results found</h1>
			</section>`
	}
}


let inputTypeContainer = document.querySelector(".search-name-container")

function wordCounter(text) {
	let arr = text.split('')
	return arr.length
}

function displayNone(){
	var boxAlert = document.querySelector(".alt-message-box")
	boxAlert.style.display = "none"
}
	
inputTypeContainer.addEventListener("change", function prueba123(){
		var inputName = document.getElementById("searchNameInput")
		
		// VALIDATIONS
		var pattern = new RegExp('^[A-Z]+$', 'i')
		nameValidator2 = (wordCounter(inputName.value) < 4)
		nameValidator3 = pattern.exec(inputName.value)

	if (nameValidator2 === false && nameValidator3 != null) {
		PokemonNameFiltrer(inputName.value, 1, 700)
	} else if(nameValidator2 === true){
			var containerElement = document.querySelector(".search-name-container")
			var boxAlert = document.createElement("DIV")
			boxAlert.classList.add("alt-message-box")
			boxAlert.innerHTML = `<h4 class="alt-text">The search must have at least 4 characters"</h4>`
			containerElement.appendChild(boxAlert)

	} else if(nameValidator3 === null){
			var containerElement = document.querySelector(".search-name-container")
			var boxAlert = document.createElement("DIV")
			boxAlert.classList.add("alt-message-box")
			boxAlert.innerHTML = `<h4 class="alt-text">Enter only letters to search please</h4>`
			containerElement.appendChild(boxAlert)
	}
})


function resolveBug(){
	var boxAlert = document.querySelectorAll(".alt-message-box")
	boxAlert.forEach(e=>{
		var container = document.querySelector(".search-name-container")
		container.removeChild(e)
	})
}

let pruebaEvent = document.querySelectorAll(".type-item")
pruebaEvent.forEach(e=>{
		e.addEventListener("click", function event(){
				page.innerHTML = "";
				verificatorFunction("clean")
				PokemonChicoFiltroNuevo(this.value, 1, 20);
				var inputs = document.querySelectorAll(`input[name="select"]`)
				if (inputs != undefined) {
					inputs.forEach(e=>{
						e.disabled = true;	
					})
				}
				// INPUT TEXT STYLE
				var inputName = document.getElementById("searchNameInput")
				if (inputName != undefined){
					inputName.disabled = true;
					inputName.classList.add("inputAfterSearch")
					inputName.classList.remove("inputBeforeSearch")			
				}
				var typeContainer = document.getElementById("type-container")
				if(typeContainer != undefined){
					typeContainer.classList.add("notFund")
				}
	})
})


section1()
