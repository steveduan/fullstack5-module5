(function(){
    'use strict';
    angular.module('common')
    .service('UserInfoService',UserInfoService);
    UserInfoService.$inject=['$http','ApiPath']
    function UserInfoService($http,ApiPath){
        var service=this;
        var user={};

        service.saveUser=function(user){
            service.user=angular.copy(user);
        };

        service.getUser=function(){
            return service.user;
        };

        service.getDish=function(short_name){
            return $http.get(ApiPath+'/menu_items/'+short_name+'.json');
        }

        
    }
})();