angular.module("egammer").factory("serviceAPI",  serviceAPI);

	function serviceAPI($http) {
		
		var urlPath = "http://localhost:8080/egammer/game";
		var urlPathPedido = "http://localhost:8080/egammer/pedido";
	
		var games;
		var pedido;
		var carrinho;
		var gameCurrent = {};
		var valorQtds = [1, 2, 3];
		
		return {
			setGamesDestaques: _setDestaques,
			getGamesDestaques: _getDestaques,
			
			getGameCurrent: _getCurrent,
			setGameCurrent: _setCurrent,
			
			recuperar: get,
			listDestaques: _listDestaques,
			
			setGames: _setGames,
			getGames: _getGames,
			
			addCarrinho: _addCarrinho,
			updateCarrinho: _updateCarrinho,
			delCarrinho: _delCarrinho,
			
			getValoresQtds: _getQtds,
			getQtdItensCarrinho: _getQtdItens,
			buscaPorTitulo: _buscaPorTitulo,
			buscaTodos: _buscaTodos,
			pedidoSave: _pedidoSave,
			
			getPedido: _getPedido,
			setPedido: _setPedido
		};
		
		function _getQtds(){
			return valorQtds;
		}
		
		function _getQtdItens(){
			carrinho = StorageHelper.getItem('carrinho');
			if(carrinho != null){
				return carrinho.length;
			}else{
				carrinho = [];
				return 0;
			}
		}
		function confirmarCompra(game){
			var pre = document.createElement('pre');
			var message = 'Adicionar '+game.titulo+' ao carrinho?';
			pre.style.maxHeight = "400px";
			pre.style.overflowWrap = "break-word";
			pre.style.margin = "-16px -16px -16px 0";
			pre.style.paddingBottom = "24px";
			pre.appendChild(document.createTextNode(message));
			//show as confirm
			alertify.confirm(pre, function(){
					carrinho.push(game);
					StorageHelper.setItem('carrinho', carrinho);
					document.location.href = '#/carrinho';
			        alertify.success('Adicionado com sucesso');
			    },function(){
			        alertify.error('O jogo não foi adicionado');
			    }).setting('labels',{'ok':'Aceitar', 'Cancelar': 'Cancelar'});
		}
		
		function _addCarrinho(game){
			confirmarCompra(game);
		}
		
		function _updateCarrinho(index, quant){
			carrinho[index].qtdItem = quant;
			StorageHelper.setItem('carrinho', carrinho);
		}
		
		function confirmarRemocao(posicao){
			var pre = document.createElement('pre');
			var message = 'Deseja remover este produto?';
			pre.style.maxHeight = "400px";
			pre.style.overflowWrap = "break-word";
			pre.style.margin = "-16px -16px -16px 0";
			pre.style.paddingBottom = "24px";
			pre.appendChild(document.createTextNode(message));
			//show as confirm
			alertify.confirm(pre, function(){
					carrinho.splice(posicao, 1);
					StorageHelper.setItem('carrinho', carrinho);
					document.location.href = '#/home';
					document.location.href = '#/carrinho';
			        alertify.success('Removido com sucesso');
			    },function(){
			        alertify.error('Operação cancelada');
			    }).setting('labels',{'ok':'Aceitar', 'Cancelar': 'Cancelar'});
		}
		
		function _delCarrinho(posicao){
			confirmarRemocao(posicao);
		}
		
		function _getDestaques(){
			var promo = this.games;
			return promo;
		}
		
		function _setDestaques(games) {
			this.games = games;
		}
		
		function _getPedido(){
			var pedido = this.pedido;
			return pedido;
		}
		
		function _setPedido(pedido) {
			this.pedido = pedido;
		}
		
		function _getGames(){
			return this.games;
		}
		
		function _setGames(games) {
			this.games = games;
		}
		
		function _getCurrent(){
			return gameCurrent;
		}
		
		function _setCurrent(game){
			gameCurrent = game;
		}
		
		function get(id) {
		  return games[id];
		}
		
		function _listDestaques() {
	    	var promessa;
	    	promessa = $http.get(urlPath + '/buscaDestaques', {
				cache : false
			}).success(function(response) {
				return promessa.data;
			});
	    	return promessa;
	    }
		
		function _buscaTodos() {
	    	var promessa;
	    	promessa = $http.get(urlPath + '/all', {
				cache : false
			}).success(function(response) {
				return promessa.data;
			});
	    	return promessa;
	    }
		
		function _buscaPorTitulo(gamObj) {
	    	var promessa;
	    	promessa = jQuery.ajax({
	    		url: urlPath + '/buscaTitulo'+'?'+'titulo='+gamObj,
			    dataType: 'json',
			    contentType: 'application/json',
			    type: 'GET',
			    async: false,
			    success: function (response) {
			    	return promessa;
			    }
			});
	    	return promessa;
	    }
		
		function _pedidoSave(pedObj,token) {
	    	var data = JSON.stringify(pedObj);
	    	console.log(data);
	    	var promessa;
	    	promessa = jQuery.ajax({
			    url: urlPathPedido,
			    data: data,
			    dataType: 'json',
			    headers:{
			    	'Authorization':token
			    },
			    contentType: 'application/json',
			    type: 'POST',
			    async: false,
			    success: function (response) {
			    	return promessa;
			    }
			});
	    	return promessa;
	    }
		
		
	}