var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01m -> 60

var now = moment();
console.log('current timestamp: ', now.unix());

var timestamp = 1470251422;
var currentMoment = moment.unix(1470251422);
console.log('currentMoment', currentMoment.format('MM/DD/YYYY @ h:mm a'));

// January 3rd, 2016 @ 12:13 am