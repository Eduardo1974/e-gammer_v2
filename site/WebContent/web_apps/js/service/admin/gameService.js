publication.factory('GameService',  ['$http', function ($http) {
	
	var urlPath = "http://localhost:8080/egammer/game";
	
	return {
		gameSave: _gameSave,
		editarGame: _editarGame,
		gameDelete : _gameDelete,
		gameList: _gameList
    };
    
   function _gameSave(gamObj) {
    	var data = JSON.stringify(gamObj);
    	console.log(data);
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
   
    function _editarGame(gamObj) {
	   	var data = JSON.stringify(gamObj);
	   	var promessa;
	   	console.log(data);
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
    
    function _gameDelete(gamObj) {
		var data = JSON.stringify(gamObj);
    	var promessa;
    	promessa = jQuery.ajax({
		    url: urlPath +'?' + $.param({"codigo": gamObj}),
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
    
    function _gameList() {
    	var promessa;
    	promessa = $http.get(urlPath + '/all', {
			cache : false
		}).success(function(response) {
			return promessa.data;
		});
    	return promessa;
    }
}]);
