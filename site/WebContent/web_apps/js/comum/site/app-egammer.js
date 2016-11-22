angular.module('egammer', ['ngRoute']);


angular.module('egammer')
	.config(function($routeProvider){
      
		var path = '/e-gammer/web_apps/html/site/view/';
		
	  $routeProvider
	  
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
		
        .when('/game/:id', {
          templateUrl: path + 'detalhes.html',
          controller: 'DetalhesController'
        })
		
		.otherwise({
          redirectTo: '/home'
        });
	
	});