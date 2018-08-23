/* the following codes belong to saurav jaiswal*/

const _async = require('asyncawait/async');
const _await = require('asyncawait/await');
const {GTFS} = require('./gtfs.js');
const gtfs = new GTFS();

_async(() => {
	const trips =_await(gtfs.getTripsForCalendarDate('20160518'));
	console.log(trips.length);
	})().catch(err => {
		console.log(err);
	});



