var Matrix = (function() {
    'use strict';

    var isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    var mixin = function(target) {
        for (var prop in Matrix.prototype) {
            target[prop] = Matrix.prototype[prop];
        }

        return target;
    };

    // constructor
    var Matrix = function(obj) {
        if (obj) {
            return mixin(obj);
        }
    };

    // setup prototype chain to inherit `Array`
    var F = function() {};
    F.prototype = Array.prototype;
    Matrix.prototype = new F();

    Matrix.prototype.create = function(m, n, v) {

        function makeArray(size, defaultValue) {
            /* jshint validthis:true */
            var i = -1, rst = this;

            while (++i < size) {
                if (isArray(defaultValue)) {
                    // make sure to insert copy of the `array`
                    defaultValue = defaultValue.slice();
                }
                rst.push(defaultValue);
            }
            return rst;
        }

        if (typeof v === 'undefined') {
            v = 0;
        }

        // rebind `this` while calling `makeArray`
        return makeArray.call(this, n, []).map(function(item, i) {
            return makeArray.call(this[i], m, v);
        }, this);
    };

    Matrix.prototype.row = function(m) {
        return this[m - 1];
    };

    Matrix.prototype.column = function(n) {
        return this.map(function(row) {
            return row[n - 1];
        });
    };

    Matrix.prototype.position = function(m, n, v) {
        // if pass additional parameter, use as a setter
        if (arguments.length === 3) {
            this[m - 1][n - 1] = v;
            return this;
        } else {
            return this[m - 1][n - 1];
        }
    };

    return Matrix;
}());
