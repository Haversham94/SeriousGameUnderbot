'use strict';
gameApp.controller('GameController', function ($scope) {

    $scope.aceLoaded = function (_editor) {
        // Options
        //_editor.setReadOnly(true);

    };

    $scope.aceChanged = function (e) {
    };

    $scope.execute = function (code) {
        // var code1 = code.getValue();
        eval(code);
		current = 0;
    };
});


/*var code = editor.getValue();


Then use javascript to run it. At the simplest level you can just do:

eval(code);
However, you probably don't want to use eval(). Instead you might do something like:

// grabbed from http://stackoverflow.com/questions/6432984/adding-script-element-to-the-dom-and-have-the-javascript-run
var script = document.createElement('script');
try {
  script.appendChild(document.createTextNode(code));
  document.body.appendChild(script);
} catch (e) {
  script.text = code;
  document.body.appendChild(script);
  
}*/
