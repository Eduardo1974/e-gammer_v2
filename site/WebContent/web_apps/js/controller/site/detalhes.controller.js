
eGammerControllers.controller("DetalhesController",  function($scope, serviceAPI) {
	
	$scope.addCarrinho = _addCarrinho;
	
	$scope.game;
	
	$scope.similares = [];
	$scope.qtdLista = serviceAPI.getValoresQtds();
	
	function init(){
		loadGame();
	}
	
	init();
	
	function loadGame(){
		var game = serviceAPI.getGameCurrent();
		// varifica se o objeto é vazio
		if(Object.keys(game).length !== 0){		
			$scope.game = game;
			$scope.game.qtdItem = 1;
		}else{
			document.location = '#home';
		}
	}
	
	function _addCarrinho(game){
		serviceAPI.addCarrinho(game);
		
	}
	
});
