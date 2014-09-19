var Matrix = (function() {
    'use strict';

    var mixin = function(target) {
        for (var prop in Matrix.prototype) {
            target[prop] = Matrix.prototype[prop];
        }

        return target;
    };

    var makeMatrix = function(m, n, v) {

    };

    var Matrix = function(obj) {
        if (obj) {
            return mixin(obj);
        }
    };

    // setup prototype chain
    var F = function() {};
    F.prototype = Array.prototype;
    Matrix.prototype = new F();

    Matrix.prototype.create = function(m, n, v) {

        function makeArray(size, defaultValue) {
            var i = -1, rst = this;

            while (++i < size) {
                if (Object.prototype.toString.call(defaultValue) === '[object Array]') {
                    defaultValue = defaultValue.slice(); // make sure to insert copy of `array`
                }
                rst.push(defaultValue);
            }
            return rst;
        }

        if (typeof v === 'undefined') {
            v = 0;
        }

        return makeArray.call(this, n, []).map(function(item, i) {
            return makeArray.call(this[i], m, v);
        }, this);
    };

    Matrix.prototype.row = function(x) {
        return this[x - 1];
    };

    Matrix.prototype.column = function(y) {
        return this.map(function(row) {
            return row[y - 1];
        });
    };

    Matrix.prototype.position = function(x, y, v) {
        // if pass additional parameter, use as a setter
        if (arguments.length === 3) {
            this[x - 1][y - 1] = v;
            return this;
        } else {
            return this[x - 1][y - 1];
        }
    };

    return Matrix;
}());
