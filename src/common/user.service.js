(function(){
    'use strict';
    angular.module('common')
    .service('UserInfoService',UserInfoService);
    UserInfoService.$inject=['$http','ApiPath']
    function UserInfoService($http,ApiPath){
        var service=this;
        var User={
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            menuNumber:""
        };
        var item_date=[];

        service.submit=function(FirstName,LastName,Email,Phone,MenuNumber){
            User.firstName=FirstName;
            User.lastName=LastName;
            User.email=Email;
            User.phone=Phone;
            User.menuNumber=MenuNumber;
            console.log("Fistname : "+FirstName);
            console.log("Lastname :"+LastName);
            console.log("Email :"+Email);
            console.log("Phone :"+Phone);
            console.log("MenuNumber :"+MenuNumber);
            try{
            $http.get(ApiPath+"/menu_items/"+MenuNumber+".json").then(function (reponse){
                    item_date=reponse.data;
                    return true;
            },function (reject){
                service.error=reject;
                return false;
            });
        }catch(error){
            console.log(error);
        }
         };




    }
})();