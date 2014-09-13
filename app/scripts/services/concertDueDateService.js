'use strict';
/* global moment */
angular.module('concertAngularApp').factory('concertDueDateService', function () {

  var isConcertOverdue = function (concert) {
    return  moment(concert.date).isBefore(moment());
  };

  var isConcertAboutToHappen = function (concert) {
    return moment().add(15, 'days').isAfter(moment(concert.date)) && !isConcertOverdue(concert);
  };

  var isConcertDateFine = function (concert) {
    return  !isConcertAboutToHappen(concert) && !isConcertOverdue(concert);
  };

  return {
    isConcertAboutToHappen: isConcertAboutToHappen,
    isConcertOverdue: isConcertOverdue,
    isConcertDateFine: isConcertDateFine
  };


});


