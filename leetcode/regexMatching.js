/**

1 <= s.length <= 20
1 <= p.length <= 30
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.


 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (!p.includes('.') && !p.includes('*')) {
        return s == p
    }
    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) == '*') {
            if (s.charAt(i) != p.charAt(i - 1)) {
                return false
            }
        }
        else if (p.charAt(i) == '.' && (i + 1) < p.length && p.charAt(i + 1) == '*') {
            return true
        } else if (p.charAt(i) == '.') {
            continue
        }
        else {
            if (s.charAt(i) != p.charAt(i)) {
                return false
            }
        }
    }
    return true
};