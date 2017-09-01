'use strict';

//Cars service used for communicating with the articles REST endpoints
angular.module('cars').factory('Cars', ['$resource',
	function($resource) {
		return $resource('cars/:carId', {
			carId: '@_id',
			carMake: '@make'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
])
.service("UrlService", ["$location", function($location) {
    // refernce to service for callbacks
    var __service = this,
        parts = {
            "queryvars": {}
        },
        absUrl = $location.absUrl(),
        // extract and parse url
        elements = absUrl.split("?");

    // query string
    // parse quesry string
    parts["queryString"] = elements[1];
    if ( elements[1] ) {
	    parts["hashString"] = (parts["queryString"].split("#"))[1];
	    parts["requestParams"] = ((parts["queryString"].split("#"))[0]).split("&");
	    
	    parts["requestParams"].forEach(function(queryStringVariable) {
	        var __variable = queryStringVariable.split("=");
	        parts.queryvars[__variable[0]] = __variable[1];
	    });
    }
    // url
    parts["url"] = elements[0];


    // public interface
    // returns variable from query string
    this.getQueryStringVar = function(variable) {
        if (parts.queryvars[variable] !== "undefined") {
            return parts.queryvars[variable];
        }
        return false;
    };


}]);