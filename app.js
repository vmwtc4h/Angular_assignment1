(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.message = "inital ";
  $scope.text_value = "list comma separated dishes you usually have for lunch";

  $scope.clearTextbox = function(){
      $scope.text_value = "";

  };

  $scope.checkNumItems = function(){
    var values = $scope.text_value.replace(/\s+/,'');
    var items = values.split(',');
    var itemslen = items.length;
    var numitems=0;

    // we need to go through and make sure none of the items entered are empty
    // i.e. the entry "eggs, , milk, bread" should be a valid lunch with three items
    for(var i=0; i < itemslen;i++)
    {
      if(items[i] !== ""){ numitems++;}
    }

    if (numitems == 0){
      $scope.message= "Please enter you lunch plans";
    }
    else if(numitems <=3){
      $scope.message = "Enjoy";
    }
    else{
      $scope.message = "Too Much!";
    }
  };

};

})();
