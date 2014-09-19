describe('Matrix', function() {
    it('Matrix object exist', function() {
        expect(Matrix).toBeDefined();
    });
});

var hasOwn = Object.prototype.hasOwnProperty;
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

