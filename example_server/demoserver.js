/*global require: true, console: true, process: true */

(function(messageId, callback) {
	var _GCM = require('gcm').GCM;

	var GCM = new _GCM('AIzaSyDkQwSogny5uxA3TG0fg1tQ2rmw70ATrD0');

	var registration_id = 'APA91bGo2LIzN-8KY6BWfgg6vGyK19LKKp5ih0Wyzsoj2dvt44BPExfQXUrGXJu5kbCbV8pH7vq-Iyfr14T8ZhF43cMLxQ-k1zKlfX7_dcpwbkd2D1EZfCej3Y4BoFg-AgH0Nu73aklA';

	var message = {
		collapse_key: messageId,
		registration_id: registration_id,
		'data.title': 'Push From demoserver.js',
		'data.sound': 'blacksmoke.mp3',
		'data.message': 'Message Description',
		'data.appdata': JSON.stringify({
			avatar: 'hoge.png',
			badges: 1,
			notification_id: 100,
			tipo_id: 10,
			from: 302421605303,
			link: 'http://www.google.com/'
		})
	};

	GCM.send(message, function(err, messageId) {
		console.log('send messageId:' + messageId);
		if (err) {
			console.error('error!');
		}
		callback(0);
	});
})((new Date()).getTime() + '', process.exit);
