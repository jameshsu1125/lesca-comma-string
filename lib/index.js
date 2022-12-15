define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectToCommaString = exports.CommaStringToObject = void 0;
    var CommaStringToObject = function (commaDB, keys) {
        // return empty string
        if (commaDB === '') {
            return [];
        }
        // check keys type
        var checkKeyType = keys.filter(function (item) { return typeof item !== 'string'; });
        if (checkKeyType.length !== 0) {
            console.warn('[CommaDBtoObject]: parmeter keys type is not string.');
            return false;
        }
        // check keys index number is match commaDB length.
        var splitedDB = commaDB.split(',');
        var keysLength = keys.length;
        var remainder = splitedDB.length % keysLength;
        if (remainder !== 0) {
            console.warn('[CommaDBtoObject]: commaDB index number is not match keys length.');
            return false;
        }
        // convert to object
        var length = Math.ceil(splitedDB.length / keysLength);
        var output = Array.from(new Array(length).keys()).map(function (i) {
            var item = {};
            keys.forEach(function (e, index) {
                item[e] = splitedDB[i * keysLength + index];
            });
            return item;
        });
        return output;
    };
    exports.CommaStringToObject = CommaStringToObject;
    var ObjectToCommaString = function (parm) {
        // check empty array
        if (parm.length === 0) {
            return '';
        }
        // find keys
        var item = parm[0];
        var keys = Object.keys(item);
        var output = parm.map(function (e) { return Object.values(e).join(','); }).join(',');
        return [output, keys];
    };
    exports.ObjectToCommaString = ObjectToCommaString;
    var Misc = {
        CommaStringToObject: exports.CommaStringToObject,
        ObjectToCommaString: exports.ObjectToCommaString,
    };
    exports.default = Misc;
});
