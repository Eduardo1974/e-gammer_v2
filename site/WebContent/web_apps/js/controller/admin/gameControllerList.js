eGammerControllers.controller('GameControllerList', function($scope,GameService, $http, $log) {
	
	
	var urlPath = "http://localhost:8080/egammer/game";
 
	$scope.currentPage = 1;
	$scope.itemsPerPage = 4;
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	
	function init() {
    	$scope.loadGames();
    }
	
	$scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	$scope.pageChanged = function() {
	   $log.log('Page changed to: ' + $scope.currentPage);
	};
	  	
    $scope.loadGames = function() {
    	GameService.gameList().then(function (response) {
    		$scope.games =  angular.copy(response.data);
    		console.log($scope.games);	
            
        });
	};

	$scope.gameCancel = function() {

        $scope.btnLabel = "Adicionar";
        $scope.game = null;
    }
	
	$scope.gameEditar = function(obj){
		GameService.label = "Alterar";
		GameService.gameSelecionado = angular.copy(obj);
		document.location.href ='#/game';
	}
	
	$scope.novoGame = function(){
		GameService.label = "Adicionar";
		document.location.href ='#/game';
	}
	$scope.gameDelete = function(codigo){
		
		var data =  codigo;
		
		GameService.gameDelete(data).then(function (response) {
			$scope.loadGames();
        });
	}
	init();
});