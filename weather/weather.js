const request = require('request');

var getWeather = () => {
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
}

module.exports = {
	getWeather
};