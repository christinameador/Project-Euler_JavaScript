// Find the largest palindrome made from the product of two 3-digit numbers.
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Solution
function largestPalindromic(digits) {
    var i, n, m, d, inf, sup, limit, number = 0;
    for (i = 1; i < digits; i += 1) {
        number = 10 * number + 9;
    }
    inf = number;
    sup = 10 * number + 9;

    function isPalindromic(n) {
        var p = 0, q = n, r;
        while (n > 0) {
            r = n % 10;
            p = 10 * p + r;
            n = Math.floor(n / 10);
        }
        return p === q;
    }

    for (n = sup * sup, m = inf * inf; n > m; n -= 1) {
        if (isPalindromic(n)) {
            limit = Math.ceil(Math.sqrt(n));
            d = sup;
            while (d >= limit) {
                if (n % d === 0 && n / d > inf) {
                    return n;
                }
                d -= 1;
            }
        }
    }
    return NaN;
}

console.log(largestPalindromic(3));