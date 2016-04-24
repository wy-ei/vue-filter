/**
 * Converts a timestamp into another date format.
 *
 */
var weekdays = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function date(date, formatString) {
    var d = new Date(date);

    var zeroize = function(value, length) {

        if (!length) length = 2;

        value = '' + value;

        for (var i = 0, zeros = ''; i < (length - value.length); i++) {
            zeros += '0';
        }

        return zeros + value;
    };

    function getDays() {
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            year = d.getFullYear(),
            month = d.getMonth(),
            day = d.getDate();

        if (year % 100 == 0 && year % 400 == 0 || year % 4 == 0) {
            days[1] = 29;
        }
        var n = 0;
        for (var i = 0; i < month; i++) {
            n += days[i];
        }
        return n + day;
    }

    function cb(c) {
        var ret = '';
        switch (c) {
        case '%a':
            ret = weekdays[d.getDay()].slice(0, 3);
            break;
        case '%A':
            ret = weekdays[d.getDay()];
            break;
        case '%b':
            ret = months[d.getMonth()].slice(0, 3);
            break;
        case '%B':
            ret = months[d.getMonth()];
            break;
        case '%c':
            ret = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
            break;
        case '%d':
            var day = d.getDate();
            ret = zeroize(day);
            break;
        case '%-d':
            ret = d.getDate();
            break;
        case '%D':
            ret = '%m/%d/%Y';
            break;
        case '%e':
            ret = d.getDate();
            break;
        case '%F':
            ret = '%Y-%m-%d';
            break;
        case '%H':
            var hours = d.getHours();
            ret = zeroize(hours);
            break;
        case '%I':
            ret = d.getHours() % 12;
            break;
        case '%j':
            ret = zeroize(getDays(), 3);
            break;
        case 'k':
            ret = d.getHours();
            break;
        case '%m':
            var month = d.getMonth() + 1;
            ret = zeroize(month, 2);
            break;
        case '%M':
            ret = zeroize(d.getMinutes(), 2);
            break;
        case '%s':
            ret = zeroize(d.getSeconds(), 2);
            break;
        case '%p':
            ret = d.getHours() < 12 ? 'AM' : 'PM';
            break;
        case '%r':
            ret = '%I:%M:%s %p';
            break;
        case '%R':
            ret = '%H:%M';
            break;
        case '%T':
            ret = '%H:%M:%s';
            break;
        case '%U':
            ret = Math.ceil(getDays() / 7);
            break;
        case '%w':
            ret = d.getDay();
            break;
        case '%x':
            ret = '%m/%d/%y';
            break;
        case '%X':
            ret = '%h:%M:%s';
            break;
        case '%y':
            ret = d.getFullYear() % 100;
            break;
        case '%Y':
            ret = d.getFullYear();
            break;
        default:
            ret = c;
        }
        return ret;
    }
    var re = /%-?[\w]/g;
    if (!formatString) {
        formatString = '%c';
    }
    formatString = formatString.replace(re, cb);
    formatString = formatString.replace(re, cb);
    return formatString;
}


export default date;
