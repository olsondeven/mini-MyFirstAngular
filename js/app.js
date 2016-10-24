angular.module("friendsList",[])
.controller('mainCtrl',function($scope){
  //name of person
  $scope.corName = 'List of';
  $scope.setName = function(name){
  $scope.corName = name+"'s";
  $scope.name = '';
  };
 //array of friends
 $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
 //adds friends to list
 $scope.addFriends = function(newFriend){
   //and friend to end of friend array
   $scope.friends.push(newFriend);
   //this will reset the feild of input to placeholder
   $scope.newFriend = '';

 };
 //remove friends from list
 $scope.removeFriends = function(removeFriend){
   //sets target to correct index of array
   var target = $scope.friends.indexOf(removeFriend);
   //takes out the name out of friends array
   $scope.friends.splice(target,1);
   //resets the
   $scope.removeFriend = '';
 };

});//closing bracket
