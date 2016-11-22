
eGammerControllers.controller('GeneroController', ['$scope', '$http', '$timeout', '$sce','GeneroService',
                                   function($scope, $http, $timeout, $sce, generoService) {
	
	var CHAVE_STORAGE = 'usuario';
	$scope.genero = {};
	$scope.generos ;
	$scope.btnLabel = "Adicionar";
	$scope.isLogado = false;
	$scope.exibirMensagemErro = false;
	
	$scope.isAtivo = function(tela) {
		return TelaHelper.tela == tela ? 'active' : '';
	};
	
	
    function init() {
    	$scope.btnLabel  = generoService.label;
    	
    	if($scope.btnLabel == "Adicionar"){
    		$scope.genero = null;    		
    	}else{		
    		$scope.genero = generoService.genSelecionado;
    	}
    }

	$scope.salvar = function() {
		$scope.exibirMensagemErro = false;
		var data = $scope.genero;
		
		generoService.generoSave(data).then(function (response) {
			$scope.genero = null;
        });
	};
	
	$scope.generoDelete = function(codigo){
		
		var data = codigo;
	
		generoService.generoDelete(data).then(function (response) {
			$scope.genero = null;
        });
	}
	
	$scope.editar = function(obj){
		var data =  obj;
		
		generoService.generoEdit(data).then(function (response) {
			$scope.btnLabel = "Adicionar";
			$scope.genero = null;
        });
	}
	
	$scope.generoCancel = function() {

        $scope.btnLabel = "Adicionar";
        $scope.genero = null;
    }
	
	init();
}]);