var app=angular.module("calapp",[]);
app.controller("crtl",function($scope){
    $scope.clean=function(){
        $scope.num1="";
        $scope.num2="";
        $scope.result="";
        $scope.operator="";
    };
    $scope.calculate=function(){
        switch($scope.operator)
        {
            case "+":
                $scope.result=$scope.num1+$scope.num2;
                break;
            case "-":
                $scope.result=$scope.num1-$scope.num2;
                break;
            case "*":
                $scope.result=$scope.num1*$scope.num2;
                break;
            case "/":
                $scope.result=$scope.num1/$scope.num2;
                break;
        };


    };
    
    
});