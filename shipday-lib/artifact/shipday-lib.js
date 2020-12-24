(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ShipdayDispatch = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hello = require("./services/hello.world");

Object.keys(_hello).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hello[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hello[key];
    }
  });
});

var _random = require("./services/random.generator");

Object.keys(_random).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _random[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _random[key];
    }
  });
});

var _externalOrder = require("./services/external.order.form");

Object.keys(_externalOrder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _externalOrder[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _externalOrder[key];
    }
  });
});

},{"./services/external.order.form":2,"./services/hello.world":3,"./services/random.generator":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMailSendingAjaxConfig = getMailSendingAjaxConfig;
exports.getMailSendingWithoutSignatureAjaxConfig = getMailSendingWithoutSignatureAjaxConfig;
exports.getCompanyInfoAjaxConfig = getCompanyInfoAjaxConfig;

function getMailSendingAjaxConfig(data) {
  var url = "/sendEmail";
  return {
    url: url,
    type: 'POST',
    data: data,
    dataType: 'json',
    async: false
  };
}

function getMailSendingWithoutSignatureAjaxConfig(data) {
  var url = "/sendEmailWithoutSignature";
  return {
    url: url,
    type: 'POST',
    data: data,
    dataType: 'json',
    async: false
  };
}

function getCompanyInfoAjaxConfig(identificationNo) {
  var url = "/getCompanyInfobyIdentificationNumber/" + identificationNo;
  return {
    url: url,
    type: 'GET',
    dataType: 'json'
  };
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = sayHello;

function sayHello() {
  return 'Shipday Dispatch Application';
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlphaNumericValue = getAlphaNumericValue;
var ALPHA_NUMERIC_SEED = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getAlphaNumericValue(length) {
  var chars = [];

  for (var i = 0; i < length; i++) {
    chars.push(ALPHA_NUMERIC_SEED[Math.floor(Math.random() * ALPHA_NUMERIC_SEED.length)]);
  }

  return chars.join('');
}

},{}]},{},[1])(1)
});
