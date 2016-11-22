publication.factory('HearderService', ['$http', function ($http) {
	
	var urlPath = "http://localhost:8080/egammer/game";
	
    return {
    	buscaGenero: _buscaGenero
    };
    
	function _buscaGenero(genero) {
    	var promessa;
    	promessa = jQuery.ajax({
		    url: urlPath + '/buscaGenero'+'?'+'codigo='+genero,
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
}]);

