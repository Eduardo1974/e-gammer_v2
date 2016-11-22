
eGammerControllers.controller('GeneroControllerList', ['$scope', '$http', '$timeout', '$sce','$log','GeneroService',
                                   function($scope, $http, $timeout, $sce,$log, generoService) {
	
	$scope.currentPage = 1;
	$scope.itemsPerPage = 4;
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	
	$scope.genero = {};
	$scope.generos ;
	$scope.btnLabel = "Adicionar";
	$scope.isLogado = false;
	$scope.exibirMensagemErro = false;
	
	
	
    function init() {
    	$scope.loadGeneros();
    }

    $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	$scope.pageChanged = function() {
	   $log.log('Page changed to: ' + $scope.currentPage);
	};
	
	$scope.loadGeneros = function() {
		
		generoService.generoList().then(function (response) {
            $scope.generos =  angular.copy(response.data);
            console.log($scope.generos);
        });
	};
	
	$scope.generoDelete = function(codigo){
		
		var data =  codigo;
		
		generoService.generoDelete(data).then(function (response) {
			$scope.genero = null;
			$scope.loadGeneros();
        });
	}
	
	$scope.novoGenero = function(){
		generoService.label = "Adicionar";
		document.location.href ='#/genero';
	}
	
	$scope.generoEditar = function(obj){
		generoService.label = "Alterar";
		generoService.genSelecionado = angular.copy(obj);
		document.location.href ='#/genero';
	}
	
	init();
}]);