var hasOwn = Object.prototype.hasOwnProperty;
describe('Matrix', function() {
    it('Matrix object exist', function() {
        expect(Matrix).toBeDefined();
    });
});
describe('if pass object, return `mixin`', function() {
    it('mixin on the object, not on `prototype`', function() {
        var arr = [];
        var obj = Matrix(arr);
        expect(obj.row).toBeDefined();
        expect(hasOwn.call(obj, 'row')).toBe(true);
    });
});
describe('if without parameter, return new instance', function() {
    it('property is not defined on the object, but prototype chain', function() {
        var obj = new Matrix();
        expect(obj.row).toBeDefined();
        expect(hasOwn.call(obj, 'row')).toBe(false);
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
    it('create', function() {
        arr = new Matrix();
        arr.create(5, 6);
        expect(arr.row(1).length).toBe(5);
        expect(arr.column(1).length).toBe(6);
        arr.position(1, 1, 1);
        arr.position(1, 2, 1);
        expect(arr.column(1).reduce(function(a, b) {return a + b;})).toBe(1);
        expect(arr.row(1).reduce(function(a, b) {return a + b;})).toBe(2);
    });
});
