'use strict';

/**
 * @ngdoc function
 * @name nlpPuiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nlpPuiApp
 */
angular.module('labsDesignYeoman')
  .controller('MainCtrl', function ($scope) {
    var dataTable = [];
    var tableLength = 100;
    var statusArray = ['Running', 'Up', 'Down']

    for (var i = 0; i < tableLength; i++) {
      var dataObject = {
        percent: chance.natural({min: 1, max: 100}), 
        status: statusArray[ chance.natural({min: 0, max: statusArray.length -1}) ],
        cpu: chance.natural({min: 1, max: 100}),
        memory: chance.floating({min: 1, max: 1024, fixed: 2}),
        disk: chance.floating({min: 1, max: 1024, fixed: 2}),
        uptime: chance.natural({min: 1, max: 60})
      };
      dataTable.push(dataObject);
    }  

    $scope.dataTable = dataTable;

  });
