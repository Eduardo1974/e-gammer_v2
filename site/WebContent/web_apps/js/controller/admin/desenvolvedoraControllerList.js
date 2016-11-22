eGammerControllers.controller('DesenvolvedoraControllerList', ['$scope', '$http', '$timeout', '$sce','DesenvolvedoraService',
                                   function($scope, $http, $timeout, $sce,desenvolvedoraService) {

	$scope.currentPage = 1;
	$scope.itemsPerPage = 4;
	$scope.maxSize = 5;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
	
	$scope.desenvolvedora = {};
	$scope.desenvolvedoras ;
	$scope.btnLabel = "Adicionar";
	$scope.isLogado = false;
	$scope.exibirMensagemErro = false;
	
	
	
    function init() {
    	$scope.loadDesenvolvedoras();
    }
    
    $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	$scope.pageChanged = function() {
	   $log.log('Page changed to: ' + $scope.currentPage);
	};
	
	$scope.loadDesenvolvedoras = function() {
		desenvolvedoraService.desenvolvedoraList().then(function (response) {
            $scope.desenvolvedoras =  angular.copy(response.data);
            console.log($scope.desenvolvedoras);
            
        });
	};
	
	$scope.deselvolvedoraDelete = function(codigo){
		
		var data =  codigo ;
		desenvolvedoraService.desenvolvedoraDelete(data).then(function (response) {
			$scope.desenvolvedora = null;
	    	$scope.loadDesenvolvedoras();
        });
	}
	
	$scope.novaDesevolvedora = function(){
		desenvolvedoraService.label = "Adicionar";
		document.location.href ='#/desenvolvedora';
	}
	
	$scope.desenvolvedoraEditar = function(obj){
		desenvolvedoraService.label = "Alterar";
		desenvolvedoraService.desSelecionado = angular.copy(obj);
		document.location.href ='#/desenvolvedora';
	}
	
	init();
}]);