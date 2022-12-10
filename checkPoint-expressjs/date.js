const fullDate = (date) => {
  const DAY = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];
  const MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  //   const dateTime = new Date();
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

  const dateTime = date;
  const getYear = dateTime.getFullYear();
  const getMonth = dateTime.getMonth();
  const getDay = dateTime.getDay();
  // const getDay2 = dateTime.getDay();
  const getHour = dateTime.getHours();
  const getMunite = new Date().getMinutes();

  if (
    DAY[getDay] === 'SATURDAY' ||
    DAY[getDay] === 'SUNDAY' ||
    getHour < 9 ||
    getHour > 17
  ) {
    return `${MONTH[getMonth]} / ${DAY[getDay]} || ${getHour
      .toString()
      .padStart(2, '0')} : ${getMunite
      .toString()
      .padStart(
        2,
        '0'
      )}- Today our site is Out of services, working hours (Monday to Friday,  from 9 to 17). `;
  } else {
    return `${getYear} / ${MONTH[getMonth]} / ${DAY[getDay]} || ${getHour
      .toString()
      .padStart(2, '0')}:${getMunite.toString().padStart(2, '0')}`;
  }
};

module.exports = fullDate;
