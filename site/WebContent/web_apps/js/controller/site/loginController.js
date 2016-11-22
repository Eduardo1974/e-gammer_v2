
var app = angular.module('egammer');

app.controller('LoginController', ['$scope', '$http', '$timeout', '$sce', 'ClienteService',
                                   function($scope, $http, $timeout, $sce, clienteService) {

	var CHAVE_STORAGE = 'usuario';
	var urlPath = "http://localhost:8080/egammer/usuario";

	$scope.usuario = {};
	$scope.confirmacao = {};
	$scope.isLogado = false;
	$scope.exibirMensagemErro = false;
	
	$scope.isAtivo = function(tela) {
		return TelaHelper.tela == tela ? 'active' : '';
	};
	

	$scope.doLogin = function() {
		if($scope.usuario.email == null ||  $scope.usuario.senha == null){
			$scope.exibirMensagemErro = true;
			alertify.error('Verifique seu email /ou senha!');
		}else{
			$scope.exibirMensagemErro = false;
			var data = $scope.usuario;
			
			var data1 = JSON.stringify(data);
			
			console.log(data1);
			
			jQuery.ajax({
				
			    url: urlPath + '/login',
			    data: data1,
			    dataType: 'json',
			    contentType: 'application/json',
			    type: 'POST',
			    async: false,
			    success: function (response) {
			    
			    	var usuario = response
			    	if (usuario == null) {
		    			$scope.exibirMensagemErro = true;
		    			return;
			    	}
			    	$scope.usuario = usuario;
			    	StorageHelper.setItem(CHAVE_STORAGE, usuario);
			    	$scope.isLogado = true;
			    	if(response.tipo == "cliente"){
			    		document.location.href='/front-egammer';
			    	}else{
			    		document.location.href='../admin/administrador.html';
			    	} 	
			    }
			});
		}
		
	};
	
	$scope.salvar = function() {
		if($scope.usuario.email == $scope.confirmacao.email &&  $scope.usuario.senha == $scope.confirmacao.senha){
			$scope.exibirMensagemErro = false;
			var data =  $scope.usuario;
			
			clienteService.clienteSave(data).then(function (response) {
				$scope.usuario = null;
				$scope.confirmacao = null;
				document.location.href = "login.html";
				console.log("salvou "+response);
	        });
		}else{
			alertify.error("Confirmção dos campos invalida!!!");

		}
	};
	
	$scope.getMensagemApresentacao = function() {
		return $sce.trustAsHtml("Olá, " + $scope.usuario.nome);
	}
	
	$scope.doLogout	 = function() {
		var data = $scope.usuario;
		
		var data1 = JSON.stringify(data);
		jQuery.ajax({
		    url: urlPath + 'logout.action',
		    dataType: 'json',
		    contentType: 'application/json',
		    data: data1,
		    type: 'POST',
		    async: false,
		    success: function (response) {
				StorageHelper.removeItem(CHAVE_STORAGE);
				$scope.usuario = {};
				$scope.isLogado = false;
		    }
		});
	};
	
	$scope.isLogged = function () {
		var usuario = StorageHelper.getItem(CHAVE_STORAGE);
		if (usuario != null) {
			var agora = new Date().getTime()
			var inicioSessao = usuario.startSession;
			if (inicioSessao + 1200000 <= agora) {
				$scope.usuario = {};
				$scope.isLogado = false;
			} else {
				$scope.usuario = usuario;
				$scope.isLogado = true;
			}
		} else {
			$scope.usuario = {};
			$scope.isLogado = false;
		}
		$scope.$applyAsync();
	};
	
	setTimeout(function() {
		$scope.isLogged();
	}, 0);
}]);