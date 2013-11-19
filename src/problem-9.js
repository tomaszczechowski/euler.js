/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a2 + b2 = c2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
 * http://projecteuler.net/problem=9
 * @param {Number} n Number - sum of a,b,c
 * @returns {String}
 */
var f =  function(n) {
    /**
     * Check number is integer.
     * @param {Number} v number
     * @returns {Boolean}
     */
    function d(v){return /^[\d]+$/.test(v);}
    /**
     * Calculate sqrt(a2 + b2).
     * @param {Number} a number
     * @param {Number} b number
     * @returns {Number}
     */
    function s(a,b){return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));}

    /**
     * Find a,b,c with sum of p
     * @param {Number} p number
     * @returns {String}
     */
    function e(p) {
        t = ['?'];
        for(a=3;a<p;a++) for(b=4;b<p;b++,c=s(a,b),d(c)&&a+b+c===p ? t=[a,b,c]:'');
        return t.join('+')+'='+ p;
    }
    return e(n);
};
console.log(f(1000));