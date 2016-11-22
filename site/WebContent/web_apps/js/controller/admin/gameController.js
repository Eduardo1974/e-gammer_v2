
eGammerControllers.controller('GameController', function($scope,GameService, $http, $log, GeneroService,DesenvolvedoraService) {
	
	
	var CHAVE_STORAGE = 'usuario';
	var urlPath = "http://localhost:8080/egammer/game";
 
	$scope.classificacao = {
	    selecionado: null,
	    faixa: [
	      {id: '1', tipo: 'L'},
	      {id: '2', tipo: '10'},
	      {id: '3', tipo: '12'},
	      {id: '4', tipo: '14'},
	      {id: '5', tipo: '16'},
	      {id: '6', tipo: '18'}
	    ],
	};
	
	$scope.plataforma = {
		    selecionado: null,
		    tipos: [
		      {id: '1', tipo: 'PS4'},
		      {id: '2', tipo: 'PS3'},
		      {id: '3', tipo: 'XBOX 360'},
		      {id: '4', tipo: 'XBOX ONE'},
		      {id: '5', tipo: 'PS VITA'},
		      {id: '6', tipo: 'PC'}
		    ],
		};
	
	$scope.game = {
			desenvolvedora : {
				codigo: null
			},
			genero : {
				codigo : null
			}
	};
	
	$scope.data;
	$scope.games ;
	$scope.generos ;
	$scope.desenvolvedoras ;
	$scope.btnLabel = "Adicionar";
	$scope.isLogado = false;
	$scope.exibirMensagemErro = false;

	$(document).ready(function () {
	    $('.datepicker').datepicker({
	        format: 'dd/mm/yyyy',                
	        language: 'pt-BR'
	        	 
	    });
	});

	$(".datepicker").blur("click", function() {
		$scope.data = $("#agregar").datepicker("getDate");
        console.log( $scope.data);
	});
	 
	$scope.isAtivo = function(tela) {
		return TelaHelper.tela == tela ? 'active' : '';
	};
	
	function toDate(dateStr) {
	    var parts = dateStr.split("-");
	    var p2 = parts[2].split("T");
	    return p2[0]+"/"+parts[1]+"/"+parts[0];
	}
	
	function getDes() {
		console.log(document.getElementById("desValue").value);
	};
	
    function init() {
    	
    	$scope.btnLabel  = GameService.label;
    	
    	if($scope.btnLabel == "Adicionar"){
    		$scope.game = null;
    		$scope.data = null;
    		$scope.getGenero();
        	$scope.getDesenvolvedora();
    	}else{
    		$scope.getGenero();
        	$scope.getDesenvolvedora();
    		$scope.game = GameService.gameSelecionado;
    		$scope.classificacao.selecionado =  $scope.game.classificacao;
    		$scope.plataforma.selecionado = $scope.game.plataforma;
    		$scope.data = $scope.game.dataLancamento;
    		var from = toDate($scope.game.dataLancamento); 
    		$("#agregar").datepicker('setDate', from);
    	}
    }
    
    
	$scope.salvar = function() {
		$scope.game.dataLancamento = $scope.data;
		$scope.game.classificacao = $scope.classificacao.selecionado;
		$scope.game.plataforma = $scope.plataforma.selecionado; 
		var data =  $scope.game;
		
		GameService.gameSave(data).then(function (response) {
			$scope.game = null;
        });
	};
	
	
	
	$scope.editar = function(obj){
		$scope.game.dataLancamento = $scope.data;
		$scope.game.gam_classificacao = $scope.classificacao.selecionado;
		$scope.game.gam_plataforma = $scope.plataforma.selecionado; 
		var data =  obj;
		
		
		GameService.editarGame(data).then(function (response) {
			$scope.game = null;
        });
	}
	
	$scope.gameCancel = function() {

        $scope.btnLabel = "Adicionar";
        $scope.game = null;
        $scope.classificacao.selecionado =  null;
		$scope.plataforma.selecionado = null;
		$("#agregar").datepicker('setDate', "");
    }
	
	
	$scope.getGenero = function(){
		GeneroService.generoList().then(function (response) {
            $scope.generos =  angular.copy(response.data);
            console.log($scope.generos);
        });
	}
	
	$scope.getDesenvolvedora = function(){
		DesenvolvedoraService.desenvolvedoraList().then(function (response) {
            $scope.desenvolvedoras =  angular.copy(response.data);
            console.log($scope.desenvolvedoras);
        });
	}
	init();

});