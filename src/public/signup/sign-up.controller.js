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
    $ctrl.result_error=false;
    $ctrl.submit=function(formCompleted){
        if(formCompleted){
            
        
            UserInfoService.getDish($ctrl.user.menuNumber).then(function (response){
                $ctrl.user.details=response.data;
                UserInfoService.saveUser($ctrl.user);
                console.log("user: ",$ctrl.user);
                $ctrl.result_show=true;
            },function (reject){
                $ctrl.result_error=true;
                console.log(reject);
            })
        }else{
        console.log("Please complete form first!");
        $ctrl.result_show=false;
        $ctrl.result_error=false;    
        }
      }
}

})();