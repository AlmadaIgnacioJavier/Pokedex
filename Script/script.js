let page = document.getElementById("container");
let body = document.getElementById("body");
let sectionButton = document.getElementById("section-button");
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
	var sectionButton = document.getElementById("section-button");
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
				<img src="${pokemon.img}">
				<p class="name"><b class="name-b">${pokemon.name}</b> <span class="hp">${pokemon.hp} Hp</span> </p>
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
	var sectionButton = document.getElementById("section-button");
	sectionButton.style.display = "block"
	page.style.display = "flex"

}

// SECTIONS

let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let button3 = document.querySelector(".button-3");
let button4 = document.querySelector(".button-4");
let button5 = document.querySelector(".button-5");
let button6 = document.querySelector(".button-6");
let button7 = document.querySelector(".button-7");

const buttons = []
buttons.push(button1, button2, button3, button4, button5, button6, button7)



function section1(){
	page.innerHTML = "";
	PokemonChico(1,100)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button1.classList.add("active")
}
function section2(){
	page.innerHTML = "";
	PokemonChico(101,200)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button2.classList.add("active")
}
function section3(){
	page.innerHTML = "";
	PokemonChico(201,300)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button3.classList.add("active")
}
function section4(){
	page.innerHTML = "";
	PokemonChico(301,400)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button4.classList.add("active")	
}
function section5(){
	page.innerHTML = "";
	PokemonChico(401,500)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button5.classList.add("active")	
}
function section6(){
	page.innerHTML = "";
	PokemonChico(501,600)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button6.classList.add("active")	
}
function section7(){
	page.innerHTML = "";
	PokemonChico(601,700)
	buttons.forEach(e=>{
		e.classList.remove("active")
	})
	button7.classList.add("active")	
}


// FILTRER

// FOR TYPE




async function PokemonChicoFiltroNuevo(filtro, empezar, terminar){
	page.innerHTML = "";
	var body = document.getElementById("body")
	body.appendChild(spinner)
	var sectionsButton = document.getElementById("section-button")
	body.removeChild(sectionsButton)
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
			if (pokemon.type === filtro && pokemon.img != null) {
				printLittleCard(pokemon)
			} 
			
	}
	catch (error){
		console.log(error)
	}
}
body.removeChild(spinner)
}


let validator = 0;

async function changeFiltrer(){
	checked = document.querySelectorAll(`input[name="select"]:checked`)
	if (validator === 0) {
		PokemonChicoFiltroNuevo(checked[0].value, 1, 800);
		validator++;
		var inputs = document.querySelectorAll(`input[name="select"]`)
		inputs.forEach(e=>{
			e.disabled = true;

		// INPUT TEXT STYLE
		var inputName = document.getElementById("searchNameInput")

		inputName.disabled = true;
		inputName.style.background = "rgba(255, 255, 255, 0.5)"
		inputName.style.border = "none"
		inputName.style.padding = "3px"		
	})
	var typeContainer = document.getElementById("type-container")
	typeContainer.classList.add("notFund")
	var alert = document.getElementById("alert-message")
	alert.style.display = "block"
}}

var typeContainer = document.getElementById("type-container")

typeContainer.addEventListener("mouseover", function yellowAlert(){
	var alert = document.querySelector(".alert-message")
	alert.style.color = "yellow";
})

typeContainer.addEventListener("mouseout", function yellowAlertQuit(){
	var alert = document.querySelector(".alert-message")
	alert.style.color = "#ff4646";
})


// FOR NAME

async function PokemonNameFiltrer(name, empezar, terminar){
	page.innerHTML = "";
	var body = document.getElementById("body")
	body.appendChild(spinner)
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
		var inputs = document.querySelectorAll(`input[name="select"]`)
		inputs.forEach(e=>{
			e.disabled = true;
		})

		// INPUT TEXT STYLE
		var inputName = document.getElementById("searchNameInput")

		inputName.disabled = true;
		inputName.style.background = "rgba(255, 255, 255, 0.5)"
		inputName.style.border = "none"
		inputName.style.padding = "3px"

		// ALERT AND BACKGROUND

		var typeContainer = document.getElementById("type-container")
		typeContainer.classList.add("notFund")
		var alert = document.getElementById("alert-message")
		alert.style.display = "block"
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

section1()
