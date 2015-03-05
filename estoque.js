var myApp = angular.module('myApp',[]);
myApp.controller('CartController',['$scope',       function($scope) {
$scope.exibirAdd = false;
$scope.bill = {};

$scope.items = [
{name: 'Item 1', quantity: 8, price: 3.95},
{name: 'Item 2', quantity: 17, price: 12.95},
{name: 'Item 3', quantity: 5, price: 6.95}
];
$scope.remove = function(index) {
$scope.items.splice(index, 1);
};
  
$scope.name = 'Teste';
$scope.price = '2';
  
$scope.addItem = function() {
$scope.items.push({ 
 name: $scope.texto,
 price: $scope.valor 
   });
};
  
$scope.totalPedidos = function() {
var total = 0;
for (var i = 0, len = $scope.items.length; i < len; i++) {
total = total + ($scope.items[i].price * $scope.items[i].quantity);
}
return total;
};
  
$scope.subtotal = function() {
return $scope.totalPedidos() - $scope.discount;
};
  
function calcularDesconto(newValue, oldValue, scope) {
$scope.bill.discount = newValue > 100 ? 10 : 0;
} 

$scope.$watch($scope.totalPedidos, calcularDesconto);
}]);




