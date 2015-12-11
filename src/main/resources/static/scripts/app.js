angular.module('aplikasiBarang', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/',{
				'templateUrl': 'views/home.html',
				'controller': 'barangController'
			});
	});
