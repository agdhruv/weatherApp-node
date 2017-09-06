var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => { // return a promise
		setTimeout(() => {
			if ((typeof a === 'number') && (typeof b === 'number')){
				resolve(a + b);
			}
			else {
				reject('Arguments must be numbers.');
			}
		}, 1500);
	});
};

var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hey. It worked!');
		// reject('Unable to fulfill promise.');
	}, 2500);
});

somePromise.then((message) => {
	console.log("Success:", message);
}, (errorMessage) => {
	console.log("Error:", errorMessage);
});

asyncAdd(1, 299).then((res) => {
	console.log(res);
	return asyncAdd(res, 31);
}).then((res) => {
	console.log(res);
}).catch((errorMessage) => { // one common error handler for all the promise rejects
	console.log(errorMessage);
});