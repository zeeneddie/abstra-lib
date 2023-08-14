import{a1 as ie,d as H,o as ne,v as q,r as $,b as k,c as X,x as _,F as x,L as A,N as C,z as T,W as j,ac as L,U as N,O as K,Q,q as R,a2 as ee,K as U,e as D,G as te,t as P,D as se,w as F,J as ue}from"./registerWidgets.2603eccb.js";import{T as ce,a as le}from"./Tab.67d1bef4.js";import{L as de}from"./CircularLoading.e7b8d7ce.js";import{a as he}from"./asyncComputed.edc13f5a.js";import{J as pe}from"./jobs.c1fca9aa.js";import{S as fe}from"./SaveButton.88c27e4d.js";import{B as ve}from"./BackButton.02800361.js";import{S as me,_ as ye,R as _e,L as ge}from"./UnsavedChangesHandler.vue_vue_type_script_setup_true_lang.3a572750.js";import{D as be}from"./DocsButton.2604a2d6.js";import"./lottie.00f3bad0.js";import"./activeRecord.6f1adf14.js";import"./pubsub.db0a4a91.js";import"./icons.714086ba.js";import"./forms.4e96ea5a.js";import"./dashes.59ceb25c.js";import"./runnerData.d36d4833.js";import"./hooks.f2a9ba39.js";import"./workspaces.61fea50e.js";import"./uuid.37a06419.js";import"./login.42877014.js";(function(){try{var p=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g=new Error().stack;g&&(p._sentryDebugIds=p._sentryDebugIds||{},p._sentryDebugIds[g]="3a6ef5e9-0db2-46d8-a42e-6afcd879ac7b",p._sentryDebugIdIdentifier="sentry-dbid-3a6ef5e9-0db2-46d8-a42e-6afcd879ac7b")}catch{}})();var oe={exports:{}};(function(p,g){(function(f,h){p.exports=h()})(globalThis,function(){return(()=>{var l={794:(m,u,b)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.CronParser=void 0;var n=b(586),y=function(){function c(t,e,i){e===void 0&&(e=!0),i===void 0&&(i=!1),this.expression=t,this.dayOfWeekStartIndexZero=e,this.monthStartIndexZero=i}return c.prototype.parse=function(){var t=this.extractParts(this.expression);return this.normalize(t),this.validate(t),t},c.prototype.extractParts=function(t){if(!this.expression)throw new Error("Expression is empty");var e=t.trim().split(/[ ]+/);if(e.length<5)throw new Error("Expression has only ".concat(e.length," part").concat(e.length==1?"":"s",". At least 5 parts are required."));if(e.length==5)e.unshift(""),e.push("");else if(e.length==6){var i=/\d{4}$/.test(e[5])||e[4]=="?"||e[2]=="?";i?e.unshift(""):e.push("")}else if(e.length>7)throw new Error("Expression has ".concat(e.length," parts; too many!"));return e},c.prototype.normalize=function(t){var e=this;if(t[3]=t[3].replace("?","*"),t[5]=t[5].replace("?","*"),t[2]=t[2].replace("?","*"),t[0].indexOf("0/")==0&&(t[0]=t[0].replace("0/","*/")),t[1].indexOf("0/")==0&&(t[1]=t[1].replace("0/","*/")),t[2].indexOf("0/")==0&&(t[2]=t[2].replace("0/","*/")),t[3].indexOf("1/")==0&&(t[3]=t[3].replace("1/","*/")),t[4].indexOf("1/")==0&&(t[4]=t[4].replace("1/","*/")),t[6].indexOf("1/")==0&&(t[6]=t[6].replace("1/","*/")),t[5]=t[5].replace(/(^\d)|([^#/\s]\d)/g,function(O){var M=O.replace(/\D/,""),w=M;return e.dayOfWeekStartIndexZero?M=="7"&&(w="0"):w=(parseInt(M)-1).toString(),O.replace(M,w)}),t[5]=="L"&&(t[5]="6"),t[3]=="?"&&(t[3]="*"),t[3].indexOf("W")>-1&&(t[3].indexOf(",")>-1||t[3].indexOf("-")>-1))throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");var i={SUN:0,MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6};for(var o in i)t[5]=t[5].replace(new RegExp(o,"gi"),i[o].toString());t[4]=t[4].replace(/(^\d{1,2})|([^#/\s]\d{1,2})/g,function(O){var M=O.replace(/\D/,""),w=M;return e.monthStartIndexZero&&(w=(parseInt(M)+1).toString()),O.replace(M,w)});var r={JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12};for(var a in r)t[4]=t[4].replace(new RegExp(a,"gi"),r[a].toString());t[0]=="0"&&(t[0]=""),!/\*|\-|\,|\//.test(t[2])&&(/\*|\//.test(t[1])||/\*|\//.test(t[0]))&&(t[2]+="-".concat(t[2]));for(var s=0;s<t.length;s++)if(t[s].indexOf(",")!=-1&&(t[s]=t[s].split(",").filter(function(O){return O!==""}).join(",")||"*"),t[s]=="*/1"&&(t[s]="*"),t[s].indexOf("/")>-1&&!/^\*|\-|\,/.test(t[s])){var d=null;switch(s){case 4:d="12";break;case 5:d="6";break;case 6:d="9999";break;default:d=null;break}if(d!==null){var S=t[s].split("/");t[s]="".concat(S[0],"-").concat(d,"/").concat(S[1])}}},c.prototype.validate=function(t){this.assertNoInvalidCharacters("DOW",t[5]),this.assertNoInvalidCharacters("DOM",t[3]),this.validateRange(t)},c.prototype.validateRange=function(t){n.default.secondRange(t[0]),n.default.minuteRange(t[1]),n.default.hourRange(t[2]),n.default.dayOfMonthRange(t[3]),n.default.monthRange(t[4],this.monthStartIndexZero),n.default.dayOfWeekRange(t[5],this.dayOfWeekStartIndexZero)},c.prototype.assertNoInvalidCharacters=function(t,e){var i=e.match(/[A-KM-VX-Z]+/gi);if(i&&i.length)throw new Error("".concat(t," part contains invalid values: '").concat(i.toString(),"'"))},c}();u.CronParser=y},728:(m,u,b)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.ExpressionDescriptor=void 0;var n=b(910),y=b(794),c=function(){function t(e,i){if(this.expression=e,this.options=i,this.expressionParts=new Array(5),!this.options.locale&&t.defaultLocale&&(this.options.locale=t.defaultLocale),!t.locales[this.options.locale]){var o=Object.keys(t.locales)[0];console.warn("Locale '".concat(this.options.locale,"' could not be found; falling back to '").concat(o,"'.")),this.options.locale=o}this.i18n=t.locales[this.options.locale],i.use24HourTimeFormat===void 0&&(i.use24HourTimeFormat=this.i18n.use24HourTimeFormatByDefault())}return t.toString=function(e,i){var o=i===void 0?{}:i,r=o.throwExceptionOnParseError,a=r===void 0?!0:r,s=o.verbose,d=s===void 0?!1:s,S=o.dayOfWeekStartIndexZero,O=S===void 0?!0:S,M=o.monthStartIndexZero,w=M===void 0?!1:M,I=o.use24HourTimeFormat,E=o.locale,J=E===void 0?null:E,W={throwExceptionOnParseError:a,verbose:d,dayOfWeekStartIndexZero:O,monthStartIndexZero:w,use24HourTimeFormat:I,locale:J},V=new t(e,W);return V.getFullDescription()},t.initialize=function(e,i){i===void 0&&(i="en"),t.specialCharacters=["/","-",",","*"],t.defaultLocale=i,e.load(t.locales)},t.prototype.getFullDescription=function(){var e="";try{var i=new y.CronParser(this.expression,this.options.dayOfWeekStartIndexZero,this.options.monthStartIndexZero);this.expressionParts=i.parse();var o=this.getTimeOfDayDescription(),r=this.getDayOfMonthDescription(),a=this.getMonthDescription(),s=this.getDayOfWeekDescription(),d=this.getYearDescription();e+=o+r+s+a+d,e=this.transformVerbosity(e,!!this.options.verbose),e=e.charAt(0).toLocaleUpperCase()+e.substr(1)}catch(S){if(!this.options.throwExceptionOnParseError)e=this.i18n.anErrorOccuredWhenGeneratingTheExpressionD();else throw"".concat(S)}return e},t.prototype.getTimeOfDayDescription=function(){var e=this.expressionParts[0],i=this.expressionParts[1],o=this.expressionParts[2],r="";if(!n.StringUtilities.containsAny(i,t.specialCharacters)&&!n.StringUtilities.containsAny(o,t.specialCharacters)&&!n.StringUtilities.containsAny(e,t.specialCharacters))r+=this.i18n.atSpace()+this.formatTime(o,i,e);else if(!e&&i.indexOf("-")>-1&&!(i.indexOf(",")>-1)&&!(i.indexOf("/")>-1)&&!n.StringUtilities.containsAny(o,t.specialCharacters)){var a=i.split("-");r+=n.StringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(),this.formatTime(o,a[0],""),this.formatTime(o,a[1],""))}else if(!e&&o.indexOf(",")>-1&&o.indexOf("-")==-1&&o.indexOf("/")==-1&&!n.StringUtilities.containsAny(i,t.specialCharacters)){var s=o.split(",");r+=this.i18n.at();for(var d=0;d<s.length;d++)r+=" ",r+=this.formatTime(s[d],i,""),d<s.length-2&&(r+=","),d==s.length-2&&(r+=this.i18n.spaceAnd())}else{var S=this.getSecondsDescription(),O=this.getMinutesDescription(),M=this.getHoursDescription();if(r+=S,r&&O&&(r+=", "),r+=O,O===M)return r;r&&M&&(r+=", "),r+=M}return r},t.prototype.getSecondsDescription=function(){var e=this,i=this.getSegmentDescription(this.expressionParts[0],this.i18n.everySecond(),function(o){return o},function(o){return n.StringUtilities.format(e.i18n.everyX0Seconds(o),o)},function(o){return e.i18n.secondsX0ThroughX1PastTheMinute()},function(o){return o=="0"?"":parseInt(o)<20?e.i18n.atX0SecondsPastTheMinute(o):e.i18n.atX0SecondsPastTheMinuteGt20()||e.i18n.atX0SecondsPastTheMinute(o)});return i},t.prototype.getMinutesDescription=function(){var e=this,i=this.expressionParts[0],o=this.expressionParts[2],r=this.getSegmentDescription(this.expressionParts[1],this.i18n.everyMinute(),function(a){return a},function(a){return n.StringUtilities.format(e.i18n.everyX0Minutes(a),a)},function(a){return e.i18n.minutesX0ThroughX1PastTheHour()},function(a){try{return a=="0"&&o.indexOf("/")==-1&&i==""?e.i18n.everyHour():parseInt(a)<20?e.i18n.atX0MinutesPastTheHour(a):e.i18n.atX0MinutesPastTheHourGt20()||e.i18n.atX0MinutesPastTheHour(a)}catch{return e.i18n.atX0MinutesPastTheHour(a)}});return r},t.prototype.getHoursDescription=function(){var e=this,i=this.expressionParts[2],o=this.getSegmentDescription(i,this.i18n.everyHour(),function(s){return e.formatTime(s,"0","")},function(s){return n.StringUtilities.format(e.i18n.everyX0Hours(s),s)},function(s){return e.i18n.betweenX0AndX1()},function(s){return e.i18n.atX0()});if(o&&i.includes("-")&&this.expressionParts[1]!="0"){var r=Array.from(o.matchAll(/:00/g));if(r.length>1){var a=r[r.length-1].index;o=o.substring(0,a)+":59"+o.substring(a+3)}}return o},t.prototype.getDayOfWeekDescription=function(){var e=this,i=this.i18n.daysOfTheWeek(),o=null;return this.expressionParts[5]=="*"?o="":o=this.getSegmentDescription(this.expressionParts[5],this.i18n.commaEveryDay(),function(r,a){var s=r;return r.indexOf("#")>-1?s=r.substr(0,r.indexOf("#")):r.indexOf("L")>-1&&(s=s.replace("L","")),e.i18n.daysOfTheWeekInCase?e.i18n.daysOfTheWeekInCase(a)[parseInt(s)]:i[parseInt(s)]},function(r){return parseInt(r)==1?"":n.StringUtilities.format(e.i18n.commaEveryX0DaysOfTheWeek(r),r)},function(r){var a=r.substring(0,r.indexOf("-")),s=e.expressionParts[3]!="*";return s?e.i18n.commaAndX0ThroughX1(a):e.i18n.commaX0ThroughX1(a)},function(r){var a=null;if(r.indexOf("#")>-1){var s=r.substring(r.indexOf("#")+1),d=r.substring(0,r.indexOf("#")),S=null;switch(s){case"1":S=e.i18n.first(d);break;case"2":S=e.i18n.second(d);break;case"3":S=e.i18n.third(d);break;case"4":S=e.i18n.fourth(d);break;case"5":S=e.i18n.fifth(d);break}a=e.i18n.commaOnThe(s)+S+e.i18n.spaceX0OfTheMonth()}else if(r.indexOf("L")>-1)a=e.i18n.commaOnTheLastX0OfTheMonth(r.replace("L",""));else{var O=e.expressionParts[3]!="*";a=O?e.i18n.commaAndOnX0():e.i18n.commaOnlyOnX0(r)}return a}),o},t.prototype.getMonthDescription=function(){var e=this,i=this.i18n.monthsOfTheYear(),o=this.getSegmentDescription(this.expressionParts[4],"",function(r,a){return a&&e.i18n.monthsOfTheYearInCase?e.i18n.monthsOfTheYearInCase(a)[parseInt(r)-1]:i[parseInt(r)-1]},function(r){return parseInt(r)==1?"":n.StringUtilities.format(e.i18n.commaEveryX0Months(r),r)},function(r){return e.i18n.commaMonthX0ThroughMonthX1()||e.i18n.commaX0ThroughX1()},function(r){return e.i18n.commaOnlyInMonthX0?e.i18n.commaOnlyInMonthX0():e.i18n.commaOnlyInX0()});return o},t.prototype.getDayOfMonthDescription=function(){var e=this,i=null,o=this.expressionParts[3];switch(o){case"L":i=this.i18n.commaOnTheLastDayOfTheMonth();break;case"WL":case"LW":i=this.i18n.commaOnTheLastWeekdayOfTheMonth();break;default:var r=o.match(/(\d{1,2}W)|(W\d{1,2})/);if(r){var a=parseInt(r[0].replace("W","")),s=a==1?this.i18n.firstWeekday():n.StringUtilities.format(this.i18n.weekdayNearestDayX0(),a.toString());i=n.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(),s);break}else{var d=o.match(/L-(\d{1,2})/);if(d){var S=d[1];i=n.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(S),S);break}else{if(o=="*"&&this.expressionParts[5]!="*")return"";i=this.getSegmentDescription(o,this.i18n.commaEveryDay(),function(O){return O=="L"?e.i18n.lastDay():e.i18n.dayX0?n.StringUtilities.format(e.i18n.dayX0(),O):O},function(O){return O=="1"?e.i18n.commaEveryDay():e.i18n.commaEveryX0Days(O)},function(O){return e.i18n.commaBetweenDayX0AndX1OfTheMonth(O)},function(O){return e.i18n.commaOnDayX0OfTheMonth(O)})}break}}return i},t.prototype.getYearDescription=function(){var e=this,i=this.getSegmentDescription(this.expressionParts[6],"",function(o){return/^\d+$/.test(o)?new Date(parseInt(o),1).getFullYear().toString():o},function(o){return n.StringUtilities.format(e.i18n.commaEveryX0Years(o),o)},function(o){return e.i18n.commaYearX0ThroughYearX1()||e.i18n.commaX0ThroughX1()},function(o){return e.i18n.commaOnlyInYearX0?e.i18n.commaOnlyInYearX0():e.i18n.commaOnlyInX0()});return i},t.prototype.getSegmentDescription=function(e,i,o,r,a,s){var d=null,S=e.indexOf("/")>-1,O=e.indexOf("-")>-1,M=e.indexOf(",")>-1;if(!e)d="";else if(e==="*")d=i;else if(!S&&!O&&!M)d=n.StringUtilities.format(s(e),o(e));else if(M){for(var w=e.split(","),I="",E=0;E<w.length;E++)if(E>0&&w.length>2&&(I+=",",E<w.length-1&&(I+=" ")),E>0&&w.length>1&&(E==w.length-1||w.length==2)&&(I+="".concat(this.i18n.spaceAnd()," ")),w[E].indexOf("/")>-1||w[E].indexOf("-")>-1){var J=w[E].indexOf("-")>-1&&w[E].indexOf("/")==-1,W=this.getSegmentDescription(w[E],i,o,r,J?this.i18n.commaX0ThroughX1:a,s);J&&(W=W.replace(", ","")),I+=W}else S?I+=this.getSegmentDescription(w[E],i,o,r,a,s):I+=o(w[E]);S?d=I:d=n.StringUtilities.format(s(e),I)}else if(S){var w=e.split("/");if(d=n.StringUtilities.format(r(w[1]),w[1]),w[0].indexOf("-")>-1){var V=this.generateRangeSegmentDescription(w[0],a,o);V.indexOf(", ")!=0&&(d+=", "),d+=V}else if(w[0].indexOf("*")==-1){var Z=n.StringUtilities.format(s(w[0]),o(w[0]));Z=Z.replace(", ",""),d+=n.StringUtilities.format(this.i18n.commaStartingX0(),Z)}}else O&&(d=this.generateRangeSegmentDescription(e,a,o));return d},t.prototype.generateRangeSegmentDescription=function(e,i,o){var r="",a=e.split("-"),s=o(a[0],1),d=o(a[1],2),S=i(e);return r+=n.StringUtilities.format(S,s,d),r},t.prototype.formatTime=function(e,i,o){var r=parseInt(e),a="",s=!1;this.options.use24HourTimeFormat||(s=!!(this.i18n.setPeriodBeforeTime&&this.i18n.setPeriodBeforeTime()),a=s?"".concat(this.getPeriod(r)," "):" ".concat(this.getPeriod(r)),r>12&&(r-=12),r===0&&(r=12));var d=i,S="";return o&&(S=":".concat(("00"+o).substring(o.length))),"".concat(s?a:"").concat(("00"+r.toString()).substring(r.toString().length),":").concat(("00"+d.toString()).substring(d.toString().length)).concat(S).concat(s?"":a)},t.prototype.transformVerbosity=function(e,i){return i||(e=e.replace(new RegExp(", ".concat(this.i18n.everyMinute()),"g"),""),e=e.replace(new RegExp(", ".concat(this.i18n.everyHour()),"g"),""),e=e.replace(new RegExp(this.i18n.commaEveryDay(),"g"),""),e=e.replace(/\, ?$/,"")),e},t.prototype.getPeriod=function(e){return e>=12?this.i18n.pm&&this.i18n.pm()||"PM":this.i18n.am&&this.i18n.am()||"AM"},t.locales={},t}();u.ExpressionDescriptor=c},336:(m,u,b)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.enLocaleLoader=void 0;var n=b(751),y=function(){function c(){}return c.prototype.load=function(t){t.en=new n.en},c}();u.enLocaleLoader=y},751:(m,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.en=void 0;var b=function(){function n(){}return n.prototype.atX0SecondsPastTheMinuteGt20=function(){return null},n.prototype.atX0MinutesPastTheHourGt20=function(){return null},n.prototype.commaMonthX0ThroughMonthX1=function(){return null},n.prototype.commaYearX0ThroughYearX1=function(){return null},n.prototype.use24HourTimeFormatByDefault=function(){return!1},n.prototype.anErrorOccuredWhenGeneratingTheExpressionD=function(){return"An error occured when generating the expression description.  Check the cron expression syntax."},n.prototype.everyMinute=function(){return"every minute"},n.prototype.everyHour=function(){return"every hour"},n.prototype.atSpace=function(){return"At "},n.prototype.everyMinuteBetweenX0AndX1=function(){return"Every minute between %s and %s"},n.prototype.at=function(){return"At"},n.prototype.spaceAnd=function(){return" and"},n.prototype.everySecond=function(){return"every second"},n.prototype.everyX0Seconds=function(){return"every %s seconds"},n.prototype.secondsX0ThroughX1PastTheMinute=function(){return"seconds %s through %s past the minute"},n.prototype.atX0SecondsPastTheMinute=function(){return"at %s seconds past the minute"},n.prototype.everyX0Minutes=function(){return"every %s minutes"},n.prototype.minutesX0ThroughX1PastTheHour=function(){return"minutes %s through %s past the hour"},n.prototype.atX0MinutesPastTheHour=function(){return"at %s minutes past the hour"},n.prototype.everyX0Hours=function(){return"every %s hours"},n.prototype.betweenX0AndX1=function(){return"between %s and %s"},n.prototype.atX0=function(){return"at %s"},n.prototype.commaEveryDay=function(){return", every day"},n.prototype.commaEveryX0DaysOfTheWeek=function(){return", every %s days of the week"},n.prototype.commaX0ThroughX1=function(){return", %s through %s"},n.prototype.commaAndX0ThroughX1=function(){return", %s through %s"},n.prototype.first=function(){return"first"},n.prototype.second=function(){return"second"},n.prototype.third=function(){return"third"},n.prototype.fourth=function(){return"fourth"},n.prototype.fifth=function(){return"fifth"},n.prototype.commaOnThe=function(){return", on the "},n.prototype.spaceX0OfTheMonth=function(){return" %s of the month"},n.prototype.lastDay=function(){return"the last day"},n.prototype.commaOnTheLastX0OfTheMonth=function(){return", on the last %s of the month"},n.prototype.commaOnlyOnX0=function(){return", only on %s"},n.prototype.commaAndOnX0=function(){return", and on %s"},n.prototype.commaEveryX0Months=function(){return", every %s months"},n.prototype.commaOnlyInX0=function(){return", only in %s"},n.prototype.commaOnTheLastDayOfTheMonth=function(){return", on the last day of the month"},n.prototype.commaOnTheLastWeekdayOfTheMonth=function(){return", on the last weekday of the month"},n.prototype.commaDaysBeforeTheLastDayOfTheMonth=function(){return", %s days before the last day of the month"},n.prototype.firstWeekday=function(){return"first weekday"},n.prototype.weekdayNearestDayX0=function(){return"weekday nearest day %s"},n.prototype.commaOnTheX0OfTheMonth=function(){return", on the %s of the month"},n.prototype.commaEveryX0Days=function(){return", every %s days"},n.prototype.commaBetweenDayX0AndX1OfTheMonth=function(){return", between day %s and %s of the month"},n.prototype.commaOnDayX0OfTheMonth=function(){return", on day %s of the month"},n.prototype.commaEveryHour=function(){return", every hour"},n.prototype.commaEveryX0Years=function(){return", every %s years"},n.prototype.commaStartingX0=function(){return", starting %s"},n.prototype.daysOfTheWeek=function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},n.prototype.monthsOfTheYear=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]},n}();u.en=b},586:(m,u)=>{Object.defineProperty(u,"__esModule",{value:!0});function b(y,c){if(!y)throw new Error(c)}var n=function(){function y(){}return y.secondRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);b(i>=0&&i<=59,"seconds part must be >= 0 and <= 59")}},y.minuteRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);b(i>=0&&i<=59,"minutes part must be >= 0 and <= 59")}},y.hourRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);b(i>=0&&i<=23,"hours part must be >= 0 and <= 23")}},y.dayOfMonthRange=function(c){for(var t=c.split(","),e=0;e<t.length;e++)if(!isNaN(parseInt(t[e],10))){var i=parseInt(t[e],10);b(i>=1&&i<=31,"DOM part must be >= 1 and <= 31")}},y.monthRange=function(c,t){for(var e=c.split(","),i=0;i<e.length;i++)if(!isNaN(parseInt(e[i],10))){var o=parseInt(e[i],10);b(o>=1&&o<=12,t?"month part must be >= 0 and <= 11":"month part must be >= 1 and <= 12")}},y.dayOfWeekRange=function(c,t){for(var e=c.split(","),i=0;i<e.length;i++)if(!isNaN(parseInt(e[i],10))){var o=parseInt(e[i],10);b(o>=0&&o<=6,t?"DOW part must be >= 0 and <= 6":"DOW part must be >= 1 and <= 7")}},y}();u.default=n},910:(m,u)=>{Object.defineProperty(u,"__esModule",{value:!0}),u.StringUtilities=void 0;var b=function(){function n(){}return n.format=function(y){for(var c=[],t=1;t<arguments.length;t++)c[t-1]=arguments[t];return y.replace(/%s/g,function(e){return c.shift()})},n.containsAny=function(y,c){return c.some(function(t){return y.indexOf(t)>-1})},n}();u.StringUtilities=b}},f={};function h(m){var u=f[m];if(u!==void 0)return u.exports;var b=f[m]={exports:{}};return l[m](b,b.exports,h),b.exports}var v={};return(()=>{var m=v;Object.defineProperty(m,"__esModule",{value:!0}),m.toString=void 0;var u=h(728),b=h(336);u.ExpressionDescriptor.initialize(new b.enLocaleLoader),m.default=u.ExpressionDescriptor;var n=u.ExpressionDescriptor.toString;m.toString=n})(),v})()})})(oe);const re=ie(oe.exports),Se=p=>{const[g,l,f,h,v]=p.split(" ");return{minute:g,hour:l,day:f,month:h,weekday:v}};function B(p){if(p==="*")return{values:[-1]};{const l=p.split(","),f=[];for(let h=0;h<l.length;h++){const v=l[h];if(v.includes("-")){const m=v.split("-");for(let u=Number(m[0]);u<Number(m[1])+1;u++)f.push(u)}else f.push(Number(v))}return{values:f}}}const Oe=()=>[...Array(60).keys()].reduce((p,g)=>(g%15||p.push(g),p),[]),we=()=>[...Array(31).keys()].map(p=>p+1),G=()=>{const p=[];for(let g=0;g<24;g++)for(let l=0;l<60;l+=30)g<12?l<10?p.push(`${g}:0${l} AM`):p.push(`${g}:${l} AM`):g===12?l<10?p.push(`${g}:0${l} PM`):p.push(`${g}:${l} PM`):l<10?p.push(`${g-12}:0${l} PM`):p.push(`${g-12}:${l} PM`);return p},Te={0:"0",1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:"09",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23",24:"24",25:"25",26:"26",27:"27",28:"28",29:"29",30:"30",31:"31",32:"32",33:"33",34:"34",35:"35",36:"36",37:"37",38:"38",39:"39",40:"40",41:"41",42:"42",43:"43",44:"44",45:"45",46:"46",47:"47",48:"48",49:"49",50:"50",51:"51",52:"52",53:"53",54:"54",55:"55",56:"56",57:"57",58:"58",59:"59"},ke={0:"0",1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:"09",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23"},Xe={1:"01",2:"02",3:"03",4:"04",5:"05",6:"06",7:"07",8:"08",9:"09",10:"10",11:"11",12:"12",13:"13",14:"14",15:"15",16:"16",17:"17",18:"18",19:"19",20:"20",21:"21",22:"22",23:"23",24:"24",25:"25",26:"26",27:"27",28:"28",29:"29",30:"30",31:"31"},Me={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},z={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},Ee=["hourly","daily","weekly","monthly"],De={hourly:{minute:"0",hour:"*",day:"*",month:"*",weekday:"*"},daily:{minute:"0",hour:"6",day:"*",month:"*",weekday:"*"},weekly:{minute:"0",hour:"6",day:"*",month:"*",weekday:"1"},monthly:{minute:"0",hour:"6",day:"1",month:"*",weekday:"*"}},Ce=p=>(K("data-v-4a09321b"),p=p(),Q(),p),Ie={class:"cron-settings-wrapper"},$e={class:"cron-selector"},xe={class:"periodicity"},Ae=Ce(()=>_("div",{class:"label"},"Recurrence",-1)),je=["selected"],Le=["selected"],Ue=["value","selected"],Ne={class:"periodicity"},He={class:"schedule"},Re=["value","selected"],We={class:"schedule"},Be=["value","selected"],Ye={class:"schedule"},Je=["value","selected"],Ve=["value","selected"],Fe={class:"schedule"},Ze=["value","selected"],Ge=["value","selected"],Pe=H({__name:"CronEditor",props:{crontab:null},emits:["changeCrontab","saveCrontab","showAdvancedSettings"],setup(p,{emit:g}){const l=p;function f(o,r){const a=parseInt(o),s=parseInt(r),d=a>=12?"PM":"AM",S=a%12,O=s<10?`0${s}`:s;return`${S}:${O} ${d}`}ne(()=>{const{hour:o,day:r,weekday:a,month:s,minute:d}=l.crontab;s=="*"&&a==="*"&&r!=="*"&&!u([r,o,d])?v.value="monthly":s==="*"&&r==="*"&&a!=="*"&&!u([a,o,d])?v.value="weekly":r==="*"&&a==="*"&&s==="*"&&o!=="*"&&!u([o,d])?v.value="daily":o=="*"&&r==="*"&&a==="*"&&s==="*"&&!u([d])?v.value="hourly":v.value="custom"});const h=q({minute:l.crontab.minute,hour:l.crontab.hour,day:l.crontab.day,month:l.crontab.month,weekday:l.crontab.weekday}),v=$(""),m=$(1),u=o=>o.some(r=>r.includes("-")||r.includes(",")),b=o=>{h.minute=o.minute,h.hour=o.hour,h.day=o.day,h.month=o.month,h.weekday=o.weekday},n=o=>{m.value=0,v.value=o.target.value,b(De[v.value]),g("changeCrontab",h)},y=o=>{m.value=0;const r=o.target.value;h.minute=r,g("changeCrontab",h)},c=o=>{m.value=0;const r=o.target.value;let a=r.split(":")[0],s=r.split(":")[1];a=r.split(" ")[1]==="AM"||a==="12"?a:(Number(a)+12).toString(),s=s.split(" ")[0],h.minute=s,h.hour=a,g("changeCrontab",h)},t=o=>{m.value=0;const r=o.target.value;h.weekday=r,g("changeCrontab",h)},e=o=>{m.value=0;const r=o.target.value;h.day=r,g("changeCrontab",h)},i=()=>{v.value="custom",g("showAdvancedSettings")};return(o,r)=>(k(),X("div",Ie,[_("div",$e,[_("div",xe,[Ae,_("select",{class:"select",onChange:n},[_("option",{value:"",selected:!v.value,disabled:"",hidden:""}," Choose a periodicity ",8,je),_("option",{value:"",selected:v.value=="custom",disabled:"",hidden:""}," Custom ",8,Le),(k(!0),X(x,null,A(T(Ee),(a,s)=>(k(),X("option",{key:s,value:a,selected:a==v.value},C(a),9,Ue))),128))],32)]),_("div",Ne,[j(_("div",He,[N(" at "),_("select",{class:"select",onChange:y},[(k(!0),X(x,null,A(T(Oe)(),(a,s)=>(k(),X("option",{key:s,value:a,selected:a==parseInt(h.minute)},C(a),9,Re))),128))],32),N(" minutes ")],512),[[L,v.value==="hourly"]]),j(_("div",We,[N(" at "),_("select",{class:"select",onChange:c},[(k(!0),X(x,null,A(T(G)(),(a,s)=>(k(),X("option",{key:s,value:a,selected:a===f(h.hour,h.minute)},C(a),9,Be))),128))],32)],512),[[L,v.value==="daily"]]),j(_("div",Ye,[N(" on "),_("select",{class:"select",onChange:t},[(k(!0),X(x,null,A(T(z),(a,s)=>(k(),X("option",{key:s,value:s,selected:a===Object.values(T(z))[parseInt(h.weekday)]},C(a),9,Je))),128))],32),N(" at "),_("select",{class:"select",onChange:c},[(k(!0),X(x,null,A(T(G)(),(a,s)=>(k(),X("option",{key:s,value:a,selected:a===f(h.hour,h.minute)},C(a),9,Ve))),128))],32)],512),[[L,v.value==="weekly"]]),j(_("div",Fe,[N(" on "),_("select",{class:"select",onChange:e},[(k(!0),X(x,null,A(T(we)(),(a,s)=>(k(),X("option",{key:s,value:a,selected:a===parseInt(h.day)},C(a),9,Ze))),128))],32),N(" at "),_("select",{class:"select",onChange:c},[(k(!0),X(x,null,A(T(G)(),(a,s)=>(k(),X("option",{key:s,value:a,selected:a===f(h.hour,h.minute)},C(a),9,Ge))),128))],32)],512),[[L,v.value==="monthly"]])]),_("span",{class:"advanced-settings",onClick:i},"Advanced settings")])]))}});const ze=R(Pe,[["__scopeId","data-v-4a09321b"]]),qe=p=>(K("data-v-a5e38138"),p=p(),Q(),p),Ke={class:"container"},Qe=qe(()=>_("div",{class:"header"},[_("span",null,"Choice")],-1)),et={class:"body"},tt={class:"checkbox"},nt=["id","checked"],ot=["for"],rt={class:"name"},at=H({__name:"Choice",props:{choiceOptions:null,values:null},emits:["changeValues"],setup(p,{emit:g}){const l=p,f=$([]),h=$(l.choiceOptions);ne(()=>{l.values&&(f.value=l.values,l.values[0]===-1?f.value=[...Object.keys(l.choiceOptions).map(Number)]:f.value=l.values)}),ee(()=>l.values,()=>{l.values&&(l.values[0]!==-1?f.value=l.values:f.value=[...Object.keys(l.choiceOptions).map(Number)])});const v=U(()=>u.value.join(",")),m=U(()=>[...f.value].sort((y,c)=>y-c)),u=U(()=>{var y=[],c,t;for(let e=0;e<m.value.length;e++){for(c=[m.value[e]],t=c;m.value[e+1]-m.value[e]==1;)t=m.value[e+1],e++;y.push(c==t?c+"":c+"-"+t)}return y}),b=y=>f.value.includes(Number(y)),n=y=>{if(y.preventDefault(),f.value.length===1&&y&&y.target&&!y.target.checked){alert("You must select at least one item"),y.target.checked=!0;return}const c=y.target.id;b(c)?f.value=f.value.filter(t=>t!==Number(c)):f.value.push(Number(c)),g("changeValues",v.value?v.value:"*")};return(y,c)=>(k(),X("div",Ke,[Qe,_("div",et,[(k(!0),X(x,null,A(h.value,(t,e)=>(k(),X("div",{key:e,class:"item"},[_("div",tt,[_("input",{id:e,type:"checkbox",checked:b(e),onInput:n},null,40,nt),_("label",{for:`${e}`},null,8,ot)]),_("div",rt,C(t),1)]))),128))])]))}});const it=R(at,[["__scopeId","data-v-a5e38138"]]),st={class:"wrapper"},ut=H({__name:"TimeSelector",props:{initialValue:null,options:null,type:null},emits:["change"],setup(p,{emit:g}){const l=p,f=$(l.initialValue),h=v=>{g("change",l.type,v)};return ee(()=>l.initialValue,v=>{f.value=v}),(v,m)=>(k(),X("div",st,[D(it,{"choice-options":p.options,values:f.value.values,onChangeValues:h},null,8,["choice-options","values"])]))}});const Y=R(ut,[["__scopeId","data-v-a1b10267"]]),ct={class:"cron-settings-wrapper"},lt={class:"cron-settings"},dt={class:"human-readable"},ht={class:"cron-editor"},pt={class:"cron-tabs"},ft=["onClick"],vt={class:"actions"},mt=H({__name:"AdvancedCronEditor",props:{job:null},emits:["updateSchedule"],setup(p,{emit:g}){const f=$(p.job),{minute:h,hour:v,day:m,month:u,weekday:b}=Se(f.value.schedule),n=q({weekday:b,month:u,day:m,hour:v,minute:h}),y=["Month","Day of Month","Hours","Minutes","Days of week"],c=$(0),t=d=>{c.value=d},e=U(()=>o.value===f.value.schedule),i=U(()=>re.toString(o.value)),o=U(()=>`${n.minute} ${n.hour} ${n.day} ${n.month} ${n.weekday}`),r=(d,S)=>{n[d]=S},a=()=>{g("updateSchedule",o.value)},s=()=>{n.minute=h,n.hour=v,n.day=m,n.month=u,n.weekday=b};return(d,S)=>(k(),X("div",ct,[_("div",lt,[_("p",dt,'"'+C(T(i))+'" - GMT+0',1),_("div",ht,[_("div",pt,[(k(),X(x,null,A(y,(O,M)=>_("span",{key:M,class:te(["cron-tab",{active:c.value===M}]),onClick:w=>t(M)},C(O),11,ft)),64))]),j(D(Y,{"initial-value":T(B)(n.month),options:T(Me),type:"month",onChange:r},null,8,["initial-value","options"]),[[L,c.value===0]]),j(D(Y,{"initial-value":T(B)(n.day),options:T(Xe),type:"day",onChange:r},null,8,["initial-value","options"]),[[L,c.value===1]]),j(D(Y,{"initial-value":T(B)(n.hour),options:T(ke),type:"hour",onChange:r},null,8,["initial-value","options"]),[[L,c.value===2]]),j(D(Y,{"initial-value":T(B)(n.minute),options:T(Te),type:"minute",onChange:r},null,8,["initial-value","options"]),[[L,c.value===3]]),j(D(Y,{"initial-value":T(B)(n.weekday),options:T(z),type:"weekday",onChange:r},null,8,["initial-value","options"]),[[L,c.value===4]]),_("div",vt,[_("button",{class:"save-button button",onClick:s}," Reset changes "),_("button",{class:te(["save-button","button",T(e)?"disabled":""]),onClick:a}," Set changes ",2)])])])]))}});const yt=R(mt,[["__scopeId","data-v-07f4693a"]]),_t={class:"modal-wrapper"},gt={class:"modal"},bt={class:"modal-content-wrapper"},St=H({__name:"AdvancedSettingsModal",props:{job:null},emits:["close","saveCrontab"],setup(p,{emit:g}){const f=$(p.job),h=m=>{g("saveCrontab",m)},v=()=>{g("close")};return(m,u)=>(k(),X("div",_t,[_("div",gt,[_("span",{class:"close",onClick:v},"\xD7"),_("div",bt,[D(yt,{job:f.value,onUpdateSchedule:h},null,8,["job"])])])]))}});const Ot=R(St,[["__scopeId","data-v-184784f2"]]),ae=p=>(K("data-v-53b723be"),p=p(),Q(),p),wt={class:"schedule-editor"},Tt={class:"schedule-settings"},kt=ae(()=>_("div",{class:"title"},"Schedule settings",-1)),Xt=ae(()=>_("div",{class:"subtitle"},"Time Zone: GMT+0000",-1)),Mt={class:"readable-cron"},Et=H({__name:"ScheduleEditor",props:{job:null},setup(p){const g=p,l=$(!1),f=$(g.job),h=()=>{l.value=!l.value},v=()=>{l.value=!1},m=t=>({weekday:t.split(" ")[4],month:t.split(" ")[3],day:t.split(" ")[2],hour:t.split(" ")[1],minute:t.split(" ")[0]}),u=q(m(f.value.schedule)),b=U(()=>re.toString(n.value)),n=U(()=>`${u.minute} ${u.hour} ${u.day} ${u.month} ${u.weekday}`),y=t=>{u.minute==t.minute&&u.hour==t.hour&&u.day==t.day&&u.month==t.month&&u.weekday==t.weekday||(u.minute=t.minute,u.hour=t.hour,u.day=t.day,u.month=t.month,u.weekday=t.weekday,f.value.schedule=n.value)},c=t=>{t?(f.value.schedule=t,Object.assign(u,m(t))):f.value.schedule=n.value,v()};return ee(()=>f.value.schedule,t=>{y({minute:t.split(" ")[0],hour:t.split(" ")[1],day:t.split(" ")[2],month:t.split(" ")[3],weekday:t.split(" ")[4]})}),(t,e)=>(k(),X("div",wt,[_("div",Tt,[kt,Xt,D(ze,{class:"recurrence-settings",crontab:u,onChangeCrontab:y,onSaveCrontab:c,onShowAdvancedSettings:h},null,8,["crontab"])]),_("div",Mt,C(T(b)),1),l.value?(k(),P(Ot,{key:0,job:f.value,onClose:v,onSaveCrontab:c},null,8,["job"])):se("",!0)]))}});const Dt=R(Et,[["__scopeId","data-v-53b723be"]]),Ct={class:"job-editor"},It={class:"settings"},$t=H({__name:"JobEditor",setup(p){const g=ue(),{result:l,loading:f}=he(()=>pe.get(g.params.jobId)),h=ge.create();async function v(){if(!l.value)return;const{stdout:m,stderr:u}=await l.value.test();h.log({type:"stdout",log:m}),h.log({type:"stderr",log:u})}return(m,u)=>{var b;return k(),X("div",Ct,[T(f)||!T(l)?(k(),P(de,{key:0})):(k(),P(ce,{key:1},{left:F(()=>[D(ve,{link:"/_editor/jobs"})]),right:F(()=>[D(be,{path:"jobs"}),D(fe,{model:T(l)},null,8,["model"])]),default:F(()=>[D(le,{title:"Settings"},{default:F(()=>[_("div",It,[D(_e,{runtime:T(l)},null,8,["runtime"]),D(Dt,{style:{width:"100%",height:"100%"},job:T(l)},null,8,["job"])])]),_:1})]),_:1})),D(me,{"log-service":T(h),runtime:"jobs",onRestart:v},null,8,["log-service"]),D(ye,{"has-changes":(b=T(l))==null?void 0:b.hasChanges()},null,8,["has-changes"])])}}});const Qt=R($t,[["__scopeId","data-v-e13d5fde"]]);export{Qt as default};
//# sourceMappingURL=JobEditor.02625b1c.js.map
