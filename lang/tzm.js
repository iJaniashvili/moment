// moment.js language configuration
// language : Morocco Central Atlas Tamaziɣt (tzm)
// author : Abdel Said : https://github.com/abdelsaid
(function () {
    var lang = {
            months : "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort : "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), 
            weekdays : "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort : "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin : "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
                nextWeek: 'dddd [ⴴ] LT',
                lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
                lastWeek: 'dddd [ⴴ] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past : "ⵢⴰⵏ %s",
                s : "ⵉⵎⵉⴽ",
                m : "ⵎⵉⵏⵓⴺ",
                mm : "%d ⵎⵉⵏⵓⴺ",
                h : "ⵙⴰⵄⴰ",
                hh : "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d : "ⴰⵙⵙ",
                dd : "%d oⵙⵙⴰⵏ",
                M : "ⴰⵢoⵓⵔ",
                MM : "%d ⵉⵢⵢⵉⵔⵏ",
                y : "ⴰⵙⴳⴰⵙ",
                yy : "%d ⵉⵙⴳⴰⵙⵏ"
            },
            ordinal : function (number) {
                return '';
            }
        };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('tzm', lang);
    }
}());