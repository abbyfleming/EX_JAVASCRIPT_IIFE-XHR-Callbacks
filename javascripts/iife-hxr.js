function showCarnivores (carnivoreData) {
	carnivoreData.forEach(function(scaryCarnivores) {
	//console.log("Carnivores", scaryCarnivores);
	document.getElementById("carnivores").innerHTML += scaryCarnivores + "<br>";
});
}

function showHerbivores (herbivoreData) {
	herbivoreData.forEach(function(friendlyHerbivores) {
	//console.log("Herbivores", friendlyHerbivores);
	document.getElementById("herbivores").innerHTML += friendlyHerbivores + "<br>";
});
}

Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);

