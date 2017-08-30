// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	}
// 	else {
// 		console.log(JSON.stringify(results, undefined, 4));
// 	}
// });

const request = require('request');

request({
	url: 'https://api.darksky.net/forecast/05fc7ceb6bc038ca80b0191431db89a0/37.8267,-122.4233',
	json: true
}, (error, response, body) => {
	if ((!error) && (response.statusCode === 200)) {
		console.log(body.currently.temperature);
	}
	else{
		console.log('Unable to fetch weather.');
	}
});

// 05fc7ceb6bc038ca80b0191431db89a0