'use strict';
/* global moment */
/**
 * @ngdoc function
 * @name concertAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concertAngularApp
 */
angular.module('concertAngularApp')
  .controller('MainCtrl', ['$scope', 'concertDueDateService', function ($scope, concertDueDateService) {

    $scope.newConcert = {
      artist: '',
      venue: '',
      date: moment().format('L')
    };
    $scope.allConcerts = [
      {
        artist: 'Blind Guardian',
        venue: 'Philipshalle',
        date: moment().format('L')

      }
    ];
    $scope.loveConcerts = [
      {
        artist: 'The Saddest Landscape',
        venue: 'Turock',
        date: moment().format('L')

      }
    ];
    $scope.maybeConcerts = [
      {
        artist: 'Spaceman Spiff',
        venue: 'FFT',
        date: moment().format('L')

      }
    ];

    $scope.addConcert = function () {
      $scope.allConcerts.push($scope.newConcert);
      $scope.newConcert = {
        artist: '',
        venue: '',
        date: moment().format('L')
      };
    };


    $scope.alertClass = function (concert) {
      if (concertDueDateService.isConcertAboutToHappen(concert)) {
        return 'aboutToHappen';
      }
      else if (concertDueDateService.isConcertOverdue(concert)) {
        return 'overdue';
      }
      else {
        return 'fine';
      }

    };

    $scope.startCallback = function () {
      console.log('imdragging');
    };

  }]);
