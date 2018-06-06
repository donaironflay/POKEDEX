// Declaracion del scripy
var Pokemon = angular.module("Pokemon",[]);

//Se empieza a declarar variables 
Pokemon.controller("ListadoPokemon", function($scope,$http) {
  $scope.conteo = 0;
  $scope.Poke = [];
  
//Se crea el ciclo for con las variables creadas
  for (var i=1;i<=900;i++) {
    $scope.conteo = $scope.conteo + 1;
    $http({
      method: 'POST',
      url: "https://pokeapi.co/api/v2/pokemon/" + $scope.conteo
      //Se crea nuevamente un ciclo for para que el ciclo de creacion se repita  
    }).then(function successCallback(response) {
      for (var x = 0; x <= i; x++) {
         //Se creo un ciclo if para que se repita la creacion de imagenes HD con 
         if (response.data.id == x) {
           $scope.Poke[x] = {"data":response.data}
           if (x <10) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
           } else if (x >= 10 && x <= 99) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
           } else if (x >=100) {
             $scope.PokePicture = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+x+".png";
             $scope.Poke[x].sprites = {"front_default":$scope.PokePicture}
           }
         }
       }
    }), function errorCallback(response) {
      console.log("Error");
    }
  }
})
