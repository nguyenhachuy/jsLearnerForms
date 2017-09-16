(function () {
    'use strict';

    function isType(typeName, value) {
        return typeof value === typeName;
    }

    function eitherType(typeName, actualValue, defaultValue) {
        return isType(typeName, actualValue) ? actualValue : defaultValue;
    }
    function greet(greeting) {
        return eitherType("string", greeting, "Hello") + "!";
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        return nums.reduce(add, 0);
    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {
        let vector = this instanceof Vector ? this : new Vector(points);
        Vector.attachValues(vector, points);
        
    
        return vector;
    }

    
    Vector.attachValues = function(vector, points) {
        points.forEach((value, index) => Object.defineProperty(vector, index, {
            writable: false,
            value: value
        }));
    }

    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
        getVectorsShorterThan: getVectorsShorterThan,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();
