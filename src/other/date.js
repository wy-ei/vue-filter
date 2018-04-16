/**
Converts a timestamp into another date format.

```html
{{ Date.now() | date '%T' }}  => '13:34:36'
{{ 'Wed Jan 20 2016 13:34:36 GMT+0800' | date '%T' }} => '13:34:36'
{{ 1453268193752 | date '%Y-%m-%d' }} => '2016-01-20'
{{ new Date | date '%I:%M:%s %p' }} => '1:39:22 PM'
```

**more date parameters are listed below:**


| param | explanation | example |
|:--:|:--|:--|
|%a | Abbreviated weekday. |`{{ timestamp | date "%a" }} => "Sat" `|
|%A |Full weekday name. |`{{ timestamp | date "%A" }} => "Tuesday" `|
|%b |Abbreviated month name. |`{{ timestamp | date "%b" }} => "Jan" `|
|%B |Full month name |`{{ timestamp | date "%B" }} => "January" `|
|%c |Preferred local date and time representation |`{{ timestamp | date "%c" }} => "Tue Apr 22 11:16:09 2014" `|
|%d |Day of the month, zero-padded (01, 02, 03, etc.). |`{{ timestamp | date "%d" }} => "04" `|
%-d |Day of the month, not zero-padded (1,2,3, etc.). |`{{ timestamp | date "%-d" }} => "4" `|
|%D |Formats the date (dd/mm/yy). |`{{ timestamp | date "%D" }} => "04/22/14" `|
|%e |Day of the month, blank-padded ( 1, 2, 3, etc.). |`{{ timestamp | date "%e" }} => "3" `|
|%F |Returns the date in ISO 8601 format (yyyy-mm-dd). |`{{ timestamp | date "%F" }} => "2014-04-22" `|
|%H |Hour of the day, 24-hour clock (00 - 23). |`{{ timestamp | date "%H" }} => "15" `|
|%I |Hour of the day, 12-hour clock (1 - 12). |`{{ timestamp | date "%I" }} => "7" `|
|%j |Day of the year (001 - 366). |`{{ timestamp | date "%j" }} => "245" `|
|%k |Hour of the day, 24-hour clock (1 - 24). |`{{ timestamp | date "%k" }} => "14" `|
|%m |Month of the year (01 - 12). |`{{ timestamp | date "%m" }} => "04" `|
|%M |Minute of the hour (00 - 59). |`{{ timestamp | date "%M" }} => "53" `|
|%p |Meridian indicator (AM/PM). |`{{ timestamp | date "%p" }} => "PM" `|
|%r |12-hour time (%I:%M:%S %p) |`{{ timestamp | date "%r" }} => "03:20:07 PM" `|
|%R |24-hour time (%H:%M) |`{{ timestamp | date "%R" }} => "15:21" `|
|%T |24-hour time (%H:%M:%S) |`{{ timestamp | date "%T" }} => "15:22:13" `|
|%U |The number of the week in the current year, starting with the first Sunday as the first day of the first week. |`{{ timestamp | date "%U" }} => "16" `|
|%W |The number of the week in the current year, starting with the first Monday as the first day of the first week. |`{{ timestamp | date "%W" }} => "16" `|
|%w |Day of the week (0 - 6, with Sunday being 0). |`{{ timestamp | date "%w" }} => "2" `|
|%x |Preferred representation for the date alone, no time. (mm/dd/yy). |`{{ timestamp | date "%x" }} => "04/22/14" `|
|%X |Preferred representation for the time. (hh:mm:ss). |`{{ timestamp | date "%X" }} => "13:17:24" `|
|%y |Year without a century (00.99). |`{{ timestamp | date "%y" }} => "14" `|
|%Y |Year with a century. |`{{ timestamp | date "%Y" }} => "2014" `|

 */
var weekdays = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function date(date, formatString) {
    var d = new Date(date);
    var hours = 0;
    var month = 0;

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
            hours = d.getHours();
            ret = zeroize(hours);
            break;
        case '%I':
            hours = d.getHours();
            if (hours != 12){
                hours = hours % 12;
            }
            ret = zeroize(hours);
            break;
        case '%j':
            ret = zeroize(getDays(), 3);
            break;
        case 'k':
            ret = d.getHours();
            break;
        case '%m':
            month = d.getMonth() + 1;
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
            ret = '%H:%M:%s';
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


module.exports =  date;
