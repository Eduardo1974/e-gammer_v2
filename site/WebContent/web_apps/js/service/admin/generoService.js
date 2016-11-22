publication.factory('GeneroService', ['$http', function ($http) {
	
	var urlPath = "http://localhost:8080/egammer/genero";
	
    return {
        generoList: _generoList,
        generoSave: _generoSave,
        generoEdit: _generoEdit,
        generoDelete: _generoDelete
    };
    
    function _generoList() {
    	var promessa;
    	promessa = $http.get(urlPath + '/all', {
			cache : false
		}).success(function(response) {
			return promessa.data;
		});
    	return promessa;
    }
    
    function _generoSave(genObj) {
    	var promessa;
    	var data = JSON.stringify(genObj);
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
    
    function _generoEdit(genObj) {
    	var promessa;
    	var data = JSON.stringify(genObj);
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

	function _generoDelete(genObj) {
		var promessa;
    	promessa = jQuery.ajax({
			
    		url: urlPath + '?' + $.param({"codigo": genObj}),
		    dataType: 'json',
		    contentType: 'application/json',
		    type: 'DELETE',
		    async: false,
		    success: function (response) {
		    	return promessa;
		    }
		});
    	return promessa;
	}
}]);

