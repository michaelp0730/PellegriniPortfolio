function displayTime() {
	'use strict';
    var elt = document.getElementById('clock'),
		now = new Date();
	elt.innerHTML = now.toLocaleTimeString();
	setTimeout(displayTime, 1000);
}

var setAlarmBtn = document.getElementById('submit'),
	alarmSound = document.getElementById('soundElement'),
	stopAlarmBtn = document.getElementById('stopAlarm'),
	snoozeBtn = document.getElementById('snooze');

function alarm() {
	'use strict';
	var today = new Date(),
		rightNow = today.toLocaleTimeString(),
		rightNowNoSeconds = rightNow.slice(0, 5),
		alarmHour = document.getElementById('selectHour').value,
		alarmMinute = document.getElementById('selectMinute').value,
		soundAlarm = alarmHour + ':' + alarmMinute,
		checkTimer = setTimeout(alarm, 1000); // check every second

	if (soundAlarm === rightNowNoSeconds) {
		alarmSound.innerHTML = '<embed src="alarm.mp3" hidden="true" autostart="true" loop="false">';
	}

	function snooze() {
		alarmSound.innerHTML = '';
		clearTimeout(checkTimer);
		checkTimer = setTimeout(alarm, 5000); // only a 5 second snooze used for presentational purposes
	}
	snoozeBtn.onclick = snooze;

}

function stopAlarm() {
	'use strict';
	document.location.reload();
}

window.onload = displayTime;
setAlarmBtn.onclick = alarm;
stopAlarmBtn.onclick = stopAlarm;