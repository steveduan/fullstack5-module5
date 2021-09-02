(function(){
    'use strict';
    angular.module('public')
    .controller("MyInfoController",MyInfoController);
    MyInfoController.$inject=["UserInfoService"];
    function MyInfoController(UserInfoService){
        var $ctrl=this;
        $ctrl.user=UserInfoService.getUser();
        $ctrl.signup=false;
        console.log("User is : ",$ctrl.user);
        if($ctrl.user=== undefined){
            $ctrl.signup=false;
        }else{
            $ctrl.signup=true;
        }
    }
})();