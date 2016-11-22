var HttpApiError = require('..')

// 使用
var network = new HttpApiError("Timeout", 'GENERIC', 0);
console.log(network); // true

var http = new HttpApiError("not found", 'HTTP', 404);
console.log(http); // true

var api = new HttpApiError("APIKEY", 'API', 1);
console.log(api); // true
