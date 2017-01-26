/// reference path="js" />

var app = angular.module("Demo",["ngRoute"])
.config(function ($routeProvider) {
	$routeProvider
	.when("/SPA_home", {
		templateUrl: "templates/SPA_home.html",
		controller:"SPA_homeController"
	})
    .when("/SPA_skills", {
		templateUrl: "templates/SPA_skills.html",
		controller:"SPA_skillsController"
	})
    .when("/SPA_contact", {
		templateUrl: "templates/SPA_contact.html",
		controller:"SPA_contactController"
	})

});
.controller("SPA_homecontroller", function ($scope) {
  $.scope.message = "Home Page";
})
.controller("SPA_skillscontroller", function ($scope) {
  $.scope.skills = ["ObjectiveC", "C#", "HTML5", "JS", "BootStrap"];
})
.controller("SPA_contactcontroller", function ($scope) {
  $.scope.contact = "Contact Page";
})