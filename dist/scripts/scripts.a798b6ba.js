"use strict";angular.module("concertAngularApp",["ngCookies","ngSanitize","ngTouch","ngDragDrop"]),angular.module("concertAngularApp").controller("MainCtrl",["$scope","concertDueDateService",function(a,b){a.newConcert={artist:"",venue:"",date:moment().format("DD.MM.YYYY")},a.allConcerts=[{artist:"Blind Guardian",venue:"Philipshalle",date:"02.08.2013"}],a.loveConcerts=[{artist:"The Saddest Landscape",venue:"Turock",date:"02.10.2014"}],a.maybeConcerts=[{artist:"Spaceman Spiff",venue:"FFT",date:"02.08.2015"}],a.addConcert=function(){a.allConcerts.push(a.newConcert),a.newConcert={artist:"",venue:"",date:moment().format("DD.MM.YYYY")}},a.removeConcert=function(a,b){var c=a.indexOf(b);-1!==c&&a.splice(c,1)},a.alertClass=function(a){return b.isConcertAboutToHappen(a)?"bg-warning":b.isConcertOverdue(a)?"bg-danger":"bg-primary"},a.formatDate=function(a){return b.formatDate(a)}}]),angular.module("concertAngularApp").factory("concertDueDateService",function(){var a=function(a){return moment(a.date,"DD.MM.YYYY").isBefore(moment())},b=function(b){return moment().add(15,"days").isAfter(moment(b.date,"DD.MM.YYYY"))&&!a(b)},c=function(c){return!b(c)&&!a(c)};return{isConcertAboutToHappen:b,isConcertOverdue:a,isConcertDateFine:c,formatDate:function(a){return moment(a).format("DD.MM.YYYY")}}});