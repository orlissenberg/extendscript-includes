/**
 * Array.indexOf - from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
 
Array.prototype.indexOf || (Array.prototype.indexOf = function (f, o, u) { "use strict"; return function (r, e) { if (null == this) throw TypeError("Array.prototype.indexOf called on null or undefined"); var t = f(this), i = t.length >>> 0, n = u(0 | e, i); if (n < 0) n = o(0, i + n); else if (i <= n) return -1; if (void 0 === r) { for (; n !== i; ++n)if (void 0 === t[n] && n in t) return n } else if (r != r) { for (; n !== i; ++n)if (t[n] != t[n]) return n } else for (; n !== i; ++n)if (t[n] === r) return n; return -1 } }(Object, Math.max, Math.min));
