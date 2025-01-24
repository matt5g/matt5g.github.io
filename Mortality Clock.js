// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: magic;
var widget = new ListWidget()
const bday = new Date(2007, 1, 25, 0);
const currentdate = new Date();
const timestring = currentdate - bday
function convertMiliseconds(miliseconds, format) {
  
  var years, days, hours, minutes, seconds, total_days, total_hours, total_minutes, total_seconds, leaps;
  

  total_seconds = parseInt(miliseconds / 1000);
  total_minutes = parseInt(total_seconds / 60);
  total_hours = parseInt(total_minutes / 60);
  leaps = parseInt(total_hours / 35064) // accounts for leap years (35064 is 4 years)
  total_days = parseInt((total_hours / 24) - leaps);
  years = parseInt(total_days / 365);

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);
  days = parseInt(total_days % 365)
  console.log(total_days, total_hours, total_minutes, total_seconds)

  switch(format) {
	case 's':
		return total_seconds;
	case 'm':
		return total_minutes;
	case 'h':
		return total_hours;
	case 'd':
		return days;
	case 'td':
		return total_days;
	case 'y':
		return years;
	default:
		return { y: years, d: days, h: hours, m: minutes, s: seconds, td: total_days };
  }
};
let fd = convertMiliseconds(timestring)
console.log(bday, currentdate, timestring, fd)
let mainCol = widget.addStack()
mainCol.layoutVertically()
let row1 = mainCol.addStack()
row1.layoutHorizontally()
row1.addSpacer()
let text1 = row1.addText(`${fd.y}:${fd.d}:${fd.h}:${fd.m}:${fd.s}`)
let zaFont1 = new Font("AppleSDGothicNeo-Bold", 14.5)
text1.font = zaFont1
text1
row1.addSpacer()
let row2 = mainCol.addStack()
row2.layoutHorizontally()
row2.addSpacer()
let text2 = row2.addText("DAY:")
let zaFont2 = new Font("AppleSDGothicNeo-Bold", 26)
text2.font = zaFont2
text2
row2.addSpacer()
let row3 = mainCol.addStack()
row3.layoutHorizontally()
row3.addSpacer()
let text3 = row3.addText(`${fd.td + 5}`)
let zaFont3 = new Font("AppleSDGothicNeo-Bold", 36)
text3.font = zaFont3
text3
row3.addSpacer()
// let row4 = mainCol.addStack()
// row4.layoutHorizontally()
// row4.addSpacer()
// let text4 = row4.addText("")
// let zaFont4 = new Font("AppleSDGothicNeo-Bold", 14)
// text4.font = zaFont4
// text4.centerAlignText()
// text4
// row4.addSpacer()
let nextRefresh = Date.now() + 1000 // add 1 second to now
widget.refreshAfterDate = new Date(nextRefresh)
console.log(fd)
if (config.runsInApp) widget.presentSmall()
else if (config.runsInWidget) Script.setWidget(widget)