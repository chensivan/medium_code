app.controller('condition1',[ '$scope', 'myService', function($scope, myService) {

  $scope.inputVal = ''
  $scope.currentCondition = 1
  $scope.click = function() {
    $scope.display = myService.check($scope.inputVal, $scope.currentCondition);
    $scope.service = myService._serviceVar
  }

}])
