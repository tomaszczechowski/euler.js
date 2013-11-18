/**
 * The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?
 * http://projecteuler.net/problem=3
 * @param {Number} n Start number
 * @returns {Number}
 */
var f =  function(n) {
    /**
     * Check number is prime.
     * @param {Number} n number
     * @returns {Boolean}
     */
    function p(n) {var a=1;while(++a<n) if(n%a==0) return false; return true;}
    /**
     * Find next prime
     * @param {Number} n Start number
     * @param {Number} m End number
     * @returns {Number}
     */
    function np(n,m) {
        a=n;while(++a<=m) if(p(a)) return a; return n;
    }

    /**
     * Divide number on prime factors and take the last one
     * @param {Number} n number to divide
     * @returns {Number}
     */
    function s(n) {
        b=n;d=2;t=[];
        while(b/d!==1){
            while(b%d!==0)d=np(d,b);t.push(d);if(!p(b))(b=b/d,d=2);
        }
        return t.reverse()[0];
    }

    return s(n);
};

console.log(f(600851475143));