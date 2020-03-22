var reg = /\d+(?=%)/;


console.log(/^\uD83D/u.test('\uD83D\uDC2A'));
console.log(/^\uD83D/.test('\uD83D\uDC2A'))