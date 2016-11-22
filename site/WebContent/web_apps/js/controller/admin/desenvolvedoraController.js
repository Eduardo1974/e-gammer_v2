eGammerControllers.controller('DesenvolvedoraController', ['$scope', '$http', '$timeout', '$sce','DesenvolvedoraService',
                                   function($scope, $http, $timeout, $sce,desenvolvedoraService) {

	var CHAVE_STORAGE = 'usuario';
	$scope.desenvolvedora = {};
	$scope.desenvolvedoras ;
	$scope.btnLabel = "Adicionar";
	$scope.isLogado = false;
	$scope.exibirMensagemErro = false;
	
	$scope.isAtivo = function(tela) {
		return TelaHelper.tela == tela ? 'active' : '';
	};
	
    function init() {
    	$scope.btnLabel  = desenvolvedoraService.label;
    	
    	if($scope.btnLabel == "Adicionar"){
    		$scope.desenvolvedora = null;    		
    	}else{		
    		$scope.desenvolvedora = desenvolvedoraService.desSelecionado;
    	}	
    }

	$scope.salvar = function() {
		
		$scope.exibirMensagemErro = false;
		var data =  $scope.desenvolvedora;
		
		desenvolvedoraService.desenvolvedoraSave(data).then(function (response) {
			$scope.desenvolvedora = null;
	    	$scope.loadDesenvolvedoras();
        });
	};
	
	$scope.loadDesenvolvedoras = function() {
		desenvolvedoraService.desenvolvedoraList().then(function (response) {
            $scope.desenvolvedoras =  angular.copy(response.data);
            console.log($scope.desenvolvedoras);
            
        });
	};
	
	$scope.editar = function(obj){
		var data = obj;
		
		desenvolvedoraService.desenvolvedoraEdit(data).then(function (response) {
			$scope.btnLabel = "Adicionar";
			$scope.desenvolvedora = null;
        });
	}
	
	$scope.desenvolvedoraCancel = function() {

        $scope.btnLabel = "Adicionar";
        $scope.desenvolvedora = null;
    }
	
	
	init();
}]);