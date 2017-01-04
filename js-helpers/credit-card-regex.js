/* eslint-disable max-len */
export default [
	{ key: 'amex', pattern: /3[47][0-9]{13}/ },
	{ key: 'diners-club', pattern: /3(?:0[0-5]|[68][0-9])[0-9]{11}/ },
	{ key: 'discover', pattern: /65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})/ },
	{ key: 'jcb', pattern: /(?:2131|1800|35\d{3})\d{11}/ },
	{ key: 'mastercard', pattern: /5[1-5][0-9]{14}/ },
	{ key: 'visa', pattern: /4[0-9]{12}(?:[0-9]{3})?/ },
];
/* eslint-enable max-len */
