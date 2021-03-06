var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    
    loadCarnivores: function(callbackToInvoke) {
      var carnivoreLoader = new XMLHttpRequest();
      carnivoreLoader.open("GET", "javascripts/carnivores.json");
      carnivoreLoader.send();

      carnivoreLoader.addEventListener("load", function() {
        var carnivoreData = JSON.parse(this.responseText).carnivores;
        callbackToInvoke(carnivoreData);
      });

    },

    loadHerbivores: function(callbackToInvoke) {
      var herbivoreLoader = new XMLHttpRequest();
      herbivoreLoader.open("GET", "javascripts/herbivores.json");
      herbivoreLoader.send();

      herbivoreLoader.addEventListener("load", function() {
      var herbivoreData = JSON.parse(this.responseText).herbivores;
      callbackToInvoke(herbivoreData);
      });
    } /* Could keep adding, just add comma! */
  }

})();

/* Ending () immediately calls the function */