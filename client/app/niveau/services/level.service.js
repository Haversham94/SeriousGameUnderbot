niveauApp.factory('NiveauAppService', function ($resource, CONSTANT) {


    return {

        getLevels: $resource(CONSTANT.ENDPOINT + '/levels/:path', {}, {
            call: {
                method: 'GET',
                params: {
                    path: '@_path'
                }
            }
        })
    };

});
