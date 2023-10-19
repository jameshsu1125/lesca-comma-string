"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListToCommaString = exports.CommaStringToList = exports.CommaStringToArray = exports.ArrayToCommaString = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var CommaStringToList = exports.CommaStringToList = function CommaStringToList(commaString, keys) {
  // return empty string
  if (commaString === '') {
    return [];
  }

  // check keys type
  var checkKeyType = keys.filter(function (item) {
    return typeof item !== 'string';
  });
  if (checkKeyType.length !== 0) {
    console.warn('[CommaDBtoObject]: parameter keys type is not string.');
    return false;
  }

  // check keys index number is match commaString length.
  var splitDB = commaString.split(',');
  var keysLength = keys.length;
  var remainder = splitDB.length % keysLength;
  if (remainder !== 0) {
    console.warn('[CommaDBtoObject]: commaDB index number is not match keys length.');
    return false;
  }

  // convert to object
  var length = Math.ceil(splitDB.length / keysLength);
  var output = Array.from(new Array(length).keys()).map(function (i) {
    var item = {};
    keys.forEach(function (e, index) {
      item[e] = splitDB[i * keysLength + index];
    });
    return item;
  });
  return output;
};
var ListToCommaString = exports.ListToCommaString = function ListToCommaString(parm) {
  // check empty array
  if (parm.length === 0) {
    return '';
  }

  // find keys
  var _parm = (0, _slicedToArray2["default"])(parm, 1),
    item = _parm[0];
  var keys = Object.keys(item);
  var output = parm.map(function (e) {
    return Object.values(e).join(',');
  }).join(',');
  return [output, keys];
};
var CommaStringToArray = exports.CommaStringToArray = function CommaStringToArray(commaString) {
  if (commaString === '') return [];
  return commaString.split(',');
};
var ArrayToCommaString = exports.ArrayToCommaString = function ArrayToCommaString(data) {
  return data.join(',');
};
var Misc = {
  CommaStringToList: CommaStringToList,
  ListToCommaString: ListToCommaString,
  CommaStringToArray: CommaStringToArray,
  ArrayToCommaString: ArrayToCommaString
};
var _default = exports["default"] = Misc;