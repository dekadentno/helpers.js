    /**
     * Strip object from its original. (useful for object copy)
     *
     * @param object
     * @return {{}}
     */
    strip: function(object) {
      if (!object) return {};
      return JSON.parse(JSON.stringify(object));
    },

    /**
     *
     * @param array - target array
     * @param key - key name of object
     * @param value - matched value of given key
     * @returns {*}
     */
    findObjectByKey: function (array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
        return array[i];
        }
      }
      return null;
    },

    /**
     *
     * @param array - target array
     * @param key - key name of object
     * @param value - matched value of given key
     * @returns {*}
     */
    deleteObjectByKey: function (array, key, value) {
      if (array.length === 0) return;
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          array.splice(i, 1);
        }
      }
      return null;
    },

    /**
     *
     * @param url to check
     * @returns {boolean}
     */
    isValidUrl: function(url) {
      var r = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
      return r.test(url);
    },
    
    /**
     * Truncate string to set number of characters.
     *
     * @param text
     * @param n
     * @return {*}
     */
    trunc: function(text, n) {
      if (!text) return '';

      return text.length > n ? text.substr(0, n - 3) + '...' : text;
    },
    
        /**
     * Add comma after every three decimals in a number.
     *
     * @param value
     * @return {*}
     */
    commaSeparateNumber: function(value) {
      while (/(\d+)(\d{3})/.test(value.toString())) {
        value = value.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
      }
      return value;
    },

     /**
     * Check if object is empty.
     *
     * @param obj
     * @return {boolean}
     */
    isObjectEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }
      return true;
    },
    
     /**
     * Round value to given amount of decimals.
     *
     * @param value
     * @param decimals
     * @return {number}
     */
    round: function(value, decimals) {
      let multiplier = 1;
      decimals = decimals || 8;

      multiplier = 1;

      while ((multiplier + '').length <= decimals) {
        multiplier = multiplier * 10;
      }

      return Math.round(parseFloat(value) * multiplier) / multiplier;
    },
    
     /**
     * Copy element value to clipboard.
     *
     * @param id
     * @return {boolean}
     */
    copyToClipboard(text) {
      if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData('Text', text);
      } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
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
    }
