app.factory('PiratesService', function($http) {
    return {
        all: function() {
            return $http.get('/api/v1')
        },
        post: function(newPirate) {
            return $http.post('/api/v1', newPirate)
        }
    }
})
