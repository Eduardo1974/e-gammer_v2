publication.factory('ClienteService', ['$http', function ($http) {
	
	var urlPath = "http://localhost:8080/egammer/usuario";
	
    return {
    	clienteList: _clienteList,
    	clienteSave: _clienteSave,
    	clienteEdit: _clienteEdit,
    	clienteDelete: _clienteDelete
    };
    
    function _clienteList() {
    	var promessa;
    	promessa = $http.get(urlPath + 'listar.action', {
			cache : false
		}).success(function(response) {
			return promessa.data;
		});
    	return promessa;
    }
    
    function _clienteSave(cliObj) {
    	var data = JSON.stringify(cliObj);
    	var promessa;
    	promessa = jQuery.ajax({
		    url: urlPath ,
		    data: data,
		    dataType: 'json',
		    contentType: 'application/json',
		    type: 'POST',
		    async: false,
		    success: function (response) {
		    	return promessa;
		    }
		});
    	return promessa;
    }
    
    function _clienteEdit(desObj) {
    	var data = JSON.stringify(desObj);
    	var promessa;
    	promessa = jQuery.ajax({
    		url: urlPath,
		    data: data,
		    dataType: 'json',
		    contentType: 'application/json',
		    type: 'POST',
		    async: false,
		    success: function (response) {
		    	return promessa;
		    }
		});
    	return promessa;
    }

	function _clienteDelete(desObj) {
		var data = JSON.stringify(desObj);
    	var promessa;
    	promessa = jQuery.ajax({
		    url: urlPath ,
		    data: data,
		    dataType: 'json',
		    contentType: 'application/json',
		    type: 'POST',
		    async: false,
		    success: function (response) {
		    	return promessa;
		    }
		});
    	return promessa;
	}
}]);

