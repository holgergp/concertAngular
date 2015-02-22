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
      date: moment().format('DD.MM.YYYY')
    };
    $scope.allConcerts = [
      {
        artist: 'Blind Guardian',
        venue: 'Philipshalle',
        date: '02.08.2013'

      }
    ];
    $scope.loveConcerts = [
      {
        artist: 'The Saddest Landscape',
        venue: 'Turock',
        date: '02.10.2014'

      }
    ];
    $scope.maybeConcerts = [
      {
        artist: 'Spaceman Spiff',
        venue: 'FFT',
        date: '02.08.2015'

      }
    ];

    $scope.addConcert = function () {
      $scope.allConcerts.push($scope.newConcert);
      $scope.newConcert = {
        artist: '',
        venue: '',
        date: moment().format('DD.MM.YYYY')
      };
    };


    $scope.removeConcert = function (array, concert) {

      var i = array.indexOf(concert);
      if (i !== -1) {
        array.splice(i, 1);
      }

    };

    $scope.alertClass = function (concert) {
      if (concertDueDateService.isConcertAboutToHappen(concert)) {
        return 'bg-warning';
      }
      else if (concertDueDateService.isConcertOverdue(concert)) {
        return 'bg-danger';
      }
      else {
        return 'bg-primary';
      }

    };

    $scope.formatDate = function (date) {
      return concertDueDateService.formatDate(date);
    };
  }]);
