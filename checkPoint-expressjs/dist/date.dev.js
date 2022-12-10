"use strict";

var fullDate = function fullDate(date) {
  var DAY = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  var MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //   const dateTime = new Date();
  //   const getYear = dateTime.getFullYear();
  //   const getMonth = dateTime.getMonth();
  //   const getDay = dateTime.getDate();
  //   const getHour = dateTime.getHours();
  //   console.log(
  //     request,
  //     getDay,
  //     DAY.length,
  //     `${getYear} / ${MONTH[getMonth]} / ${
  //       DAY[getDay]
  //     } || ${getHour}:${dateTime.getSeconds()}`
  //   );

  var dateTime = date;
  var getYear = dateTime.getFullYear();
  var getMonth = dateTime.getMonth();
  var getDay = dateTime.getDay(); // const getDay2 = dateTime.getDay();

  var getHour = dateTime.getHours();
  var getMunite = new Date().getMinutes();

  if (DAY[getDay] === 'SATURDAY' || DAY[getDay] === 'SUNDAY' || getHour < 9 || getHour > 17) {
    return "".concat(MONTH[getMonth], " / ").concat(DAY[getDay], " || ").concat(getHour.toString().padStart(2, '0'), " : ").concat(getMunite.toString().padStart(2, '0'), "- Today our site is Out of services, working hours (Monday to Friday,  from 9 to 17). ");
  } else {
    return "".concat(getYear, " / ").concat(MONTH[getMonth], " / ").concat(DAY[getDay], " || ").concat(getHour.toString().padStart(2, '0'), ":").concat(getMunite.toString().padStart(2, '0'));
  }
};

module.exports = fullDate;