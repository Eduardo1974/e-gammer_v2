	
eGammerControllers.controller("CarrinhoController",  function($scope, serviceAPI) {
	
	
	$scope.removerItem = _removerItem;
	$scope.updateCarrinho = _updateCarrinho;
	$scope.calculaTotal = _precoTotal;
	$scope.finalizarCompra = _finalizarCompra;
	$scope.comprar = _comprar;
	$scope.confirmarCompra = _confirmarCompra;
	
	var cliente;
	$scope.lista = [];
	$scope.qtdLista = serviceAPI.getValoresQtds();
	$scope.listaVazia = false;
	$scope.valor = {subtotal: 0, desconto: 0, total: 0};
	$scope.dadosPedido = [];
	$scope.pedido; 
	
	init();
	
	function init(){
		loadCliente();
		getCarrinho();
		verificaLista();
		_precoTotal();
	}
	
	function loadPedido(){
		if(cliente == null){
			document.location.href = 'web_apps/html/site/login.html';
		}else{
			$scope.pedido = {
					usuario:{
						codigo: cliente[0].codigo,
						nome: cliente[0].nome,
						tipo: cliente[0].tipo
					},
					valorTotal: $scope.valor.total,
					itensPedido: $scope.dadosPedido
			};
		}
	}
	
	function loadCliente(){
		var tmp = StorageHelper.getItem('usuario');
		if(tmp != null){
			cliente = tmp;
		}else{
			cliente = null;
		}
	}
	 
	function montaPedido(){
		var lista = $scope.lista;
		console.log(lista);
		
		angular.forEach(lista, function (value, key) {
			var gameCarrinho = {codigo: lista[key].codigo, classificacao: lista[key].classificacao, 
					dataLancamento: lista[key].dataLancamento, descricao: lista[key].descricao, desenvolvedora: lista[key].desenvolvedora, genero:lista[key].genero };
			var qtd =  lista[key].qtdItem;
			var preco = lista[key].preco;
			var precoTotal = (lista[key].qtdItem * lista[key].preco);    
			var codigo = lista[key].codigo;  
			var obj = {quantidade:qtd, precoUnit:preco, precoTotal:precoTotal, game:gameCarrinho};
			$scope.dadosPedido.push(obj);
	    });
	}
	
/** função que seta a lista de carrinho	*/	
	function getCarrinho(){
		var carrinho = StorageHelper.getItem('carrinho');
		if(carrinho != null){
			$scope.lista = carrinho;
		}else{
			$scope.lista = [];
		}
	}
	
	
/** função que verifica se a lista está vazia */	
	function verificaLista(){
		if($scope.lista.length > 0){
			$scope.listaVazia = true;
		}else{
			$scope.listaVazia = false;
		}
	}
	
	function _updateCarrinho(index, quant){
		console.log(index + ' : ' + quant);
		serviceAPI.updateCarrinho(index, quant); //atualizará o carrinho da service e do storage
		$scope.calculaTotal(); //irá calcular o valor da compra
	}
	
/**	esta função calcula o preço total da lista de produtos	*/	
	function _precoTotal(){
		var lista = $scope.lista;
		if(lista.length){
			var subtotal = 0;
			/** aqui pega o valor de cada produto da lista e a quantidade, para calcular o subtotal */
			angular.forEach(lista, function (value, key) {
				var preco = lista[key].preco;
				var qtdItem = lista[key].qtdItem;
				subtotal = subtotal + (preco * qtdItem);
				if(subtotal > 200){
					$scope.valor.desconto = (subtotal/99); //irá receber 1% de desconto acima de 200 reais
				}else{
					$scope.valor.desconto = 0;
				}
		    });
			$scope.valor.subtotal = subtotal;
			$scope.valor.total = subtotal - $scope.valor.desconto;
		}else{
			$scope.valor.subtotal = 0;
			$scope.valor.total = 0;
		}
		
	}
/** esta função recebe uma posição, e remove da lista o produto escolhido	*/	
	function _removerItem(posicao){
		serviceAPI.delCarrinho(posicao);
		getCarrinho();
		verificaLista();
		_precoTotal();
	}
	
	function _finalizarCompra () {
		if($scope.lista.length == 0){
			alertify.alert(' Ops! parece que não há produtos aqui..');
			return;
		}
		montaPedido();
		loadPedido(); //carrega os pedidos para finalizar a compra
		serviceAPI.setPedido($scope.pedido);
		document.location.href = '#/pagamento';
	}
	
	function _confirmarCompra(){
		var pre = document.createElement('pre');
		var message = 'Deseja finalizar sua compra?';
		pre.style.maxHeight = "400px";
		pre.style.overflowWrap = "break-word";
		pre.style.margin = "-16px -16px -16px 0";
		pre.style.paddingBottom = "24px";
		pre.appendChild(document.createTextNode(message));
		//show as confirm
		alertify.confirm(pre, function(){
			    $scope.comprar();
			    alertify.success('Sua compra foi realizada com sucesso');
		    },function(){
		        alertify.success('Continuar compras');
		}).setting('labels',{'ok':'Aceitar', 'Cancelar': 'Cancelar'});
	}
	
	function _comprar() {
		$scope.pedido = serviceAPI.getPedido();
		if($scope.pedido == null){
			montaPedido();
			loadPedido(); //carrega os pedidos para finalizar a compra
			serviceAPI.setPedido($scope.pedido);
		}
		var data = $scope.pedido;
		var token = cliente[1].token;
		console.log(token);
		console.log(data);
		serviceAPI.pedidoSave(data,token).then(function (response) {
			document.location.href = '#/home';
        }); 
	}
});