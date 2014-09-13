'use strict';
/* global moment */
describe('Service: concertDueDateService', function () {

  // load the controller's module
  beforeEach(module('concertAngularApp'));

  var myConcertDueDateService;

  beforeEach(function () {

    //inject your service for testing.
    inject(function (concertDueDateService) {
      myConcertDueDateService = concertDueDateService;
    });
  });

  it('should tell that the concert is overdue, if its duedate is before today', function () {
    expect(myConcertDueDateService.isConcertOverdue({date: moment().subtract(1, 'days')})).toBe(true);
  });

  it('should not tell that the concert is overdue, if its duedate is not after today', function () {
    expect(myConcertDueDateService.isConcertOverdue({date: moment().add(1, 'days')})).toBe(false);
  });

  it('should  tell that the concert is  about to happen, if its duedate is in two weeks', function () {
    expect(myConcertDueDateService.isConcertAboutToHappen({date: moment().add(2, 'weeks')})).toBe(true);
  });
  it('should  not tell that the concert is  about to happen, if its duedate is in three weeks', function () {
    expect(myConcertDueDateService.isConcertAboutToHappen({date: moment().add(3, 'weeks')})).toBe(false);
  });

  it('should   tell that the concert date is fine, if its duedate is in three weeks', function () {
    expect(myConcertDueDateService.isConcertDateFine({date: moment().add(3, 'weeks')})).toBe(true);
  });

  it('should  not  tell that the concert date is fine, if its duedate is in one week', function () {
    expect(myConcertDueDateService.isConcertDateFine({date: moment().add(1, 'weeks')})).toBe(false);
  });
});

