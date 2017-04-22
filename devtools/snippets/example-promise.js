import Promise from ('bluebird');

const promise = new Promise((resolve, reject) => {
	get('http://www.google.com', (err, res) => {
		if (err) reject(err);
		else resolve(res);
	});
});

const outputError = err => {
	console.log('ERROR', err);
};

const outputResult = result => {
	console.log('RESULT', result);
};


promise.catch(outputError).then(outputResult);