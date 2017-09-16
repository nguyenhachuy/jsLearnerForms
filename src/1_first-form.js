(function () {
    'use strict';

    function buildVector(array) {
        var vector = array.slice(0);
        vector.valueOf = function () { return array.slice(0); };
        vector.toString = function () { return '<' + array.join(',') + '>'; };
        return vector;
    }
    module.exports = {
        buildVector: buildVector,
    };
})();