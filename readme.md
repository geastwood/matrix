Matrix methods wraps around Array

## install

* `bowser install simple-matrix`
* `npm install simple-matrix`

## how to use

* as mixin

    ```javascript
    var arr = [];
    Matrix(arr); // now `arr` is mixined with matrix methods
    ```
* as constructor

    ```javascript
    var matrix = new Matrix();
    ```

## available methods

* `matrix.row(m)` -> get the specified row
* `matrix.column(n)` -> get the specified column
* `matrix.position(m, n[, v])` -> get the specified column, optional `third` as `setter`
* `matrix.loop(fn)` -> loop throught the array, invoking `fn` on each item passing `m`, `n`, and `value`, `this` will be bind to matrix

## TODO
* [x] add loop method
* add slice&make???
* add dupicate
