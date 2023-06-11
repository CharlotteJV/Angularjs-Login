var myapp = angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.name = [{
        id: "sp1",
        title: 'cupcake item',
        card: 'img/cupcake-2.jpeg',
        price: 10,
        discount: 0.19,
        amount: 3,
        date: "2000-03-16"
    }, {
        id: "sp2",
        title: 'cupcake item',
        card: 'img/cupcake-1.jpeg',
        price: 15,
        discount: 0.19,
        amount: 3,
        date: "2000-03-16"
    }, {
        id: "sp3",
        title: 'cupcake item',
        card: 'img/cupcake-3.jpeg',
        price: 10,
        discount: 0.19,
        amount: 3,
        date: "2000-03-16"
    }];
    $scope.sweet = [{
        id: "sp4",
        title: 'sweet item',
        card: 'img/sweets-2.jpeg',
        price: 10,
        discount: 0.19,
        amount: 3,
        date: "2000-03-16"
    }, {
        id: "sp5",
        title: 'sweet item',
        card: 'img/sweets-1.jpeg',
        price: 15,
        discount: 0.19,
        amount: 3,
        date: "2000-03-16"
    }, {
        id: "sp6",
        title: 'sweet item',
        card: 'img/sweets-3.jpeg',
        price: 10,
        discount: 0.19,
        amount: 3,
        date: "2000-03-16"
    }];
    $scope.menus = ['home', 'list product', 'add user'];    
});
myApp.filter("percentage", function ($filter) {
    return function (input, decimals) {
        return $filter("number")(input * 100, decimals) + '%';
        // bộ lọc number của angularjs và decimals là lấy giá trị thập phân
    }
});
$scope.addCart = function(a){
    if (typeof $rootscope.cart = 'underfined'){
        $rootscope.cart=[];
    }
    indexFind = $rootscope.cart.fingIndex(i => i.id == a.id)
    if (indexFind == -1) {
        a.quantity = 1;
        $rootscope.cart.push(a);
    }else{
        $rootscope.cart[indexFind].quantity++;
    }
}
