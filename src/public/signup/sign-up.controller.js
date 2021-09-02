(function(){
"use strict";

angular.module("public")
.controller("SignUpController",SignUpController);
SignUpController.$inject=["UserInfoService"];
function SignUpController(UserInfoService){
    var $ctrl=this;
    $ctrl.user={};
    $ctrl.user.firstname="";
    $ctrl.user.firstname="";
    $ctrl.user.lastname="";
    $ctrl.user.email="";
    $ctrl.user.phone="";
    $ctrl.user.menuNumber="";
    $ctrl.result_show=false;
    $ctrl.submit=function(formCompleted){
        if(formCompleted){
            $ctrl.result_show=true;
        
            var result=UserInfoService.submit($ctrl.user.firstname,$ctrl.user.lastname,$ctrl.user.email,$ctrl.user.phone,$ctrl.user.menuNumber);
            $ctrl.complete=result;
        }else{
        console.log("Please complete form first!");
        $ctrl.result_show=false;    
        }
      }
}

})();