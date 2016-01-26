adminApp.factory('AdminAppService', function ($resource, CONSTANT) {


    return {

        createUsers: $resource(CONSTANT.ENDPOINT + '/users/createUsers', {}, {
            call: {
                method: 'POST',

            }
        })
    }

});
