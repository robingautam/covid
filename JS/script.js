const URL = 'https://covid19.mathdro.id/api';

let app = angular.module('MyApp',[]);
app.controller('MyCtrl',($scope,$http)=>{
     $scope.title = "Covid Live Cases";
     $http.get(URL).then((response)=>{
         console.log(response.data);
         $scope.all_data = response.data;

     },(error)=>{

     });

    //    function used to get country data
    $scope.get_country_data = ()=>{
       
       let country = $scope.c;
       if (country==''){
        return;
       }
       $http.get(`${URL}/countries/${country}`).then((response)=>{
           console.log("Inside country")
            console.log(response.data);
            $scope.country_data = response.data;
       },(error)=>{
           console.log("inside error");
        console.log(error);
       })
    };
});