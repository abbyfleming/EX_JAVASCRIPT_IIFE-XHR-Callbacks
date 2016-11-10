function showCarnivores (carnivoreData) {
	carnivoreData.forEach(function(scaryCarnivores) {
	document.getElementById("carnivores").innerHTML += scaryCarnivores + "<br>";
});
}

function showHerbivores (herbivoreData) {
	herbivoreData.forEach(function(friendlyHerbivores) {
	document.getElementById("herbivores").innerHTML += friendlyHerbivores + "<br>";
});
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

