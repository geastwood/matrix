var hasOwn = Object.prototype.hasOwnProperty;
describe('Matrix', function() {
    it('Matrix object exist', function() {
        expect(Matrix).toBeDefined();
    });
});
describe('if pass object, return the `mixin` version', function() {
    var arr = [], obj;
    beforeEach(function() {
        arr = [];
        obj = Matrix(arr);
    });
    it('mixin on the object, not on `prototype`', function() {
        expect(obj.row).toBeDefined();
        expect(hasOwn.call(obj, 'row')).toBe(true);
        expect(hasOwn.call(obj, 'column')).toBe(true);
        expect(hasOwn.call(obj, 'position')).toBe(true);
    });
    it('prototype chain is correct', function() {
        expect(Matrix.prototype.isPrototypeOf(obj)).toBe(false);
        expect(Array.prototype.isPrototypeOf(obj)).toBe(true);
        expect(Object.prototype.isPrototypeOf(obj)).toBe(true);
        expect(Function.prototype.isPrototypeOf(obj)).toBe(false);
    });
});
describe('if without parameter, return new instance', function() {
    var obj;
    beforeEach(function() {
        obj = new Matrix();
    });
    it('property is not defined on the object, but prototype chain', function() {
        expect(obj.row).toBeDefined();
        expect(hasOwn.call(obj, 'row')).toBe(false);
        expect(hasOwn.call(obj, 'column')).toBe(false);
        expect(hasOwn.call(obj, 'position')).toBe(false);
    });
    it('prototype chain is correct', function() {
        expect(Matrix.prototype.isPrototypeOf(obj)).toBe(true);
        expect(Array.prototype.isPrototypeOf(obj)).toBe(true);
        expect(Function.prototype.isPrototypeOf(obj)).toBe(false);
    });
});
describe('used as mixin should work correctly', function() {
    var arr = [
        [ 1,  2,  3],
        [ 4,  5,  6],
        [ 7,  8,  9],
        [10, 11, 12]
    ];
    Matrix(arr);
    it('row', function() {
        expect(arr.row(1).length).toBe(3);
        expect(arr.row(4).length).toBe(3);
        expect(arr.row(2)).toEqual([4, 5, 6]);
    });
    it('column', function() {
        expect(arr.column(1).length).toBe(4);
        expect(arr.column(3).length).toBe(4);
        expect(arr.column(2)).toEqual([2, 5, 8, 11]);
    });
    it('position', function() {
        expect(arr.position(1, 1)).toBe(1);
        expect(arr.position(4, 3)).toBe(12);
        expect(arr.position(3, 2)).toBe(8);
        arr.position(3, 2, 18); // setter
        expect(arr.position(3, 2)).toBe(18);
    });
});
describe('used as constructor should work correctly', function() {
    var arr;
    it('create empty matrix', function() {
        var m = 5, n = 6;
        arr = new Matrix();
        arr.create(m, n);
        expect(arr.row(1).length).toBe(n);
        expect(arr.column(1).length).toBe(m);
        arr.position(1, 1, 1);
        arr.position(1, 2, 1);
        expect(arr.column(1).reduce(function(a, b) {return a + b;})).toBe(1);
        expect(arr.row(1).reduce(function(a, b) {return a + b;})).toBe(2);
    });
    it('create with parameters', function() {
        var m = 6, n = 7, defaultValue = null;
        var arr = new Matrix(m, n, defaultValue);
        expect(arr.row(1).length).toBe(n);
        expect(arr.position(1, 2)).toBe(null);
        arr.position(2, 3, 5);
        expect(arr.position(2, 3)).toBe(5);
        expect(arr.column(3).reduce(function(a, b) {return a + b;})).toBe(5);
    });
});
describe('size of a matrix', function() {
    var arr = new Matrix(6, 5, 1);
    console.log(arr);
    it('should work', function() {
        expect(arr.size()).toEqual({m: 6, n: 5});
    });
});
