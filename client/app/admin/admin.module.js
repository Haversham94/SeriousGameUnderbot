'use strict';
//@author : generate and maintained by ~~|Rodolphe AGUIDISSOU|~~
//Module Admin 

//MODULE ADMIN 
/*We load ALL dependances of front end modules that we need just for this module
and different sub-modules necessary (eg: constantApp) */
var adminApp = angular.module('adminApp', [
    'authApp',
    'cgNotify',
    'ngFileReader',
    'ui.router',
    'constantApp' //this is a sub-module needful for the module admin
]);

//NOTE :in files *.module.js where we define module, you can see dependence between modules
//Here for example adminApp depend on constantApp || we did not load it for anything !!(^_^)!!
