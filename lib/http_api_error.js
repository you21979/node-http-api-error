var util = require('util');
var BaseError = require('@you21979/base-error')

function HttpApiError(message, error_type, error_code, debug) {
    BaseError.call(this, message)
    this.error_type = error_type || 'GENERIC';
    this.error_code = error_code || -1;
    this.debug = undefined;
};
util.inherits(HttpApiError, BaseError);

module.exports = HttpApiError

