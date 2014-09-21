Matrix methods wraps around Array

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
