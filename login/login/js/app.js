var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'login.html',
        controller: 'loginCtrl'
    }).when('/admin', {
        templateUrl: 'admin.html',
        controller: 'adminCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
app.controller("loginCtrl", function ($scope, $location, $http) {
    $scope.user = [];
    $http.get('js/dulieu.json').then(function (response) {
        $scope.user = response.data;
    });
    var Avaliato = false;
    $scope.login = function () {
        for (i = 0; i < $scope.user.length; i++) {
            if ($scope.username == $scope.user[i].Username && $scope.password == $scope.user[i].Password) {
                Avaliato = true;
                break;
            }
        }
        if (Avaliato) {
            alert('dang nhap thanh cong');
            window.location.href="adminn.html";   // điều hướng đến trang admin.html
        } else {
            $scope.errorMessage = 'Invalid username or password';
        }
    };
    $scope.validateInput = function () {
        // Kiểm tra xem người dùng đã nhập đủ thông tin hay chưa
        if ($scope.username && $scope.password) {
            $scope.validInput = true;
        } else {
            $scope.validInput = false;
        }
    };
    $scope.changE = false;
    $scope.changeInput = function () {
        $scope.changE != $scope.changE;
    }
});
app.controller("adminCtrl", function ($scope, $http) {
    $scope.admin = [];
    $http.get('js/admin.json').then(function (response) {
        $scope.admin = response.data;
    });
});
app.controller("AdminCtrl", function ($scope, $http) {
    $scope.users = [];
    $http.get("js/dulieu.json").then(function (response) {
        $scope.users = response.data;
    });
});