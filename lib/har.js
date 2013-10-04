/* jshint laxcomma: true */

/**
 * Module dependencies.
 */

var _ = require('lodash');

/**
 * Initialize a new har `Har` with `str`.
 *
 * @param {String} str
 * @return {Har}
 * @api public
 */

function har(str) {
  return new Har(JSON.parse(str));
}

/**
 * Initialize a new har `Har` with `obj`.
 *
 * @param {Object} obj
 * @api private
 */

function Har(obj) {
    var tmpl = { log: {
        version : 1.2
      , creator : {}
      , browser : {}
      , pages: []
      , entries: []
      , comment: ""
    }
    };

    this.obj = _.extend({}, tmpl, obj);
}

/**
 * Build the creator section.
 *
 * @param {Object} obj
 * @return {Har}
 * @api public
 */

 Har.prototype.creator = function(obj) {
     _.extend(this.obj.creator, obj);
    return this;
};

/**
 * Build the browser section.
 *
 * @param {Object} obj
 * @return {Har}
 * @api public
 */

 Har.prototype.browser = function(obj) {
     _.extend(this.obj.browser, obj);
    return this;
};

/**
 * Build a page.
 *
 * @param {Object} obj
 * @return {Har}
 * @api public
 */

 Har.prototype.page = function(obj) {
     this.obj.pages.push(obj);
    return this;
};

/**
 * Build an entry.
 *
 * @param {Object} obj
 * @return {Har}
 * @api public
 */

 Har.prototype.entry = function(obj) {
     this.obj.entries.push(obj);
    return this;
};

/**
 * Export the har object.
 *
 * @return {Object}
 * @api public
 */

 Har.prototype.log = function() {
    return _.clone(this.obj, true);
};

/**
 * Expose `har`.
 */

exports = module.exports = har;
