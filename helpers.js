/**
 * Usage: filterByCriteria(arr, { age: 21, color: 'blue' }))
 */
export const filterByCriteria = (arr, criteria) {
  return arr.filter(function(obj) {
    return Object.keys(criteria).every(function(c) {
      return obj[c] == criteria[c];
    });
  });
}
/**
 * Strip object from its original. (useful for object copy)
 *
 * @param object
 * @return {{}}
 */
export const strip = (object) => {
  if (!object) return {};
  return JSON.parse(JSON.stringify(object));
};

/**
 *
 * @param array - target array
 * @param key - key name of object
 * @param value - matched value of given key
 * @returns {*}
 */
export const findObjectByKey = (array, key, value) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
};

/**
 *
 * @param array - target array
 * @param key - key name of object
 * @param value - matched value of given key
 * @returns {*}
 */
export const deleteObjectByKey = (array, key, value) => {
  return array.filter(el => {
    return el.name !== value;
  }
};
export const deleteObjectByKey = (array, key, value) => {
  if (array.length === 0) return;
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      array.splice(i, 1);
    }
  }
  return null;
};

/**
 *
 * @param url to check
 * @returns {boolean}
 */
export const isValidUrl = (url) => {
  var r = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  );
  return r.test(url);
};

/**
 * Truncate string to set number of characters.
 *
 * @param text
 * @param n
 * @return {*}
 */
export const trunc = (text, n) => {
  if (!text) return '';
  return text.length > n ? text.substr(0, n - 3) + '...' : text;
};

/**
 * Add comma after every three decimals in a number.
 *
 * @param value
 * @return {*}
 */
export const commaSeparateNumber = (value) => {
  while (/(\d+)(\d{3})/.test(value.toString())) {
    value = value.toString().replace(/(\d+)(\d{3})/, '$1' + ',' +
      '$2');
  }
  return value;
};

/**
 * Check if object is empty.
 *
 * @param obj
 * @return {boolean}
 */
export const isObjectEmpty = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};

/**
 * Round value to given amount of decimals.
 *
 * @param value
 * @param decimals
 * @return {number}
 */
export const round = (value, decimals) => {
  let multiplier = 1;
  decimals = decimals || 8;

  multiplier = 1;

  while ((multiplier + '').length <= decimals) {
    multiplier = multiplier * 10;
  }

  return Math.round(parseFloat(value) * multiplier) /
    multiplier;
};

/**
 * Copy element value to clipboard.
 *
 * @param id
 * @return {boolean}
 */
export const copyToClipboard = function(text) => {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData('Text', text);
  } else if (document.queryCommandSupported && document.queryCommandSupported(
      'copy')) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (err) {
      this.sayHello('Copy to clipboard failed.', err); // TOAST
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};
/**
 * Production friendly console log.
 * @param content
 */
export const log = (content) => {
  if (process.env !== 'production') {
    console.log(content);
  }
};

/**
 * Sum all items in arrray.
 * @param arr
 */
export const sumArray = (arr) => {
  let sum = null;
  for (let i of arr) {
    sum = sum + i;
  }
  return sum;
};


/**
 * Native funciton to lodash's _.uniq
 * IE11+
 * @param arr
 */
export const uniq = (arr) => {
  return [...Set(arr)];
};


/**
 * Native funciton to lodash's _.fromPairs
 *  @param arr
 */
export const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1],
  acc), {});

/**
 *
 * @param str
 * @returns {string}
 * removes consecutive white spaces and trims string
 */

export const smartTrim = (str) => {
  if (!str) return '';
  return str.trim().replace(/\s+/g, ' ');
};

/**
* @param ms {integer} - time in miliseconds
* usage: await sleep (1000)
*/
export const async sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
* @param delta {integer} - number of minutes
* usage: minutesFromNow(15)
*/
export const minutesFromNow = (delta) => {
   return new Date(new Date().getTime() + delta * 60 * 1000)
}
