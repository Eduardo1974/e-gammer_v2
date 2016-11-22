window.publication =  angular.module('egammer', ['ngAnimate', 'ui.bootstrap','ngRoute','eGammerControllers']);

publication.config(function($routeProvider){

	var path = 'web_apps/html/site/view/';
	$routeProvider

	.when('/games', {
		templateUrl: 'games.html',
		controller: 'GameControllerList'
	})

	.when('/game', {
		templateUrl: 'game.html',
		controller: 'GameController'
	})

	.when('/generos', {
		templateUrl: 'generos.html',
		controller: 'GeneroControllerList'
	})

	.when('/genero', {
		templateUrl: 'genero.html',
		controller: 'GeneroController'
	})

	.when('/desenvolvedoras', {
		templateUrl: 'desenvolvedoras.html',
		controller: 'DesenvolvedoraControllerList'
	})
	.when('/desenvolvedora', {
		templateUrl: 'desenvolvedora.html',
		controller: 'DesenvolvedoraController'
	})

	.when('/home', {
		templateUrl: path + 'principal.view.html',
		controller: 'HomeController'
	})

	.when('/carrinho', {
		templateUrl: path + 'carrinho.view.html',
		controller: 'CarrinhoController'
	})

	.when('/produtos', {
		templateUrl: path + 'produtos.view.html',
		controller: 'ProdutosController'
	})

	.when('/detalhes', {
		templateUrl: path + 'detalhes.view.html',
		controller: 'DetalhesController'
	})

	.when('/pagamento', {
		templateUrl: path + 'pagamento.view.html',
		controller: 'CarrinhoController'
	})

	.otherwise({
		redirectTo: '/home'
	});




});
var StorageHelper = (function(){

	var SH = {};

	SH.setItem = function(chave, valor) {
		window.localStorage.setItem(chave, angular.toJson(valor));
	};

	SH.getItem = function(chave, valor) {
		return angular.fromJson(window.localStorage.getItem(chave));
	};

	SH.removeItem = function(chave) {
		window.localStorage.removeItem(chave);
	}

	return SH;

})();

var TelaHelper = (function(){

	var TH = {};

	TH.tela = '';

	return TH;

})();

window.eGammerControllers = angular.module('eGammerControllers', []);

