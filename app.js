(function(){

	var app = angular.module('timeLogApp',[]);

	app.controller('timeLogController',['$scope',function($scope){
		$scope.timelogs = [
			{id:101,name:"Joey",project:"Tango", date: new Date(), time: new Date(1970, 0, 1, 0, 0, 0)}
		];


		$scope.timelog = {};

		$scope.addTimelog = function(timelog){
			if (confirm('Are you sure you want to add this timelog?')) {
		   		$scope.timelogs.push(timelog);
				$scope.timelog = {};
			}

		}

		$scope.editTimelog = function(index){
			$scope.editId = index;
			$scope.timelog = $scope.timelogs[index];
		}

		$scope.updateTimelog = function(timelog){
			$scope.timelogs[$scope.editId] = timelog;
			$scope.editId = undefined;
			$scope.timelog = {};
		}

		$scope.cancelTimelog = function() {
		   	$scope.editId = undefined;
      		$scope.timelog = {};
    	}
    

		$scope.deleteTimelog = function(index){
			if (confirm('Are you sure you want to delete this timelog?')) {
     			$scope.timelogs.splice(index,1);
			}
		}

	}]);
})();
