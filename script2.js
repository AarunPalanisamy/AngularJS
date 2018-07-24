 var mainApp = angular.module("myapp", []);
         
// student Tag will be encountered over here from html tag 
mainApp.directive('student', function() {
   var directive = {};
   directive.restrict = 'E'; // restrict to elements in html 
   directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
   //replaces complete element with its text
   directive.scope = {
      student : "=name"
   }
   //will be called once app starts we can do css even with this 
   directive.compile = function(element, attributes) {
      // link with each element with scope , to get element specfic data 
      var linkFunction = function($scope, element, attributes) {
         element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
      }
      return linkFunction;
   }
   
   return directive;
});

mainApp.controller('Controller', function($scope) {
    console.log("Entering into Controller");
   $scope.Arun = {};
   $scope.Arun.name = "Arun Palanisamy";
   $scope.Arun.rollno  = 1;

   $scope.Ramesh = {};
   $scope.Ramesh.name = "CatRR Ramesh";
   $scope.Ramesh.rollno  = 2;

   $scope.Sharif = {};
   $scope.Sharif.name = "Local Hero";
   $scope.Sharif.rollno = "3";
});
console.log("Wowiee");
mainApp.controller('myCtrl', function($scope, $timeout){
    console.log("Coming inside");
    $scope.fname = "Arun";
    $timeout(function(){
        $scope.lname="Rockstar"; },2000);
    $scope.changeName = function(){
        $scope.fname ="aRuN";
    } 
    
});
/* Factory */
     mainApp.factory('resultService',function(){
    var factory = {};
    factory.add = function(a,b){
        console.log("hey",a+b);

        return a+b;
    } 
    return factory;
});

/*Services*/  
    mainApp.service('addService', function(resultService){
    this.add = function(a,b) {
        console.log("Values are ",a,b);
       return resultService.add(a,b);
    }
 });

    mainApp.controller('Marks', function($scope, addService) {
    $scope.add = function() {
       $scope.result = addService.add($scope.number.field1,$scope.number.field2);
    }
 });