adminApp.directive('fdInput', [function () {
    return {
        link: function (scope, element, attrs) {
            element.on('change', function (evt) {
                var files = evt.target.files;
                console.log(files[0]);
                console.log(evt);
            });
        }
    }
}]);
