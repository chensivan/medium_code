app.controller('condition',[ '$scope', 'myService', '$location', function($scope, myService, $location) {

  $scope.inputVal = ''
  $scope.currentCondition = $location.path().split('/')[1]
  $scope.click = function() {
    $scope.display = myService.check($scope.inputVal, $scope.currentCondition);
    $scope.service = myService._serviceVar
  }

}])
