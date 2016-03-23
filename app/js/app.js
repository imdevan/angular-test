require('angular');

var MainController = require('./controllers/MainController');

var app = angular.module('app', []);

// Couldn't get $sceDelegateProvider to register
// Needed to dynamic load youtube videos in pop-up module
// angular.module('app', []).config(function($sceDelegateProvider) {
//   $sceDelegateProvider.resourceUrlWhitelist([
//     'self',
//     'https://www.youtube.com/**',
//     'http://www.youtube.com/**'
//   ]);
// });


app.controller('MainController', ['$scope', MainController]);
