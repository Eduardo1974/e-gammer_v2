publication.factory('DesenvolvedoraService', ['$http', function ($http) {
	
	var urlPath = "http://localhost:8080/egammer/desenvolvedora";
	
    return {
        desenvolvedoraList: _desenvolvedoraList,
        desenvolvedoraSave: _desenvolvedoraSave,
        desenvolvedoraEdit: _desenvolvedoraEdit,
        desenvolvedoraDelete: _desenvolvedoraDelete
    };
    
    function _desenvolvedoraList() {
    	var promessa;
    	promessa = $http.get(urlPath + '/all', {
			cache : false
		}).success(function(response) {
			return promessa.data;
		});
    	return promessa;
    }
    
    function _desenvolvedoraSave(desObj) {
    	var data = JSON.stringify(desObj);
    	alert(data);
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
    
    function _desenvolvedoraEdit(desObj) {
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

	function _desenvolvedoraDelete(desObj) {
    	var promessa;
    	promessa = jQuery.ajax({
		    url: urlPath+'?' + $.param({"codigo": desObj}),
		    type: 'DELETE',
		    async: false,
		    success: function (response) {
		    	return promessa;
		    }
		});
    	return promessa;
	}
}]);

