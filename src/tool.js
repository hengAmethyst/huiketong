import wepy from 'wepy';
import ApiUrl from './api-url';

export function genReqBody(param, token) {
  let body = {
    reqId: 0,
    channel: 31,
    os: '',
    ver: '',
    appVer: '',
    model: '',
    lng: '',
    lat: '',
    signType: '',
    sign: '',
    appId: 5,
    token,
    param
  };

  return body;
}

export const sleep = ts => new Promise(resolve => setTimeout(resolve, ts));

export function requestVerificationCode(phone) {
  let param = {
    mobile: phone,
    serviceType: 1
  };
  return wepy.request({
    url: ApiUrl.loginInfo.smsCode,
    data: genReqBody(param, ''),
    method: 'POST'
  });
}

/**
 * Polyfill: String.prototype.repeat
 */
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}
/**
 * Polyfill: String.prototype.padStart
 */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}
/**
 * YYYY-MM-DD HH:mm:ss
 * 年-月-日 时:分:秒
 *
 * @param {number|Date} ts
 * @param {string} format
 */
export function formatDateTime(ts, format = 'YYYY-MM-DD HH:mm:ss') {
  let date = new Date(ts);
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => {
    switch (match) {
      case 'YYYY':
        return date.getFullYear();
      case 'MM':
        return (date.getMonth() + 1 + '').padStart(2, '0');
      case 'DD':
        return (date.getDate() + '').padStart(2, '0');
      case 'HH':
        return (date.getHours() + '').padStart(2, '0');
      case 'mm':
        return (date.getMinutes() + '').padStart(2, '0');
      case 'ss':
        return (date.getSeconds() + '').padStart(2, '0');
      default:
        return match;
    }
  });
}