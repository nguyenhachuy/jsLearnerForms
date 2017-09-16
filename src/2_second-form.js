(function () {
    'use strict';

    function greet(greeting) {
        return typeof greeting === "string" ? greeting + "!" : "Hello!";
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a,b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach((element) => result = add(result, element));
        return result;
    }

    function squareAll(nums) {
        return nums.map(square);
    }

    function sumOfSquares(nums) {
        console.log(nums.valueOf);
        let squares = nums.valueOf().map(square);
        return sum(squares);
    }

    function Vector(points) {
        this.points = points;
        points.forEach((value, index) => this[index] = value);
    }

    Vector.prototype.valueOf = function() { return this.points.valueOf()}; 
    Vector.prototype.toString = function() { return'<' + this.points.join(',') + '>'};

    function buildVector(points) {
        return new Vector(points);
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        let result = vectors.filter(value => magnitude(value) < length );
        return result;
    }

    module.exports = {
        buildVector: buildVector,
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
