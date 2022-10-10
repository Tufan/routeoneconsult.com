Object.extend(Prototype.Browser, {
	IE6 : false /*@cc_on || @_jscript_version < 5.7 @*/,
	IE7 : false /*@cc_on || @_jscript_version == 5.7 @*/
});

var V = {
	Version: '1.2',
	
	clearForms: function()
	{
		$$('input[type=text]').each(function(f)
		{
			$(f)
				.observe('focus', function() { if ( $F(f) === $(f).defaultValue ) { $(f).value = ''; } })
				.observe('blur', function() { if ( $F(f).blank() ) { $(f).value = $(f).defaultValue; } });
		});
	},
	
	matchColumns: function()
	{
		var height = 0;
		$$('div.column')
			.each(function(column) { height = ( $(column).getHeight() > height ) ? $(column).getHeight() : height; })
			.invoke('setStyle', { minHeight : height + 'px' });
			
		if ( Prototype.Browser.IE6 ) { $$('div.column').invoke('setStyle', { height : height + 'px' }); }
	}
};

document.observe('contentloaded', function()
{
	V.clearForms();
	Event.observe(window, 'load', function()
	{
		V.matchColumns();
	});
});

//clickclear//

function clickclear(thisfield, defaulttext) {
if (thisfield.value == defaulttext) {
thisfield.value = "";
}
}
function clickrecall(thisfield, defaulttext) {
if (thisfield.value == "") {
thisfield.value = defaulttext;
}
}

function dispDate(dateVal) {
DaystoAdd=dateVal
TodaysDate = new Date();
TodaysDay = new Array('Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday');
TodaysMonth = new Array('January', 'February', 'March','April', 'May','June', 'July', 'August', 'September','October', 'November', 'December');
DaysinMonth = new Array('31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31');
function LeapYearTest (Year) {
if (((Year % 400)==0) || (((Year % 100)!=0) && (Year % 4)==0)) {
return true;
}
else {
return false;
}
}
CurrentYear = TodaysDate.getYear();
if (CurrentYear < 2000)
CurrentYear = CurrentYear + 1900;
currentMonth = TodaysDate.getMonth();
DayOffset = TodaysDate.getDay();
currentDay = TodaysDate.getDate();
month = TodaysMonth[currentMonth];
if (month == 'February') {
if (((CurrentYear % 4)==0) && ((CurrentYear % 100)!=0) || ((CurrentYear % 400)==0)) {
DaysinMonth[1] = 29;
}
else {
DaysinMonth[1] = 28;
}
}
days = DaysinMonth[currentMonth];
currentDay += DaystoAdd;
if (currentDay > days) {
if (currentMonth == 11) {
currentMonth = 0;
month = TodaysMonth[currentMonth];
CurrentYear = CurrentYear + 1
}
else {
month =
TodaysMonth[currentMonth+1];
}
currentDay = currentDay - days;
}
DayOffset += DaystoAdd;
function offsettheDate (offsetCurrentDay) {
if (offsetCurrentDay > 6) {
offsetCurrentDay -= 6;
DayOffset = TodaysDay[offsetCurrentDay-1];
offsettheDate(offsetCurrentDay-1);
}
else {
DayOffset = TodaysDay[offsetCurrentDay];
return true;
}
}
offsettheDate(DayOffset);TheDate  = DayOffset + ', ';
TheDate += currentDay + ' ';
TheDate += month + ' ';
if (CurrentYear<100) CurrentYear="19" + CurrentYear;
TheDate += CurrentYear;
document.write(' '+TheDate);
}

}