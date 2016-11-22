eGammerControllers.controller("ProdutosController",  function($scope,serviceAPI,GeneroService,HearderService) {
	
	$scope.currentPage = 1;
	$scope.itemsPerPage = 4;
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	$scope.listGames;
	$scope.generos = {};
	$scope.generoSelecionado;
	$scope.numPeginas = [4, 8, 16];
	
	$scope.filtroSelecionado;
	$scope.filtroPreco = [{nome:' Crescente ', valor: false},
	                      {nome:' Decrescente ', valor: true}];
	
	$scope.game = {
			genero : {
				codigo : null
			}
	};

	function init(){
		loadGames();
		$scope.loadGeneros();
	};
	
	function loadGames (){
		var tmp = serviceAPI.getGames();
		
		if(tmp != null){
			$scope.listGames = tmp;
		}else{
			serviceAPI.buscaTodos().then(function (response) {
				
				$scope.listGames = response.data;
	            
	        });
		}
		 
	}
	
	$scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	$scope.pageChanged = function() {
	   $log.log('Page changed to: ' + $scope.currentPage);
	};
	
	$scope.addCarrinho = function (game){
		game.qtdItem = 1;
		serviceAPI.addCarrinho(game);
	}
	
	$scope.detalhes = function (game){
		serviceAPI.setGameCurrent(game);
	}
	
	$scope.buscaGenero = function(genero){
		$scope.game.genero.gen_codigo = genero
		var data = $scope.game;
		
		HearderService.buscaGenero(genero).then(function (response) {
			serviceAPI.setGames(response);
			console.log(response.contexto.games);
			document.location.href = "#/home";
			document.location.href = "#/produtos";
			
        });
	}

	
	$scope.loadGeneros = function() {
		
		GeneroService.generoList().then(function (response) {
            $scope.generos =  angular.copy(response.data);
            console.log(response.data);
        });
	};
	
	init();
});

	

	
		