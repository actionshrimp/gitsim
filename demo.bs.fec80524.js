// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({44:[function(require,module,exports) {
'use strict';


var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

exports.out_of_memory              = out_of_memory;
exports.sys_error                  = sys_error;
exports.failure                    = failure;
exports.invalid_argument           = invalid_argument;
exports.end_of_file                = end_of_file;
exports.division_by_zero           = division_by_zero;
exports.not_found                  = not_found;
exports.match_failure              = match_failure;
exports.stack_overflow             = stack_overflow;
exports.sys_blocked_io             = sys_blocked_io;
exports.assert_failure             = assert_failure;
exports.undefined_recursive_module = undefined_recursive_module;
/*  Not a pure module */

},{}],40:[function(require,module,exports) {
'use strict';

var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
      
    } else {
      return acc;
    }
  };
}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      };
      _l = l[1];
      _i = k;
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

exports.caml_array_sub    = caml_array_sub;
exports.caml_array_concat = caml_array_concat;
exports.caml_make_vect    = caml_make_vect;
exports.caml_array_blit   = caml_array_blit;
exports.caml_array_get    = caml_array_get;
exports.caml_array_set    = caml_array_set;
/* No side effect */

},{"./caml_builtin_exceptions.js":44}],9:[function(require,module,exports) {
'use strict';

var Caml_array = require("./caml_array.js");

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = Caml_array.caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  };
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

exports.app     = app;
exports.curry_1 = curry_1;
exports._1      = _1;
exports.__1     = __1;
exports.curry_2 = curry_2;
exports._2      = _2;
exports.__2     = __2;
exports.curry_3 = curry_3;
exports._3      = _3;
exports.__3     = __3;
exports.curry_4 = curry_4;
exports._4      = _4;
exports.__4     = __4;
exports.curry_5 = curry_5;
exports._5      = _5;
exports.__5     = __5;
exports.curry_6 = curry_6;
exports._6      = _6;
exports.__6     = __6;
exports.curry_7 = curry_7;
exports._7      = _7;
exports.__7     = __7;
exports.curry_8 = curry_8;
exports._8      = _8;
exports.__8     = __8;
/* No side effect */

},{"./caml_array.js":40}],7:[function(require,module,exports) {
'use strict';

var Curry                   = require("./curry.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function Make(funarg) {
  var height = function (param) {
    if (param) {
      return param[4];
    } else {
      return 0;
    }
  };
  var create = function (l, x, d, r) {
    var hl = height(l);
    var hr = height(r);
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var singleton = function (x, d) {
    return /* Node */[
            /* Empty */0,
            x,
            d,
            /* Empty */0,
            1
          ];
  };
  var bal = function (l, x, d, r) {
    var hl = l ? l[4] : 0;
    var hr = r ? r[4] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[3];
        var ld = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, ld, create(lr, x, d, r));
        } else if (lr) {
          return create(create(ll, lv, ld, lr[0]), lr[1], lr[2], create(lr[3], x, d, r));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[3];
        var rd = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, x, d, rl), rv, rd, rr);
        } else if (rl) {
          return create(create(l, x, d, rl[0]), rl[1], rl[2], create(rl[3], rv, rd, rr));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              x,
              d,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var add = function (x, data, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, data, l), v, d, r);
        } else {
          return bal(l, v, d, add(x, data, r));
        }
      } else {
        return /* Node */[
                l,
                x,
                data,
                r,
                param[4]
              ];
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              data,
              /* Empty */0,
              1
            ];
    }
  };
  var find = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = Curry._2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[3];
          continue ;
          
        } else {
          return param[2];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var mem = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = Curry._2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[3];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    };
  };
  var min_binding = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var max_binding = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[3];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var remove_min_binding = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_binding(l), param[1], param[2], param[3]);
      } else {
        return param[3];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Map.remove_min_elt"
          ];
    }
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, d, r);
        } else {
          return bal(l, v, d, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            var match = min_binding(t2);
            return bal(t1, match[0], match[1], remove_min_binding(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var iter = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter(f, param[0]);
        Curry._2(f, param[1], param[2]);
        _param = param[3];
        continue ;
        
      } else {
        return /* () */0;
      }
    };
  };
  var map = function (f, param) {
    if (param) {
      var l$prime = map(f, param[0]);
      var d$prime = Curry._1(f, param[2]);
      var r$prime = map(f, param[3]);
      return /* Node */[
              l$prime,
              param[1],
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  };
  var mapi = function (f, param) {
    if (param) {
      var v = param[1];
      var l$prime = mapi(f, param[0]);
      var d$prime = Curry._2(f, v, param[2]);
      var r$prime = mapi(f, param[3]);
      return /* Node */[
              l$prime,
              v,
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  };
  var fold = function (f, _m, _accu) {
    while(true) {
      var accu = _accu;
      var m = _m;
      if (m) {
        _accu = Curry._3(f, m[1], m[2], fold(f, m[0], accu));
        _m = m[3];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var for_all = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._2(p, param[1], param[2])) {
          if (for_all(p, param[0])) {
            _param = param[3];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var exists = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._2(p, param[1], param[2])) {
          return /* true */1;
        } else if (exists(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[3];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    };
  };
  var add_min_binding = function (k, v, param) {
    if (param) {
      return bal(add_min_binding(k, v, param[0]), param[1], param[2], param[3]);
    } else {
      return singleton(k, v);
    }
  };
  var add_max_binding = function (k, v, param) {
    if (param) {
      return bal(param[0], param[1], param[2], add_max_binding(k, v, param[3]));
    } else {
      return singleton(k, v);
    }
  };
  var join = function (l, v, d, r) {
    if (l) {
      if (r) {
        var rh = r[4];
        var lh = l[4];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], l[2], join(l[3], v, d, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, d, r[0]), r[1], r[2], r[3]);
        } else {
          return create(l, v, d, r);
        }
      } else {
        return add_max_binding(v, d, l);
      }
    } else {
      return add_min_binding(v, d, r);
    }
  };
  var concat = function (t1, t2) {
    if (t1) {
      if (t2) {
        var match = min_binding(t2);
        return join(t1, match[0], match[1], remove_min_binding(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var concat_or_join = function (t1, v, d, t2) {
    if (d) {
      return join(t1, v, d[0], t2);
    } else {
      return concat(t1, t2);
    }
  };
  var split = function (x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, d, r)
                ];
        } else {
          var match$1 = split(x, r);
          return /* tuple */[
                  join(l, v, d, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* Some */[d],
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* None */0,
              /* Empty */0
            ];
    }
  };
  var merge = function (f, s1, s2) {
    var exit = 0;
    if (s1) {
      var v1 = s1[1];
      if (s1[4] >= height(s2)) {
        var match = split(v1, s2);
        return concat_or_join(merge(f, s1[0], match[0]), v1, Curry._3(f, v1, /* Some */[s1[2]], match[1]), merge(f, s1[3], match[2]));
      } else {
        exit = 1;
      }
    } else if (s2) {
      exit = 1;
    } else {
      return /* Empty */0;
    }
    if (exit === 1) {
      if (s2) {
        var v2 = s2[1];
        var match$1 = split(v2, s1);
        return concat_or_join(merge(f, match$1[0], s2[0]), v2, Curry._3(f, v2, match$1[1], /* Some */[s2[2]]), merge(f, match$1[2], s2[3]));
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "map.ml",
                270,
                10
              ]
            ];
      }
    }
    
  };
  var filter = function (p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var l$prime = filter(p, param[0]);
      var pvd = Curry._2(p, v, d);
      var r$prime = filter(p, param[3]);
      if (pvd) {
        return join(l$prime, v, d, r$prime);
      } else {
        return concat(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition = function (p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var match = partition(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pvd = Curry._2(p, v, d);
      var match$1 = partition(p, param[3]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pvd) {
        return /* tuple */[
                join(lt, v, d, rt),
                concat(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat(lt, rt),
                join(lf, v, d, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cons_enum = function (_m, _e) {
    while(true) {
      var e = _e;
      var m = _m;
      if (m) {
        _e = /* More */[
          m[1],
          m[2],
          m[3],
          e
        ];
        _m = m[0];
        continue ;
        
      } else {
        return e;
      }
    };
  };
  var compare = function (cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = Curry._2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            var c$1 = Curry._2(cmp, e1[1], e2[1]);
            if (c$1 !== 0) {
              return c$1;
            } else {
              _e2 = cons_enum(e2[2], e2[3]);
              _e1 = cons_enum(e1[2], e1[3]);
              continue ;
              
            }
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    };
  };
  var equal = function (cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          if (Curry._2(funarg[/* compare */0], e1[0], e2[0])) {
            return /* false */0;
          } else if (Curry._2(cmp, e1[1], e2[1])) {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else if (e2) {
        return /* false */0;
      } else {
        return /* true */1;
      }
    };
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
    } else {
      return 0;
    }
  };
  var bindings_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          /* tuple */[
            param[1],
            param[2]
          ],
          bindings_aux(accu, param[3])
        ];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var bindings = function (s) {
    return bindings_aux(/* [] */0, s);
  };
  return [
          /* Empty */0,
          is_empty,
          mem,
          add,
          singleton,
          remove,
          merge,
          compare,
          equal,
          iter,
          fold,
          for_all,
          exists,
          filter,
          partition,
          cardinal,
          bindings,
          min_binding,
          max_binding,
          min_binding,
          split,
          find,
          map,
          mapi
        ];
}

exports.Make = Make;
/* No side effect */

},{"./curry.js":9,"./caml_builtin_exceptions.js":44}],37:[function(require,module,exports) {
'use strict';


function __(tag, block) {
  block.tag = tag;
  return block;
}

exports.__ = __;
/* No side effect */

},{}],11:[function(require,module,exports) {
'use strict';

var Block                   = require("./block.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function caml_obj_block(tag, size) {
  var v = new Array(size);
  v.tag = tag;
  return v;
}

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return Block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        var x = a;
        var y = b;
        if (x < y) {
          return -1;
        } else if (x === y) {
          return 0;
        } else {
          return 1;
        }
      } else {
        var is_a_number = +(a_type === "number");
        var is_b_number = +(b_type === "number");
        if (is_a_number !== 0) {
          if (is_b_number !== 0) {
            return caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number !== 0) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x$1 = a;
          var y$1 = b;
          if (x$1 === y$1) {
            return 0;
          } else if (x$1 < y$1) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "compare: functional value"
              ];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return 0;
                } else {
                  var res = caml_compare(a$1[i], b$1[i]);
                  if (res !== 0) {
                    return res;
                  } else {
                    _i = i + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else if (len_a < len_b) {
              var a$2 = a;
              var b$2 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while(true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else {
              var a$3 = a;
              var b$3 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while(true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            }
          }
        }
      }
    }
  };
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              };
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  };
}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return +(caml_compare(a, b) >= 0);
}

function caml_greaterthan(a, b) {
  return +(caml_compare(a, b) > 0);
}

function caml_lessequal(a, b) {
  return +(caml_compare(a, b) <= 0);
}

function caml_lessthan(a, b) {
  return +(caml_compare(a, b) < 0);
}

var caml_int32_compare = caml_int_compare;

var caml_nativeint_compare = caml_int_compare;

exports.caml_obj_block         = caml_obj_block;
exports.caml_obj_dup           = caml_obj_dup;
exports.caml_obj_truncate      = caml_obj_truncate;
exports.caml_lazy_make_forward = caml_lazy_make_forward;
exports.caml_update_dummy      = caml_update_dummy;
exports.caml_int_compare       = caml_int_compare;
exports.caml_int32_compare     = caml_int32_compare;
exports.caml_nativeint_compare = caml_nativeint_compare;
exports.caml_compare           = caml_compare;
exports.caml_equal             = caml_equal;
exports.caml_notequal          = caml_notequal;
exports.caml_greaterequal      = caml_greaterequal;
exports.caml_greaterthan       = caml_greaterthan;
exports.caml_lessthan          = caml_lessthan;
exports.caml_lessequal         = caml_lessequal;
/* No side effect */

},{"./block.js":37,"./caml_builtin_exceptions.js":44}],76:[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};
},{}],51:[function(require,module,exports) {
var process = require("process");
'use strict';

var Curry                   = require("./curry.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function $caret(prim, prim$1) {
  return prim + prim$1;
}

var stdin = undefined;

var stdout = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
        return ( process.stdout.write )(s);
      } else if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

var stderr = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

function caml_ml_open_descriptor_in() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_in not implemented"
      ];
}

function caml_ml_open_descriptor_out() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_out not implemented"
      ];
}

function caml_ml_flush(oc) {
  if (oc[/* buffer */0] !== "") {
    Curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return /* () */0;
  } else {
    return 0;
  }
}

var node_std_output = (function (s){
   return (typeof process !== "undefined") && process.stdout && (process.stdout.write(s), true);
   }
);

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
    return ( process.stdout.write )(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return /* () */0;
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return /* () */0;
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_input(_, _$1, _$2, _$3) {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input ic not implemented"
      ];
}

function caml_ml_input_char() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input_char not implemnted"
      ];
}

function caml_ml_out_channels_list() {
  return /* :: */[
          stdout,
          /* :: */[
            stderr,
            /* [] */0
          ]
        ];
}

exports.$caret                      = $caret;
exports.stdin                       = stdin;
exports.stdout                      = stdout;
exports.stderr                      = stderr;
exports.caml_ml_open_descriptor_in  = caml_ml_open_descriptor_in;
exports.caml_ml_open_descriptor_out = caml_ml_open_descriptor_out;
exports.caml_ml_flush               = caml_ml_flush;
exports.node_std_output             = node_std_output;
exports.caml_ml_output              = caml_ml_output;
exports.caml_ml_output_char         = caml_ml_output_char;
exports.caml_ml_input               = caml_ml_input;
exports.caml_ml_input_char          = caml_ml_input_char;
exports.caml_ml_out_channels_list   = caml_ml_out_channels_list;
/* stdin Not a pure module */

},{"./curry.js":9,"./caml_builtin_exceptions.js":44,"process":76}],52:[function(require,module,exports) {
var process = require("process");
'use strict';

var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function caml_sys_getenv(s) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    var match$1 = match.env[s];
    if (match$1 !== undefined) {
      return match$1;
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function caml_sys_time() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.uptime();
  } else {
    return -1;
  }
}

function caml_sys_random_seed() {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_system_command() {
  return 127;
}

function caml_sys_getcwd() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.cwd();
  } else {
    return "/";
  }
}

function caml_sys_get_argv() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    if (match.argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              match.argv[0],
              match.argv
            ];
    }
  } else {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  }
}

function caml_sys_exit(exit_code) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.exit(exit_code);
  } else {
    return /* () */0;
  }
}

function caml_sys_is_directory() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_is_directory not implemented"
      ];
}

function caml_sys_file_exists() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_file_exists not implemented"
      ];
}

exports.caml_sys_getenv         = caml_sys_getenv;
exports.caml_sys_time           = caml_sys_time;
exports.caml_sys_random_seed    = caml_sys_random_seed;
exports.caml_sys_system_command = caml_sys_system_command;
exports.caml_sys_getcwd         = caml_sys_getcwd;
exports.caml_sys_get_argv       = caml_sys_get_argv;
exports.caml_sys_exit           = caml_sys_exit;
exports.caml_sys_is_directory   = caml_sys_is_directory;
exports.caml_sys_file_exists    = caml_sys_file_exists;
/* No side effect */

},{"./caml_builtin_exceptions.js":44,"process":76}],41:[function(require,module,exports) {
'use strict';

var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function div(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap = caml_int32_bswap;

exports.div                  = div;
exports.mod_                 = mod_;
exports.caml_bswap16         = caml_bswap16;
exports.caml_int32_bswap     = caml_int32_bswap;
exports.caml_nativeint_bswap = caml_nativeint_bswap;
exports.imul                 = imul;
/* imul Not a pure module */

},{"./caml_builtin_exceptions.js":44}],75:[function(require,module,exports) {
'use strict';


var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);

exports.repeat = repeat;
/* repeat Not a pure module */

},{}],65:[function(require,module,exports) {
'use strict';

var Caml_obj                = require("./caml_obj.js");
var Caml_int32              = require("./caml_int32.js");
var Caml_utils              = require("./caml_utils.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */134217727,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return +((x & 2147483648) !== 0);
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return /* false */0;
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits) {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function lsr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset) {
      if (offset > 0) {
        var lo = (hi >>> offset);
        return /* record */[
                /* hi */0,
                /* lo */(lo >>> 0)
              ];
      } else {
        var hi$1 = (hi >>> numBits);
        var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
        return /* record */[
                /* hi */hi$1,
                /* lo */(lo$1 >>> 0)
              ];
      }
    } else {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function asr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0) {
      exit$3 = 4;
    } else if ($$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0) {
        exit$2 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648) {
        exit$1 = 2;
      } else if ($$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648) {
        exit$4 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
            
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  };
}

function swap(param) {
  var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return /* true */1;
  } else if (hi < other_hi) {
    return /* false */0;
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq(x, y) {
  return 1 - eq(x, y);
}

function lt(x, y) {
  return 1 - ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return /* true */1;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return /* false */0;
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function le(x, y) {
  return 1 - gt(x, y);
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0) {
      exit$1 = 2;
    } else if (other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw Caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0) {
          exit = 1;
        } else if (self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0) {
          exit$2 = 3;
        } else if (approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648) {
        exit$3 = 2;
      } else if (other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
            
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = Math.max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            };
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          };
          return res;
        }
      }
      
    }
    
  };
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function compare(self, other) {
  var v = Caml_obj.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v) {
    return v;
  } else {
    return Caml_obj.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  }
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0) {
    exit = 1;
  } else if (match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (Caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits(x) {
  var int32 = new Int32Array(/* array */[
        x[/* lo */1],
        x[/* hi */0]
      ]);
  return new Float64Array(int32.buffer)[0];
}

function bits_of_float(x) {
  var u = new Float64Array(/* float array */[x]);
  var int32 = new Int32Array(u.buffer);
  var x$1 = int32[1];
  var hi = x$1;
  var x$2 = int32[0];
  var lo = x$2;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function get64(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

exports.min_int       = min_int;
exports.max_int       = max_int;
exports.one           = one;
exports.zero          = zero;
exports.not           = not;
exports.of_int32      = of_int32;
exports.to_int32      = to_int32;
exports.add           = add;
exports.neg           = neg;
exports.sub           = sub;
exports.lsl_          = lsl_;
exports.lsr_          = lsr_;
exports.asr_          = asr_;
exports.is_zero       = is_zero;
exports.mul           = mul;
exports.xor           = xor;
exports.or_           = or_;
exports.and_          = and_;
exports.swap          = swap;
exports.ge            = ge;
exports.eq            = eq;
exports.neq           = neq;
exports.lt            = lt;
exports.gt            = gt;
exports.le            = le;
exports.to_float      = to_float;
exports.of_float      = of_float;
exports.div           = div;
exports.mod_          = mod_;
exports.div_mod       = div_mod;
exports.compare       = compare;
exports.to_hex        = to_hex;
exports.discard_sign  = discard_sign;
exports.float_of_bits = float_of_bits;
exports.bits_of_float = bits_of_float;
exports.get64         = get64;
/* two_ptr_32_dbl Not a pure module */

},{"./caml_obj.js":11,"./caml_int32.js":41,"./caml_utils.js":75,"./caml_builtin_exceptions.js":44}],53:[function(require,module,exports) {
'use strict';

var Curry                   = require("./curry.js");
var Caml_int32              = require("./caml_int32.js");
var Caml_int64              = require("./caml_int64.js");
var Caml_utils              = require("./caml_utils.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function caml_failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
          
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
        
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    Caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
              
            }
          }
        }
      }
    };
  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = Caml_int64.of_int32(int_of_string_base(hbase));
  var sign = Caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = Caml_int64.of_int32(parse_digit(c));
  if (Caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || Caml_int64.ge(d, base)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
            
          }
        }
      }
    };
  };
  var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = Caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (Caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && Caml_int64.neq(res, or_res)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  };
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base) {
      if (base === /* Hex */1) {
        len = len + 2 | 0;
      }
      
    } else {
      len = len + 1 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = Caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = Caml_int64.discard_sign(x$1);
          var match$1 = Caml_int64.div_mod(y, wbase);
          var quotient = Caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(Caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = Caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          };
        } else {
          var match$3 = Caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(Caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = Caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          };
        }
        break;
    case 1 : 
        s = Caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = Caml_int64.discard_sign(x$1);
          var match$5 = Caml_int64.div_mod(y$1, wbase$1);
          var match$6 = Caml_int64.div_mod(Caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = Caml_int64.add(Caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(Caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          };
        } else {
          var match$8 = Caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(Caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          };
        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = Caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            };
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return +(s.length > (prec$1 + 1 | 0));
                    })()) {
                p = p - 1 | 0;
              };
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              };
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var float_of_string = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    ;
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);

function caml_float_of_string(s) {
  return Curry._2(float_of_string, s, caml_failwith);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

exports.caml_format_float        = caml_format_float;
exports.caml_format_int          = caml_format_int;
exports.caml_nativeint_format    = caml_nativeint_format;
exports.caml_int32_format        = caml_int32_format;
exports.caml_float_of_string     = caml_float_of_string;
exports.caml_int64_format        = caml_int64_format;
exports.caml_int_of_string       = caml_int_of_string;
exports.caml_int32_of_string     = caml_int32_of_string;
exports.caml_int64_of_string     = caml_int64_of_string;
exports.caml_nativeint_of_string = caml_nativeint_of_string;
/* float_of_string Not a pure module */

},{"./curry.js":9,"./caml_int32.js":41,"./caml_int64.js":65,"./caml_utils.js":75,"./caml_builtin_exceptions.js":44}],50:[function(require,module,exports) {
'use strict';

var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function string_of_char(prim) {
  return String.fromCharCode(prim);
}

function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_create_string(len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.create"
        ];
  } else {
    return new Array(len);
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    };
    return s;
  }
}

function caml_string_of_char_array(chars) {
  var len = chars.length;
  var bytes = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    bytes[i] = chars[i];
  }
  return bytes_to_string(bytes);
}

function caml_is_printable(c) {
  if (c > 31) {
    return +(c < 127);
  } else {
    return /* false */0;
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

exports.bytes_of_string           = bytes_of_string;
exports.bytes_to_string           = bytes_to_string;
exports.caml_is_printable         = caml_is_printable;
exports.caml_string_of_char_array = caml_string_of_char_array;
exports.caml_string_get           = caml_string_get;
exports.caml_string_compare       = caml_string_compare;
exports.caml_create_string        = caml_create_string;
exports.caml_fill_string          = caml_fill_string;
exports.caml_blit_string          = caml_blit_string;
exports.caml_blit_bytes           = caml_blit_bytes;
exports.caml_string_get16         = caml_string_get16;
exports.caml_string_get32         = caml_string_get32;
exports.string_of_char            = string_of_char;
exports.get                       = get;
/* No side effect */

},{"./caml_builtin_exceptions.js":44}],54:[function(require,module,exports) {
'use strict';


var id = [0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}

exports.caml_set_oo_id               = caml_set_oo_id;
exports.get_id                       = get_id;
exports.create                       = create;
exports.isCamlExceptionOrOpenVariant = isCamlExceptionOrOpenVariant;
/* No side effect */

},{}],55:[function(require,module,exports) {
'use strict';


var not_implemented = (function (s){ throw new Error(s)});

exports.not_implemented = not_implemented;
/* not_implemented Not a pure module */

},{}],56:[function(require,module,exports) {
'use strict';

var Block = require("./block.js");

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */Block.__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */Block.__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */Block.__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */Block.__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */Block.__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */Block.__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */Block.__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */Block.__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */Block.__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */Block.__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */Block.__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */Block.__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */Block.__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */Block.__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */Block.__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */Block.__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */Block.__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */Block.__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */Block.__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */Block.__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */Block.__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */Block.__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */Block.__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */Block.__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */Block.__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */Block.__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */Block.__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */Block.__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */Block.__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */Block.__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel    = erase_rel;
exports.concat_fmt   = concat_fmt;
/* No side effect */

},{"./block.js":37}],12:[function(require,module,exports) {
'use strict';

var Curry                    = require("./curry.js");
var Caml_io                  = require("./caml_io.js");
var Caml_obj                 = require("./caml_obj.js");
var Caml_sys                 = require("./caml_sys.js");
var Caml_format              = require("./caml_format.js");
var Caml_string              = require("./caml_string.js");
var Caml_exceptions          = require("./caml_exceptions.js");
var Caml_missing_polyfill    = require("./caml_missing_polyfill.js");
var Caml_builtin_exceptions  = require("./caml_builtin_exceptions.js");
var CamlinternalFormatBasics = require("./camlinternalFormatBasics.js");

function failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function invalid_arg(s) {
  throw [
        Caml_builtin_exceptions.invalid_argument,
        s
      ];
}

var Exit = Caml_exceptions.create("Pervasives.Exit");

function min(x, y) {
  if (Caml_obj.caml_lessequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (Caml_obj.caml_greaterequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function $caret(a, b) {
  return a + b;
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "char_of_int"
        ];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false" : 
        return /* false */0;
    case "true" : 
        return /* true */1;
    default:
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "bool_of_string"
          ];
  }
}

function string_of_int(param) {
  return "" + param;
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return $caret(s, ".");
    } else {
      var match = Caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
        
      }
    }
  };
}

function string_of_float(f) {
  return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var stdin = Caml_io.stdin;

var stdout = Caml_io.stdout;

var stderr = Caml_io.stderr;

function open_out_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_out(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_out(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function open_out_bin(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function flush_all() {
  var _param = Caml_io.caml_ml_out_channels_list(/* () */0);
  while(true) {
    var param = _param;
    if (param) {
      try {
        Caml_io.caml_ml_flush(param[0]);
      }
      catch (exn){
        
      }
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function output_bytes(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output_substring"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function close_out(oc) {
  Caml_io.caml_ml_flush(oc);
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function close_out_noerr(oc) {
  try {
    Caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn$1){
    return /* () */0;
  }
}

function open_in_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_in(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_in(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_text */7,
                /* [] */0
              ]
            ], 0, name);
}

function open_in_bin(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_binary */6,
                /* [] */0
              ]
            ], 0, name);
}

function input(_, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "input"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
  }
}

function unsafe_really_input(_, _$1, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return /* () */0;
    } else {
      var r = Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
      if (r) {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue ;
        
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    }
  };
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "really_input"
        ];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = Caml_string.caml_create_string(len);
  really_input(ic, s, 0, len);
  return Caml_string.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        Caml_string.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue ;
        
      } else {
        return buf;
      }
    };
  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = Caml_missing_polyfill.not_implemented("caml_ml_input_scan_line not implemented by bucklescript yet\n");
      if (n) {
        if (n > 0) {
          var res = Caml_string.caml_create_string(n - 1 | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          Caml_io.caml_ml_input_char(chan);
          if (accu) {
            var len$1 = (len + n | 0) - 1 | 0;
            return build_result(Caml_string.caml_create_string(len$1), len$1, /* :: */[
                        res,
                        accu
                      ]);
          } else {
            return res;
          }
        } else {
          var beg = Caml_string.caml_create_string(-n | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          _len = len - n | 0;
          _accu = /* :: */[
            beg,
            accu
          ];
          continue ;
          
        }
      } else if (accu) {
        return build_result(Caml_string.caml_create_string(len), len, accu);
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    };
  };
  return Caml_string.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr() {
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn){
    return /* () */0;
  }
}

function print_char(c) {
  return Caml_io.caml_ml_output_char(stdout, c);
}

function print_string(s) {
  return output_string(stdout, s);
}

function print_bytes(s) {
  return output_bytes(stdout, s);
}

function print_int(i) {
  return output_string(stdout, "" + i);
}

function print_float(f) {
  return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function print_endline(param) {
  console.log(param);
  return 0;
}

function print_newline() {
  Caml_io.caml_ml_output_char(stdout, /* "\n" */10);
  return Caml_io.caml_ml_flush(stdout);
}

function prerr_char(c) {
  return Caml_io.caml_ml_output_char(stderr, c);
}

function prerr_string(s) {
  return output_string(stderr, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr, s);
}

function prerr_int(i) {
  return output_string(stderr, "" + i);
}

function prerr_float(f) {
  return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function prerr_endline(param) {
  console.error(param);
  return 0;
}

function prerr_newline() {
  Caml_io.caml_ml_output_char(stderr, /* "\n" */10);
  return Caml_io.caml_ml_flush(stderr);
}

function read_line() {
  Caml_io.caml_ml_flush(stdout);
  return input_line(stdin);
}

function read_int() {
  return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float() {
  return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return /* Format */[
          CamlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
          $caret(param[1], $caret("%,", param$1[1]))
        ];
}

var exit_function = [flush_all];

function at_exit(f) {
  var g = exit_function[0];
  exit_function[0] = (function () {
      Curry._1(f, /* () */0);
      return Curry._1(g, /* () */0);
    });
  return /* () */0;
}

function do_at_exit() {
  return Curry._1(exit_function[0], /* () */0);
}

function exit(retcode) {
  do_at_exit(/* () */0);
  return Caml_sys.caml_sys_exit(retcode);
}

var max_int = 2147483647;

var infinity = Infinity;

var neg_infinity = -Infinity;

var nan = NaN;

var max_float = Number.MAX_VALUE;

var min_float = Number.MIN_VALUE;

var epsilon_float = 2.220446049250313e-16;

var flush = Caml_io.caml_ml_flush;

var output_char = Caml_io.caml_ml_output_char;

var output_byte = Caml_io.caml_ml_output_char;

function output_binary_int(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_output_int not implemented by bucklescript yet\n");
}

function seek_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out not implemented by bucklescript yet\n");
}

function pos_out() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out not implemented by bucklescript yet\n");
}

function out_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function set_binary_mode_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

var input_char = Caml_io.caml_ml_input_char;

var input_byte = Caml_io.caml_ml_input_char;

function input_binary_int() {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_int not implemented by bucklescript yet\n");
}

function input_value() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

function seek_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in not implemented by bucklescript yet\n");
}

function pos_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in not implemented by bucklescript yet\n");
}

function in_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function close_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function set_binary_mode_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

function LargeFile_000(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_001() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_002() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

function LargeFile_003(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_004() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_005() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

var LargeFile = [
  LargeFile_000,
  LargeFile_001,
  LargeFile_002,
  LargeFile_003,
  LargeFile_004,
  LargeFile_005
];

exports.invalid_arg         = invalid_arg;
exports.failwith            = failwith;
exports.Exit                = Exit;
exports.min                 = min;
exports.max                 = max;
exports.abs                 = abs;
exports.max_int             = max_int;
exports.min_int             = min_int;
exports.lnot                = lnot;
exports.infinity            = infinity;
exports.neg_infinity        = neg_infinity;
exports.nan                 = nan;
exports.max_float           = max_float;
exports.min_float           = min_float;
exports.epsilon_float       = epsilon_float;
exports.$caret              = $caret;
exports.char_of_int         = char_of_int;
exports.string_of_bool      = string_of_bool;
exports.bool_of_string      = bool_of_string;
exports.string_of_int       = string_of_int;
exports.string_of_float     = string_of_float;
exports.$at                 = $at;
exports.stdin               = stdin;
exports.stdout              = stdout;
exports.stderr              = stderr;
exports.print_char          = print_char;
exports.print_string        = print_string;
exports.print_bytes         = print_bytes;
exports.print_int           = print_int;
exports.print_float         = print_float;
exports.print_endline       = print_endline;
exports.print_newline       = print_newline;
exports.prerr_char          = prerr_char;
exports.prerr_string        = prerr_string;
exports.prerr_bytes         = prerr_bytes;
exports.prerr_int           = prerr_int;
exports.prerr_float         = prerr_float;
exports.prerr_endline       = prerr_endline;
exports.prerr_newline       = prerr_newline;
exports.read_line           = read_line;
exports.read_int            = read_int;
exports.read_float          = read_float;
exports.open_out            = open_out;
exports.open_out_bin        = open_out_bin;
exports.open_out_gen        = open_out_gen;
exports.flush               = flush;
exports.flush_all           = flush_all;
exports.output_char         = output_char;
exports.output_string       = output_string;
exports.output_bytes        = output_bytes;
exports.output              = output;
exports.output_substring    = output_substring;
exports.output_byte         = output_byte;
exports.output_binary_int   = output_binary_int;
exports.output_value        = output_value;
exports.seek_out            = seek_out;
exports.pos_out             = pos_out;
exports.out_channel_length  = out_channel_length;
exports.close_out           = close_out;
exports.close_out_noerr     = close_out_noerr;
exports.set_binary_mode_out = set_binary_mode_out;
exports.open_in             = open_in;
exports.open_in_bin         = open_in_bin;
exports.open_in_gen         = open_in_gen;
exports.input_char          = input_char;
exports.input_line          = input_line;
exports.input               = input;
exports.really_input        = really_input;
exports.really_input_string = really_input_string;
exports.input_byte          = input_byte;
exports.input_binary_int    = input_binary_int;
exports.input_value         = input_value;
exports.seek_in             = seek_in;
exports.pos_in              = pos_in;
exports.in_channel_length   = in_channel_length;
exports.close_in            = close_in;
exports.close_in_noerr      = close_in_noerr;
exports.set_binary_mode_in  = set_binary_mode_in;
exports.LargeFile           = LargeFile;
exports.string_of_format    = string_of_format;
exports.$caret$caret        = $caret$caret;
exports.exit                = exit;
exports.at_exit             = at_exit;
exports.valid_float_lexem   = valid_float_lexem;
exports.unsafe_really_input = unsafe_really_input;
exports.do_at_exit          = do_at_exit;
/* No side effect */

},{"./curry.js":9,"./caml_io.js":51,"./caml_obj.js":11,"./caml_sys.js":52,"./caml_format.js":53,"./caml_string.js":50,"./caml_exceptions.js":54,"./caml_missing_polyfill.js":55,"./caml_builtin_exceptions.js":44,"./camlinternalFormatBasics.js":56}],8:[function(require,module,exports) {
'use strict';

var Curry                   = require("./curry.js");
var Caml_obj                = require("./caml_obj.js");
var Pervasives              = require("./pervasives.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
      
    } else {
      return len;
    }
  };
}

function hd(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "hd"
        ];
  }
}

function tl(param) {
  if (param) {
    return param[1];
  } else {
    throw [
          Caml_builtin_exceptions.failure,
          "tl"
        ];
  }
}

function nth(l, n) {
  if (n < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.nth"
        ];
  } else {
    var _l = l;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l$1 = _l;
      if (l$1) {
        if (n$1) {
          _n = n$1 - 1 | 0;
          _l = l$1[1];
          continue ;
          
        } else {
          return l$1[0];
        }
      } else {
        throw [
              Caml_builtin_exceptions.failure,
              "nth"
            ];
      }
    };
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  };
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return Pervasives.$at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map(f, param) {
  if (param) {
    var r = Curry._1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = Curry._2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function rev_map(f, l) {
  var _accu = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = /* :: */[
        Curry._1(f, param[0]),
        accu
      ];
      continue ;
      
    } else {
      return accu;
    }
  };
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      Curry._1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function iteri(f, l) {
  var _i = 0;
  var f$1 = f;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (param) {
      Curry._2(f$1, i, param[0]);
      _param = param[1];
      _i = i + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = Curry._2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  };
}

function fold_right(f, l, accu) {
  if (l) {
    return Curry._2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function map2(f, l1, l2) {
  if (l1) {
    if (l2) {
      var r = Curry._2(f, l1[0], l2[0]);
      return /* :: */[
              r,
              map2(f, l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.map2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.map2"
        ];
  } else {
    return /* [] */0;
  }
}

function rev_map2(f, l1, l2) {
  var _accu = /* [] */0;
  var _l1 = l1;
  var _l2 = l2;
  while(true) {
    var l2$1 = _l2;
    var l1$1 = _l1;
    var accu = _accu;
    if (l1$1) {
      if (l2$1) {
        _l2 = l2$1[1];
        _l1 = l1$1[1];
        _accu = /* :: */[
          Curry._2(f, l1$1[0], l2$1[0]),
          accu
        ];
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.rev_map2"
            ];
      }
    } else if (l2$1) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.rev_map2"
          ];
    } else {
      return accu;
    }
  };
}

function iter2(f, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        Curry._2(f, l1[0], l2[0]);
        _l2 = l2[1];
        _l1 = l1[1];
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.iter2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.iter2"
          ];
    } else {
      return /* () */0;
    }
  };
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = Curry._3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  };
}

function fold_right2(f, l1, l2, accu) {
  if (l1) {
    if (l2) {
      return Curry._3(f, l1[0], l2[0], fold_right2(f, l1[1], l2[1], accu));
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.fold_right2"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.fold_right2"
        ];
  } else {
    return accu;
  }
}

function for_all(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        _param = param[1];
        continue ;
        
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  };
}

function exists(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function for_all2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.for_all2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.for_all2"
          ];
    } else {
      return /* true */1;
    }
  };
}

function exists2(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      if (l2) {
        if (Curry._2(p, l1[0], l2[0])) {
          return /* true */1;
        } else {
          _l2 = l2[1];
          _l1 = l1[1];
          continue ;
          
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "List.exists2"
            ];
      }
    } else if (l2) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.exists2"
          ];
    } else {
      return /* false */0;
    }
  };
}

function mem(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_compare(param[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  };
}

function memq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (Caml_obj.caml_compare(match[0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return match[1];
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var match = param[0];
      if (match[0] === x) {
        return match[1];
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function mem_assoc(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_compare(param[0][0], x)) {
        _param = param[1];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  };
}

function mem_assq(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (param[0][0] === x) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function remove_assoc(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (Caml_obj.caml_compare(pair[0], x)) {
      return /* :: */[
              pair,
              remove_assoc(x, l)
            ];
    } else {
      return l;
    }
  } else {
    return /* [] */0;
  }
}

function remove_assq(x, param) {
  if (param) {
    var l = param[1];
    var pair = param[0];
    if (pair[0] === x) {
      return l;
    } else {
      return /* :: */[
              pair,
              remove_assq(x, l)
            ];
    }
  } else {
    return /* [] */0;
  }
}

function find(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (Curry._1(p, x)) {
        return x;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
}

function find_all(p) {
  return (function (param) {
      var _accu = /* [] */0;
      var _param = param;
      while(true) {
        var param$1 = _param;
        var accu = _accu;
        if (param$1) {
          var l = param$1[1];
          var x = param$1[0];
          if (Curry._1(p, x)) {
            _param = l;
            _accu = /* :: */[
              x,
              accu
            ];
            continue ;
            
          } else {
            _param = l;
            continue ;
            
          }
        } else {
          return rev_append(accu, /* [] */0);
        }
      };
    });
}

function partition(p, l) {
  var _yes = /* [] */0;
  var _no = /* [] */0;
  var _param = l;
  while(true) {
    var param = _param;
    var no = _no;
    var yes = _yes;
    if (param) {
      var l$1 = param[1];
      var x = param[0];
      if (Curry._1(p, x)) {
        _param = l$1;
        _yes = /* :: */[
          x,
          yes
        ];
        continue ;
        
      } else {
        _param = l$1;
        _no = /* :: */[
          x,
          no
        ];
        continue ;
        
      }
    } else {
      return /* tuple */[
              rev_append(yes, /* [] */0),
              rev_append(no, /* [] */0)
            ];
    }
  };
}

function split(param) {
  if (param) {
    var match = param[0];
    var match$1 = split(param[1]);
    return /* tuple */[
            /* :: */[
              match[0],
              match$1[0]
            ],
            /* :: */[
              match[1],
              match$1[1]
            ]
          ];
  } else {
    return /* tuple */[
            /* [] */0,
            /* [] */0
          ];
  }
}

function combine(l1, l2) {
  if (l1) {
    if (l2) {
      return /* :: */[
              /* tuple */[
                l1[0],
                l2[0]
              ],
              combine(l1[1], l2[1])
            ];
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "List.combine"
          ];
    }
  } else if (l2) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "List.combine"
        ];
  } else {
    return /* [] */0;
  }
}

function merge(cmp, l1, l2) {
  if (l1) {
    if (l2) {
      var h2 = l2[0];
      var h1 = l1[0];
      if (Curry._2(cmp, h1, h2) <= 0) {
        return /* :: */[
                h1,
                merge(cmp, l1[1], l2)
              ];
      } else {
        return /* :: */[
                h2,
                merge(cmp, l1, l2[1])
              ];
      }
    } else {
      return l1;
    }
  } else {
    return l2;
  }
}

function chop(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k) {
      if (l) {
        _l = l[1];
        _k = k - 1 | 0;
        continue ;
        
      } else {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "list.ml",
                223,
                11
              ]
            ];
      }
    } else {
      return l;
    }
  };
}

function stable_sort(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) <= 0) {
              if (Curry._2(cmp, x2, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) <= 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) <= 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) <= 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) > 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            if (Curry._2(cmp, x1, x2) > 0) {
              if (Curry._2(cmp, x2, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ]
                      ];
              } else if (Curry._2(cmp, x1, x3) > 0) {
                return /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              } else {
                return /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ]
                      ];
              }
            } else if (Curry._2(cmp, x1, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x1,
                        /* :: */[
                          x3,
                          /* [] */0
                        ]
                      ]
                    ];
            } else if (Curry._2(cmp, x2, x3) > 0) {
              return /* :: */[
                      x2,
                      /* :: */[
                        x3,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            } else {
              return /* :: */[
                      x3,
                      /* :: */[
                        x2,
                        /* :: */[
                          x1,
                          /* [] */0
                        ]
                      ]
                    ];
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        if (Curry._2(cmp, x1$1, x2$1) > 0) {
          return /* :: */[
                  x1$1,
                  /* :: */[
                    x2$1,
                    /* [] */0
                  ]
                ];
        } else {
          return /* :: */[
                  x2$1,
                  /* :: */[
                    x1$1,
                    /* [] */0
                  ]
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var h2 = l2$1[0];
            var h1 = l1[0];
            if (Curry._2(cmp, h1, h2) <= 0) {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l1 = l1[1];
              continue ;
              
            } else {
              _accu = /* :: */[
                h2,
                accu
              ];
              _l2 = l2$1[1];
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c) {
              if (c < 0) {
                var c$1 = Curry._2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 < 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = Curry._2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 < 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 < 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = Curry._2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 < 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = Curry._2(cmp, x2, x3);
              if (c$5) {
                if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 < 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7) {
              if (c$7 > 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var rev_sort = function (n, l) {
    var exit = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = Curry._2(cmp, x1, x2);
            if (c) {
              if (c > 0) {
                var c$1 = Curry._2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 > 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = Curry._2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 > 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = Curry._2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 > 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = Curry._2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 > 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = Curry._2(cmp, x2, x3);
              if (c$5) {
                if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit = 1;
          }
        } else {
          exit = 1;
        }
      } else {
        exit = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = Curry._2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 > 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    if (exit === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = Curry._2(cmp, h1, h2);
            if (c$7) {
              if (c$7 < 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      };
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var append = Pervasives.$at;

var concat = flatten;

var filter = find_all;

var sort = stable_sort;

var fast_sort = stable_sort;

exports.length       = length;
exports.hd           = hd;
exports.tl           = tl;
exports.nth          = nth;
exports.rev          = rev;
exports.append       = append;
exports.rev_append   = rev_append;
exports.concat       = concat;
exports.flatten      = flatten;
exports.iter         = iter;
exports.iteri        = iteri;
exports.map          = map;
exports.mapi         = mapi$1;
exports.rev_map      = rev_map;
exports.fold_left    = fold_left;
exports.fold_right   = fold_right;
exports.iter2        = iter2;
exports.map2         = map2;
exports.rev_map2     = rev_map2;
exports.fold_left2   = fold_left2;
exports.fold_right2  = fold_right2;
exports.for_all      = for_all;
exports.exists       = exists;
exports.for_all2     = for_all2;
exports.exists2      = exists2;
exports.mem          = mem;
exports.memq         = memq;
exports.find         = find;
exports.filter       = filter;
exports.find_all     = find_all;
exports.partition    = partition;
exports.assoc        = assoc;
exports.assq         = assq;
exports.mem_assoc    = mem_assoc;
exports.mem_assq     = mem_assq;
exports.remove_assoc = remove_assoc;
exports.remove_assq  = remove_assq;
exports.split        = split;
exports.combine      = combine;
exports.sort         = sort;
exports.stable_sort  = stable_sort;
exports.fast_sort    = fast_sort;
exports.sort_uniq    = sort_uniq;
exports.merge        = merge;
/* No side effect */

},{"./curry.js":9,"./caml_obj.js":11,"./pervasives.js":12,"./caml_builtin_exceptions.js":44}],70:[function(require,module,exports) {
'use strict';

var Caml_string             = require("./caml_string.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function chr(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Char.chr"
        ];
  } else {
    return n;
  }
}

function escaped(c) {
  var exit = 0;
  if (c >= 40) {
    if (c !== 92) {
      exit = c >= 127 ? 1 : 2;
    } else {
      return "\\\\";
    }
  } else if (c >= 32) {
    if (c >= 39) {
      return "\\'";
    } else {
      exit = 2;
    }
  } else if (c >= 14) {
    exit = 1;
  } else {
    switch (c) {
      case 8 : 
          return "\\b";
      case 9 : 
          return "\\t";
      case 10 : 
          return "\\n";
      case 0 : 
      case 1 : 
      case 2 : 
      case 3 : 
      case 4 : 
      case 5 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 12 : 
          exit = 1;
          break;
      case 13 : 
          return "\\r";
      
    }
  }
  switch (exit) {
    case 1 : 
        var s = new Array(4);
        s[0] = /* "\\" */92;
        s[1] = 48 + (c / 100 | 0) | 0;
        s[2] = 48 + (c / 10 | 0) % 10 | 0;
        s[3] = 48 + c % 10 | 0;
        return Caml_string.bytes_to_string(s);
    case 2 : 
        var s$1 = new Array(1);
        s$1[0] = c;
        return Caml_string.bytes_to_string(s$1);
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function uppercase(c) {
  if (c >= /* "a" */97 && c <= /* "z" */122 || c >= /* "\224" */224 && c <= /* "\246" */246 || c >= /* "\248" */248 && c <= /* "\254" */254) {
    return c - 32 | 0;
  } else {
    return c;
  }
}

function compare(c1, c2) {
  return c1 - c2 | 0;
}

exports.chr       = chr;
exports.escaped   = escaped;
exports.lowercase = lowercase;
exports.uppercase = uppercase;
exports.compare   = compare;
/* No side effect */

},{"./caml_string.js":50,"./caml_builtin_exceptions.js":44}],49:[function(require,module,exports) {
'use strict';

var Char                    = require("./char.js");
var List                    = require("./list.js");
var Curry                   = require("./curry.js");
var Caml_obj                = require("./caml_obj.js");
var Caml_int32              = require("./caml_int32.js");
var Pervasives              = require("./pervasives.js");
var Caml_string             = require("./caml_string.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function make(n, c) {
  var s = Caml_string.caml_create_string(n);
  Caml_string.caml_fill_string(s, 0, n, c);
  return s;
}

function init(n, f) {
  var s = Caml_string.caml_create_string(n);
  for(var i = 0 ,i_finish = n - 1 | 0; i <= i_finish; ++i){
    s[i] = Curry._1(f, i);
  }
  return s;
}

var empty = [];

function copy(s) {
  var len = s.length;
  var r = Caml_string.caml_create_string(len);
  Caml_string.caml_blit_bytes(s, 0, r, 0, len);
  return r;
}

function to_string(b) {
  return Caml_string.bytes_to_string(copy(b));
}

function of_string(s) {
  return copy(Caml_string.bytes_of_string(s));
}

function sub(s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.sub / Bytes.sub"
        ];
  } else {
    var r = Caml_string.caml_create_string(len);
    Caml_string.caml_blit_bytes(s, ofs, r, 0, len);
    return r;
  }
}

function sub_string(b, ofs, len) {
  return Caml_string.bytes_to_string(sub(b, ofs, len));
}

function extend(s, left, right) {
  var len = (s.length + left | 0) + right | 0;
  var r = Caml_string.caml_create_string(len);
  var match = left < 0 ? /* tuple */[
      -left | 0,
      0
    ] : /* tuple */[
      0,
      left
    ];
  var dstoff = match[1];
  var srcoff = match[0];
  var cpylen = Pervasives.min(s.length - srcoff | 0, len - dstoff | 0);
  if (cpylen > 0) {
    Caml_string.caml_blit_bytes(s, srcoff, r, dstoff, cpylen);
  }
  return r;
}

function fill(s, ofs, len, c) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.fill / Bytes.fill"
        ];
  } else {
    return Caml_string.caml_fill_string(s, ofs, len, c);
  }
}

function blit(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Bytes.blit"
        ];
  } else {
    return Caml_string.caml_blit_bytes(s1, ofs1, s2, ofs2, len);
  }
}

function blit_string(s1, ofs1, s2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.blit / Bytes.blit_string"
        ];
  } else {
    return Caml_string.caml_blit_string(s1, ofs1, s2, ofs2, len);
  }
}

function iter(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._1(f, a[i]);
  }
  return /* () */0;
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = [0];
    var len = [0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_string.caml_blit_bytes(hd, 0, r, 0, hd.length);
    var pos = [hd.length];
    List.iter((function (s) {
            Caml_string.caml_blit_bytes(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_string.caml_blit_bytes(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return r;
  } else {
    return empty;
  }
}

function cat(a, b) {
  return a.concat(b);
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    if (switcher !== 23) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (switcher !== 2) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function trim(s) {
  var len = s.length;
  var i = 0;
  while(i < len && is_space(s[i])) {
    i = i + 1 | 0;
  };
  var j = len - 1 | 0;
  while(j >= i && is_space(s[j])) {
    j = j - 1 | 0;
  };
  if (j >= i) {
    return sub(s, i, (j - i | 0) + 1 | 0);
  } else {
    return empty;
  }
}

function escaped(s) {
  var n = 0;
  for(var i = 0 ,i_finish = s.length - 1 | 0; i <= i_finish; ++i){
    var match = s[i];
    var tmp;
    if (match >= 32) {
      var switcher = match - 34 | 0;
      tmp = switcher > 58 || switcher < 0 ? (
          switcher >= 93 ? 4 : 1
        ) : (
          switcher > 57 || switcher < 1 ? 2 : 1
        );
    } else {
      tmp = match >= 11 ? (
          match !== 13 ? 4 : 2
        ) : (
          match >= 8 ? 2 : 4
        );
    }
    n = n + tmp | 0;
  }
  if (n === s.length) {
    return copy(s);
  } else {
    var s$prime = Caml_string.caml_create_string(n);
    n = 0;
    for(var i$1 = 0 ,i_finish$1 = s.length - 1 | 0; i$1 <= i_finish$1; ++i$1){
      var c = s[i$1];
      var exit = 0;
      if (c >= 35) {
        if (c !== 92) {
          if (c >= 127) {
            exit = 1;
          } else {
            s$prime[n] = c;
          }
        } else {
          exit = 2;
        }
      } else if (c >= 32) {
        if (c >= 34) {
          exit = 2;
        } else {
          s$prime[n] = c;
        }
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "b" */98;
              break;
          case 9 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "t" */116;
              break;
          case 10 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "n" */110;
              break;
          case 0 : 
          case 1 : 
          case 2 : 
          case 3 : 
          case 4 : 
          case 5 : 
          case 6 : 
          case 7 : 
          case 11 : 
          case 12 : 
              exit = 1;
              break;
          case 13 : 
              s$prime[n] = /* "\\" */92;
              n = n + 1 | 0;
              s$prime[n] = /* "r" */114;
              break;
          
        }
      }
      switch (exit) {
        case 1 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
        case 2 : 
            s$prime[n] = /* "\\" */92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        
      }
      n = n + 1 | 0;
    }
    return s$prime;
  }
}

function map(f, s) {
  var l = s.length;
  if (l) {
    var r = Caml_string.caml_create_string(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._1(f, s[i]);
    }
    return r;
  } else {
    return s;
  }
}

function mapi(f, s) {
  var l = s.length;
  if (l) {
    var r = Caml_string.caml_create_string(l);
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._2(f, i, s[i]);
    }
    return r;
  } else {
    return s;
  }
}

function uppercase(s) {
  return map(Char.uppercase, s);
}

function lowercase(s) {
  return map(Char.lowercase, s);
}

function apply1(f, s) {
  if (s.length) {
    var r = copy(s);
    r[0] = Curry._1(f, s[0]);
    return r;
  } else {
    return s;
  }
}

function capitalize(s) {
  return apply1(Char.uppercase, s);
}

function uncapitalize(s) {
  return apply1(Char.lowercase, s);
}

function index_rec(s, lim, _i, c) {
  while(true) {
    var i = _i;
    if (i >= lim) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i + 1 | 0;
      continue ;
      
    }
  };
}

function index(s, c) {
  return index_rec(s, s.length, 0, c);
}

function index_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.index_from / Bytes.index_from"
        ];
  } else {
    return index_rec(s, l, i, c);
  }
}

function rindex_rec(s, _i, c) {
  while(true) {
    var i = _i;
    if (i < 0) {
      throw Caml_builtin_exceptions.not_found;
    } else if (s[i] === c) {
      return i;
    } else {
      _i = i - 1 | 0;
      continue ;
      
    }
  };
}

function rindex(s, c) {
  return rindex_rec(s, s.length - 1 | 0, c);
}

function rindex_from(s, i, c) {
  if (i < -1 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rindex_from / Bytes.rindex_from"
        ];
  } else {
    return rindex_rec(s, i, c);
  }
}

function contains_from(s, i, c) {
  var l = s.length;
  if (i < 0 || i > l) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.contains_from / Bytes.contains_from"
        ];
  } else {
    try {
      index_rec(s, l, i, c);
      return /* true */1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* false */0;
      } else {
        throw exn;
      }
    }
  }
}

function contains(s, c) {
  return contains_from(s, 0, c);
}

function rcontains_from(s, i, c) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.rcontains_from / Bytes.rcontains_from"
        ];
  } else {
    try {
      rindex_rec(s, i, c);
      return /* true */1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        return /* false */0;
      } else {
        throw exn;
      }
    }
  }
}

var compare = Caml_obj.caml_compare;

var unsafe_to_string = Caml_string.bytes_to_string;

var unsafe_of_string = Caml_string.bytes_of_string;

exports.make             = make;
exports.init             = init;
exports.empty            = empty;
exports.copy             = copy;
exports.of_string        = of_string;
exports.to_string        = to_string;
exports.sub              = sub;
exports.sub_string       = sub_string;
exports.extend           = extend;
exports.fill             = fill;
exports.blit             = blit;
exports.blit_string      = blit_string;
exports.concat           = concat;
exports.cat              = cat;
exports.iter             = iter;
exports.iteri            = iteri;
exports.map              = map;
exports.mapi             = mapi;
exports.trim             = trim;
exports.escaped          = escaped;
exports.index            = index;
exports.rindex           = rindex;
exports.index_from       = index_from;
exports.rindex_from      = rindex_from;
exports.contains         = contains;
exports.contains_from    = contains_from;
exports.rcontains_from   = rcontains_from;
exports.uppercase        = uppercase;
exports.lowercase        = lowercase;
exports.capitalize       = capitalize;
exports.uncapitalize     = uncapitalize;
exports.compare          = compare;
exports.unsafe_to_string = unsafe_to_string;
exports.unsafe_of_string = unsafe_of_string;
/* No side effect */

},{"./char.js":70,"./list.js":8,"./curry.js":9,"./caml_obj.js":11,"./caml_int32.js":41,"./pervasives.js":12,"./caml_string.js":50,"./caml_builtin_exceptions.js":44}],10:[function(require,module,exports) {
'use strict';

var List        = require("./list.js");
var Bytes       = require("./bytes.js");
var Caml_int32  = require("./caml_int32.js");
var Caml_string = require("./caml_string.js");

function make(n, c) {
  return Caml_string.bytes_to_string(Bytes.make(n, c));
}

function init(n, f) {
  return Caml_string.bytes_to_string(Bytes.init(n, f));
}

function copy(s) {
  return Caml_string.bytes_to_string(Bytes.copy(Caml_string.bytes_of_string(s)));
}

function sub(s, ofs, len) {
  return Caml_string.bytes_to_string(Bytes.sub(Caml_string.bytes_of_string(s), ofs, len));
}

function concat(sep, l) {
  if (l) {
    var hd = l[0];
    var num = [0];
    var len = [0];
    List.iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = Caml_string.caml_create_string(len[0] + Caml_int32.imul(sep.length, num[0] - 1 | 0) | 0);
    Caml_string.caml_blit_string(hd, 0, r, 0, hd.length);
    var pos = [hd.length];
    List.iter((function (s) {
            Caml_string.caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            Caml_string.caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return Caml_string.bytes_to_string(r);
  } else {
    return "";
  }
}

function iter(f, s) {
  return Bytes.iter(f, Caml_string.bytes_of_string(s));
}

function iteri(f, s) {
  return Bytes.iteri(f, Caml_string.bytes_of_string(s));
}

function map(f, s) {
  return Caml_string.bytes_to_string(Bytes.map(f, Caml_string.bytes_of_string(s)));
}

function mapi(f, s) {
  return Caml_string.bytes_to_string(Bytes.mapi(f, Caml_string.bytes_of_string(s)));
}

function is_space(param) {
  var switcher = param - 9 | 0;
  if (switcher > 4 || switcher < 0) {
    if (switcher !== 23) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (switcher !== 2) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function trim(s) {
  if (s === "" || !(is_space(s.charCodeAt(0)) || is_space(s.charCodeAt(s.length - 1 | 0)))) {
    return s;
  } else {
    return Caml_string.bytes_to_string(Bytes.trim(Caml_string.bytes_of_string(s)));
  }
}

function escaped(s) {
  var needs_escape = function (_i) {
    while(true) {
      var i = _i;
      if (i >= s.length) {
        return /* false */0;
      } else {
        var match = s.charCodeAt(i);
        if (match >= 32) {
          var switcher = match - 34 | 0;
          if (switcher > 58 || switcher < 0) {
            if (switcher >= 93) {
              return /* true */1;
            } else {
              _i = i + 1 | 0;
              continue ;
              
            }
          } else if (switcher > 57 || switcher < 1) {
            return /* true */1;
          } else {
            _i = i + 1 | 0;
            continue ;
            
          }
        } else {
          return /* true */1;
        }
      }
    };
  };
  if (needs_escape(0)) {
    return Caml_string.bytes_to_string(Bytes.escaped(Caml_string.bytes_of_string(s)));
  } else {
    return s;
  }
}

function index(s, c) {
  return Bytes.index(Caml_string.bytes_of_string(s), c);
}

function rindex(s, c) {
  return Bytes.rindex(Caml_string.bytes_of_string(s), c);
}

function index_from(s, i, c) {
  return Bytes.index_from(Caml_string.bytes_of_string(s), i, c);
}

function rindex_from(s, i, c) {
  return Bytes.rindex_from(Caml_string.bytes_of_string(s), i, c);
}

function contains(s, c) {
  return Bytes.contains(Caml_string.bytes_of_string(s), c);
}

function contains_from(s, i, c) {
  return Bytes.contains_from(Caml_string.bytes_of_string(s), i, c);
}

function rcontains_from(s, i, c) {
  return Bytes.rcontains_from(Caml_string.bytes_of_string(s), i, c);
}

function uppercase(s) {
  return Caml_string.bytes_to_string(Bytes.uppercase(Caml_string.bytes_of_string(s)));
}

function lowercase(s) {
  return Caml_string.bytes_to_string(Bytes.lowercase(Caml_string.bytes_of_string(s)));
}

function capitalize(s) {
  return Caml_string.bytes_to_string(Bytes.capitalize(Caml_string.bytes_of_string(s)));
}

function uncapitalize(s) {
  return Caml_string.bytes_to_string(Bytes.uncapitalize(Caml_string.bytes_of_string(s)));
}

var compare = Caml_string.caml_string_compare;

var fill = Bytes.fill;

var blit = Bytes.blit_string;

exports.make           = make;
exports.init           = init;
exports.copy           = copy;
exports.sub            = sub;
exports.fill           = fill;
exports.blit           = blit;
exports.concat         = concat;
exports.iter           = iter;
exports.iteri          = iteri;
exports.map            = map;
exports.mapi           = mapi;
exports.trim           = trim;
exports.escaped        = escaped;
exports.index          = index;
exports.rindex         = rindex;
exports.index_from     = index_from;
exports.rindex_from    = rindex_from;
exports.contains       = contains;
exports.contains_from  = contains_from;
exports.rcontains_from = rcontains_from;
exports.uppercase      = uppercase;
exports.lowercase      = lowercase;
exports.capitalize     = capitalize;
exports.uncapitalize   = uncapitalize;
exports.compare        = compare;
/* No side effect */

},{"./list.js":8,"./bytes.js":49,"./caml_int32.js":41,"./caml_string.js":50}],42:[function(require,module,exports) {
'use strict';

var Caml_sys        = require("./caml_sys.js");
var Caml_exceptions = require("./caml_exceptions.js");

var is_js = /* true */1;

var match = Caml_sys.caml_sys_get_argv(/* () */0);

var big_endian = /* false */0;

var unix = /* true */1;

var win32 = /* false */0;

var cygwin = /* false */0;

var max_array_length = 2147483647;

var max_string_length = 2147483647;

var interactive = [/* false */0];

function set_signal(_, _$1) {
  return /* () */0;
}

var Break = Caml_exceptions.create("Sys.Break");

function catch_break() {
  return /* () */0;
}

var argv = match[1];

var executable_name = match[0];

var os_type = "Unix";

var word_size = 32;

var sigabrt = -1;

var sigalrm = -2;

var sigfpe = -3;

var sighup = -4;

var sigill = -5;

var sigint = -6;

var sigkill = -7;

var sigpipe = -8;

var sigquit = -9;

var sigsegv = -10;

var sigterm = -11;

var sigusr1 = -12;

var sigusr2 = -13;

var sigchld = -14;

var sigcont = -15;

var sigstop = -16;

var sigtstp = -17;

var sigttin = -18;

var sigttou = -19;

var sigvtalrm = -20;

var sigprof = -21;

var ocaml_version = "4.02.3+dev1-2015-07-10";

exports.argv              = argv;
exports.executable_name   = executable_name;
exports.interactive       = interactive;
exports.os_type           = os_type;
exports.unix              = unix;
exports.win32             = win32;
exports.cygwin            = cygwin;
exports.word_size         = word_size;
exports.big_endian        = big_endian;
exports.is_js             = is_js;
exports.max_string_length = max_string_length;
exports.max_array_length  = max_array_length;
exports.set_signal        = set_signal;
exports.sigabrt           = sigabrt;
exports.sigalrm           = sigalrm;
exports.sigfpe            = sigfpe;
exports.sighup            = sighup;
exports.sigill            = sigill;
exports.sigint            = sigint;
exports.sigkill           = sigkill;
exports.sigpipe           = sigpipe;
exports.sigquit           = sigquit;
exports.sigsegv           = sigsegv;
exports.sigterm           = sigterm;
exports.sigusr1           = sigusr1;
exports.sigusr2           = sigusr2;
exports.sigchld           = sigchld;
exports.sigcont           = sigcont;
exports.sigstop           = sigstop;
exports.sigtstp           = sigtstp;
exports.sigttin           = sigttin;
exports.sigttou           = sigttou;
exports.sigvtalrm         = sigvtalrm;
exports.sigprof           = sigprof;
exports.Break             = Break;
exports.catch_break       = catch_break;
exports.ocaml_version     = ocaml_version;
/* No side effect */

},{"./caml_sys.js":52,"./caml_exceptions.js":54}],66:[function(require,module,exports) {
'use strict';

var Caml_exceptions = require("./caml_exceptions.js");

var $$Error = Caml_exceptions.create("Js_exn.Error");

function internalToOCamlException(e) {
  if (Caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function raiseError(str) {
  throw new Error(str);
}

function raiseEvalError(str) {
  throw new EvalError(str);
}

function raiseRangeError(str) {
  throw new RangeError(str);
}

function raiseReferenceError(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError(str) {
  throw new SyntaxError(str);
}

function raiseTypeError(str) {
  throw new TypeError(str);
}

function raiseUriError(str) {
  throw new URIError(str);
}

exports.$$Error                  = $$Error;
exports.internalToOCamlException = internalToOCamlException;
exports.raiseError               = raiseError;
exports.raiseEvalError           = raiseEvalError;
exports.raiseRangeError          = raiseRangeError;
exports.raiseReferenceError      = raiseReferenceError;
exports.raiseSyntaxError         = raiseSyntaxError;
exports.raiseTypeError           = raiseTypeError;
exports.raiseUriError            = raiseUriError;
/* No side effect */

},{"./caml_exceptions.js":54}],38:[function(require,module,exports) {
'use strict';

var Curry                   = require("./curry.js");
var Js_exn                  = require("./js_exn.js");
var Caml_array              = require("./caml_array.js");
var Caml_exceptions         = require("./caml_exceptions.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function init(l, f) {
  if (l) {
    if (l < 0) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Array.init"
          ];
    } else {
      var res = Caml_array.caml_make_vect(l, Curry._1(f, 0));
      for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
        res[i] = Curry._1(f, i);
      }
      return res;
    }
  } else {
    return /* array */[];
  }
}

function make_matrix(sx, sy, init) {
  var res = Caml_array.caml_make_vect(sx, /* array */[]);
  for(var x = 0 ,x_finish = sx - 1 | 0; x <= x_finish; ++x){
    res[x] = Caml_array.caml_make_vect(sy, init);
  }
  return res;
}

function copy(a) {
  var l = a.length;
  if (l) {
    return Caml_array.caml_array_sub(a, 0, l);
  } else {
    return /* array */[];
  }
}

function append(a1, a2) {
  var l1 = a1.length;
  if (l1) {
    if (a2.length) {
      return a1.concat(a2);
    } else {
      return Caml_array.caml_array_sub(a1, 0, l1);
    }
  } else {
    return copy(a2);
  }
}

function sub(a, ofs, len) {
  if (len < 0 || ofs > (a.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.sub"
        ];
  } else {
    return Caml_array.caml_array_sub(a, ofs, len);
  }
}

function fill(a, ofs, len, v) {
  if (ofs < 0 || len < 0 || ofs > (a.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.fill"
        ];
  } else {
    for(var i = ofs ,i_finish = (ofs + len | 0) - 1 | 0; i <= i_finish; ++i){
      a[i] = v;
    }
    return /* () */0;
  }
}

function blit(a1, ofs1, a2, ofs2, len) {
  if (len < 0 || ofs1 < 0 || ofs1 > (a1.length - len | 0) || ofs2 < 0 || ofs2 > (a2.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Array.blit"
        ];
  } else {
    return Caml_array.caml_array_blit(a1, ofs1, a2, ofs2, len);
  }
}

function iter(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._1(f, a[i]);
  }
  return /* () */0;
}

function map(f, a) {
  var l = a.length;
  if (l) {
    var r = Caml_array.caml_make_vect(l, Curry._1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._1(f, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    Curry._2(f, i, a[i]);
  }
  return /* () */0;
}

function mapi(f, a) {
  var l = a.length;
  if (l) {
    var r = Caml_array.caml_make_vect(l, Curry._2(f, 0, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = Curry._2(f, i, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  };
}

function list_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[1];
      _accu = accu + 1 | 0;
      continue ;
      
    } else {
      return accu;
    }
  };
}

function of_list(l) {
  if (l) {
    var a = Caml_array.caml_make_vect(list_length(0, l), l[0]);
    var _i = 1;
    var _param = l[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        a[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
        
      } else {
        return a;
      }
    };
  } else {
    return /* array */[];
  }
}

function fold_left(f, x, a) {
  var r = x;
  for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
    r = Curry._2(f, r, a[i]);
  }
  return r;
}

function fold_right(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = Curry._2(f, a[i], r);
  }
  return r;
}

var Bottom = Caml_exceptions.create("Array.Bottom");

function sort(cmp, a) {
  var maxson = function (l, i) {
    var i31 = ((i + i | 0) + i | 0) + 1 | 0;
    var x = i31;
    if ((i31 + 2 | 0) < l) {
      if (Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
        x = i31 + 1 | 0;
      }
      if (Curry._2(cmp, Caml_array.caml_array_get(a, x), Caml_array.caml_array_get(a, i31 + 2 | 0)) < 0) {
        x = i31 + 2 | 0;
      }
      return x;
    } else if ((i31 + 1 | 0) < l && Curry._2(cmp, Caml_array.caml_array_get(a, i31), Caml_array.caml_array_get(a, i31 + 1 | 0)) < 0) {
      return i31 + 1 | 0;
    } else if (i31 < l) {
      return i31;
    } else {
      throw [
            Bottom,
            i
          ];
    }
  };
  var trickle = function (l, i, e) {
    try {
      var l$1 = l;
      var _i = i;
      var e$1 = e;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        if (Curry._2(cmp, Caml_array.caml_array_get(a, j), e$1) > 0) {
          Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
          _i = j;
          continue ;
          
        } else {
          return Caml_array.caml_array_set(a, i$1, e$1);
        }
      };
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return Caml_array.caml_array_set(a, exn[1], e);
      } else {
        throw exn;
      }
    }
  };
  var bubble = function (l, i) {
    try {
      var l$1 = l;
      var _i = i;
      while(true) {
        var i$1 = _i;
        var j = maxson(l$1, i$1);
        Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, j));
        _i = j;
        continue ;
        
      };
    }
    catch (raw_exn){
      var exn = Js_exn.internalToOCamlException(raw_exn);
      if (exn[0] === Bottom) {
        return exn[1];
      } else {
        throw exn;
      }
    }
  };
  var trickleup = function (_i, e) {
    while(true) {
      var i = _i;
      var father = (i - 1 | 0) / 3 | 0;
      if (i === father) {
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "array.ml",
                168,
                4
              ]
            ];
      }
      if (Curry._2(cmp, Caml_array.caml_array_get(a, father), e) < 0) {
        Caml_array.caml_array_set(a, i, Caml_array.caml_array_get(a, father));
        if (father > 0) {
          _i = father;
          continue ;
          
        } else {
          return Caml_array.caml_array_set(a, 0, e);
        }
      } else {
        return Caml_array.caml_array_set(a, i, e);
      }
    };
  };
  var l = a.length;
  for(var i = ((l + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i){
    trickle(l, i, Caml_array.caml_array_get(a, i));
  }
  for(var i$1 = l - 1 | 0; i$1 >= 2; --i$1){
    var e = Caml_array.caml_array_get(a, i$1);
    Caml_array.caml_array_set(a, i$1, Caml_array.caml_array_get(a, 0));
    trickleup(bubble(i$1, 0), e);
  }
  if (l > 1) {
    var e$1 = Caml_array.caml_array_get(a, 1);
    Caml_array.caml_array_set(a, 1, Caml_array.caml_array_get(a, 0));
    return Caml_array.caml_array_set(a, 0, e$1);
  } else {
    return 0;
  }
}

function stable_sort(cmp, a) {
  var merge = function (src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
    var src1r = src1ofs + src1len | 0;
    var src2r = src2ofs + src2len | 0;
    var _i1 = src1ofs;
    var _s1 = Caml_array.caml_array_get(a, src1ofs);
    var _i2 = src2ofs;
    var _s2 = Caml_array.caml_array_get(src2, src2ofs);
    var _d = dstofs;
    while(true) {
      var d = _d;
      var s2 = _s2;
      var i2 = _i2;
      var s1 = _s1;
      var i1 = _i1;
      if (Curry._2(cmp, s1, s2) <= 0) {
        Caml_array.caml_array_set(dst, d, s1);
        var i1$1 = i1 + 1 | 0;
        if (i1$1 < src1r) {
          _d = d + 1 | 0;
          _s1 = Caml_array.caml_array_get(a, i1$1);
          _i1 = i1$1;
          continue ;
          
        } else {
          return blit(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
        }
      } else {
        Caml_array.caml_array_set(dst, d, s2);
        var i2$1 = i2 + 1 | 0;
        if (i2$1 < src2r) {
          _d = d + 1 | 0;
          _s2 = Caml_array.caml_array_get(src2, i2$1);
          _i2 = i2$1;
          continue ;
          
        } else {
          return blit(a, i1, dst, d + 1 | 0, src1r - i1 | 0);
        }
      }
    };
  };
  var isortto = function (srcofs, dst, dstofs, len) {
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      var e = Caml_array.caml_array_get(a, srcofs + i | 0);
      var j = (dstofs + i | 0) - 1 | 0;
      while(j >= dstofs && Curry._2(cmp, Caml_array.caml_array_get(dst, j), e) > 0) {
        Caml_array.caml_array_set(dst, j + 1 | 0, Caml_array.caml_array_get(dst, j));
        j = j - 1 | 0;
      };
      Caml_array.caml_array_set(dst, j + 1 | 0, e);
    }
    return /* () */0;
  };
  var sortto = function (srcofs, dst, dstofs, len) {
    if (len <= 5) {
      return isortto(srcofs, dst, dstofs, len);
    } else {
      var l1 = len / 2 | 0;
      var l2 = len - l1 | 0;
      sortto(srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
      sortto(srcofs, a, srcofs + l2 | 0, l1);
      return merge(srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
    }
  };
  var l = a.length;
  if (l <= 5) {
    return isortto(0, a, 0, l);
  } else {
    var l1 = l / 2 | 0;
    var l2 = l - l1 | 0;
    var t = Caml_array.caml_make_vect(l2, Caml_array.caml_array_get(a, 0));
    sortto(l1, t, 0, l2);
    sortto(0, a, l2, l1);
    return merge(l2, l1, t, 0, l2, a, 0);
  }
}

var create_matrix = make_matrix;

var concat = Caml_array.caml_array_concat;

var fast_sort = stable_sort;

exports.init          = init;
exports.make_matrix   = make_matrix;
exports.create_matrix = create_matrix;
exports.append        = append;
exports.concat        = concat;
exports.sub           = sub;
exports.copy          = copy;
exports.fill          = fill;
exports.blit          = blit;
exports.to_list       = to_list;
exports.of_list       = of_list;
exports.iter          = iter;
exports.map           = map;
exports.iteri         = iteri;
exports.mapi          = mapi;
exports.fold_left     = fold_left;
exports.fold_right    = fold_right;
exports.sort          = sort;
exports.stable_sort   = stable_sort;
exports.fast_sort     = fast_sort;
/* No side effect */

},{"./curry.js":9,"./js_exn.js":66,"./caml_array.js":40,"./caml_exceptions.js":54,"./caml_builtin_exceptions.js":44}],61:[function(require,module,exports) {
'use strict';

var Caml_obj    = require("./caml_obj.js");
var Caml_format = require("./caml_format.js");

function succ(n) {
  return n + 1 | 0;
}

function pred(n) {
  return n - 1 | 0;
}

function abs(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n | 0;
  }
}

function lognot(n) {
  return n ^ -1;
}

function to_string(n) {
  return Caml_format.caml_int32_format("%d", n);
}

var compare = Caml_obj.caml_int32_compare;

var zero = 0;

var one = 1;

var minus_one = -1;

var max_int = 2147483647;

var min_int = -2147483648;

exports.zero      = zero;
exports.one       = one;
exports.minus_one = minus_one;
exports.succ      = succ;
exports.pred      = pred;
exports.abs       = abs;
exports.max_int   = max_int;
exports.min_int   = min_int;
exports.lognot    = lognot;
exports.to_string = to_string;
exports.compare   = compare;
/* No side effect */

},{"./caml_obj.js":11,"./caml_format.js":53}],62:[function(require,module,exports) {
'use strict';

var Caml_int64  = require("./caml_int64.js");
var Caml_format = require("./caml_format.js");

function succ(n) {
  return Caml_int64.add(n, /* int64 */[
              /* hi */0,
              /* lo */1
            ]);
}

function pred(n) {
  return Caml_int64.sub(n, /* int64 */[
              /* hi */0,
              /* lo */1
            ]);
}

function abs(n) {
  if (Caml_int64.ge(n, /* int64 */[
          /* hi */0,
          /* lo */0
        ])) {
    return n;
  } else {
    return Caml_int64.neg(n);
  }
}

function lognot(n) {
  return Caml_int64.xor(n, /* int64 */[
              /* hi */-1,
              /* lo */4294967295
            ]);
}

function to_string(n) {
  return Caml_format.caml_int64_format("%d", n);
}

var compare = Caml_int64.compare;

var zero = /* int64 */[
  /* hi */0,
  /* lo */0
];

var one = /* int64 */[
  /* hi */0,
  /* lo */1
];

var minus_one = /* int64 */[
  /* hi */-1,
  /* lo */4294967295
];

var max_int = /* int64 */[
  /* hi */2147483647,
  /* lo */4294967295
];

var min_int = /* int64 */[
  /* hi */-2147483648,
  /* lo */0
];

exports.zero      = zero;
exports.one       = one;
exports.minus_one = minus_one;
exports.succ      = succ;
exports.pred      = pred;
exports.abs       = abs;
exports.max_int   = max_int;
exports.min_int   = min_int;
exports.lognot    = lognot;
exports.to_string = to_string;
exports.compare   = compare;
/* No side effect */

},{"./caml_int64.js":65,"./caml_format.js":53}],74:[function(require,module,exports) {
'use strict';


function cmn(q, a, b, x, s, t) {
  var a$1 = ((a + q | 0) + x | 0) + t | 0;
  return ((a$1 << s) | (a$1 >>> (32 - s | 0)) | 0) + b | 0;
}

function f(a, b, c, d, x, s, t) {
  return cmn(b & c | (b ^ -1) & d, a, b, x, s, t);
}

function g(a, b, c, d, x, s, t) {
  return cmn(b & d | c & (d ^ -1), a, b, x, s, t);
}

function h(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}

function i(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | d ^ -1), a, b, x, s, t);
}

function cycle(x, k) {
  var a = x[0];
  var b = x[1];
  var c = x[2];
  var d = x[3];
  a = f(a, b, c, d, k[0], 7, -680876936);
  d = f(d, a, b, c, k[1], 12, -389564586);
  c = f(c, d, a, b, k[2], 17, 606105819);
  b = f(b, c, d, a, k[3], 22, -1044525330);
  a = f(a, b, c, d, k[4], 7, -176418897);
  d = f(d, a, b, c, k[5], 12, 1200080426);
  c = f(c, d, a, b, k[6], 17, -1473231341);
  b = f(b, c, d, a, k[7], 22, -45705983);
  a = f(a, b, c, d, k[8], 7, 1770035416);
  d = f(d, a, b, c, k[9], 12, -1958414417);
  c = f(c, d, a, b, k[10], 17, -42063);
  b = f(b, c, d, a, k[11], 22, -1990404162);
  a = f(a, b, c, d, k[12], 7, 1804603682);
  d = f(d, a, b, c, k[13], 12, -40341101);
  c = f(c, d, a, b, k[14], 17, -1502002290);
  b = f(b, c, d, a, k[15], 22, 1236535329);
  a = g(a, b, c, d, k[1], 5, -165796510);
  d = g(d, a, b, c, k[6], 9, -1069501632);
  c = g(c, d, a, b, k[11], 14, 643717713);
  b = g(b, c, d, a, k[0], 20, -373897302);
  a = g(a, b, c, d, k[5], 5, -701558691);
  d = g(d, a, b, c, k[10], 9, 38016083);
  c = g(c, d, a, b, k[15], 14, -660478335);
  b = g(b, c, d, a, k[4], 20, -405537848);
  a = g(a, b, c, d, k[9], 5, 568446438);
  d = g(d, a, b, c, k[14], 9, -1019803690);
  c = g(c, d, a, b, k[3], 14, -187363961);
  b = g(b, c, d, a, k[8], 20, 1163531501);
  a = g(a, b, c, d, k[13], 5, -1444681467);
  d = g(d, a, b, c, k[2], 9, -51403784);
  c = g(c, d, a, b, k[7], 14, 1735328473);
  b = g(b, c, d, a, k[12], 20, -1926607734);
  a = h(a, b, c, d, k[5], 4, -378558);
  d = h(d, a, b, c, k[8], 11, -2022574463);
  c = h(c, d, a, b, k[11], 16, 1839030562);
  b = h(b, c, d, a, k[14], 23, -35309556);
  a = h(a, b, c, d, k[1], 4, -1530992060);
  d = h(d, a, b, c, k[4], 11, 1272893353);
  c = h(c, d, a, b, k[7], 16, -155497632);
  b = h(b, c, d, a, k[10], 23, -1094730640);
  a = h(a, b, c, d, k[13], 4, 681279174);
  d = h(d, a, b, c, k[0], 11, -358537222);
  c = h(c, d, a, b, k[3], 16, -722521979);
  b = h(b, c, d, a, k[6], 23, 76029189);
  a = h(a, b, c, d, k[9], 4, -640364487);
  d = h(d, a, b, c, k[12], 11, -421815835);
  c = h(c, d, a, b, k[15], 16, 530742520);
  b = h(b, c, d, a, k[2], 23, -995338651);
  a = i(a, b, c, d, k[0], 6, -198630844);
  d = i(d, a, b, c, k[7], 10, 1126891415);
  c = i(c, d, a, b, k[14], 15, -1416354905);
  b = i(b, c, d, a, k[5], 21, -57434055);
  a = i(a, b, c, d, k[12], 6, 1700485571);
  d = i(d, a, b, c, k[3], 10, -1894986606);
  c = i(c, d, a, b, k[10], 15, -1051523);
  b = i(b, c, d, a, k[1], 21, -2054922799);
  a = i(a, b, c, d, k[8], 6, 1873313359);
  d = i(d, a, b, c, k[15], 10, -30611744);
  c = i(c, d, a, b, k[6], 15, -1560198380);
  b = i(b, c, d, a, k[13], 21, 1309151649);
  a = i(a, b, c, d, k[4], 6, -145523070);
  d = i(d, a, b, c, k[11], 10, -1120210379);
  c = i(c, d, a, b, k[2], 15, 718787259);
  b = i(b, c, d, a, k[9], 21, -343485551);
  x[0] = a + x[0] | 0;
  x[1] = b + x[1] | 0;
  x[2] = c + x[2] | 0;
  x[3] = d + x[3] | 0;
  return /* () */0;
}

var state = /* array */[
  1732584193,
  -271733879,
  -1732584194,
  271733878
];

var md5blk = /* array */[
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

function caml_md5_string(s, start, len) {
  var s$1 = s.slice(start, len);
  var n = s$1.length;
  state[0] = 1732584193;
  state[1] = -271733879;
  state[2] = -1732584194;
  state[3] = 271733878;
  for(var i = 0; i <= 15; ++i){
    md5blk[i] = 0;
  }
  var i_end = n / 64 | 0;
  for(var i$1 = 1; i$1 <= i_end; ++i$1){
    for(var j = 0; j <= 15; ++j){
      var k = ((i$1 << 6) - 64 | 0) + (j << 2) | 0;
      md5blk[j] = ((s$1.charCodeAt(k) + (s$1.charCodeAt(k + 1 | 0) << 8) | 0) + (s$1.charCodeAt(k + 2 | 0) << 16) | 0) + (s$1.charCodeAt(k + 3 | 0) << 24) | 0;
    }
    cycle(state, md5blk);
  }
  var s_tail = s$1.slice((i_end << 6));
  for(var kk = 0; kk <= 15; ++kk){
    md5blk[kk] = 0;
  }
  var i_end$1 = s_tail.length - 1 | 0;
  for(var i$2 = 0; i$2 <= i_end$1; ++i$2){
    md5blk[i$2 / 4 | 0] = md5blk[i$2 / 4 | 0] | (s_tail.charCodeAt(i$2) << (i$2 % 4 << 3));
  }
  var i$3 = i_end$1 + 1 | 0;
  md5blk[i$3 / 4 | 0] = md5blk[i$3 / 4 | 0] | (128 << (i$3 % 4 << 3));
  if (i$3 > 55) {
    cycle(state, md5blk);
    for(var i$4 = 0; i$4 <= 15; ++i$4){
      md5blk[i$4] = 0;
    }
  }
  md5blk[14] = (n << 3);
  cycle(state, md5blk);
  return String.fromCharCode(state[0] & 255, (state[0] >> 8) & 255, (state[0] >> 16) & 255, (state[0] >> 24) & 255, state[1] & 255, (state[1] >> 8) & 255, (state[1] >> 16) & 255, (state[1] >> 24) & 255, state[2] & 255, (state[2] >> 8) & 255, (state[2] >> 16) & 255, (state[2] >> 24) & 255, state[3] & 255, (state[3] >> 8) & 255, (state[3] >> 16) & 255, (state[3] >> 24) & 255);
}

exports.caml_md5_string = caml_md5_string;
/* No side effect */

},{}],63:[function(require,module,exports) {
'use strict';

var Char                    = require("./char.js");
var $$String                = require("./string.js");
var Caml_md5                = require("./caml_md5.js");
var Pervasives              = require("./pervasives.js");
var Caml_string             = require("./caml_string.js");
var Caml_missing_polyfill   = require("./caml_missing_polyfill.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function string(str) {
  return Caml_md5.caml_md5_string(str, 0, str.length);
}

function bytes(b) {
  return string(Caml_string.bytes_to_string(b));
}

function substring(str, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (str.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Digest.substring"
        ];
  } else {
    return Caml_md5.caml_md5_string(str, ofs, len);
  }
}

function subbytes(b, ofs, len) {
  return substring(Caml_string.bytes_to_string(b), ofs, len);
}

function file(filename) {
  Pervasives.open_in_bin(filename);
  var exit = 0;
  var d;
  try {
    d = Caml_missing_polyfill.not_implemented("caml_md5_chan not implemented by bucklescript yet\n");
    exit = 1;
  }
  catch (e){
    Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
    throw e;
  }
  if (exit === 1) {
    Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
    return d;
  }
  
}

var output = Pervasives.output_string;

function input(chan) {
  return Pervasives.really_input_string(chan, 16);
}

function char_hex(n) {
  return n + (
          n < 10 ? /* "0" */48 : 87
        ) | 0;
}

function to_hex(d) {
  var result = new Array(32);
  for(var i = 0; i <= 15; ++i){
    var x = Caml_string.get(d, i);
    result[(i << 1)] = char_hex((x >>> 4));
    result[(i << 1) + 1 | 0] = char_hex(x & 15);
  }
  return Caml_string.bytes_to_string(result);
}

function from_hex(s) {
  if (s.length !== 32) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Digest.from_hex"
        ];
  }
  var digit = function (c) {
    if (c >= 65) {
      if (c >= 97) {
        if (c >= 103) {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Digest.from_hex"
              ];
        } else {
          return (c - /* "a" */97 | 0) + 10 | 0;
        }
      } else if (c >= 71) {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Digest.from_hex"
            ];
      } else {
        return (c - /* "A" */65 | 0) + 10 | 0;
      }
    } else if (c > 57 || c < 48) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Digest.from_hex"
          ];
    } else {
      return c - /* "0" */48 | 0;
    }
  };
  var $$byte = function (i) {
    return (digit(Caml_string.get(s, i)) << 4) + digit(Caml_string.get(s, i + 1 | 0)) | 0;
  };
  var result = new Array(16);
  for(var i = 0; i <= 15; ++i){
    result[i] = Char.chr($$byte((i << 1)));
  }
  return Caml_string.bytes_to_string(result);
}

var compare = $$String.compare;

exports.compare   = compare;
exports.string    = string;
exports.bytes     = bytes;
exports.substring = substring;
exports.subbytes  = subbytes;
exports.file      = file;
exports.output    = output;
exports.input     = input;
exports.to_hex    = to_hex;
exports.from_hex  = from_hex;
/* No side effect */

},{"./char.js":70,"./string.js":10,"./caml_md5.js":74,"./pervasives.js":12,"./caml_string.js":50,"./caml_missing_polyfill.js":55,"./caml_builtin_exceptions.js":44}],64:[function(require,module,exports) {
'use strict';

var Caml_obj    = require("./caml_obj.js");
var Caml_format = require("./caml_format.js");

function succ(n) {
  return n + 1;
}

function pred(n) {
  return n - 1;
}

function abs(n) {
  if (n >= 0) {
    return n;
  } else {
    return -n;
  }
}

var min_int = -9007199254740991;

var max_int = 9007199254740991;

function lognot(n) {
  return n ^ -1;
}

function to_string(n) {
  return Caml_format.caml_nativeint_format("%d", n);
}

var compare = Caml_obj.caml_nativeint_compare;

var zero = 0;

var one = 1;

var minus_one = -1;

var size = 54;

exports.zero      = zero;
exports.one       = one;
exports.minus_one = minus_one;
exports.succ      = succ;
exports.pred      = pred;
exports.abs       = abs;
exports.size      = size;
exports.max_int   = max_int;
exports.min_int   = min_int;
exports.lognot    = lognot;
exports.to_string = to_string;
exports.compare   = compare;
/* No side effect */

},{"./caml_obj.js":11,"./caml_format.js":53}],39:[function(require,module,exports) {
'use strict';

var $$Array                 = require("./array.js");
var Curry                   = require("./curry.js");
var Int32                   = require("./int32.js");
var Int64                   = require("./int64.js");
var Digest                  = require("./digest.js");
var Caml_sys                = require("./caml_sys.js");
var Nativeint               = require("./nativeint.js");
var Caml_array              = require("./caml_array.js");
var Caml_int64              = require("./caml_int64.js");
var Pervasives              = require("./pervasives.js");
var Caml_string             = require("./caml_string.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function assign(st1, st2) {
  $$Array.blit(st2[/* st */0], 0, st1[/* st */0], 0, 55);
  st1[/* idx */1] = st2[/* idx */1];
  return /* () */0;
}

function full_init(s, seed) {
  var combine = function (accu, x) {
    return Digest.string(accu + x);
  };
  var extract = function (d) {
    return ((Caml_string.get(d, 0) + (Caml_string.get(d, 1) << 8) | 0) + (Caml_string.get(d, 2) << 16) | 0) + (Caml_string.get(d, 3) << 24) | 0;
  };
  var seed$1 = seed.length ? seed : /* int array */[0];
  var l = seed$1.length;
  for(var i = 0; i <= 54; ++i){
    Caml_array.caml_array_set(s[/* st */0], i, i);
  }
  var accu = "x";
  for(var i$1 = 0 ,i_finish = 54 + Pervasives.max(55, l) | 0; i$1 <= i_finish; ++i$1){
    var j = i$1 % 55;
    var k = i$1 % l;
    accu = combine(accu, Caml_array.caml_array_get(seed$1, k));
    Caml_array.caml_array_set(s[/* st */0], j, (Caml_array.caml_array_get(s[/* st */0], j) ^ extract(accu)) & 1073741823);
  }
  s[/* idx */1] = 0;
  return /* () */0;
}

function make(seed) {
  var result = /* record */[
    /* st */Caml_array.caml_make_vect(55, 0),
    /* idx */0
  ];
  full_init(result, seed);
  return result;
}

function make_self_init() {
  return make(Caml_sys.caml_sys_random_seed(/* () */0));
}

function copy(s) {
  var result = /* record */[
    /* st */Caml_array.caml_make_vect(55, 0),
    /* idx */0
  ];
  assign(result, s);
  return result;
}

function bits(s) {
  s[/* idx */1] = (s[/* idx */1] + 1 | 0) % 55;
  var curval = Caml_array.caml_array_get(s[/* st */0], s[/* idx */1]);
  var newval = Caml_array.caml_array_get(s[/* st */0], (s[/* idx */1] + 24 | 0) % 55) + (curval ^ (curval >>> 25) & 31) | 0;
  var newval30 = newval & 1073741823;
  Caml_array.caml_array_set(s[/* st */0], s[/* idx */1], newval30);
  return newval30;
}

function $$int(s, bound) {
  if (bound > 1073741823 || bound <= 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Random.int"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var r = bits(s$1);
      var v = r % n;
      if ((r - v | 0) > ((1073741823 - n | 0) + 1 | 0)) {
        continue ;
        
      } else {
        return v;
      }
    };
  }
}

function int32(s, bound) {
  if (bound <= 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Random.int32"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var b1 = bits(s$1);
      var b2 = ((bits(s$1) & 1) << 30);
      var r = b1 | b2;
      var v = r % n;
      if ((r - v | 0) > ((Int32.max_int - n | 0) + 1 | 0)) {
        continue ;
        
      } else {
        return v;
      }
    };
  }
}

function int64(s, bound) {
  if (Caml_int64.le(bound, /* int64 */[
          /* hi */0,
          /* lo */0
        ])) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Random.int64"
        ];
  } else {
    var s$1 = s;
    var n = bound;
    while(true) {
      var b1 = Caml_int64.of_int32(bits(s$1));
      var b2 = Caml_int64.lsl_(Caml_int64.of_int32(bits(s$1)), 30);
      var b3 = Caml_int64.lsl_(Caml_int64.of_int32(bits(s$1) & 7), 60);
      var r = Caml_int64.or_(b1, /* int64 */[
            /* hi */b2[0] | b3[0],
            /* lo */((b2[1] | b3[1]) >>> 0)
          ]);
      var v = Caml_int64.mod_(r, n);
      if (Caml_int64.gt(Caml_int64.sub(r, v), Caml_int64.add(Caml_int64.sub(Int64.max_int, n), /* int64 */[
                  /* hi */0,
                  /* lo */1
                ]))) {
        continue ;
        
      } else {
        return v;
      }
    };
  }
}

var nativeint = Nativeint.size === 32 ? int32 : (function (s, bound) {
      return int64(s, Caml_int64.of_int32(bound))[1] | 0;
    });

function rawfloat(s) {
  var r1 = bits(s);
  var r2 = bits(s);
  return (r1 / 1073741824.0 + r2) / 1073741824.0;
}

function $$float(s, bound) {
  return rawfloat(s) * bound;
}

function bool(s) {
  return +((bits(s) & 1) === 0);
}

var $$default = /* record */[
  /* st : array */[
    987910699,
    495797812,
    364182224,
    414272206,
    318284740,
    990407751,
    383018966,
    270373319,
    840823159,
    24560019,
    536292337,
    512266505,
    189156120,
    730249596,
    143776328,
    51606627,
    140166561,
    366354223,
    1003410265,
    700563762,
    981890670,
    913149062,
    526082594,
    1021425055,
    784300257,
    667753350,
    630144451,
    949649812,
    48546892,
    415514493,
    258888527,
    511570777,
    89983870,
    283659902,
    308386020,
    242688715,
    482270760,
    865188196,
    1027664170,
    207196989,
    193777847,
    619708188,
    671350186,
    149669678,
    257044018,
    87658204,
    558145612,
    183450813,
    28133145,
    901332182,
    710253903,
    510646120,
    652377910,
    409934019,
    801085050
  ],
  /* idx */0
];

function bits$1() {
  return bits($$default);
}

function $$int$1(bound) {
  return $$int($$default, bound);
}

function int32$1(bound) {
  return int32($$default, bound);
}

function nativeint$1(bound) {
  return Curry._2(nativeint, $$default, bound);
}

function int64$1(bound) {
  return int64($$default, bound);
}

function $$float$1(scale) {
  return rawfloat($$default) * scale;
}

function bool$1() {
  return bool($$default);
}

function full_init$1(seed) {
  return full_init($$default, seed);
}

function init(seed) {
  return full_init($$default, /* int array */[seed]);
}

function self_init() {
  return full_init$1(Caml_sys.caml_sys_random_seed(/* () */0));
}

function get_state() {
  return copy($$default);
}

function set_state(s) {
  return assign($$default, s);
}

var State = [
  make,
  make_self_init,
  copy,
  bits,
  $$int,
  int32,
  nativeint,
  int64,
  $$float,
  bool
];

exports.init      = init;
exports.full_init = full_init$1;
exports.self_init = self_init;
exports.bits      = bits$1;
exports.$$int     = $$int$1;
exports.int32     = int32$1;
exports.nativeint = nativeint$1;
exports.int64     = int64$1;
exports.$$float   = $$float$1;
exports.bool      = bool$1;
exports.State     = State;
exports.get_state = get_state;
exports.set_state = set_state;
/* No side effect */

},{"./array.js":38,"./curry.js":9,"./int32.js":61,"./int64.js":62,"./digest.js":63,"./caml_sys.js":52,"./nativeint.js":64,"./caml_array.js":40,"./caml_int64.js":65,"./pervasives.js":12,"./caml_string.js":50,"./caml_builtin_exceptions.js":44}],72:[function(require,module,exports) {
'use strict';


function create() {
  return /* record */[
          /* length */0,
          /* tail : None */0
        ];
}

function push(x, q) {
  if (q[/* length */0]) {
    var tail = q[/* tail */1];
    var head = tail[/* next */1];
    var cell = /* record */[
      /* content */x,
      /* next */head
    ];
    q[/* length */0] = q[/* length */0] + 1 | 0;
    tail[/* next */1] = cell;
    q[/* tail */1] = cell;
    return /* () */0;
  } else {
    var cell$1 = [];
    cell$1[0] = x;
    cell$1[1] = cell$1;
    q[/* length */0] = 1;
    q[/* tail */1] = cell$1;
    return /* () */0;
  }
}

function unsafe_pop(q) {
  q[/* length */0] = q[/* length */0] - 1 | 0;
  var tail = q[/* tail */1];
  var head = tail[/* next */1];
  if (head === tail) {
    q[/* tail */1] = /* None */0;
  } else {
    tail[/* next */1] = head[/* next */1];
  }
  return head[/* content */0];
}

function is_empty(q) {
  return +(q[/* length */0] === 0);
}

exports.create     = create;
exports.push       = push;
exports.unsafe_pop = unsafe_pop;
exports.is_empty   = is_empty;
/* No side effect */

},{}],58:[function(require,module,exports) {
'use strict';

var Caml_int32              = require("./caml_int32.js");
var Caml_queue              = require("./caml_queue.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function rotl32(x, n) {
  return (x << n) | (x >>> (32 - n | 0));
}

function caml_hash_mix_int(h, d) {
  var d$1 = d;
  d$1 = Caml_int32.imul(d$1, 3432918353);
  d$1 = rotl32(d$1, 15);
  d$1 = Caml_int32.imul(d$1, 461845907);
  var h$1 = h ^ d$1;
  h$1 = rotl32(h$1, 13);
  return (h$1 + (h$1 << 2) | 0) + 3864292196 | 0;
}

function caml_hash_final_mix(h) {
  var h$1 = h ^ (h >>> 16);
  h$1 = Caml_int32.imul(h$1, 2246822507);
  h$1 = h$1 ^ (h$1 >>> 13);
  h$1 = Caml_int32.imul(h$1, 3266489909);
  return h$1 ^ (h$1 >>> 16);
}

function caml_hash_mix_string(h, s) {
  var len = s.length;
  var block = (len / 4 | 0) - 1 | 0;
  var hash = h;
  for(var i = 0; i <= block; ++i){
    var j = (i << 2);
    var w = s.charCodeAt(j) | (s.charCodeAt(j + 1 | 0) << 8) | (s.charCodeAt(j + 2 | 0) << 16) | (s.charCodeAt(j + 3 | 0) << 24);
    hash = caml_hash_mix_int(hash, w);
  }
  var modulo = len & 3;
  if (modulo !== 0) {
    var w$1 = modulo === 3 ? (s.charCodeAt(len - 1 | 0) << 16) | (s.charCodeAt(len - 2 | 0) << 8) | s.charCodeAt(len - 3 | 0) : (
        modulo === 2 ? (s.charCodeAt(len - 1 | 0) << 8) | s.charCodeAt(len - 2 | 0) : s.charCodeAt(len - 1 | 0)
      );
    hash = caml_hash_mix_int(hash, w$1);
  }
  hash = hash ^ len;
  return hash;
}

function caml_hash(count, _, seed, obj) {
  var hash = seed;
  if (typeof obj === "number") {
    var u = obj | 0;
    hash = caml_hash_mix_int(hash, (u + u | 0) + 1 | 0);
    return caml_hash_final_mix(hash);
  } else if (typeof obj === "string") {
    hash = caml_hash_mix_string(hash, obj);
    return caml_hash_final_mix(hash);
  } else {
    var queue = /* record */[
      /* length */0,
      /* tail : None */0
    ];
    var num = count;
    Caml_queue.push(obj, queue);
    num = num - 1 | 0;
    while(queue[/* length */0] !== 0 && num > 0) {
      var obj$1 = Caml_queue.unsafe_pop(queue);
      if (typeof obj$1 === "number") {
        var u$1 = obj$1 | 0;
        hash = caml_hash_mix_int(hash, (u$1 + u$1 | 0) + 1 | 0);
        num = num - 1 | 0;
      } else if (typeof obj$1 === "string") {
        hash = caml_hash_mix_string(hash, obj$1);
        num = num - 1 | 0;
      } else if (typeof obj$1 !== "boolean") {
        if (typeof obj$1 !== "undefined") {
          if (typeof obj$1 === "symbol") {
            throw [
                  Caml_builtin_exceptions.assert_failure,
                  [
                    "caml_hash.ml",
                    135,
                    8
                  ]
                ];
          } else if (typeof obj$1 !== "function") {
            var size = obj$1.length;
            if (size !== undefined) {
              var obj_tag = obj$1.tag | 0;
              var tag = (size << 10) | obj_tag;
              if (tag === 248) {
                hash = caml_hash_mix_int(hash, obj$1[1]);
              } else {
                hash = caml_hash_mix_int(hash, tag);
                var v = size - 1 | 0;
                var block = v < num ? v : num;
                for(var i = 0; i <= block; ++i){
                  Caml_queue.push(obj$1[i], queue);
                }
              }
            }
            
          }
          
        }
        
      }
      
    };
    return caml_hash_final_mix(hash);
  }
}

exports.caml_hash_mix_int    = caml_hash_mix_int;
exports.caml_hash_mix_string = caml_hash_mix_string;
exports.caml_hash_final_mix  = caml_hash_final_mix;
exports.caml_hash            = caml_hash;
/* No side effect */

},{"./caml_int32.js":41,"./caml_queue.js":72,"./caml_builtin_exceptions.js":44}],87:[function(require,module,exports) {
'use strict';

var Caml_string             = require("./caml_string.js");
var Caml_missing_polyfill   = require("./caml_missing_polyfill.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function to_buffer(buff, ofs, len, _, _$1) {
  if (ofs < 0 || len < 0 || ofs > (buff.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.to_buffer: substring out of bounds"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_output_value_to_buffer not implemented by bucklescript yet\n");
  }
}

function data_size(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 20 | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.data_size"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_marshal_data_size not implemented by bucklescript yet\n");
  }
}

function total_size(buff, ofs) {
  return 20 + data_size(buff, ofs) | 0;
}

function from_bytes(buff, ofs) {
  if (ofs < 0 || ofs > (buff.length - 20 | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Marshal.from_bytes"
        ];
  } else {
    var len = Caml_missing_polyfill.not_implemented("caml_marshal_data_size not implemented by bucklescript yet\n");
    if (ofs > (buff.length - (20 + len | 0) | 0)) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Marshal.from_bytes"
          ];
    } else {
      return Caml_missing_polyfill.not_implemented("caml_input_value_from_string not implemented by bucklescript yet\n");
    }
  }
}

function from_string(buff, ofs) {
  return from_bytes(Caml_string.bytes_of_string(buff), ofs);
}

function to_channel(_, _$1, _$2) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function from_channel() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

var header_size = 20;

exports.to_channel   = to_channel;
exports.to_buffer    = to_buffer;
exports.from_channel = from_channel;
exports.from_bytes   = from_bytes;
exports.from_string  = from_string;
exports.header_size  = header_size;
exports.data_size    = data_size;
exports.total_size   = total_size;
/* No side effect */

},{"./caml_string.js":50,"./caml_missing_polyfill.js":55,"./caml_builtin_exceptions.js":44}],73:[function(require,module,exports) {
'use strict';

var Marshal                 = require("./marshal.js");
var Caml_array              = require("./caml_array.js");
var Caml_missing_polyfill   = require("./caml_missing_polyfill.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

var double_field = Caml_array.caml_array_get;

var set_double_field = Caml_array.caml_array_set;

function marshal() {
  return Caml_missing_polyfill.not_implemented("caml_output_value_to_string not implemented by bucklescript yet\n");
}

function unmarshal(str, pos) {
  return /* tuple */[
          Marshal.from_bytes(str, pos),
          pos + Marshal.total_size(str, pos) | 0
        ];
}

function extension_slot(x) {
  var slot = x.length !== undefined && (x.tag | 0) !== 248 && x.length >= 1 ? x[0] : x;
  var name;
  if (slot.length !== undefined && slot.tag === 248) {
    name = slot[0];
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
  if (name.tag === 252) {
    return slot;
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function extension_name(x) {
  try {
    var slot = extension_slot(x);
    return slot[0];
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Obj.extension_name"
          ];
    } else {
      throw exn;
    }
  }
}

function extension_id(x) {
  try {
    var slot = extension_slot(x);
    return slot[1];
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Obj.extension_id"
          ];
    } else {
      throw exn;
    }
  }
}

function extension_slot$1(x) {
  try {
    return extension_slot(x);
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Obj.extension_slot"
          ];
    } else {
      throw exn;
    }
  }
}

var first_non_constant_constructor_tag = 0;

var last_non_constant_constructor_tag = 245;

var lazy_tag = 246;

var closure_tag = 247;

var object_tag = 248;

var infix_tag = 249;

var forward_tag = 250;

var no_scan_tag = 251;

var abstract_tag = 251;

var string_tag = 252;

var double_tag = 253;

var double_array_tag = 254;

var custom_tag = 255;

var final_tag = 255;

var int_tag = 1000;

var out_of_heap_tag = 1001;

var unaligned_tag = 1002;

exports.double_field                       = double_field;
exports.set_double_field                   = set_double_field;
exports.first_non_constant_constructor_tag = first_non_constant_constructor_tag;
exports.last_non_constant_constructor_tag  = last_non_constant_constructor_tag;
exports.lazy_tag                           = lazy_tag;
exports.closure_tag                        = closure_tag;
exports.object_tag                         = object_tag;
exports.infix_tag                          = infix_tag;
exports.forward_tag                        = forward_tag;
exports.no_scan_tag                        = no_scan_tag;
exports.abstract_tag                       = abstract_tag;
exports.string_tag                         = string_tag;
exports.double_tag                         = double_tag;
exports.double_array_tag                   = double_array_tag;
exports.custom_tag                         = custom_tag;
exports.final_tag                          = final_tag;
exports.int_tag                            = int_tag;
exports.out_of_heap_tag                    = out_of_heap_tag;
exports.unaligned_tag                      = unaligned_tag;
exports.extension_name                     = extension_name;
exports.extension_id                       = extension_id;
exports.extension_slot                     = extension_slot$1;
exports.marshal                            = marshal;
exports.unmarshal                          = unmarshal;
/* No side effect */

},{"./marshal.js":87,"./caml_array.js":40,"./caml_missing_polyfill.js":55,"./caml_builtin_exceptions.js":44}],59:[function(require,module,exports) {
'use strict';

var Obj             = require("./obj.js");
var Curry           = require("./curry.js");
var Caml_exceptions = require("./caml_exceptions.js");

var Undefined = Caml_exceptions.create("CamlinternalLazy.Undefined");

function raise_undefined() {
  throw Undefined;
}

function force_lazy_block(blk) {
  var closure = blk[0];
  blk[0] = raise_undefined;
  try {
    var result = Curry._1(closure, /* () */0);
    blk[0] = result;
    blk.tag = Obj.forward_tag;
    return result;
  }
  catch (e){
    blk[0] = (function () {
        throw e;
      });
    throw e;
  }
}

function force_val_lazy_block(blk) {
  var closure = blk[0];
  blk[0] = raise_undefined;
  var result = Curry._1(closure, /* () */0);
  blk[0] = result;
  blk.tag = Obj.forward_tag;
  return result;
}

function force(lzv) {
  var t = lzv.tag | 0;
  if (t === Obj.forward_tag) {
    return lzv[0];
  } else if (t !== Obj.lazy_tag) {
    return lzv;
  } else {
    return force_lazy_block(lzv);
  }
}

function force_val(lzv) {
  var t = lzv.tag | 0;
  if (t === Obj.forward_tag) {
    return lzv[0];
  } else if (t !== Obj.lazy_tag) {
    return lzv;
  } else {
    return force_val_lazy_block(lzv);
  }
}

exports.Undefined            = Undefined;
exports.force_lazy_block     = force_lazy_block;
exports.force_val_lazy_block = force_val_lazy_block;
exports.force                = force;
exports.force_val            = force_val;
/* No side effect */

},{"./obj.js":73,"./curry.js":9,"./caml_exceptions.js":54}],43:[function(require,module,exports) {
'use strict';

var $$Array                 = require("./array.js");
var Block                   = require("./block.js");
var Curry                   = require("./curry.js");
var Random                  = require("./random.js");
var Caml_obj                = require("./caml_obj.js");
var Caml_hash               = require("./caml_hash.js");
var Caml_array              = require("./caml_array.js");
var Pervasives              = require("./pervasives.js");
var CamlinternalLazy        = require("./camlinternalLazy.js");
var Caml_missing_polyfill   = require("./caml_missing_polyfill.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function hash(x) {
  return Caml_hash.caml_hash(10, 100, 0, x);
}

function hash_param(n1, n2, x) {
  return Caml_hash.caml_hash(n1, n2, 0, x);
}

function seeded_hash(seed, x) {
  return Caml_hash.caml_hash(10, 100, seed, x);
}

var randomized = [/* false */0];

function randomize() {
  randomized[0] = /* true */1;
  return /* () */0;
}

var prng = Block.__(246, [(function () {
        return Random.State[/* make_self_init */1](/* () */0);
      })]);

function power_2_above(_x, n) {
  while(true) {
    var x = _x;
    if (x >= n) {
      return x;
    } else if ((x << 1) < x) {
      return x;
    } else {
      _x = (x << 1);
      continue ;
      
    }
  };
}

function create($staropt$star, initial_size) {
  var random = $staropt$star ? $staropt$star[0] : randomized[0];
  var s = power_2_above(16, initial_size);
  var seed;
  if (random) {
    var tag = prng.tag | 0;
    seed = Random.State[/* bits */3](tag === 250 ? prng[0] : (
            tag === 246 ? CamlinternalLazy.force_lazy_block(prng) : prng
          ));
  } else {
    seed = 0;
  }
  return /* record */[
          /* size */0,
          /* data */Caml_array.caml_make_vect(s, /* Empty */0),
          /* seed */seed,
          /* initial_size */s
        ];
}

function clear(h) {
  h[/* size */0] = 0;
  var len = h[/* data */1].length;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    Caml_array.caml_array_set(h[/* data */1], i, /* Empty */0);
  }
  return /* () */0;
}

function reset(h) {
  var len = h[/* data */1].length;
  if (h.length < 4 || len === h[/* initial_size */3]) {
    return clear(h);
  } else {
    h[/* size */0] = 0;
    h[/* data */1] = Caml_array.caml_make_vect(h[/* initial_size */3], /* Empty */0);
    return /* () */0;
  }
}

function copy(h) {
  return /* record */[
          /* size */h[/* size */0],
          /* data */$$Array.copy(h[/* data */1]),
          /* seed */h[/* seed */2],
          /* initial_size */h[/* initial_size */3]
        ];
}

function length(h) {
  return h[/* size */0];
}

function resize(indexfun, h) {
  var odata = h[/* data */1];
  var osize = odata.length;
  var nsize = (osize << 1);
  if (nsize >= osize) {
    var ndata = Caml_array.caml_make_vect(nsize, /* Empty */0);
    h[/* data */1] = ndata;
    var insert_bucket = function (param) {
      if (param) {
        var key = param[0];
        insert_bucket(param[2]);
        var nidx = Curry._2(indexfun, h, key);
        return Caml_array.caml_array_set(ndata, nidx, /* Cons */[
                    key,
                    param[1],
                    Caml_array.caml_array_get(ndata, nidx)
                  ]);
      } else {
        return /* () */0;
      }
    };
    for(var i = 0 ,i_finish = osize - 1 | 0; i <= i_finish; ++i){
      insert_bucket(Caml_array.caml_array_get(odata, i));
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function key_index(h, key) {
  if (h.length >= 3) {
    return Caml_hash.caml_hash(10, 100, h[/* seed */2], key) & (h[/* data */1].length - 1 | 0);
  } else {
    return Caml_missing_polyfill.not_implemented("caml_hash_univ_param not implemented by bucklescript yet\n") % h[/* data */1].length;
  }
}

function add(h, key, info) {
  var i = key_index(h, key);
  var bucket_002 = Caml_array.caml_array_get(h[/* data */1], i);
  var bucket = /* Cons */[
    key,
    info,
    bucket_002
  ];
  Caml_array.caml_array_set(h[/* data */1], i, bucket);
  h[/* size */0] = h[/* size */0] + 1 | 0;
  if (h[/* size */0] > (h[/* data */1].length << 1)) {
    return resize(key_index, h);
  } else {
    return 0;
  }
}

function remove(h, key) {
  var remove_bucket = function (param) {
    if (param) {
      var next = param[2];
      var k = param[0];
      if (Caml_obj.caml_compare(k, key)) {
        return /* Cons */[
                k,
                param[1],
                remove_bucket(next)
              ];
      } else {
        h[/* size */0] = h[/* size */0] - 1 | 0;
        return next;
      }
    } else {
      return /* Empty */0;
    }
  };
  var i = key_index(h, key);
  return Caml_array.caml_array_set(h[/* data */1], i, remove_bucket(Caml_array.caml_array_get(h[/* data */1], i)));
}

function find(h, key) {
  var match = Caml_array.caml_array_get(h[/* data */1], key_index(h, key));
  if (match) {
    if (Caml_obj.caml_compare(key, match[0])) {
      var rest1 = match[2];
      if (rest1) {
        if (Caml_obj.caml_compare(key, rest1[0])) {
          var rest2 = rest1[2];
          if (rest2) {
            if (Caml_obj.caml_compare(key, rest2[0])) {
              var key$1 = key;
              var _param = rest2[2];
              while(true) {
                var param = _param;
                if (param) {
                  if (Caml_obj.caml_compare(key$1, param[0])) {
                    _param = param[2];
                    continue ;
                    
                  } else {
                    return param[1];
                  }
                } else {
                  throw Caml_builtin_exceptions.not_found;
                }
              };
            } else {
              return rest2[1];
            }
          } else {
            throw Caml_builtin_exceptions.not_found;
          }
        } else {
          return rest1[1];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    } else {
      return match[1];
    }
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function find_all(h, key) {
  var find_in_bucket = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var rest = param[2];
        if (Caml_obj.caml_compare(param[0], key)) {
          _param = rest;
          continue ;
          
        } else {
          return /* :: */[
                  param[1],
                  find_in_bucket(rest)
                ];
        }
      } else {
        return /* [] */0;
      }
    };
  };
  return find_in_bucket(Caml_array.caml_array_get(h[/* data */1], key_index(h, key)));
}

function replace(h, key, info) {
  var replace_bucket = function (param) {
    if (param) {
      var next = param[2];
      var k = param[0];
      if (Caml_obj.caml_compare(k, key)) {
        return /* Cons */[
                k,
                param[1],
                replace_bucket(next)
              ];
      } else {
        return /* Cons */[
                key,
                info,
                next
              ];
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
  var i = key_index(h, key);
  var l = Caml_array.caml_array_get(h[/* data */1], i);
  try {
    return Caml_array.caml_array_set(h[/* data */1], i, replace_bucket(l));
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      Caml_array.caml_array_set(h[/* data */1], i, /* Cons */[
            key,
            info,
            l
          ]);
      h[/* size */0] = h[/* size */0] + 1 | 0;
      if (h[/* size */0] > (h[/* data */1].length << 1)) {
        return resize(key_index, h);
      } else {
        return 0;
      }
    } else {
      throw exn;
    }
  }
}

function mem(h, key) {
  var _param = Caml_array.caml_array_get(h[/* data */1], key_index(h, key));
  while(true) {
    var param = _param;
    if (param) {
      if (Caml_obj.caml_compare(param[0], key)) {
        _param = param[2];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  };
}

function iter(f, h) {
  var do_bucket = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        Curry._2(f, param[0], param[1]);
        _param = param[2];
        continue ;
        
      } else {
        return /* () */0;
      }
    };
  };
  var d = h[/* data */1];
  for(var i = 0 ,i_finish = d.length - 1 | 0; i <= i_finish; ++i){
    do_bucket(Caml_array.caml_array_get(d, i));
  }
  return /* () */0;
}

function fold(f, h, init) {
  var do_bucket = function (_b, _accu) {
    while(true) {
      var accu = _accu;
      var b = _b;
      if (b) {
        _accu = Curry._3(f, b[0], b[1], accu);
        _b = b[2];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var d = h[/* data */1];
  var accu = init;
  for(var i = 0 ,i_finish = d.length - 1 | 0; i <= i_finish; ++i){
    accu = do_bucket(Caml_array.caml_array_get(d, i), accu);
  }
  return accu;
}

function bucket_length(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[2];
      _accu = accu + 1 | 0;
      continue ;
      
    } else {
      return accu;
    }
  };
}

function stats(h) {
  var mbl = $$Array.fold_left((function (m, b) {
          return Pervasives.max(m, bucket_length(0, b));
        }), 0, h[/* data */1]);
  var histo = Caml_array.caml_make_vect(mbl + 1 | 0, 0);
  $$Array.iter((function (b) {
          var l = bucket_length(0, b);
          return Caml_array.caml_array_set(histo, l, Caml_array.caml_array_get(histo, l) + 1 | 0);
        }), h[/* data */1]);
  return /* record */[
          /* num_bindings */h[/* size */0],
          /* num_buckets */h[/* data */1].length,
          /* max_bucket_length */mbl,
          /* bucket_histogram */histo
        ];
}

function MakeSeeded(H) {
  var key_index = function (h, key) {
    return Curry._2(H[/* hash */1], h[/* seed */2], key) & (h[/* data */1].length - 1 | 0);
  };
  var add = function (h, key, info) {
    var i = key_index(h, key);
    var bucket_002 = Caml_array.caml_array_get(h[/* data */1], i);
    var bucket = /* Cons */[
      key,
      info,
      bucket_002
    ];
    Caml_array.caml_array_set(h[/* data */1], i, bucket);
    h[/* size */0] = h[/* size */0] + 1 | 0;
    if (h[/* size */0] > (h[/* data */1].length << 1)) {
      return resize(key_index, h);
    } else {
      return 0;
    }
  };
  var remove = function (h, key) {
    var remove_bucket = function (param) {
      if (param) {
        var next = param[2];
        var k = param[0];
        if (Curry._2(H[/* equal */0], k, key)) {
          h[/* size */0] = h[/* size */0] - 1 | 0;
          return next;
        } else {
          return /* Cons */[
                  k,
                  param[1],
                  remove_bucket(next)
                ];
        }
      } else {
        return /* Empty */0;
      }
    };
    var i = key_index(h, key);
    return Caml_array.caml_array_set(h[/* data */1], i, remove_bucket(Caml_array.caml_array_get(h[/* data */1], i)));
  };
  var find = function (h, key) {
    var match = Caml_array.caml_array_get(h[/* data */1], key_index(h, key));
    if (match) {
      var rest1 = match[2];
      if (Curry._2(H[/* equal */0], key, match[0])) {
        return match[1];
      } else if (rest1) {
        var rest2 = rest1[2];
        if (Curry._2(H[/* equal */0], key, rest1[0])) {
          return rest1[1];
        } else if (rest2) {
          if (Curry._2(H[/* equal */0], key, rest2[0])) {
            return rest2[1];
          } else {
            var key$1 = key;
            var _param = rest2[2];
            while(true) {
              var param = _param;
              if (param) {
                if (Curry._2(H[/* equal */0], key$1, param[0])) {
                  return param[1];
                } else {
                  _param = param[2];
                  continue ;
                  
                }
              } else {
                throw Caml_builtin_exceptions.not_found;
              }
            };
          }
        } else {
          throw Caml_builtin_exceptions.not_found;
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
  var find_all = function (h, key) {
    var find_in_bucket = function (_param) {
      while(true) {
        var param = _param;
        if (param) {
          var rest = param[2];
          if (Curry._2(H[/* equal */0], param[0], key)) {
            return /* :: */[
                    param[1],
                    find_in_bucket(rest)
                  ];
          } else {
            _param = rest;
            continue ;
            
          }
        } else {
          return /* [] */0;
        }
      };
    };
    return find_in_bucket(Caml_array.caml_array_get(h[/* data */1], key_index(h, key)));
  };
  var replace = function (h, key, info) {
    var replace_bucket = function (param) {
      if (param) {
        var next = param[2];
        var k = param[0];
        if (Curry._2(H[/* equal */0], k, key)) {
          return /* Cons */[
                  key,
                  info,
                  next
                ];
        } else {
          return /* Cons */[
                  k,
                  param[1],
                  replace_bucket(next)
                ];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
    var i = key_index(h, key);
    var l = Caml_array.caml_array_get(h[/* data */1], i);
    try {
      return Caml_array.caml_array_set(h[/* data */1], i, replace_bucket(l));
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        Caml_array.caml_array_set(h[/* data */1], i, /* Cons */[
              key,
              info,
              l
            ]);
        h[/* size */0] = h[/* size */0] + 1 | 0;
        if (h[/* size */0] > (h[/* data */1].length << 1)) {
          return resize(key_index, h);
        } else {
          return 0;
        }
      } else {
        throw exn;
      }
    }
  };
  var mem = function (h, key) {
    var _param = Caml_array.caml_array_get(h[/* data */1], key_index(h, key));
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._2(H[/* equal */0], param[0], key)) {
          return /* true */1;
        } else {
          _param = param[2];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    };
  };
  return /* module */[
          /* create */create,
          /* clear */clear,
          /* reset */reset,
          /* copy */copy,
          /* add */add,
          /* remove */remove,
          /* find */find,
          /* find_all */find_all,
          /* replace */replace,
          /* mem */mem,
          /* iter */iter,
          /* fold */fold,
          /* length */length,
          /* stats */stats
        ];
}

function Make(H) {
  var equal = H[/* equal */0];
  var key_index = function (h, key) {
    return Curry._1(H[/* hash */1], key) & (h[/* data */1].length - 1 | 0);
  };
  var add = function (h, key, info) {
    var i = key_index(h, key);
    var bucket_002 = Caml_array.caml_array_get(h[/* data */1], i);
    var bucket = /* Cons */[
      key,
      info,
      bucket_002
    ];
    Caml_array.caml_array_set(h[/* data */1], i, bucket);
    h[/* size */0] = h[/* size */0] + 1 | 0;
    if (h[/* size */0] > (h[/* data */1].length << 1)) {
      return resize(key_index, h);
    } else {
      return 0;
    }
  };
  var remove = function (h, key) {
    var remove_bucket = function (param) {
      if (param) {
        var next = param[2];
        var k = param[0];
        if (Curry._2(equal, k, key)) {
          h[/* size */0] = h[/* size */0] - 1 | 0;
          return next;
        } else {
          return /* Cons */[
                  k,
                  param[1],
                  remove_bucket(next)
                ];
        }
      } else {
        return /* Empty */0;
      }
    };
    var i = key_index(h, key);
    return Caml_array.caml_array_set(h[/* data */1], i, remove_bucket(Caml_array.caml_array_get(h[/* data */1], i)));
  };
  var find = function (h, key) {
    var match = Caml_array.caml_array_get(h[/* data */1], key_index(h, key));
    if (match) {
      var rest1 = match[2];
      if (Curry._2(equal, key, match[0])) {
        return match[1];
      } else if (rest1) {
        var rest2 = rest1[2];
        if (Curry._2(equal, key, rest1[0])) {
          return rest1[1];
        } else if (rest2) {
          if (Curry._2(equal, key, rest2[0])) {
            return rest2[1];
          } else {
            var key$1 = key;
            var _param = rest2[2];
            while(true) {
              var param = _param;
              if (param) {
                if (Curry._2(equal, key$1, param[0])) {
                  return param[1];
                } else {
                  _param = param[2];
                  continue ;
                  
                }
              } else {
                throw Caml_builtin_exceptions.not_found;
              }
            };
          }
        } else {
          throw Caml_builtin_exceptions.not_found;
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
  var find_all = function (h, key) {
    var find_in_bucket = function (_param) {
      while(true) {
        var param = _param;
        if (param) {
          var rest = param[2];
          if (Curry._2(equal, param[0], key)) {
            return /* :: */[
                    param[1],
                    find_in_bucket(rest)
                  ];
          } else {
            _param = rest;
            continue ;
            
          }
        } else {
          return /* [] */0;
        }
      };
    };
    return find_in_bucket(Caml_array.caml_array_get(h[/* data */1], key_index(h, key)));
  };
  var replace = function (h, key, info) {
    var replace_bucket = function (param) {
      if (param) {
        var next = param[2];
        var k = param[0];
        if (Curry._2(equal, k, key)) {
          return /* Cons */[
                  key,
                  info,
                  next
                ];
        } else {
          return /* Cons */[
                  k,
                  param[1],
                  replace_bucket(next)
                ];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
    var i = key_index(h, key);
    var l = Caml_array.caml_array_get(h[/* data */1], i);
    try {
      return Caml_array.caml_array_set(h[/* data */1], i, replace_bucket(l));
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.not_found) {
        Caml_array.caml_array_set(h[/* data */1], i, /* Cons */[
              key,
              info,
              l
            ]);
        h[/* size */0] = h[/* size */0] + 1 | 0;
        if (h[/* size */0] > (h[/* data */1].length << 1)) {
          return resize(key_index, h);
        } else {
          return 0;
        }
      } else {
        throw exn;
      }
    }
  };
  var mem = function (h, key) {
    var _param = Caml_array.caml_array_get(h[/* data */1], key_index(h, key));
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._2(equal, param[0], key)) {
          return /* true */1;
        } else {
          _param = param[2];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    };
  };
  var create$1 = function (sz) {
    return create(/* Some */[/* false */0], sz);
  };
  return /* module */[
          /* create */create$1,
          /* clear */clear,
          /* reset */reset,
          /* copy */copy,
          /* add */add,
          /* remove */remove,
          /* find */find,
          /* find_all */find_all,
          /* replace */replace,
          /* mem */mem,
          /* iter */iter,
          /* fold */fold,
          /* length */length,
          /* stats */stats
        ];
}

var seeded_hash_param = Caml_hash.caml_hash;

exports.create            = create;
exports.clear             = clear;
exports.reset             = reset;
exports.copy              = copy;
exports.add               = add;
exports.find              = find;
exports.find_all          = find_all;
exports.mem               = mem;
exports.remove            = remove;
exports.replace           = replace;
exports.iter              = iter;
exports.fold              = fold;
exports.length            = length;
exports.randomize         = randomize;
exports.stats             = stats;
exports.Make              = Make;
exports.MakeSeeded        = MakeSeeded;
exports.hash              = hash;
exports.seeded_hash       = seeded_hash;
exports.hash_param        = hash_param;
exports.seeded_hash_param = seeded_hash_param;
/* No side effect */

},{"./array.js":38,"./block.js":37,"./curry.js":9,"./random.js":39,"./caml_obj.js":11,"./caml_hash.js":58,"./caml_array.js":40,"./pervasives.js":12,"./camlinternalLazy.js":59,"./caml_missing_polyfill.js":55,"./caml_builtin_exceptions.js":44}],46:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';


var triangles = 4;

var triangle_strip = 5;

var texture0 = 33984;

var texture1 = 33985;

var texture2 = 33986;

var texture_2d = 3553;

var blend = 3042;

var texture_wrap_s = 10242;

var texture_wrap_t = 10243;

var clamp_to_edge = 33071;

var src_alpha = 770;

var one_minus_src_alpha = 771;

var dst_alpha = 772;

var depth_test = 2929;

var rgb = 6407;

var rgba = 6408;

var triangle_fan = 6;

var array_buffer = 34962;

var element_array_buffer = 34963;

var array_buffer_binding = 34964;

var element_array_buffer_binding = 34965;

var stream_draw = 35040;

var static_draw = 35044;

var dynamic_draw = 35048;

var buffer_size = 34660;

var buffer_usage = 34661;

var float_ = 5126;

var unsigned_int = 5125;

var current_vertex_attrib = 34342;

var fragment_shader = 35632;

var vertex_shader = 35633;

var max_vertex_attribs = 34921;

var max_vertex_uniform_vectors = 36347;

var max_varying_vectors = 36348;

var max_combined_texture_image_units = 35661;

var max_vertex_texture_image_units = 35660;

var max_texture_image_units = 34930;

var max_fragment_uniform_vectors = 36349;

var shader_type = 35663;

var delete_status = 35712;

var link_status = 35714;

var validate_status = 35715;

var attached_shaders = 35717;

var active_uniforms = 35718;

var active_attributes = 35721;

var shading_language_version = 35724;

var current_program = 35725;

var compile_status = 35713;

var vendor = 7936;

var renderer = 7937;

var version = 7938;

var float_vec2 = 35664;

var float_vec3 = 35665;

var float_vec4 = 35666;

var int_vec2 = 35667;

var int_vec3 = 35668;

var int_vec4 = 35669;

var bool_ = 35670;

var bool_vec2 = 35671;

var bool_vec3 = 35672;

var bool_vec4 = 35673;

var float_mat2 = 35674;

var float_mat3 = 35675;

var float_mat4 = 35676;

var sampler_2d = 35678;

var sampler_cube = 35680;

var unpack_flip_y_webgl = 37440;

var unpack_premultiply_alpha_webgl = 37441;

var context_lost_webgl = 37442;

var unpack_colorspace_conversion_webgl = 37443;

var browser_default_webgl = 37444;

var vertex_attrib_array_enabled = 34338;

var vertex_attrib_array_size = 34339;

var vertex_attrib_array_stride = 34340;

var vertex_attrib_array_type = 34341;

var vertex_attrib_array_normalized = 34922;

var vertex_attrib_array_pointer = 34373;

var vertex_attrib_array_buffer_binding = 34975;

var depth_buffer_bit = 256;

var stencil_buffer_bit = 1024;

var color_buffer_bit = 16384;

var unsigned_short = 5123;

var unsigned_byte = 5121;

var texture_mag_filter = 10240;

var texture_min_filter = 10241;

var nearest = 9728;

var linear = 9729;

var nearest_mipmap_nearest = 9984;

var linear_mipmap_nearest = 9985;

var nearest_mipmap_linear = 9986;

var linear_mipmap_linear = 9987;

var framebuffer = 36160;

var color_attachment0 = 36064;

exports.triangles                          = triangles;
exports.triangle_strip                     = triangle_strip;
exports.texture0                           = texture0;
exports.texture1                           = texture1;
exports.texture2                           = texture2;
exports.texture_2d                         = texture_2d;
exports.blend                              = blend;
exports.texture_wrap_s                     = texture_wrap_s;
exports.texture_wrap_t                     = texture_wrap_t;
exports.clamp_to_edge                      = clamp_to_edge;
exports.src_alpha                          = src_alpha;
exports.one_minus_src_alpha                = one_minus_src_alpha;
exports.dst_alpha                          = dst_alpha;
exports.depth_test                         = depth_test;
exports.rgb                                = rgb;
exports.rgba                               = rgba;
exports.triangle_fan                       = triangle_fan;
exports.array_buffer                       = array_buffer;
exports.element_array_buffer               = element_array_buffer;
exports.array_buffer_binding               = array_buffer_binding;
exports.element_array_buffer_binding       = element_array_buffer_binding;
exports.stream_draw                        = stream_draw;
exports.static_draw                        = static_draw;
exports.dynamic_draw                       = dynamic_draw;
exports.buffer_size                        = buffer_size;
exports.buffer_usage                       = buffer_usage;
exports.float_                             = float_;
exports.unsigned_int                       = unsigned_int;
exports.current_vertex_attrib              = current_vertex_attrib;
exports.fragment_shader                    = fragment_shader;
exports.vertex_shader                      = vertex_shader;
exports.max_vertex_attribs                 = max_vertex_attribs;
exports.max_vertex_uniform_vectors         = max_vertex_uniform_vectors;
exports.max_varying_vectors                = max_varying_vectors;
exports.max_combined_texture_image_units   = max_combined_texture_image_units;
exports.max_vertex_texture_image_units     = max_vertex_texture_image_units;
exports.max_texture_image_units            = max_texture_image_units;
exports.max_fragment_uniform_vectors       = max_fragment_uniform_vectors;
exports.shader_type                        = shader_type;
exports.delete_status                      = delete_status;
exports.link_status                        = link_status;
exports.validate_status                    = validate_status;
exports.attached_shaders                   = attached_shaders;
exports.active_uniforms                    = active_uniforms;
exports.active_attributes                  = active_attributes;
exports.shading_language_version           = shading_language_version;
exports.current_program                    = current_program;
exports.compile_status                     = compile_status;
exports.vendor                             = vendor;
exports.renderer                           = renderer;
exports.version                            = version;
exports.float_vec2                         = float_vec2;
exports.float_vec3                         = float_vec3;
exports.float_vec4                         = float_vec4;
exports.int_vec2                           = int_vec2;
exports.int_vec3                           = int_vec3;
exports.int_vec4                           = int_vec4;
exports.bool_                              = bool_;
exports.bool_vec2                          = bool_vec2;
exports.bool_vec3                          = bool_vec3;
exports.bool_vec4                          = bool_vec4;
exports.float_mat2                         = float_mat2;
exports.float_mat3                         = float_mat3;
exports.float_mat4                         = float_mat4;
exports.sampler_2d                         = sampler_2d;
exports.sampler_cube                       = sampler_cube;
exports.unpack_flip_y_webgl                = unpack_flip_y_webgl;
exports.unpack_premultiply_alpha_webgl     = unpack_premultiply_alpha_webgl;
exports.context_lost_webgl                 = context_lost_webgl;
exports.unpack_colorspace_conversion_webgl = unpack_colorspace_conversion_webgl;
exports.browser_default_webgl              = browser_default_webgl;
exports.vertex_attrib_array_enabled        = vertex_attrib_array_enabled;
exports.vertex_attrib_array_size           = vertex_attrib_array_size;
exports.vertex_attrib_array_stride         = vertex_attrib_array_stride;
exports.vertex_attrib_array_type           = vertex_attrib_array_type;
exports.vertex_attrib_array_normalized     = vertex_attrib_array_normalized;
exports.vertex_attrib_array_pointer        = vertex_attrib_array_pointer;
exports.vertex_attrib_array_buffer_binding = vertex_attrib_array_buffer_binding;
exports.depth_buffer_bit                   = depth_buffer_bit;
exports.stencil_buffer_bit                 = stencil_buffer_bit;
exports.color_buffer_bit                   = color_buffer_bit;
exports.unsigned_short                     = unsigned_short;
exports.unsigned_byte                      = unsigned_byte;
exports.texture_mag_filter                 = texture_mag_filter;
exports.texture_min_filter                 = texture_min_filter;
exports.nearest                            = nearest;
exports.linear                             = linear;
exports.nearest_mipmap_nearest             = nearest_mipmap_nearest;
exports.linear_mipmap_nearest              = linear_mipmap_nearest;
exports.nearest_mipmap_linear              = nearest_mipmap_linear;
exports.linear_mipmap_linear               = linear_mipmap_linear;
exports.framebuffer                        = framebuffer;
exports.color_attachment0                  = color_attachment0;
/* No side effect */

},{}],71:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';


function keycodeMap(i32) {
  var match = i32;
  var switcher = match - 8 | 0;
  if (switcher > 214 || switcher < 0) {
    return /* Nothing */65;
  } else {
    switch (switcher) {
      case 0 : 
          return /* Backspace */0;
      case 1 : 
          return /* Tab */1;
      case 5 : 
          return /* Enter */2;
      case 8 : 
          return /* LeftShift */56;
      case 9 : 
          return /* LeftCtrl */55;
      case 10 : 
          return /* LeftAlt */57;
      case 12 : 
          return /* CapsLock */63;
      case 19 : 
          return /* Escape */3;
      case 24 : 
          return /* Space */4;
      case 29 : 
          return /* Left */52;
      case 30 : 
          return /* Up */54;
      case 31 : 
          return /* Right */51;
      case 32 : 
          return /* Down */53;
      case 40 : 
          return /* Num_0 */10;
      case 41 : 
          return /* Num_1 */11;
      case 42 : 
          return /* Num_2 */12;
      case 43 : 
          return /* Num_3 */13;
      case 44 : 
          return /* Num_4 */14;
      case 45 : 
          return /* Num_5 */15;
      case 46 : 
          return /* Num_6 */16;
      case 47 : 
          return /* Num_7 */17;
      case 48 : 
          return /* Num_8 */18;
      case 49 : 
          return /* Num_9 */19;
      case 57 : 
          return /* A */25;
      case 58 : 
          return /* B */26;
      case 59 : 
          return /* C */27;
      case 60 : 
          return /* D */28;
      case 61 : 
          return /* E */29;
      case 62 : 
          return /* F */30;
      case 63 : 
          return /* G */31;
      case 64 : 
          return /* H */32;
      case 65 : 
          return /* I */33;
      case 66 : 
          return /* J */34;
      case 67 : 
          return /* K */35;
      case 68 : 
          return /* L */36;
      case 69 : 
          return /* M */37;
      case 70 : 
          return /* N */38;
      case 71 : 
          return /* O */39;
      case 72 : 
          return /* P */40;
      case 73 : 
          return /* Q */41;
      case 74 : 
          return /* R */42;
      case 75 : 
          return /* S */43;
      case 76 : 
          return /* T */44;
      case 77 : 
          return /* U */45;
      case 78 : 
          return /* V */46;
      case 79 : 
          return /* W */47;
      case 80 : 
          return /* X */48;
      case 81 : 
          return /* Y */49;
      case 82 : 
          return /* Z */50;
      case 83 : 
          return /* LeftOsKey */58;
      case 85 : 
          return /* RightOsKey */62;
      case 178 : 
          return /* Semicolon */20;
      case 179 : 
          return /* Equals */21;
      case 180 : 
          return /* Comma */6;
      case 181 : 
          return /* Minus */7;
      case 182 : 
          return /* Period */8;
      case 183 : 
          return /* Slash */9;
      case 184 : 
          return /* Backtick */64;
      case 2 : 
      case 3 : 
      case 4 : 
      case 6 : 
      case 7 : 
      case 11 : 
      case 13 : 
      case 14 : 
      case 15 : 
      case 16 : 
      case 17 : 
      case 18 : 
      case 20 : 
      case 21 : 
      case 22 : 
      case 23 : 
      case 25 : 
      case 26 : 
      case 27 : 
      case 28 : 
      case 33 : 
      case 34 : 
      case 35 : 
      case 36 : 
      case 37 : 
      case 38 : 
      case 39 : 
      case 50 : 
      case 51 : 
      case 52 : 
      case 53 : 
      case 54 : 
      case 55 : 
      case 56 : 
      case 84 : 
      case 86 : 
      case 87 : 
      case 88 : 
      case 89 : 
      case 90 : 
      case 91 : 
      case 92 : 
      case 93 : 
      case 94 : 
      case 95 : 
      case 96 : 
      case 97 : 
      case 98 : 
      case 99 : 
      case 100 : 
      case 101 : 
      case 102 : 
      case 103 : 
      case 104 : 
      case 105 : 
      case 106 : 
      case 107 : 
      case 108 : 
      case 109 : 
      case 110 : 
      case 111 : 
      case 112 : 
      case 113 : 
      case 114 : 
      case 115 : 
      case 116 : 
      case 117 : 
      case 118 : 
      case 119 : 
      case 120 : 
      case 121 : 
      case 122 : 
      case 123 : 
      case 124 : 
      case 125 : 
      case 126 : 
      case 127 : 
      case 128 : 
      case 129 : 
      case 130 : 
      case 131 : 
      case 132 : 
      case 133 : 
      case 134 : 
      case 135 : 
      case 136 : 
      case 137 : 
      case 138 : 
      case 139 : 
      case 140 : 
      case 141 : 
      case 142 : 
      case 143 : 
      case 144 : 
      case 145 : 
      case 146 : 
      case 147 : 
      case 148 : 
      case 149 : 
      case 150 : 
      case 151 : 
      case 152 : 
      case 153 : 
      case 154 : 
      case 155 : 
      case 156 : 
      case 157 : 
      case 158 : 
      case 159 : 
      case 160 : 
      case 161 : 
      case 162 : 
      case 163 : 
      case 164 : 
      case 165 : 
      case 166 : 
      case 167 : 
      case 168 : 
      case 169 : 
      case 170 : 
      case 171 : 
      case 172 : 
      case 173 : 
      case 174 : 
      case 175 : 
      case 176 : 
      case 177 : 
      case 185 : 
      case 186 : 
      case 187 : 
      case 188 : 
      case 189 : 
      case 190 : 
      case 191 : 
      case 192 : 
      case 193 : 
      case 194 : 
      case 195 : 
      case 196 : 
      case 197 : 
      case 198 : 
      case 199 : 
      case 200 : 
      case 201 : 
      case 202 : 
      case 203 : 
      case 204 : 
      case 205 : 
      case 206 : 
      case 207 : 
      case 208 : 
      case 209 : 
      case 210 : 
          return /* Nothing */65;
      case 211 : 
          return /* OpenBracket */22;
      case 212 : 
          return /* Backslash */23;
      case 213 : 
          return /* CloseBracket */24;
      case 214 : 
          return /* Quote */5;
      
    }
  }
}

exports.keycodeMap = keycodeMap;
/* No side effect */

},{}],60:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Events_web = require("./web/events_web.js");

var keycodeMap = Events_web.keycodeMap;

exports.keycodeMap = keycodeMap;
/* No side effect */

},{"./web/events_web.js":71}],77:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMatrixArrayType = setMatrixArrayType;
exports.toRadian = toRadian;
exports.equals = equals;
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = exports.EPSILON = 0.000001;
let ARRAY_TYPE = exports.ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
const RANDOM = exports.RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  exports.ARRAY_TYPE = ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
},{}],78:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.str = str;
exports.frob = frob;
exports.LDU = LDU;
exports.add = add;
exports.subtract = subtract;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;

var _common = require('./common.js');

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new glMatrix.ARRAY_TYPE(4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  let out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new glMatrix.ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = exports.sub = subtract;
},{"./common.js":77}],79:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.invert = invert;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromTranslation = fromTranslation;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = require('./common.js');

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new glMatrix.ARRAY_TYPE(6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  let out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  let atx = a[4],
      aty = a[5];

  let det = aa * ad - ab * ac;
  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  let v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  let v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = exports.sub = subtract;
},{"./common.js":77}],80:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.fromMat4 = fromMat4;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.rotate = rotate;
exports.scale = scale;
exports.fromTranslation = fromTranslation;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromMat2d = fromMat2d;
exports.fromQuat = fromQuat;
exports.normalFromMat4 = normalFromMat4;
exports.projection = projection;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = require('./common.js');

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new glMatrix.ARRAY_TYPE(9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new glMatrix.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new glMatrix.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  let b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  let b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  let b20 = b[6],
      b21 = b[7],
      b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0],
      y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = exports.sub = subtract;
},{"./common.js":77}],81:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.scale = scale;
exports.rotate = rotate;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.fromTranslation = fromTranslation;
exports.fromScaling = fromScaling;
exports.fromRotation = fromRotation;
exports.fromXRotation = fromXRotation;
exports.fromYRotation = fromYRotation;
exports.fromZRotation = fromZRotation;
exports.fromRotationTranslation = fromRotationTranslation;
exports.fromQuat2 = fromQuat2;
exports.getTranslation = getTranslation;
exports.getScaling = getScaling;
exports.getRotation = getRotation;
exports.fromRotationTranslationScale = fromRotationTranslationScale;
exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
exports.fromQuat = fromQuat;
exports.frustum = frustum;
exports.perspective = perspective;
exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
exports.ortho = ortho;
exports.lookAt = lookAt;
exports.targetTo = targetTo;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = require('./common.js');

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @class 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @name mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new glMatrix.ARRAY_TYPE(16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  let out = new glMatrix.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new glMatrix.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a12 = a[6],
        a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  // Cache only the current line of the second matrix
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0],
      y = v[1],
      z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0],
      y = v[1],
      z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0],
      y = axis[1],
      z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0],
      y = axis[1],
      z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (Math.abs(len) < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  let translation = new glMatrix.ARRAY_TYPE(3);
  let bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];

  let magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  let out0 = (1 - (yy + zz)) * sx;
  let out1 = (xy + wz) * sx;
  let out2 = (xz - wy) * sx;
  let out4 = (xy - wz) * sy;
  let out5 = (1 - (xx + zz)) * sy;
  let out6 = (yz + wx) * sy;
  let out8 = (xz + wy) * sz;
  let out9 = (yz - wx) * sz;
  let out10 = (1 - (xx + yy)) * sz;

  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis. 
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  let a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  let a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];

  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  let b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  let b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  let b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];

  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = exports.sub = subtract;
},{"./common.js":77}],85:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = undefined;
exports.create = create;
exports.clone = clone;
exports.length = length;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.hermite = hermite;
exports.bezier = bezier;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformMat3 = transformMat3;
exports.transformQuat = transformQuat;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.angle = angle;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = require('./common.js');

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new glMatrix.ARRAY_TYPE(3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new glMatrix.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2];
  let bx = b[0],
      by = b[1],
      bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = glMatrix.RANDOM() * 2.0 * Math.PI;
  let z = glMatrix.RANDOM() * 2.0 - 1.0;
  let zScale = Math.sqrt(1.0 - z * z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  let qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  let x = a[0],
      y = a[1],
      z = a[2];
  // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);
  let uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x;
  // var uuv = vec3.cross([], qvec, uv);
  let uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx;
  // vec3.scale(uv, uv, 2 * w);
  let w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  // vec3.scale(uuv, uuv, 2);
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  // return vec3.add(out, a, vec3.add(out, uv, uuv));
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c) {
  let p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c) {
  let p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c) {
  let p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = exports.sub = subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = exports.div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = exports.dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = exports.sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = exports.len = length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = exports.sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = exports.forEach = function () {
  let vec = create();

  return function (a, stride, offset, count, fn, arg) {
    let i, l;
    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
    }

    return a;
  };
}();
},{"./common.js":77}],86:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = undefined;
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.lerp = lerp;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformQuat = transformQuat;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = require('./common.js');

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new glMatrix.ARRAY_TYPE(4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  let out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new glMatrix.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = glMatrix.RANDOM();
  out[1] = glMatrix.RANDOM();
  out[2] = glMatrix.RANDOM();
  out[3] = glMatrix.RANDOM();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0],
      y = a[1],
      z = a[2];
  let qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = exports.sub = subtract;

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = exports.div = divide;

/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = exports.dist = distance;

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = exports.sqrDist = squaredDistance;

/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = exports.len = length;

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = exports.sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = exports.forEach = function () {
  let vec = create();

  return function (a, stride, offset, count, fn, arg) {
    let i, l;
    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
    }

    return a;
  };
}();
},{"./common.js":77}],82:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = undefined;
exports.create = create;
exports.identity = identity;
exports.setAxisAngle = setAxisAngle;
exports.getAxisAngle = getAxisAngle;
exports.multiply = multiply;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.calculateW = calculateW;
exports.slerp = slerp;
exports.invert = invert;
exports.conjugate = conjugate;
exports.fromMat3 = fromMat3;
exports.fromEuler = fromEuler;
exports.str = str;

var _common = require("./common.js");

var glMatrix = _interopRequireWildcard(_common);

var _mat = require("./mat3.js");

var mat3 = _interopRequireWildcard(_mat);

var _vec = require("./vec3.js");

var vec3 = _interopRequireWildcard(_vec);

var _vec2 = require("./vec4.js");

var vec4 = _interopRequireWildcard(_vec2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function create() {
  let out = new glMatrix.ARRAY_TYPE(4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let by = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bz = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0],
      y = a[1],
      z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
  let halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;

  let sx = Math.sin(x);
  let cx = Math.cos(x);
  let sy = Math.sin(y);
  let cy = Math.cos(y);
  let sz = Math.sin(z);
  let cz = Math.cos(z);

  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;

  return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = exports.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = exports.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = exports.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = exports.set = vec4.set;

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = exports.add = vec4.add;

/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = exports.scale = vec4.scale;

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = exports.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = exports.lerp = vec4.lerp;

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = exports.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
const len = exports.len = length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = exports.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = exports.sqrLen = squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = exports.normalize = vec4.normalize;

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = exports.exactEquals = vec4.exactEquals;

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = exports.equals = vec4.equals;

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = exports.rotationTo = function () {
  let tmpvec3 = vec3.create();
  let xUnitVec3 = vec3.fromValues(1, 0, 0);
  let yUnitVec3 = vec3.fromValues(0, 1, 0);

  return function (out, a, b) {
    let dot = vec3.dot(a, b);
    if (dot < -0.999999) {
      vec3.cross(tmpvec3, xUnitVec3, a);
      if (vec3.len(tmpvec3) < 0.000001) vec3.cross(tmpvec3, yUnitVec3, a);
      vec3.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      vec3.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
const sqlerp = exports.sqlerp = function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = exports.setAxes = function () {
  let matr = mat3.create();

  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
}();
},{"./common.js":77,"./mat3.js":80,"./vec3.js":85,"./vec4.js":86}],83:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.dot = exports.mul = exports.setReal = exports.getReal = undefined;
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.fromRotationTranslationValues = fromRotationTranslationValues;
exports.fromRotationTranslation = fromRotationTranslation;
exports.fromTranslation = fromTranslation;
exports.fromRotation = fromRotation;
exports.fromMat4 = fromMat4;
exports.copy = copy;
exports.identity = identity;
exports.set = set;
exports.getDual = getDual;
exports.setDual = setDual;
exports.getTranslation = getTranslation;
exports.translate = translate;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.rotateByQuatAppend = rotateByQuatAppend;
exports.rotateByQuatPrepend = rotateByQuatPrepend;
exports.rotateAroundAxis = rotateAroundAxis;
exports.add = add;
exports.multiply = multiply;
exports.scale = scale;
exports.lerp = lerp;
exports.invert = invert;
exports.conjugate = conjugate;
exports.normalize = normalize;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = require("./common.js");

var glMatrix = _interopRequireWildcard(_common);

var _quat = require("./quat.js");

var quat = _interopRequireWildcard(_quat);

var _mat = require("./mat4.js");

var mat4 = _interopRequireWildcard(_mat);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  let dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = 0;
  dq[1] = 0;
  dq[2] = 0;
  dq[3] = 1;
  dq[4] = 0;
  dq[5] = 0;
  dq[6] = 0;
  dq[7] = 0;
  return dq;
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  let dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  let dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  let dq = new glMatrix.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  let ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotationTranslation(out, q, t) {
  let ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Creates a new dual quat from a matrix (4x4)
 * 
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
function fromMat4(out, a) {
  //TODO Optimize this 
  let outer = quat.create();
  mat4.getRotation(outer, a);
  let t = new glMatrix.ARRAY_TYPE(3);
  mat4.getTranslation(t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;

  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
const getReal = exports.getReal = quat.copy;

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
const setReal = exports.setReal = quat.copy;

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
function getTranslation(out, a) {
  let ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
function translate(out, a, v) {
  let ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateX(out, a, rad) {
  let bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateX(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateY(out, a, rad) {
  let bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateY(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateZ(out, a, rad) {
  let bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  quat.rotateZ(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
function rotateByQuatAppend(out, a, q) {
  let qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];

  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
function rotateByQuatPrepend(out, q, a) {
  let qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];

  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < glMatrix.EPSILON) {
    return copy(out, a);
  }
  let axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

  rad = rad * 0.5;
  let s = Math.sin(rad);
  let bx = s * axis[0] / axisLength;
  let by = s * axis[1] / axisLength;
  let bz = s * axis[2] / axisLength;
  let bw = Math.cos(rad);

  let ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

  let ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;

  return out;
}

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
function multiply(out, a, b) {
  let ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}

/**
 * Alias for {@link quat2.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = exports.dot = quat.dot;

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat2} out
 */
function lerp(out, a, b, t) {
  let mt = 1 - t;
  if (dot(a, b) < 0) t = -t;

  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;

  return out;
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
function invert(out, a) {
  let sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
const length = exports.length = quat.length;

/**
 * Alias for {@link quat2.length}
 * @function
 */
const len = exports.len = length;

/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = exports.squaredLength = quat.squaredLength;

/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
const sqrLen = exports.sqrLen = squaredLength;

/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
function normalize(out, a) {
  let magnitude = squaredLength(a);
  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    out[0] = a[0] / magnitude;
    out[1] = a[1] / magnitude;
    out[2] = a[2] / magnitude;
    out[3] = a[3] / magnitude;
    out[4] = a[4] / magnitude;
    out[5] = a[5] / magnitude;
    out[6] = a[6] / magnitude;
    out[7] = a[7] / magnitude;
  }
  return out;
}

/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}
},{"./common.js":77,"./quat.js":82,"./mat4.js":81}],84:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = undefined;
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.random = random;
exports.transformMat2 = transformMat2;
exports.transformMat2d = transformMat2d;
exports.transformMat3 = transformMat3;
exports.transformMat4 = transformMat4;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = require('./common.js');

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new glMatrix.ARRAY_TYPE(2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  let out = new glMatrix.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new glMatrix.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = glMatrix.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
      a1 = a[1];
  let b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = exports.len = length;

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = exports.sub = subtract;

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = exports.mul = multiply;

/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = exports.div = divide;

/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = exports.dist = distance;

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = exports.sqrDist = squaredDistance;

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = exports.sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = exports.forEach = function () {
  let vec = create();

  return function (a, stride, offset, count, fn, arg) {
    let i, l;
    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];
    }

    return a;
  };
}();
},{"./common.js":77}],69:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec4 = exports.vec3 = exports.vec2 = exports.quat2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = undefined;

var _common = require("./gl-matrix/common.js");

var glMatrix = _interopRequireWildcard(_common);

var _mat = require("./gl-matrix/mat2.js");

var mat2 = _interopRequireWildcard(_mat);

var _mat2d = require("./gl-matrix/mat2d.js");

var mat2d = _interopRequireWildcard(_mat2d);

var _mat2 = require("./gl-matrix/mat3.js");

var mat3 = _interopRequireWildcard(_mat2);

var _mat3 = require("./gl-matrix/mat4.js");

var mat4 = _interopRequireWildcard(_mat3);

var _quat = require("./gl-matrix/quat.js");

var quat = _interopRequireWildcard(_quat);

var _quat2 = require("./gl-matrix/quat2.js");

var quat2 = _interopRequireWildcard(_quat2);

var _vec = require("./gl-matrix/vec2.js");

var vec2 = _interopRequireWildcard(_vec);

var _vec2 = require("./gl-matrix/vec3.js");

var vec3 = _interopRequireWildcard(_vec2);

var _vec3 = require("./gl-matrix/vec4.js");

var vec4 = _interopRequireWildcard(_vec3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER

exports.glMatrix = glMatrix;
exports.mat2 = mat2;
exports.mat2d = mat2d;
exports.mat3 = mat3;
exports.mat4 = mat4;
exports.quat = quat;
exports.quat2 = quat2;
exports.vec2 = vec2;
exports.vec3 = vec3;
exports.vec4 = vec4;
},{"./gl-matrix/common.js":77,"./gl-matrix/mat2.js":78,"./gl-matrix/mat2d.js":79,"./gl-matrix/mat3.js":80,"./gl-matrix/mat4.js":81,"./gl-matrix/quat.js":82,"./gl-matrix/quat2.js":83,"./gl-matrix/vec2.js":84,"./gl-matrix/vec3.js":85,"./gl-matrix/vec4.js":86}],67:[function(require,module,exports) {
'use strict';


function to_js_boolean(b) {
  if (b) {
    return true;
  } else {
    return false;
  }
}

exports.to_js_boolean = to_js_boolean;
/* No side effect */

},{}],68:[function(require,module,exports) {
'use strict';


function is_nil_undef(x) {
  if (x === null) {
    return /* true */1;
  } else {
    return +(x === undefined);
  }
}

function null_undefined_to_opt(x) {
  if (x === null || x === undefined) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}

function null_to_opt(x) {
  if (x === null) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}

function option_get(x) {
  if (x) {
    return x[0];
  } else {
    return undefined;
  }
}

function option_get_unwrap(x) {
  if (x) {
    return x[0][1];
  } else {
    return undefined;
  }
}

exports.is_nil_undef          = is_nil_undef;
exports.null_undefined_to_opt = null_undefined_to_opt;
exports.undefined_to_opt      = undefined_to_opt;
exports.null_to_opt           = null_to_opt;
exports.option_get            = option_get;
exports.option_get_unwrap     = option_get_unwrap;
/* No side effect */

},{}],45:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var List                    = require("bs-platform/lib/js/list.js");
var Curry                   = require("bs-platform/lib/js/curry.js");
var Events                  = require("../events.js");
var GlMatrix                = require("gl-matrix");
var Caml_int32              = require("bs-platform/lib/js/caml_int32.js");
var Js_boolean              = require("bs-platform/lib/js/js_boolean.js");
var Pervasives              = require("bs-platform/lib/js/pervasives.js");
var Js_primitive            = require("bs-platform/lib/js/js_primitive.js");
var RGLConstants            = require("../RGLConstants.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var $$window = (window);

var Document = /* module */[/* window */$$window];

function createCanvas() {
  return document.createElement("canvas");
}

var makeAudioContext = ( function() { return new (window.AudioContext || window.webkitAudioContext)(); } );

function readFile(filename, cb) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filename, false);
  rawFile.onreadystatechange = (function () {
      if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
        return Curry._1(cb, rawFile.responseText);
      } else {
        return 0;
      }
    });
  rawFile.send(null);
  return /* () */0;
}

var File = /* module */[/* readFile */readFile];

function getWidth(param) {
  return param[0].width / window.devicePixelRatio | 0;
}

function getHeight(param) {
  return param[0].height / window.devicePixelRatio | 0;
}

function getPixelWidth(param) {
  return param[0].width | 0;
}

function getPixelHeight(param) {
  return param[0].height | 0;
}

function getPixelScale() {
  return window.devicePixelRatio;
}

function init(screen, _) {
  var node = screen ? Js_primitive.null_undefined_to_opt(document.getElementById(screen[0])) : /* None */0;
  var canvas;
  if (node) {
    canvas = node[0];
  } else {
    var canvas$1 = document.createElement("canvas");
    document.body.appendChild(canvas$1);
    canvas = canvas$1;
  }
  canvas.style.backgroundColor = "black";
  return /* tuple */[
          canvas,
          Curry._1(makeAudioContext, /* () */0)
        ];
}

function setWindowSize(param, width, height) {
  var w = param[0];
  w.width = width * window.devicePixelRatio | 0;
  w.height = height * window.devicePixelRatio | 0;
  w.style.width = Pervasives.string_of_int(width) + "px";
  w.style.height = Pervasives.string_of_int(height) + "px";
  return /* () */0;
}

function getContext(param) {
  return param[0].getContext("webgl", {
              preserveDrawingBuffer: /* true */1,
              antialias: /* true */1
            });
}

var Window = /* module */[
  /* getWidth */getWidth,
  /* getHeight */getHeight,
  /* getPixelWidth */getPixelWidth,
  /* getPixelHeight */getPixelHeight,
  /* getPixelScale */getPixelScale,
  /* init */init,
  /* setWindowSize */setWindowSize,
  /* getContext */getContext
];

function loadSound(param, path, cb) {
  var audioctx = param[1];
  var rawFile = new XMLHttpRequest();
  rawFile.responseType = "arraybuffer";
  rawFile.open("GET", path, true);
  rawFile.onreadystatechange = (function () {
      if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) {
        audioctx.decodeAudioData(rawFile.response, cb);
        return /* () */0;
      } else {
        return 0;
      }
    });
  rawFile.send(null);
  return /* () */0;
}

function playSound(param, sound, volume, loop) {
  var audioctx = param[1];
  var src = audioctx.createBufferSource();
  var gain = audioctx.createGain();
  gain.gain.value = volume;
  src.buffer = sound;
  src.connect(gain);
  gain.connect(audioctx.destination);
  src.start(0.0);
  src.loop = Js_boolean.to_js_boolean(loop);
  return /* () */0;
}

var Audio = /* module */[
  /* loadSound */loadSound,
  /* playSound */playSound
];

function render(param, mouseDown, mouseUp, mouseMove, keyDown, keyUp, windowResize, displayFunc, _) {
  var canvas = param[0];
  if (mouseDown) {
    var cb = mouseDown[0];
    canvas.addEventListener("mousedown", (function (e) {
            var match = e.button;
            var button;
            if (match > 2 || match < 0) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "reasongl_web.re",
                      292,
                      19
                    ]
                  ];
            } else {
              button = match;
            }
            var rect = canvas.getBoundingClientRect();
            var x = e.clientX - rect.left | 0;
            var y = e.clientY - rect.top | 0;
            return Curry._4(cb, button, /* MouseDown */0, x, y);
          }));
  }
  if (mouseUp) {
    var cb$1 = mouseUp[0];
    canvas.addEventListener("mouseup", (function (e) {
            var match = e.button;
            var button;
            if (match > 2 || match < 0) {
              throw [
                    Caml_builtin_exceptions.assert_failure,
                    [
                      "reasongl_web.re",
                      314,
                      19
                    ]
                  ];
            } else {
              button = match;
            }
            var rect = canvas.getBoundingClientRect();
            var x = e.clientX - rect.left | 0;
            var y = e.clientY - rect.top | 0;
            return Curry._4(cb$1, button, /* MouseUp */1, x, y);
          }));
  }
  if (mouseMove) {
    var cb$2 = mouseMove[0];
    canvas.addEventListener("mousemove", (function (e) {
            var rect = canvas.getBoundingClientRect();
            var x = e.clientX - rect.left | 0;
            var y = e.clientY - rect.top | 0;
            return Curry._2(cb$2, x, y);
          }));
  }
  var keyLastPressed = [/* [] */0];
  if (keyDown) {
    var cb$3 = keyDown[0];
    $$window.addEventListener("keydown", (function (e) {
            var keycode = e.which;
            var repeat = List.fold_left((function (acc, k) {
                    if (acc) {
                      return /* true */1;
                    } else {
                      return +(k === keycode);
                    }
                  }), /* false */0, keyLastPressed[0]);
            if (!repeat) {
              keyLastPressed[0] = /* :: */[
                keycode,
                keyLastPressed[0]
              ];
            }
            return Curry._2(cb$3, Events.keycodeMap(keycode), repeat);
          }));
  }
  if (keyUp) {
    var cb$4 = keyUp[0];
    $$window.addEventListener("keyup", (function (e) {
            var keycode = e.which;
            keyLastPressed[0] = List.filter((function (k) {
                      return +(k !== keycode);
                    }))(keyLastPressed[0]);
            return Curry._1(cb$4, Events.keycodeMap(keycode));
          }));
  }
  if (windowResize) {
    var cb$5 = windowResize[0];
    $$window.addEventListener("resize", (function () {
            return Curry._1(cb$5, /* () */0);
          }));
  }
  var frame = [/* None */0];
  var tick = function (prev, _) {
    var now = Date.now();
    Curry._1(displayFunc, now - prev);
    var id = window.requestAnimationFrame((function (param) {
            return tick(now, param);
          }));
    frame[0] = /* Some */[id];
    canvas.__hiddenrafid = id;
    return /* () */0;
  };
  var partial_arg = Date.now();
  var id = window.requestAnimationFrame((function (param) {
          return tick(partial_arg, param);
        }));
  frame[0] = /* Some */[id];
  canvas.__hiddenrafid = id;
  return (function (play) {
      var match = frame[0];
      if (match) {
        if (play) {
          return /* true */1;
        } else {
          window.cancelAnimationFrame(match[0]);
          frame[0] = /* None */0;
          return /* false */0;
        }
      } else if (play) {
        var partial_arg = Date.now();
        var id = window.requestAnimationFrame((function (param) {
                return tick(partial_arg, param);
              }));
        frame[0] = /* Some */[id];
        canvas.__hiddenrafid = id;
        return /* true */1;
      } else {
        return /* false */0;
      }
    });
}

function shaderSource(context, shader, source) {
  context.shaderSource(shader, "#version 100 \n precision highp float; \n" + source);
  return /* () */0;
}

function create(kind, size) {
  switch (kind) {
    case 0 : 
        return new Float64Array(size);
    case 1 : 
        return new Float32Array(size);
    case 2 : 
        return new Int16Array(size);
    case 3 : 
        return new Uint16Array(size);
    case 4 : 
        return new Int8Array(size);
    case 5 : 
    case 6 : 
        return new Uint8Array(size);
    case 8 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "reasongl_web.re",
                603,
                17
              ]
            ];
    case 7 : 
    case 9 : 
        return new Int32Array(size);
    
  }
}

function of_array(kind, arr) {
  switch (kind) {
    case 0 : 
        return new Float64Array(arr);
    case 1 : 
        return new Float32Array(arr);
    case 2 : 
        return new Int16Array(arr);
    case 3 : 
        return new Uint16Array(arr);
    case 4 : 
        return new Int8Array(arr);
    case 5 : 
    case 6 : 
        return new Uint8Array(arr);
    case 8 : 
        throw [
              Caml_builtin_exceptions.assert_failure,
              [
                "reasongl_web.re",
                616,
                17
              ]
            ];
    case 7 : 
    case 9 : 
        return new Int32Array(arr);
    
  }
}

function unsafe_blit(arr, arr2, offset, _) {
  arr2.set(arr, offset);
  return /* () */0;
}

function sub(arr, offset, len) {
  return arr.subarray(offset, offset + len | 0);
}

function readPixels_RGBA(context, x, y, width, height) {
  var data = new Uint8Array((Caml_int32.imul(width, height) << 2));
  context.readPixels(x, y, width, height, RGLConstants.rgba, RGLConstants.unsigned_byte, data);
  return data;
}

function loadImage(filename, _, callback, _$1) {
  var image = new Image();
  image.src = filename;
  image.addEventListener("load", (function () {
          return Curry._1(callback, /* Some */[image]);
        }));
  return /* () */0;
}

function loadImageFromMemory(data, _, callback, _$1) {
  var image = new Image();
  image.src = "data:image/png;base64," + btoa(data);
  image.addEventListener("load", (function () {
          return Curry._1(callback, /* Some */[image]);
        }));
  return /* () */0;
}

function texImage2DWithImage(context, target, level, image) {
  context.texImage2D(target, level, RGLConstants.rgba, RGLConstants.rgba, RGLConstants.unsigned_byte, image);
  return /* () */0;
}

function texImage2D_RGBA(context, target, level, width, height, border, data) {
  context.texImage2D(target, level, RGLConstants.rgba, width, height, border, RGLConstants.rgba, RGLConstants.unsigned_byte, data);
  return /* () */0;
}

var texImage2D_null = ( function(gl, target, level, width, height) {
    gl.texImage2D(target, level, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)
  } );

function vertexAttribPointer(context, attribute, size, type_, normalize, stride, offset) {
  var normalize$1 = normalize ? true : false;
  context.vertexAttribPointer(attribute, size, type_, normalize$1, stride, offset);
  return /* () */0;
}

function to_array(a) {
  return a;
}

function Mat4_001() {
  return GlMatrix.mat4.create();
}

function Mat4_002(prim) {
  GlMatrix.mat4.identity(prim);
  return /* () */0;
}

function Mat4_003(prim, prim$1, prim$2) {
  GlMatrix.mat4.translate(prim, prim$1, prim$2);
  return /* () */0;
}

function Mat4_004(prim, prim$1, prim$2) {
  GlMatrix.mat4.scale(prim, prim$1, prim$2);
  return /* () */0;
}

function Mat4_005(prim, prim$1, prim$2, prim$3) {
  GlMatrix.mat4.rotate(prim, prim$1, prim$2, prim$3);
  return /* () */0;
}

function Mat4_006(prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6) {
  GlMatrix.mat4.ortho(prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6);
  return /* () */0;
}

var Mat4 = /* module */[
  /* to_array */to_array,
  Mat4_001,
  Mat4_002,
  Mat4_003,
  Mat4_004,
  Mat4_005,
  Mat4_006
];

function uniformMatrix4fv(context, $$location, value) {
  context.uniformMatrix4fv($$location, false, value);
  return /* () */0;
}

function getProgramParameter(context, program, paramName) {
  switch (paramName) {
    case 0 : 
        if (context.getProgramParameter(program, context.DELETE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 1 : 
        if (context.getProgramParameter(program, context.LINK_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 2 : 
        if (context.getProgramParameter(program, context.VALIDATE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    
  }
}

function getShaderParameter(context, shader, paramName) {
  switch (paramName) {
    case 0 : 
        if (context.getShaderParameter(shader, context.DELETE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 1 : 
        if (context.getShaderParameter(shader, context.COMPILE_STATUS)) {
          return 1;
        } else {
          return 0;
        }
    case 2 : 
        return context.getShaderParameter(shader, context.SHADER_TYPE);
    
  }
}

var Gl_004 = /* Events : Events */[Events.keycodeMap];

function Gl_006(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.clearColor(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_007(prim) {
  return prim.createProgram();
}

function Gl_008(prim, prim$1) {
  return prim.createShader(prim$1);
}

function Gl_009(prim, prim$1, prim$2) {
  prim.attachShader(prim$1, prim$2);
  return /* () */0;
}

function Gl_010(prim, prim$1) {
  prim.deleteShader(prim$1);
  return /* () */0;
}

function Gl_012(prim, prim$1) {
  prim.compileShader(prim$1);
  return /* () */0;
}

function Gl_013(prim, prim$1) {
  prim.linkProgram(prim$1);
  return /* () */0;
}

function Gl_014(prim, prim$1) {
  prim.useProgram(prim$1);
  return /* () */0;
}

function Gl_015(prim) {
  return prim.createBuffer();
}

function Gl_016(prim, prim$1, prim$2) {
  prim.bindBuffer(prim$1, prim$2);
  return /* () */0;
}

function Gl_017(prim) {
  return prim.createTexture();
}

function Gl_018(prim, prim$1) {
  prim.activeTexture(prim$1);
  return /* () */0;
}

function Gl_019(prim, prim$1, prim$2) {
  prim.bindTexture(prim$1, prim$2);
  return /* () */0;
}

function Gl_020(prim, prim$1, prim$2, prim$3) {
  prim.texParameteri(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_021(prim) {
  return prim.createFramebuffer();
}

function Gl_022(prim, prim$1, prim$2) {
  prim.bindFramebuffer(prim$1, prim$2);
  return /* () */0;
}

function Gl_023(prim, prim$1) {
  prim.bindFramebuffer(prim$1, (null));
  return /* () */0;
}

function Gl_024(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.framebufferTexture2D(prim$1, prim$2, prim$3, prim$4, (0));
  return /* () */0;
}

function Gl_025(prim, prim$1) {
  prim.enable(prim$1);
  return /* () */0;
}

function Gl_026(prim, prim$1) {
  prim.disable(prim$1);
  return /* () */0;
}

function Gl_027(prim, prim$1, prim$2) {
  prim.blendFunc(prim$1, prim$2);
  return /* () */0;
}

var Gl_028 = /* Bigarray */[
  create,
  of_array,
  (function (prim) {
      return prim.length;
    }),
  (function (prim, prim$1) {
      prim.set(prim$1);
      return /* () */0;
    }),
  unsafe_blit,
  (function (prim, prim$1) {
      return prim[prim$1];
    }),
  (function (prim, prim$1) {
      return prim[prim$1];
    }),
  (function (prim, prim$1, prim$2) {
      prim[prim$1] = prim$2;
      return /* () */0;
    }),
  (function (prim, prim$1, prim$2) {
      prim[prim$1] = prim$2;
      return /* () */0;
    }),
  sub
];

function Gl_029(prim, prim$1, prim$2, prim$3, prim$4, prim$5, prim$6, prim$7, prim$8, prim$9) {
  prim.texSubImage2D(prim$1, prim$2, prim$3, prim$4, prim$5, prim$6, prim$7, prim$8, prim$9);
  return /* () */0;
}

function Gl_031(prim) {
  return prim.width;
}

function Gl_032(prim) {
  return prim.height;
}

function Gl_036(prim, prim$1, prim$2) {
  prim.uniform1i(prim$1, prim$2);
  return /* () */0;
}

function Gl_037(prim, prim$1, prim$2) {
  prim.uniform1f(prim$1, prim$2);
  return /* () */0;
}

function Gl_038(prim, prim$1, prim$2, prim$3) {
  prim.uniform2f(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_039(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.uniform3f(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_040(prim, prim$1, prim$2, prim$3, prim$4, prim$5) {
  prim.uniform4f(prim$1, prim$2, prim$3, prim$4, prim$5);
  return /* () */0;
}

function Gl_043(prim, prim$1, prim$2, prim$3) {
  prim.bufferData(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_044(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.viewport(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_045(prim, prim$1) {
  prim.clear(prim$1);
  return /* () */0;
}

function Gl_046(prim, prim$1, prim$2) {
  return prim.getUniformLocation(prim$1, prim$2);
}

function Gl_047(prim, prim$1, prim$2) {
  return prim.getAttribLocation(prim$1, prim$2);
}

function Gl_048(prim, prim$1) {
  prim.enableVertexAttribArray(prim$1);
  return /* () */0;
}

function Gl_050(prim, prim$1, prim$2) {
  prim.vertexAttribDivisor(prim$1, prim$2);
  return /* () */0;
}

function Gl_055(prim, prim$1) {
  return prim.getShaderInfoLog(prim$1);
}

function Gl_056(prim, prim$1) {
  return prim.getProgramInfoLog(prim$1);
}

function Gl_057(prim, prim$1) {
  return prim.getShaderSource(prim$1);
}

function Gl_058(prim, prim$1, prim$2, prim$3) {
  prim.drawArrays(prim$1, prim$2, prim$3);
  return /* () */0;
}

function Gl_059(prim, prim$1, prim$2, prim$3, prim$4) {
  prim.drawElements(prim$1, prim$2, prim$3, prim$4);
  return /* () */0;
}

function Gl_060(prim, prim$1, prim$2, prim$3, prim$4, prim$5) {
  prim.drawElementsInstanced(prim$1, prim$2, prim$3, prim$4, prim$5);
  return /* () */0;
}

var Gl = /* module */[
  /* target */"web",
  /* File */File,
  /* Window */Window,
  /* Audio */Audio,
  Gl_004,
  /* render */render,
  Gl_006,
  Gl_007,
  Gl_008,
  Gl_009,
  Gl_010,
  /* shaderSource */shaderSource,
  Gl_012,
  Gl_013,
  Gl_014,
  Gl_015,
  Gl_016,
  Gl_017,
  Gl_018,
  Gl_019,
  Gl_020,
  Gl_021,
  Gl_022,
  Gl_023,
  Gl_024,
  Gl_025,
  Gl_026,
  Gl_027,
  Gl_028,
  Gl_029,
  /* readPixels_RGBA */readPixels_RGBA,
  Gl_031,
  Gl_032,
  /* loadImage */loadImage,
  /* loadImageFromMemory */loadImageFromMemory,
  /* texImage2DWithImage */texImage2DWithImage,
  Gl_036,
  Gl_037,
  Gl_038,
  Gl_039,
  Gl_040,
  /* texImage2D_RGBA */texImage2D_RGBA,
  /* texImage2D_null */texImage2D_null,
  Gl_043,
  Gl_044,
  Gl_045,
  Gl_046,
  Gl_047,
  Gl_048,
  /* vertexAttribPointer */vertexAttribPointer,
  Gl_050,
  /* Mat4 */Mat4,
  /* uniformMatrix4fv */uniformMatrix4fv,
  /* getProgramParameter */getProgramParameter,
  /* getShaderParameter */getShaderParameter,
  Gl_055,
  Gl_056,
  Gl_057,
  Gl_058,
  Gl_059,
  Gl_060
];

exports.Document         = Document;
exports.createCanvas     = createCanvas;
exports.makeAudioContext = makeAudioContext;
exports.Gl               = Gl;
/* window Not a pure module */

},{"bs-platform/lib/js/list.js":8,"bs-platform/lib/js/curry.js":9,"../events.js":60,"gl-matrix":69,"bs-platform/lib/js/caml_int32.js":41,"bs-platform/lib/js/js_boolean.js":67,"bs-platform/lib/js/pervasives.js":12,"bs-platform/lib/js/js_primitive.js":68,"../RGLConstants.js":46,"bs-platform/lib/js/caml_builtin_exceptions.js":44}],57:[function(require,module,exports) {
'use strict';

var List                    = require("./list.js");
var Curry                   = require("./curry.js");
var Caml_builtin_exceptions = require("./caml_builtin_exceptions.js");

function Make(funarg) {
  var height = function (param) {
    if (param) {
      return param[3];
    } else {
      return 0;
    }
  };
  var create = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    return /* Node */[
            l,
            v,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var bal = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, create(lr, v, r));
        } else if (lr) {
          return create(create(ll, lv, lr[0]), lr[1], create(lr[2], v, r));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Set.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, v, rl), rv, rr);
        } else if (rl) {
          return create(create(l, v, rl[0]), rl[1], create(rl[2], rv, rr));
        } else {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              Caml_builtin_exceptions.invalid_argument,
              "Set.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              v,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var add = function (x, t) {
    if (t) {
      var r = t[2];
      var v = t[1];
      var l = t[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, l), v, r);
        } else {
          return bal(l, v, add(x, r));
        }
      } else {
        return t;
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              /* Empty */0,
              1
            ];
    }
  };
  var singleton = function (x) {
    return /* Node */[
            /* Empty */0,
            x,
            /* Empty */0,
            1
          ];
  };
  var add_min_element = function (v, param) {
    if (param) {
      return bal(add_min_element(v, param[0]), param[1], param[2]);
    } else {
      return singleton(v);
    }
  };
  var add_max_element = function (v, param) {
    if (param) {
      return bal(param[0], param[1], add_max_element(v, param[2]));
    } else {
      return singleton(v);
    }
  };
  var join = function (l, v, r) {
    if (l) {
      if (r) {
        var rh = r[3];
        var lh = l[3];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], join(l[2], v, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, r[0]), r[1], r[2]);
        } else {
          return create(l, v, r);
        }
      } else {
        return add_max_element(v, l);
      }
    } else {
      return add_min_element(v, r);
    }
  };
  var min_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var max_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[2];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var remove_min_elt = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_elt(l), param[1], param[2]);
      } else {
        return param[2];
      }
    } else {
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "Set.remove_min_elt"
          ];
    }
  };
  var concat = function (t1, t2) {
    if (t1) {
      if (t2) {
        return join(t1, min_elt(t2), remove_min_elt(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var split = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, r)
                ];
        } else {
          var match$1 = split(x, r);
          return /* tuple */[
                  join(l, v, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* true */1,
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* false */0,
              /* Empty */0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var mem = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = Curry._2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    };
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = Curry._2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, r);
        } else {
          return bal(l, v, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            return bal(t1, min_elt(t2), remove_min_elt(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var union = function (s1, s2) {
    if (s1) {
      if (s2) {
        var h2 = s2[3];
        var v2 = s2[1];
        var h1 = s1[3];
        var v1 = s1[1];
        if (h1 >= h2) {
          if (h2 === 1) {
            return add(v2, s1);
          } else {
            var match = split(v1, s2);
            return join(union(s1[0], match[0]), v1, union(s1[2], match[2]));
          }
        } else if (h1 === 1) {
          return add(v1, s2);
        } else {
          var match$1 = split(v2, s1);
          return join(union(match$1[0], s2[0]), v2, union(match$1[2], s2[2]));
        }
      } else {
        return s1;
      }
    } else {
      return s2;
    }
  };
  var inter = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return join(inter(l1, l2), v1, inter(r1, match[2]));
        } else {
          return concat(inter(l1, l2), inter(r1, match[2]));
        }
      } else {
        return /* Empty */0;
      }
    } else {
      return /* Empty */0;
    }
  };
  var diff = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return concat(diff(l1, l2), diff(r1, match[2]));
        } else {
          return join(diff(l1, l2), v1, diff(r1, match[2]));
        }
      } else {
        return s1;
      }
    } else {
      return /* Empty */0;
    }
  };
  var cons_enum = function (_s, _e) {
    while(true) {
      var e = _e;
      var s = _s;
      if (s) {
        _e = /* More */[
          s[1],
          s[2],
          e
        ];
        _s = s[0];
        continue ;
        
      } else {
        return e;
      }
    };
  };
  var compare = function (s1, s2) {
    var _e1 = cons_enum(s1, /* End */0);
    var _e2 = cons_enum(s2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = Curry._2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            _e2 = cons_enum(e2[1], e2[2]);
            _e1 = cons_enum(e1[1], e1[2]);
            continue ;
            
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    };
  };
  var equal = function (s1, s2) {
    return +(compare(s1, s2) === 0);
  };
  var subset = function (_s1, _s2) {
    while(true) {
      var s2 = _s2;
      var s1 = _s1;
      if (s1) {
        if (s2) {
          var r2 = s2[2];
          var l2 = s2[0];
          var r1 = s1[2];
          var v1 = s1[1];
          var l1 = s1[0];
          var c = Curry._2(funarg[/* compare */0], v1, s2[1]);
          if (c) {
            if (c < 0) {
              if (subset(/* Node */[
                      l1,
                      v1,
                      /* Empty */0,
                      0
                    ], l2)) {
                _s1 = r1;
                continue ;
                
              } else {
                return /* false */0;
              }
            } else if (subset(/* Node */[
                    /* Empty */0,
                    v1,
                    r1,
                    0
                  ], r2)) {
              _s1 = l1;
              continue ;
              
            } else {
              return /* false */0;
            }
          } else if (subset(l1, l2)) {
            _s2 = r2;
            _s1 = r1;
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var iter = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter(f, param[0]);
        Curry._1(f, param[1]);
        _param = param[2];
        continue ;
        
      } else {
        return /* () */0;
      }
    };
  };
  var fold = function (f, _s, _accu) {
    while(true) {
      var accu = _accu;
      var s = _s;
      if (s) {
        _accu = Curry._2(f, s[1], fold(f, s[0], accu));
        _s = s[2];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var for_all = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._1(p, param[1])) {
          if (for_all(p, param[0])) {
            _param = param[2];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    };
  };
  var exists = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (Curry._1(p, param[1])) {
          return /* true */1;
        } else if (exists(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[2];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    };
  };
  var filter = function (p, param) {
    if (param) {
      var v = param[1];
      var l$prime = filter(p, param[0]);
      var pv = Curry._1(p, v);
      var r$prime = filter(p, param[2]);
      if (pv) {
        return join(l$prime, v, r$prime);
      } else {
        return concat(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition = function (p, param) {
    if (param) {
      var v = param[1];
      var match = partition(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pv = Curry._1(p, v);
      var match$1 = partition(p, param[2]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pv) {
        return /* tuple */[
                join(lt, v, rt),
                concat(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat(lt, rt),
                join(lf, v, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[2]) | 0;
    } else {
      return 0;
    }
  };
  var elements_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          param[1],
          elements_aux(accu, param[2])
        ];
        continue ;
        
      } else {
        return accu;
      }
    };
  };
  var elements = function (s) {
    return elements_aux(/* [] */0, s);
  };
  var find = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var v = param[1];
        var c = Curry._2(funarg[/* compare */0], x, v);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return v;
        }
      } else {
        throw Caml_builtin_exceptions.not_found;
      }
    };
  };
  var of_list = function (l) {
    if (l) {
      var match = l[1];
      var x0 = l[0];
      if (match) {
        var match$1 = match[1];
        var x1 = match[0];
        if (match$1) {
          var match$2 = match$1[1];
          var x2 = match$1[0];
          if (match$2) {
            var match$3 = match$2[1];
            var x3 = match$2[0];
            if (match$3) {
              if (match$3[1]) {
                var l$1 = List.sort_uniq(funarg[/* compare */0], l);
                var sub = function (n, l) {
                  var exit = 0;
                  if (n > 3 || n < 0) {
                    exit = 1;
                  } else {
                    switch (n) {
                      case 0 : 
                          return /* tuple */[
                                  /* Empty */0,
                                  l
                                ];
                      case 1 : 
                          if (l) {
                            return /* tuple */[
                                    /* Node */[
                                      /* Empty */0,
                                      l[0],
                                      /* Empty */0,
                                      1
                                    ],
                                    l[1]
                                  ];
                          } else {
                            exit = 1;
                          }
                          break;
                      case 2 : 
                          if (l) {
                            var match = l[1];
                            if (match) {
                              return /* tuple */[
                                      /* Node */[
                                        /* Node */[
                                          /* Empty */0,
                                          l[0],
                                          /* Empty */0,
                                          1
                                        ],
                                        match[0],
                                        /* Empty */0,
                                        2
                                      ],
                                      match[1]
                                    ];
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      case 3 : 
                          if (l) {
                            var match$1 = l[1];
                            if (match$1) {
                              var match$2 = match$1[1];
                              if (match$2) {
                                return /* tuple */[
                                        /* Node */[
                                          /* Node */[
                                            /* Empty */0,
                                            l[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          match$1[0],
                                          /* Node */[
                                            /* Empty */0,
                                            match$2[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          2
                                        ],
                                        match$2[1]
                                      ];
                              } else {
                                exit = 1;
                              }
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      
                    }
                  }
                  if (exit === 1) {
                    var nl = n / 2 | 0;
                    var match$3 = sub(nl, l);
                    var l$1 = match$3[1];
                    if (l$1) {
                      var match$4 = sub((n - nl | 0) - 1 | 0, l$1[1]);
                      return /* tuple */[
                              create(match$3[0], l$1[0], match$4[0]),
                              match$4[1]
                            ];
                    } else {
                      throw [
                            Caml_builtin_exceptions.assert_failure,
                            [
                              "set.ml",
                              372,
                              18
                            ]
                          ];
                    }
                  }
                  
                };
                return sub(List.length(l$1), l$1)[0];
              } else {
                return add(match$3[0], add(x3, add(x2, add(x1, singleton(x0)))));
              }
            } else {
              return add(x3, add(x2, add(x1, singleton(x0))));
            }
          } else {
            return add(x2, add(x1, singleton(x0)));
          }
        } else {
          return add(x1, singleton(x0));
        }
      } else {
        return singleton(x0);
      }
    } else {
      return /* Empty */0;
    }
  };
  return [
          /* Empty */0,
          is_empty,
          mem,
          add,
          singleton,
          remove,
          union,
          inter,
          diff,
          compare,
          equal,
          subset,
          iter,
          fold,
          for_all,
          exists,
          filter,
          partition,
          cardinal,
          elements,
          min_elt,
          max_elt,
          min_elt,
          split,
          find,
          of_list
        ];
}

exports.Make = Make;
/* No side effect */

},{"./list.js":8,"./curry.js":9,"./caml_builtin_exceptions.js":44}],34:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var $$Set                   = require("bs-platform/lib/js/set.js");
var List                    = require("bs-platform/lib/js/list.js");
var $$String                = require("bs-platform/lib/js/string.js");
var Caml_obj                = require("bs-platform/lib/js/caml_obj.js");
var Pervasives              = require("bs-platform/lib/js/pervasives.js");
var Caml_string             = require("bs-platform/lib/js/caml_string.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var compare = Caml_obj.caml_compare;

var KeySet = $$Set.Make(/* module */[/* compare */compare]);

function peekch(param) {
  var i = param[1];
  var str = param[0];
  if (i < str.length) {
    return /* Some */[Caml_string.get(str, i)];
  } else {
    return /* None */0;
  }
}

function popch(param) {
  return /* tuple */[
          param[0],
          param[1] + 1 | 0
        ];
}

function peekn(param, len) {
  var i = param[1];
  var str = param[0];
  if ((i + len | 0) < str.length) {
    return /* Some */[$$String.sub(str, i, len)];
  } else {
    return /* None */0;
  }
}

function skipWhite(param) {
  var str = param[0];
  var len = str.length;
  var _n = param[1];
  while(true) {
    var n = _n;
    if (n >= len) {
      return /* tuple */[
              str,
              n
            ];
    } else if (Caml_string.get(str, n) === /* " " */32) {
      _n = n + 1 | 0;
      continue ;
      
    } else {
      return /* tuple */[
              str,
              n
            ];
    }
  };
}

function popn(param, len) {
  return /* tuple */[
          param[0],
          param[1] + len | 0
        ];
}

function match_(stream, matchstr) {
  var len = matchstr.length;
  var match = peekn(stream, len);
  if (match) {
    var peek = match[0];
    if (peek === matchstr) {
      return popn(stream, len);
    } else {
      return Pervasives.failwith("Could not match '" + (matchstr + ("', got '" + (peek + "' instead."))));
    }
  } else {
    return Pervasives.failwith("Could not match " + matchstr);
  }
}

function charsRemaining(param) {
  return param[0].length - param[1] | 0;
}

function create(str) {
  return /* tuple */[
          str,
          0
        ];
}

var Stream = /* module */[
  /* empty : [] */0,
  /* peekch */peekch,
  /* popch */popch,
  /* peekn */peekn,
  /* skipWhite */skipWhite,
  /* popn */popn,
  /* match_ */match_,
  /* charsRemaining */charsRemaining,
  /* create */create
];

function read(name) {
  var ic = Pervasives.open_in(name);
  var try_read = function () {
    var exit = 0;
    var x;
    try {
      x = Pervasives.input_line(ic);
      exit = 1;
    }
    catch (exn){
      if (exn === Caml_builtin_exceptions.end_of_file) {
        return /* None */0;
      } else {
        throw exn;
      }
    }
    if (exit === 1) {
      return /* Some */[x];
    }
    
  };
  var loop = function (_acc) {
    while(true) {
      var acc = _acc;
      var match = try_read(/* () */0);
      if (match) {
        _acc = /* :: */[
          $$String.make(1, /* "\n" */10),
          /* :: */[
            match[0],
            acc
          ]
        ];
        continue ;
        
      } else {
        Pervasives.close_in(ic);
        return List.rev(acc);
      }
    };
  };
  return $$String.concat("", loop(/* [] */0));
}

function append_char(s, c) {
  return s + $$String.make(1, c);
}

function split(str, sep) {
  var _stream = /* tuple */[
    str,
    0
  ];
  var sep$1 = sep;
  var _accstr = "";
  var _acc = /* [] */0;
  while(true) {
    var acc = _acc;
    var accstr = _accstr;
    var stream = _stream;
    var match = peekch(stream);
    if (match) {
      var c = match[0];
      if (c === sep$1) {
        _acc = /* :: */[
          accstr,
          acc
        ];
        _accstr = "";
        _stream = popch(stream);
        continue ;
        
      } else {
        _accstr = append_char(accstr, c);
        _stream = popch(stream);
        continue ;
        
      }
    } else {
      return List.rev(/* :: */[
                  accstr,
                  acc
                ]);
    }
  };
}

var Constants = 0;

var circularBufferSize = 60000;

var vertexSize = 8;

exports.Constants          = Constants;
exports.KeySet             = KeySet;
exports.circularBufferSize = circularBufferSize;
exports.vertexSize         = vertexSize;
exports.Stream             = Stream;
exports.read               = read;
exports.append_char        = append_char;
exports.split              = split;
/* KeySet Not a pure module */

},{"bs-platform/lib/js/set.js":57,"bs-platform/lib/js/list.js":8,"bs-platform/lib/js/string.js":10,"bs-platform/lib/js/caml_obj.js":11,"bs-platform/lib/js/pervasives.js":12,"bs-platform/lib/js/caml_string.js":50,"bs-platform/lib/js/caml_builtin_exceptions.js":44}],32:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Caml_array              = require("bs-platform/lib/js/caml_array.js");
var Pervasives              = require("bs-platform/lib/js/pervasives.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var identity = /* float array */[
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1
];

function createIdentity() {
  return /* float array */[
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1
        ];
}

function createTranslation(dx, dy) {
  return /* float array */[
          1,
          0,
          dx,
          0,
          1,
          dy,
          0,
          0,
          1
        ];
}

function createRotation(theta) {
  return /* float array */[
          Math.cos(theta),
          -Math.sin(theta),
          0,
          Math.sin(theta),
          Math.cos(theta),
          0,
          0,
          0,
          1
        ];
}

function createScaling(sx, sy) {
  return /* float array */[
          sx,
          0,
          0,
          0,
          sy,
          0,
          0,
          0,
          1
        ];
}

function createShearing(sx, sy) {
  return /* float array */[
          1,
          sx,
          0,
          sy,
          1,
          0,
          0,
          0,
          1
        ];
}

function copyInto(src, dst) {
  Caml_array.caml_array_set(dst, 0, Caml_array.caml_array_get(src, 0));
  Caml_array.caml_array_set(dst, 1, Caml_array.caml_array_get(src, 1));
  Caml_array.caml_array_set(dst, 2, Caml_array.caml_array_get(src, 2));
  Caml_array.caml_array_set(dst, 3, Caml_array.caml_array_get(src, 3));
  Caml_array.caml_array_set(dst, 4, Caml_array.caml_array_get(src, 4));
  Caml_array.caml_array_set(dst, 5, Caml_array.caml_array_get(src, 5));
  Caml_array.caml_array_set(dst, 6, Caml_array.caml_array_get(src, 6));
  Caml_array.caml_array_set(dst, 7, Caml_array.caml_array_get(src, 7));
  return Caml_array.caml_array_set(dst, 8, Caml_array.caml_array_get(src, 8));
}

function matmatmul(mat1, mat2) {
  if (mat1.length !== 9) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "Reprocessing_Matrix.re",
            56,
            9
          ]
        ];
  } else {
    var m0 = mat1[0];
    var m1 = mat1[1];
    var m2 = mat1[2];
    var m3 = mat1[3];
    var m4 = mat1[4];
    var m5 = mat1[5];
    var m6 = mat1[6];
    var m7 = mat1[7];
    var m8 = mat1[8];
    if (mat2.length !== 9) {
      throw [
            Caml_builtin_exceptions.assert_failure,
            [
              "Reprocessing_Matrix.re",
              56,
              9
            ]
          ];
    } else {
      var ma = mat2[0];
      var mb = mat2[1];
      var mc = mat2[2];
      var md = mat2[3];
      var me = mat2[4];
      var mf = mat2[5];
      var mg = mat2[6];
      var mh = mat2[7];
      var mi = mat2[8];
      Caml_array.caml_array_set(mat1, 0, ma * m0 + md * m1 + mg * m2);
      Caml_array.caml_array_set(mat1, 1, mb * m0 + me * m1 + mh * m2);
      Caml_array.caml_array_set(mat1, 2, mc * m0 + mf * m1 + mi * m2);
      Caml_array.caml_array_set(mat1, 3, ma * m3 + md * m4 + mg * m5);
      Caml_array.caml_array_set(mat1, 4, mb * m3 + me * m4 + mh * m5);
      Caml_array.caml_array_set(mat1, 5, mc * m3 + mf * m4 + mi * m5);
      Caml_array.caml_array_set(mat1, 6, ma * m6 + md * m7 + mg * m8);
      Caml_array.caml_array_set(mat1, 7, mb * m6 + me * m7 + mh * m8);
      return Caml_array.caml_array_set(mat1, 8, mc * m6 + mf * m7 + mi * m8);
    }
  }
}

function matvecmul(m, v) {
  var a = Caml_array.caml_array_get(v, 0);
  var b = Caml_array.caml_array_get(v, 1);
  var c = Caml_array.caml_array_get(v, 2);
  Caml_array.caml_array_set(v, 0, a * Caml_array.caml_array_get(m, 0) + b * Caml_array.caml_array_get(m, 1) + c * Caml_array.caml_array_get(m, 2));
  Caml_array.caml_array_set(v, 1, a * Caml_array.caml_array_get(m, 3) + b * Caml_array.caml_array_get(m, 4) + c * Caml_array.caml_array_get(m, 5));
  return Caml_array.caml_array_set(v, 2, a * Caml_array.caml_array_get(m, 6) + b * Caml_array.caml_array_get(m, 7) + c * Caml_array.caml_array_get(m, 8));
}

function matptmul(m, param) {
  var y = param[1];
  var x = param[0];
  return /* tuple */[
          x * Caml_array.caml_array_get(m, 0) + y * Caml_array.caml_array_get(m, 1) + Caml_array.caml_array_get(m, 2),
          x * Caml_array.caml_array_get(m, 3) + y * Caml_array.caml_array_get(m, 4) + Caml_array.caml_array_get(m, 5)
        ];
}

function matinv(mat) {
  if (mat.length !== 9) {
    throw [
          Caml_builtin_exceptions.assert_failure,
          [
            "Reprocessing_Matrix.re",
            136,
            9
          ]
        ];
  } else {
    var m00 = mat[0];
    var m01 = mat[1];
    var m02 = mat[2];
    var m10 = mat[3];
    var m11 = mat[4];
    var m12 = mat[5];
    var m20 = mat[6];
    var m21 = mat[7];
    var m22 = mat[8];
    var det = m00 * m11 * m22 + m01 * m12 * m20 + m02 * m10 * m21 - m00 * m12 * m21 - m01 * m10 * m22 - m02 * m11 * m20;
    if (det === 0) {
      Pervasives.invalid_arg("The current transform matrix cannot be inverted");
    }
    var invdet = 1 / det;
    var adj00 = m11 * m22 - m12 * m21;
    var adj01 = -(m01 * m22 - m02 * m21);
    var adj02 = m01 * m12 - m02 * m11;
    var adj10 = -(m10 * m22 - m12 * m20);
    var adj11 = m00 * m22 - m02 * m20;
    var adj12 = -(m00 * m12 - m02 * m10);
    var adj20 = m10 * m21 - m11 * m20;
    var adj21 = -(m00 * m21 - m01 * m20);
    var adj22 = m00 * m11 - m01 * m10;
    return /* float array */[
            invdet * adj00,
            invdet * adj01,
            invdet * adj02,
            invdet * adj10,
            invdet * adj11,
            invdet * adj12,
            invdet * adj20,
            invdet * adj21,
            invdet * adj22
          ];
  }
}

exports.identity          = identity;
exports.createIdentity    = createIdentity;
exports.createTranslation = createTranslation;
exports.createRotation    = createRotation;
exports.createScaling     = createScaling;
exports.createShearing    = createShearing;
exports.copyInto          = copyInto;
exports.matmatmul         = matmatmul;
exports.matvecmul         = matvecmul;
exports.matptmul          = matptmul;
exports.matinv            = matinv;
/* No side effect */

},{"bs-platform/lib/js/caml_array.js":40,"bs-platform/lib/js/pervasives.js":12,"bs-platform/lib/js/caml_builtin_exceptions.js":44}],48:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';


var vertexShaderSource = "\n  attribute vec2 aVertexPosition;\n  attribute vec4 aVertexColor;\n  attribute vec2 aTextureCoord;\n\n  uniform mat4 uPMatrix;\n\n  varying vec4 vColor;\n  varying vec2 vTextureCoord;\n\n  void main(void) {\n    gl_Position = uPMatrix * vec4(aVertexPosition, 0.0, 1.0);\n    vColor = aVertexColor;\n    vTextureCoord = aTextureCoord;\n  }\n";

var fragmentShaderSource = "\n  varying vec4 vColor;\n  varying vec2 vTextureCoord;\n\n  uniform sampler2D uSampler;\n\n  void main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\n  }\n";

exports.vertexShaderSource   = vertexShaderSource;
exports.fragmentShaderSource = fragmentShaderSource;
/* No side effect */

},{}],17:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';


var pi = 4.0 * Math.atan(1.0);

var two_pi = 2.0 * pi;

var half_pi = 0.5 * pi;

var quarter_pi = 0.25 * pi;

var white = /* float array */[
  1,
  1,
  1,
  1
];

var black = /* float array */[
  0,
  0,
  0,
  1
];

var red = /* float array */[
  1,
  0,
  0,
  1
];

var green = /* float array */[
  0,
  1,
  0,
  1
];

var blue = /* float array */[
  0,
  0,
  1,
  1
];

var tau = two_pi;

exports.white      = white;
exports.black      = black;
exports.red        = red;
exports.green      = green;
exports.blue       = blue;
exports.pi         = pi;
exports.half_pi    = half_pi;
exports.quarter_pi = quarter_pi;
exports.two_pi     = two_pi;
exports.tau        = tau;
/* pi Not a pure module */

},{}],33:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var List                   = require("bs-platform/lib/js/list.js");
var Curry                  = require("bs-platform/lib/js/curry.js");
var Caml_int32             = require("bs-platform/lib/js/caml_int32.js");
var Pervasives             = require("bs-platform/lib/js/pervasives.js");
var RGLConstants           = require("Reasongl/src/RGLConstants.js");
var Reasongl_web           = require("Reasongl/src/web/reasongl_web.js");
var Reprocessing_Common    = require("./Reprocessing_Common.js");
var Reprocessing_Matrix    = require("./Reprocessing_Matrix.js");
var Reprocessing_Shaders   = require("./Reprocessing_Shaders.js");
var Reprocessing_Constants = require("./Reprocessing_Constants.js");

function getProgram(context, vertexShaderSource, fragmentShaderSource) {
  var vertexShader = Curry._2(Reasongl_web.Gl[/* createShader */8], context, RGLConstants.vertex_shader);
  Reasongl_web.Gl[/* shaderSource */11](context, vertexShader, vertexShaderSource);
  Curry._2(Reasongl_web.Gl[/* compileShader */12], context, vertexShader);
  var compiledCorrectly = +(Reasongl_web.Gl[/* getShaderParameter */54](context, vertexShader, /* Compile_status */1) === 1);
  if (compiledCorrectly) {
    var fragmentShader = Curry._2(Reasongl_web.Gl[/* createShader */8], context, RGLConstants.fragment_shader);
    Reasongl_web.Gl[/* shaderSource */11](context, fragmentShader, fragmentShaderSource);
    Curry._2(Reasongl_web.Gl[/* compileShader */12], context, fragmentShader);
    var compiledCorrectly$1 = +(Reasongl_web.Gl[/* getShaderParameter */54](context, fragmentShader, /* Compile_status */1) === 1);
    if (compiledCorrectly$1) {
      var program = Curry._1(Reasongl_web.Gl[/* createProgram */7], context);
      Curry._3(Reasongl_web.Gl[/* attachShader */9], context, program, vertexShader);
      Curry._2(Reasongl_web.Gl[/* deleteShader */10], context, vertexShader);
      Curry._3(Reasongl_web.Gl[/* attachShader */9], context, program, fragmentShader);
      Curry._2(Reasongl_web.Gl[/* deleteShader */10], context, fragmentShader);
      Curry._2(Reasongl_web.Gl[/* linkProgram */13], context, program);
      var linkedCorrectly = +(Reasongl_web.Gl[/* getProgramParameter */53](context, program, /* Link_status */1) === 1);
      if (linkedCorrectly) {
        return /* Some */[program];
      } else {
        console.log("Linking error: " + Curry._2(Reasongl_web.Gl[/* getProgramInfoLog */56], context, program));
        return /* None */0;
      }
    } else {
      console.log("Fragment shader error: " + Curry._2(Reasongl_web.Gl[/* getShaderInfoLog */55], context, fragmentShader));
      return /* None */0;
    }
  } else {
    console.log("Vertex shader error: " + Curry._2(Reasongl_web.Gl[/* getShaderInfoLog */55], context, vertexShader));
    return /* None */0;
  }
}

function createCanvas($$window, height, width) {
  Curry._3(Reasongl_web.Gl[/* Window */2][/* setWindowSize */6], $$window, width, height);
  var context = Curry._1(Reasongl_web.Gl[/* Window */2][/* getContext */7], $$window);
  Curry._5(Reasongl_web.Gl[/* viewport */44], context, -1, -1, width, height);
  Curry._5(Reasongl_web.Gl[/* clearColor */6], context, 0, 0, 0, 1);
  Curry._2(Reasongl_web.Gl[/* clear */45], context, RGLConstants.color_buffer_bit | RGLConstants.depth_buffer_bit);
  var camera = /* record */[/* projectionMatrix */Curry._1(Reasongl_web.Gl[/* Mat4 */51][/* create */1], /* () */0)];
  var vertexBuffer = Curry._1(Reasongl_web.Gl[/* createBuffer */15], context);
  var elementBuffer = Curry._1(Reasongl_web.Gl[/* createBuffer */15], context);
  var match = getProgram(context, Reprocessing_Shaders.vertexShaderSource, Reprocessing_Shaders.fragmentShaderSource);
  var program = match ? match[0] : Pervasives.failwith("Could not create the program and/or the shaders. Aborting.");
  Curry._2(Reasongl_web.Gl[/* useProgram */14], context, program);
  var aVertexPosition = Curry._3(Reasongl_web.Gl[/* getAttribLocation */47], context, program, "aVertexPosition");
  Curry._2(Reasongl_web.Gl[/* enableVertexAttribArray */48], context, aVertexPosition);
  var aVertexColor = Curry._3(Reasongl_web.Gl[/* getAttribLocation */47], context, program, "aVertexColor");
  Curry._2(Reasongl_web.Gl[/* enableVertexAttribArray */48], context, aVertexColor);
  var pMatrixUniform = Curry._3(Reasongl_web.Gl[/* getUniformLocation */46], context, program, "uPMatrix");
  Reasongl_web.Gl[/* uniformMatrix4fv */52](context, pMatrixUniform, camera[/* projectionMatrix */0]);
  var aTextureCoord = Curry._3(Reasongl_web.Gl[/* getAttribLocation */47], context, program, "aTextureCoord");
  Curry._2(Reasongl_web.Gl[/* enableVertexAttribArray */48], context, aTextureCoord);
  var texture = Curry._1(Reasongl_web.Gl[/* createTexture */17], context);
  Curry._2(Reasongl_web.Gl[/* activeTexture */18], context, RGLConstants.texture0);
  Curry._3(Reasongl_web.Gl[/* bindTexture */19], context, RGLConstants.texture_2d, texture);
  var uSampler = Curry._3(Reasongl_web.Gl[/* getUniformLocation */46], context, program, "uSampler");
  Reasongl_web.Gl[/* texImage2D_RGBA */41](context, RGLConstants.texture_2d, 0, 1, 1, 0, Curry._2(Reasongl_web.Gl[/* Bigarray */28][/* of_array */1], /* Uint8 */5, /* int array */[
            255,
            255,
            255,
            255
          ]));
  Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_mag_filter, RGLConstants.linear);
  Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_min_filter, RGLConstants.linear_mipmap_nearest);
  Curry._2(Reasongl_web.Gl[/* enable */25], context, RGLConstants.blend);
  Curry._3(Reasongl_web.Gl[/* blendFunc */27], context, RGLConstants.src_alpha, RGLConstants.one_minus_src_alpha);
  Curry._7(Reasongl_web.Gl[/* Mat4 */51][/* ortho */6], camera[/* projectionMatrix */0], 0, width, height, 0, 0, 1);
  return /* record */[
          /* camera */camera,
          /* window */$$window,
          /* gl */context,
          /* vertexBuffer */vertexBuffer,
          /* elementBuffer */elementBuffer,
          /* aVertexColor */aVertexColor,
          /* aTextureCoord */aTextureCoord,
          /* aVertexPosition */aVertexPosition,
          /* pMatrixUniform */pMatrixUniform,
          /* uSampler */uSampler,
          /* batch : record */[
            /* vertexArray */Curry._2(Reasongl_web.Gl[/* Bigarray */28][/* create */0], /* Float32 */1, Caml_int32.imul(Reprocessing_Common.circularBufferSize, Reprocessing_Common.vertexSize)),
            /* elementArray */Curry._2(Reasongl_web.Gl[/* Bigarray */28][/* create */0], /* Uint16 */3, Reprocessing_Common.circularBufferSize),
            /* vertexPtr */0,
            /* elementPtr */0,
            /* currTex : None */0,
            /* nullTex */texture
          ],
          /* keyboard : record */[
            /* keyCode : Nothing */65,
            /* pressed */Reprocessing_Common.KeySet[/* empty */0],
            /* released */Reprocessing_Common.KeySet[/* empty */0],
            /* down */Reprocessing_Common.KeySet[/* empty */0]
          ],
          /* mouse : record */[
            /* pos : tuple */[
              0,
              0
            ],
            /* prevPos : tuple */[
              0,
              0
            ],
            /* pressed : false */0
          ],
          /* style : record */[
            /* strokeColor : None */0,
            /* strokeWeight */3,
            /* strokeCap : Round */0,
            /* fillColor : Some */[/* float array */[
                0,
                0,
                0,
                1
              ]],
            /* tintColor : None */0,
            /* rectMode : Corner */0
          ],
          /* styleStack : [] */0,
          /* frame : record */[
            /* count */1,
            /* rate */10,
            /* deltaTime */0.001
          ],
          /* matrix */Reprocessing_Matrix.createIdentity(/* () */0),
          /* matrixStack : [] */0,
          /* size : record */[
            /* height */height,
            /* width */width,
            /* resizeable : true */1
          ]
        ];
}

function makeLocalBatch(env) {
  return /* record */[
          /* vertexArray */Curry._2(Reasongl_web.Gl[/* Bigarray */28][/* create */0], /* Float32 */1, Caml_int32.imul(Reprocessing_Common.circularBufferSize, Reprocessing_Common.vertexSize)),
          /* elementArray */Curry._2(Reasongl_web.Gl[/* Bigarray */28][/* create */0], /* Uint16 */3, Reprocessing_Common.circularBufferSize),
          /* vertexPtr */0,
          /* elementPtr */0,
          /* currTex : None */0,
          /* nullTex */env[/* batch */10][/* nullTex */5]
        ];
}

function drawGeometry(vertexArray, elementArray, mode, count, textureBuffer, env) {
  Curry._3(Reasongl_web.Gl[/* bindBuffer */16], env[/* gl */2], RGLConstants.array_buffer, env[/* vertexBuffer */3]);
  Curry._4(Reasongl_web.Gl[/* bufferData */43], env[/* gl */2], RGLConstants.array_buffer, vertexArray, RGLConstants.stream_draw);
  Reasongl_web.Gl[/* vertexAttribPointer */49](env[/* gl */2], env[/* aVertexPosition */7], 2, RGLConstants.float_, /* false */0, (Reprocessing_Common.vertexSize << 2), 0);
  Reasongl_web.Gl[/* vertexAttribPointer */49](env[/* gl */2], env[/* aVertexColor */5], 4, RGLConstants.float_, /* false */0, (Reprocessing_Common.vertexSize << 2), 8);
  Reasongl_web.Gl[/* vertexAttribPointer */49](env[/* gl */2], env[/* aTextureCoord */6], 2, RGLConstants.float_, /* false */0, (Reprocessing_Common.vertexSize << 2), 24);
  Curry._3(Reasongl_web.Gl[/* uniform1i */36], env[/* gl */2], env[/* uSampler */9], 0);
  Curry._3(Reasongl_web.Gl[/* bindBuffer */16], env[/* gl */2], RGLConstants.element_array_buffer, env[/* elementBuffer */4]);
  Curry._4(Reasongl_web.Gl[/* bufferData */43], env[/* gl */2], RGLConstants.element_array_buffer, elementArray, RGLConstants.stream_draw);
  Curry._3(Reasongl_web.Gl[/* bindTexture */19], env[/* gl */2], RGLConstants.texture_2d, textureBuffer);
  return Curry._5(Reasongl_web.Gl[/* drawElements */59], env[/* gl */2], mode, count, RGLConstants.unsigned_short, 0);
}

function flushGlobalBatch(env) {
  if (env[/* batch */10][/* elementPtr */3] > 0) {
    var match = env[/* batch */10][/* currTex */4];
    var textureBuffer = match ? match[0] : env[/* batch */10][/* nullTex */5];
    drawGeometry(Curry._3(Reasongl_web.Gl[/* Bigarray */28][/* sub */9], env[/* batch */10][/* vertexArray */0], 0, env[/* batch */10][/* vertexPtr */2]), Curry._3(Reasongl_web.Gl[/* Bigarray */28][/* sub */9], env[/* batch */10][/* elementArray */1], 0, env[/* batch */10][/* elementPtr */3]), RGLConstants.triangles, env[/* batch */10][/* elementPtr */3], textureBuffer, env);
    env[/* batch */10][/* currTex */4] = /* None */0;
    env[/* batch */10][/* vertexPtr */2] = 0;
    env[/* batch */10][/* elementPtr */3] = 0;
    return /* () */0;
  } else {
    return 0;
  }
}

function maybeFlushBatch(texture, el, vert, env) {
  if ((env[/* batch */10][/* elementPtr */3] + el | 0) >= Reprocessing_Common.circularBufferSize || (env[/* batch */10][/* vertexPtr */2] + vert | 0) >= Reprocessing_Common.circularBufferSize || env[/* batch */10][/* elementPtr */3] > 0 && env[/* batch */10][/* currTex */4] !== texture) {
    return flushGlobalBatch(env);
  } else {
    return 0;
  }
}

function addRectToGlobalBatch(env, param, param$1, param$2, param$3, param$4) {
  var a = param$4[/* a */3];
  var b = param$4[/* b */2];
  var g = param$4[/* g */1];
  var r = param$4[/* r */0];
  maybeFlushBatch(/* None */0, 6, 32, env);
  var set = Reasongl_web.Gl[/* Bigarray */28][/* set */7];
  var i = env[/* batch */10][/* vertexPtr */2];
  var vertexArrayToMutate = env[/* batch */10][/* vertexArray */0];
  Curry._3(set, vertexArrayToMutate, i + 0 | 0, param[0]);
  Curry._3(set, vertexArrayToMutate, i + 1 | 0, param[1]);
  Curry._3(set, vertexArrayToMutate, i + 2 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 3 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 4 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 5 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 6 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 7 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 8 | 0, param$1[0]);
  Curry._3(set, vertexArrayToMutate, i + 9 | 0, param$1[1]);
  Curry._3(set, vertexArrayToMutate, i + 10 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 11 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 12 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 13 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 14 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 15 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 16 | 0, param$2[0]);
  Curry._3(set, vertexArrayToMutate, i + 17 | 0, param$2[1]);
  Curry._3(set, vertexArrayToMutate, i + 18 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 19 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 20 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 21 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 22 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 23 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 24 | 0, param$3[0]);
  Curry._3(set, vertexArrayToMutate, i + 25 | 0, param$3[1]);
  Curry._3(set, vertexArrayToMutate, i + 26 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 27 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 28 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 29 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 30 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 31 | 0, 0.0);
  var ii = Caml_int32.div(i, Reprocessing_Common.vertexSize);
  var j = env[/* batch */10][/* elementPtr */3];
  var elementArrayToMutate = env[/* batch */10][/* elementArray */1];
  Curry._3(set, elementArrayToMutate, j + 0 | 0, ii);
  Curry._3(set, elementArrayToMutate, j + 1 | 0, ii + 1 | 0);
  Curry._3(set, elementArrayToMutate, j + 2 | 0, ii + 2 | 0);
  Curry._3(set, elementArrayToMutate, j + 3 | 0, ii + 1 | 0);
  Curry._3(set, elementArrayToMutate, j + 4 | 0, ii + 2 | 0);
  Curry._3(set, elementArrayToMutate, j + 5 | 0, ii + 3 | 0);
  env[/* batch */10][/* vertexPtr */2] = i + (Reprocessing_Common.vertexSize << 2) | 0;
  env[/* batch */10][/* elementPtr */3] = j + 6 | 0;
  return /* () */0;
}

function drawTriangle(env, param, param$1, param$2, param$3) {
  var a = param$3[/* a */3];
  var b = param$3[/* b */2];
  var g = param$3[/* g */1];
  var r = param$3[/* r */0];
  maybeFlushBatch(/* None */0, 24, 3, env);
  var set = Reasongl_web.Gl[/* Bigarray */28][/* set */7];
  var i = env[/* batch */10][/* vertexPtr */2];
  var vertexArrayToMutate = env[/* batch */10][/* vertexArray */0];
  Curry._3(set, vertexArrayToMutate, i + 0 | 0, param[0]);
  Curry._3(set, vertexArrayToMutate, i + 1 | 0, param[1]);
  Curry._3(set, vertexArrayToMutate, i + 2 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 3 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 4 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 5 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 6 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 7 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 8 | 0, param$1[0]);
  Curry._3(set, vertexArrayToMutate, i + 9 | 0, param$1[1]);
  Curry._3(set, vertexArrayToMutate, i + 10 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 11 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 12 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 13 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 14 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 15 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 16 | 0, param$2[0]);
  Curry._3(set, vertexArrayToMutate, i + 17 | 0, param$2[1]);
  Curry._3(set, vertexArrayToMutate, i + 18 | 0, r);
  Curry._3(set, vertexArrayToMutate, i + 19 | 0, g);
  Curry._3(set, vertexArrayToMutate, i + 20 | 0, b);
  Curry._3(set, vertexArrayToMutate, i + 21 | 0, a);
  Curry._3(set, vertexArrayToMutate, i + 22 | 0, 0.0);
  Curry._3(set, vertexArrayToMutate, i + 23 | 0, 0.0);
  var ii = Caml_int32.div(i, Reprocessing_Common.vertexSize);
  var j = env[/* batch */10][/* elementPtr */3];
  var elementArrayToMutate = env[/* batch */10][/* elementArray */1];
  Curry._3(set, elementArrayToMutate, j + 0 | 0, ii);
  Curry._3(set, elementArrayToMutate, j + 1 | 0, ii + 1 | 0);
  Curry._3(set, elementArrayToMutate, j + 2 | 0, ii + 2 | 0);
  env[/* batch */10][/* vertexPtr */2] = i + Caml_int32.imul(3, Reprocessing_Common.vertexSize) | 0;
  env[/* batch */10][/* elementPtr */3] = j + 3 | 0;
  return /* () */0;
}

function drawLineWithMatrix(param, param$1, matrix, color, width, project, env) {
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var yy1 = param[1];
  var xx1 = param[0];
  var dx = xx2 - xx1;
  var dy = yy2 - yy1;
  var mag = Math.sqrt(dx * dx + dy * dy);
  var radius = width / 2;
  var xthing = dy / mag * radius;
  var ything = -dx / mag * radius;
  var match = project !== 0 ? /* tuple */[
      dx / mag * radius,
      xthing
    ] : /* tuple */[
      0,
      0
    ];
  var projecty = match[1];
  var projectx = match[0];
  var x1 = xx2 + xthing + projectx;
  var y1 = yy2 + ything + projecty;
  var x2 = xx1 + xthing - projectx;
  var y2 = yy1 + ything - projecty;
  var x3 = xx2 - xthing + projectx;
  var y3 = yy2 - ything + projecty;
  var x4 = xx1 - xthing - projectx;
  var y4 = yy1 - ything - projecty;
  return addRectToGlobalBatch(env, Reprocessing_Matrix.matptmul(matrix, /* tuple */[
                  x1,
                  y1
                ]), Reprocessing_Matrix.matptmul(matrix, /* tuple */[
                  x2,
                  y2
                ]), Reprocessing_Matrix.matptmul(matrix, /* tuple */[
                  x3,
                  y3
                ]), Reprocessing_Matrix.matptmul(matrix, /* tuple */[
                  x4,
                  y4
                ]), color);
}

function drawArc(env, param, radx, rady, start, stop, isPie, matrix, param$1) {
  var a = param$1[/* a */3];
  var b = param$1[/* b */2];
  var g = param$1[/* g */1];
  var r = param$1[/* r */0];
  var yCenterOfCircle = param[1];
  var xCenterOfCircle = param[0];
  var noOfFans = ((radx + rady | 0) / 2 | 0) + 10 | 0;
  maybeFlushBatch(/* None */0, Caml_int32.imul(3, noOfFans), Caml_int32.imul(Reprocessing_Common.vertexSize, noOfFans + 3 | 0), env);
  var match = +(stop < start);
  var match$1 = match !== 0 ? /* tuple */[
      stop,
      start
    ] : /* tuple */[
      start,
      stop
    ];
  var stop$1 = match$1[1];
  var start$1 = match$1[0];
  var pi = 4.0 * Math.atan(1.0);
  var anglePerFan = 2 * pi / noOfFans;
  var verticesData = env[/* batch */10][/* vertexArray */0];
  var elementData = env[/* batch */10][/* elementArray */1];
  var set = Reasongl_web.Gl[/* Bigarray */28][/* set */7];
  var get = Reasongl_web.Gl[/* Bigarray */28][/* get */5];
  var vertexArrayOffset = env[/* batch */10][/* vertexPtr */2];
  var elementArrayOffset = env[/* batch */10][/* elementPtr */3];
  var start_i = isPie ? (start$1 / anglePerFan | 0) - 3 | 0 : (start$1 / anglePerFan | 0) - 2 | 0;
  var stop_i = (stop$1 / anglePerFan | 0) + 1 | 0;
  for(var i = start_i; i <= stop_i; ++i){
    var param$2;
    if (isPie && (i - start_i | 0) === 0) {
      param$2 = /* tuple */[
        xCenterOfCircle,
        yCenterOfCircle
      ];
    } else {
      var angle = Pervasives.max(Pervasives.min(anglePerFan * (i + 1 | 0), stop$1), start$1);
      param$2 = /* tuple */[
        xCenterOfCircle + Math.cos(angle) * radx,
        yCenterOfCircle + Math.sin(angle) * rady
      ];
    }
    var match$2 = Reprocessing_Matrix.matptmul(matrix, param$2);
    var ii = Caml_int32.imul(i - start_i | 0, Reprocessing_Common.vertexSize) + vertexArrayOffset | 0;
    Curry._3(set, verticesData, ii + 0 | 0, match$2[0]);
    Curry._3(set, verticesData, ii + 1 | 0, match$2[1]);
    Curry._3(set, verticesData, ii + 2 | 0, r);
    Curry._3(set, verticesData, ii + 3 | 0, g);
    Curry._3(set, verticesData, ii + 4 | 0, b);
    Curry._3(set, verticesData, ii + 5 | 0, a);
    Curry._3(set, verticesData, ii + 6 | 0, 0.0);
    Curry._3(set, verticesData, ii + 7 | 0, 0.0);
    if ((i - start_i | 0) < 3) {
      Curry._3(set, elementData, (i - start_i | 0) + elementArrayOffset | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize));
    } else {
      var jj = (Caml_int32.imul((i - start_i | 0) - 3 | 0, 3) + elementArrayOffset | 0) + 3 | 0;
      Curry._3(set, elementData, jj, Caml_int32.div(vertexArrayOffset, Reprocessing_Common.vertexSize));
      Curry._3(set, elementData, jj + 1 | 0, Curry._2(get, elementData, jj - 1 | 0));
      Curry._3(set, elementData, jj + 2 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize));
    }
  }
  env[/* batch */10][/* vertexPtr */2] = env[/* batch */10][/* vertexPtr */2] + Caml_int32.imul(noOfFans + 3 | 0, Reprocessing_Common.vertexSize) | 0;
  env[/* batch */10][/* elementPtr */3] = (env[/* batch */10][/* elementPtr */3] + Caml_int32.imul((stop_i - start_i | 0) - 3 | 0, 3) | 0) + 3 | 0;
  return /* () */0;
}

function drawEllipse(env, center, radx, rady, matrix, c) {
  return drawArc(env, center, radx, rady, 0, Reprocessing_Constants.tau, /* false */0, matrix, c);
}

function drawArcStroke(env, param, radx, rady, start, stop, isOpen, isPie, matrix, strokeColor, strokeWidth) {
  var a = strokeColor[/* a */3];
  var b = strokeColor[/* b */2];
  var g = strokeColor[/* g */1];
  var r = strokeColor[/* r */0];
  var yCenterOfCircle = param[1];
  var xCenterOfCircle = param[0];
  var verticesData = env[/* batch */10][/* vertexArray */0];
  var elementData = env[/* batch */10][/* elementArray */1];
  var noOfFans = ((radx + rady | 0) / 2 | 0) + 10 | 0;
  var set = Reasongl_web.Gl[/* Bigarray */28][/* set */7];
  maybeFlushBatch(/* None */0, Caml_int32.imul(noOfFans, 6), Caml_int32.imul((noOfFans << 1), Reprocessing_Common.vertexSize), env);
  var match = +(stop < start);
  var match$1 = match !== 0 ? /* tuple */[
      stop,
      start
    ] : /* tuple */[
      start,
      stop
    ];
  var stop$1 = match$1[1];
  var start$1 = match$1[0];
  var pi = 4.0 * Math.atan(1.0);
  var anglePerFan = 2 * pi / noOfFans;
  var start_i = (start$1 / anglePerFan | 0) - 2 | 0;
  var stop_i = stop$1 / anglePerFan | 0;
  var prevEl = /* None */0;
  var strokeWidth$1 = strokeWidth;
  var halfStrokeWidth = strokeWidth$1 / 2;
  for(var i = start_i; i <= stop_i; ++i){
    var angle = Pervasives.max(start$1, Pervasives.min(anglePerFan * (i + 1 | 0), stop$1));
    var param_000 = xCenterOfCircle + Math.cos(angle) * (radx - halfStrokeWidth);
    var param_001 = yCenterOfCircle + Math.sin(angle) * (rady - halfStrokeWidth);
    var param$1 = /* tuple */[
      param_000,
      param_001
    ];
    var match$2 = Reprocessing_Matrix.matptmul(matrix, param$1);
    var param_000$1 = xCenterOfCircle + Math.cos(angle) * (radx + halfStrokeWidth);
    var param_001$1 = yCenterOfCircle + Math.sin(angle) * (rady + halfStrokeWidth);
    var param$2 = /* tuple */[
      param_000$1,
      param_001$1
    ];
    var match$3 = Reprocessing_Matrix.matptmul(matrix, param$2);
    var ii = env[/* batch */10][/* vertexPtr */2];
    Curry._3(set, verticesData, ii + 0 | 0, match$2[0]);
    Curry._3(set, verticesData, ii + 1 | 0, match$2[1]);
    Curry._3(set, verticesData, ii + 2 | 0, r);
    Curry._3(set, verticesData, ii + 3 | 0, g);
    Curry._3(set, verticesData, ii + 4 | 0, b);
    Curry._3(set, verticesData, ii + 5 | 0, a);
    Curry._3(set, verticesData, ii + 6 | 0, 0.0);
    Curry._3(set, verticesData, ii + 7 | 0, 0.0);
    var ii$1 = ii + Reprocessing_Common.vertexSize | 0;
    Curry._3(set, verticesData, ii$1 + 0 | 0, match$3[0]);
    Curry._3(set, verticesData, ii$1 + 1 | 0, match$3[1]);
    Curry._3(set, verticesData, ii$1 + 2 | 0, r);
    Curry._3(set, verticesData, ii$1 + 3 | 0, g);
    Curry._3(set, verticesData, ii$1 + 4 | 0, b);
    Curry._3(set, verticesData, ii$1 + 5 | 0, a);
    Curry._3(set, verticesData, ii$1 + 6 | 0, 0.0);
    Curry._3(set, verticesData, ii$1 + 7 | 0, 0.0);
    env[/* batch */10][/* vertexPtr */2] = env[/* batch */10][/* vertexPtr */2] + (Reprocessing_Common.vertexSize << 1) | 0;
    var currOuter = Caml_int32.div(ii$1, Reprocessing_Common.vertexSize);
    var currInner = Caml_int32.div(ii$1, Reprocessing_Common.vertexSize) - 1 | 0;
    var currEl = /* Some */[/* tuple */[
        currInner,
        currOuter
      ]];
    var match$4 = prevEl;
    if (match$4) {
      var match$5 = match$4[0];
      var prevInner = match$5[0];
      var elementArrayOffset = env[/* batch */10][/* elementPtr */3];
      Curry._3(set, elementData, elementArrayOffset, prevInner);
      Curry._3(set, elementData, elementArrayOffset + 1 | 0, match$5[1]);
      Curry._3(set, elementData, elementArrayOffset + 2 | 0, currOuter);
      Curry._3(set, elementData, elementArrayOffset + 3 | 0, currOuter);
      Curry._3(set, elementData, elementArrayOffset + 4 | 0, prevInner);
      Curry._3(set, elementData, elementArrayOffset + 5 | 0, currInner);
      env[/* batch */10][/* elementPtr */3] = env[/* batch */10][/* elementPtr */3] + 6 | 0;
      prevEl = currEl;
    } else {
      prevEl = currEl;
    }
  }
  if (isOpen) {
    return 0;
  } else {
    var startPt_000 = xCenterOfCircle + Math.cos(start$1) * radx;
    var startPt_001 = yCenterOfCircle + Math.sin(start$1) * rady;
    var startPt = /* tuple */[
      startPt_000,
      startPt_001
    ];
    var stopPt_000 = xCenterOfCircle + Math.cos(stop$1) * radx;
    var stopPt_001 = yCenterOfCircle + Math.sin(stop$1) * rady;
    var stopPt = /* tuple */[
      stopPt_000,
      stopPt_001
    ];
    var centerOfCircle = /* tuple */[
      xCenterOfCircle,
      yCenterOfCircle
    ];
    if (isPie) {
      drawLineWithMatrix(startPt, centerOfCircle, matrix, strokeColor, strokeWidth$1, /* false */0, env);
      drawLineWithMatrix(stopPt, centerOfCircle, matrix, strokeColor, strokeWidth$1, /* false */0, env);
      drawEllipse(env, centerOfCircle, halfStrokeWidth, halfStrokeWidth, matrix, strokeColor);
    } else {
      drawLineWithMatrix(startPt, stopPt, matrix, strokeColor, strokeWidth$1, /* false */0, env);
    }
    drawEllipse(env, startPt, halfStrokeWidth, halfStrokeWidth, matrix, strokeColor);
    return drawEllipse(env, stopPt, halfStrokeWidth, halfStrokeWidth, matrix, strokeColor);
  }
}

function loadImage(env, filename, isPixel) {
  var imageRef = /* record */[
    /* glData : None */0,
    /* drawnTo : false */0
  ];
  Reasongl_web.Gl[/* loadImage */33](filename, /* None */0, (function (imageData) {
          if (imageData) {
            var img = imageData[0];
            var context = env[/* gl */2];
            var texture = Curry._1(Reasongl_web.Gl[/* createTexture */17], context);
            var height = Curry._1(Reasongl_web.Gl[/* getImageHeight */32], img);
            var width = Curry._1(Reasongl_web.Gl[/* getImageWidth */31], img);
            var filter = isPixel !== 0 ? RGLConstants.nearest : RGLConstants.linear;
            imageRef[/* glData */0] = /* Some */[/* record */[
                /* framebuffer : None */0,
                /* texture */texture,
                /* height */height,
                /* width */width
              ]];
            Curry._3(Reasongl_web.Gl[/* bindTexture */19], context, RGLConstants.texture_2d, texture);
            Reasongl_web.Gl[/* texImage2DWithImage */35](context, RGLConstants.texture_2d, 0, img);
            Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_mag_filter, filter);
            Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_min_filter, filter);
            Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_wrap_s, RGLConstants.clamp_to_edge);
            return Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_wrap_t, RGLConstants.clamp_to_edge);
          } else {
            return Pervasives.failwith("Could not load image '" + (filename + "'."));
          }
        }), /* () */0);
  return imageRef;
}

function loadImageFromMemory(env, data, isPixel) {
  var imageRef = /* record */[
    /* glData : None */0,
    /* drawnTo : false */0
  ];
  Reasongl_web.Gl[/* loadImageFromMemory */34](data, /* None */0, (function (imageData) {
          if (imageData) {
            var img = imageData[0];
            var texture = Curry._1(Reasongl_web.Gl[/* createTexture */17], env[/* gl */2]);
            var height = Curry._1(Reasongl_web.Gl[/* getImageHeight */32], img);
            var width = Curry._1(Reasongl_web.Gl[/* getImageWidth */31], img);
            var filter = isPixel !== 0 ? RGLConstants.nearest : RGLConstants.linear;
            imageRef[/* glData */0] = /* Some */[/* record */[
                /* framebuffer : None */0,
                /* texture */texture,
                /* height */height,
                /* width */width
              ]];
            Curry._3(Reasongl_web.Gl[/* bindTexture */19], env[/* gl */2], RGLConstants.texture_2d, texture);
            Reasongl_web.Gl[/* texImage2DWithImage */35](env[/* gl */2], RGLConstants.texture_2d, 0, img);
            Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_mag_filter, filter);
            Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_min_filter, filter);
            Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_s, RGLConstants.clamp_to_edge);
            return Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_t, RGLConstants.clamp_to_edge);
          } else {
            return Pervasives.failwith("Could not load image");
          }
        }), /* () */0);
  return imageRef;
}

function drawImage(param, param$1, param$2, param$3, param$4, subx, suby, subw, subh, env) {
  var imgw = param[/* width */3];
  var imgh = param[/* height */2];
  var texture = param[/* texture */1];
  var match = env[/* style */13][/* tintColor */4];
  var match$1 = match ? match[0] : /* float array */[
      1,
      1,
      1,
      1
    ];
  var a = match$1[/* a */3];
  var b = match$1[/* b */2];
  var g = match$1[/* g */1];
  var r = match$1[/* r */0];
  maybeFlushBatch(/* Some */[texture], 6, 32, env);
  var match_000 = subx / imgw;
  var match_001 = suby / imgh;
  var match_002 = subw / imgw;
  var match_003 = subh / imgh;
  var fsubh = match_003;
  var fsubw = match_002;
  var fsuby = match_001;
  var fsubx = match_000;
  var set = Reasongl_web.Gl[/* Bigarray */28][/* set */7];
  var ii = env[/* batch */10][/* vertexPtr */2];
  var vertexArray = env[/* batch */10][/* vertexArray */0];
  Curry._3(set, vertexArray, ii + 0 | 0, param$1[0]);
  Curry._3(set, vertexArray, ii + 1 | 0, param$1[1]);
  Curry._3(set, vertexArray, ii + 2 | 0, r);
  Curry._3(set, vertexArray, ii + 3 | 0, g);
  Curry._3(set, vertexArray, ii + 4 | 0, b);
  Curry._3(set, vertexArray, ii + 5 | 0, a);
  Curry._3(set, vertexArray, ii + 6 | 0, fsubx + fsubw);
  Curry._3(set, vertexArray, ii + 7 | 0, fsuby + fsubh);
  Curry._3(set, vertexArray, ii + 8 | 0, param$2[0]);
  Curry._3(set, vertexArray, ii + 9 | 0, param$2[1]);
  Curry._3(set, vertexArray, ii + 10 | 0, r);
  Curry._3(set, vertexArray, ii + 11 | 0, g);
  Curry._3(set, vertexArray, ii + 12 | 0, b);
  Curry._3(set, vertexArray, ii + 13 | 0, a);
  Curry._3(set, vertexArray, ii + 14 | 0, fsubx);
  Curry._3(set, vertexArray, ii + 15 | 0, fsuby + fsubh);
  Curry._3(set, vertexArray, ii + 16 | 0, param$3[0]);
  Curry._3(set, vertexArray, ii + 17 | 0, param$3[1]);
  Curry._3(set, vertexArray, ii + 18 | 0, r);
  Curry._3(set, vertexArray, ii + 19 | 0, g);
  Curry._3(set, vertexArray, ii + 20 | 0, b);
  Curry._3(set, vertexArray, ii + 21 | 0, a);
  Curry._3(set, vertexArray, ii + 22 | 0, fsubx + fsubw);
  Curry._3(set, vertexArray, ii + 23 | 0, fsuby);
  Curry._3(set, vertexArray, ii + 24 | 0, param$4[0]);
  Curry._3(set, vertexArray, ii + 25 | 0, param$4[1]);
  Curry._3(set, vertexArray, ii + 26 | 0, r);
  Curry._3(set, vertexArray, ii + 27 | 0, g);
  Curry._3(set, vertexArray, ii + 28 | 0, b);
  Curry._3(set, vertexArray, ii + 29 | 0, a);
  Curry._3(set, vertexArray, ii + 30 | 0, fsubx);
  Curry._3(set, vertexArray, ii + 31 | 0, fsuby);
  var jj = env[/* batch */10][/* elementPtr */3];
  var elementArray = env[/* batch */10][/* elementArray */1];
  Curry._3(set, elementArray, jj, Caml_int32.div(ii, Reprocessing_Common.vertexSize));
  Curry._3(set, elementArray, jj + 1 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 1 | 0);
  Curry._3(set, elementArray, jj + 2 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 2 | 0);
  Curry._3(set, elementArray, jj + 3 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 1 | 0);
  Curry._3(set, elementArray, jj + 4 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 2 | 0);
  Curry._3(set, elementArray, jj + 5 | 0, Caml_int32.div(ii, Reprocessing_Common.vertexSize) + 3 | 0);
  env[/* batch */10][/* vertexPtr */2] = ii + (Reprocessing_Common.vertexSize << 2) | 0;
  env[/* batch */10][/* elementPtr */3] = jj + 6 | 0;
  env[/* batch */10][/* currTex */4] = /* Some */[texture];
  return /* () */0;
}

function drawImageWithMatrix(image, x, y, width, height, subx, suby, subw, subh, env) {
  var partial_arg = env[/* matrix */16];
  var transform = function (param) {
    return Reprocessing_Matrix.matptmul(partial_arg, param);
  };
  var p1 = Curry._1(transform, /* tuple */[
        x + width | 0,
        y + height | 0
      ]);
  var p2 = Curry._1(transform, /* tuple */[
        x,
        y + height | 0
      ]);
  var p3 = Curry._1(transform, /* tuple */[
        x + width | 0,
        y
      ]);
  var p4 = Curry._1(transform, /* tuple */[
        x,
        y
      ]);
  return drawImage(image, p1, p2, p3, p4, subx, suby, subw, subh, env);
}

function drawImageWithMatrixf(image, x, y, width, height, subx, suby, subw, subh, env) {
  var partial_arg = env[/* matrix */16];
  var transform = function (param) {
    return Reprocessing_Matrix.matptmul(partial_arg, param);
  };
  var p1 = Curry._1(transform, /* tuple */[
        x + width,
        y + height
      ]);
  var p2 = Curry._1(transform, /* tuple */[
        x,
        y + height
      ]);
  var p3 = Curry._1(transform, /* tuple */[
        x + width,
        y
      ]);
  var p4 = Curry._1(transform, /* tuple */[
        x,
        y
      ]);
  return drawImage(image, p1, p2, p3, p4, subx, suby, subw, subh, env);
}

function resetSize(env, width, height) {
  env[/* size */18][/* width */1] = width;
  env[/* size */18][/* height */0] = height;
  var match_000 = Curry._1(Reasongl_web.Gl[/* Window */2][/* getPixelWidth */2], env[/* window */1]);
  var match_001 = Curry._1(Reasongl_web.Gl[/* Window */2][/* getPixelHeight */3], env[/* window */1]);
  Curry._5(Reasongl_web.Gl[/* viewport */44], env[/* gl */2], 0, 0, match_000, match_001);
  Curry._5(Reasongl_web.Gl[/* clearColor */6], env[/* gl */2], 0, 0, 0, 1);
  Curry._7(Reasongl_web.Gl[/* Mat4 */51][/* ortho */6], env[/* camera */0][/* projectionMatrix */0], 0, width, height, 0, 0, 1);
  return Reasongl_web.Gl[/* uniformMatrix4fv */52](env[/* gl */2], env[/* pMatrixUniform */8], env[/* camera */0][/* projectionMatrix */0]);
}

function createImage(width, height, env) {
  var context = env[/* gl */2];
  var texture = Curry._1(Reasongl_web.Gl[/* createTexture */17], context);
  var filter = RGLConstants.nearest;
  Curry._3(Reasongl_web.Gl[/* bindTexture */19], context, RGLConstants.texture_2d, texture);
  Curry._5(Reasongl_web.Gl[/* texImage2D_null */42], context, RGLConstants.texture_2d, 0, width, height);
  Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_mag_filter, filter);
  Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_min_filter, filter);
  Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_wrap_s, RGLConstants.clamp_to_edge);
  Curry._4(Reasongl_web.Gl[/* texParameteri */20], context, RGLConstants.texture_2d, RGLConstants.texture_wrap_t, RGLConstants.clamp_to_edge);
  var framebuffer = Curry._1(Reasongl_web.Gl[/* createFramebuffer */21], context);
  Curry._3(Reasongl_web.Gl[/* bindFramebuffer */22], context, RGLConstants.framebuffer, framebuffer);
  Curry._5(Reasongl_web.Gl[/* framebufferTexture2D */24], context, RGLConstants.framebuffer, RGLConstants.color_attachment0, RGLConstants.texture_2d, texture);
  Curry._2(Reasongl_web.Gl[/* bindDefaultFramebuffer */23], context, RGLConstants.framebuffer);
  return /* record */[
          /* glData : Some */[/* record */[
              /* framebuffer : Some */[framebuffer],
              /* texture */texture,
              /* height */height,
              /* width */width
            ]],
          /* drawnTo : false */0
        ];
}

function drawOnImage(image, env, cb) {
  var match = image[/* glData */0];
  if (match) {
    var glData = match[0];
    var context = env[/* gl */2];
    var match$1 = glData[/* framebuffer */0];
    var framebuffer;
    if (match$1) {
      framebuffer = match$1[0];
    } else {
      Curry._3(Reasongl_web.Gl[/* bindTexture */19], context, RGLConstants.texture_2d, glData[/* texture */1]);
      var framebuffer$1 = Curry._1(Reasongl_web.Gl[/* createFramebuffer */21], context);
      Curry._3(Reasongl_web.Gl[/* bindFramebuffer */22], context, RGLConstants.framebuffer, framebuffer$1);
      Curry._5(Reasongl_web.Gl[/* framebufferTexture2D */24], context, RGLConstants.framebuffer, RGLConstants.color_attachment0, RGLConstants.texture_2d, glData[/* texture */1]);
      framebuffer = framebuffer$1;
    }
    Curry._3(Reasongl_web.Gl[/* bindFramebuffer */22], context, RGLConstants.framebuffer, framebuffer);
    var newrecord = env.slice();
    newrecord[/* camera */0] = /* record */[/* projectionMatrix */Curry._1(Reasongl_web.Gl[/* Mat4 */51][/* create */1], /* () */0)];
    newrecord[/* batch */10] = makeLocalBatch(env);
    var newrecord$1 = env[/* style */13].slice();
    newrecord$1[/* strokeWeight */1] = env[/* style */13][/* strokeWeight */1];
    newrecord[/* style */13] = newrecord$1;
    newrecord[/* styleStack */14] = List.map((function (s) {
            var newrecord = s.slice();
            newrecord[/* strokeWeight */1] = s[/* strokeWeight */1];
            return newrecord;
          }), env[/* styleStack */14]);
    newrecord[/* matrix */16] = Reprocessing_Matrix.createIdentity(/* () */0);
    newrecord[/* matrixStack */17] = List.map((function (m) {
            var mm = Reprocessing_Matrix.createIdentity(/* () */0);
            Reprocessing_Matrix.copyInto(m, mm);
            return mm;
          }), env[/* matrixStack */17]);
    var init = env[/* size */18];
    newrecord[/* size */18] = /* record */[
      /* height */glData[/* height */2],
      /* width */glData[/* width */3],
      /* resizeable */init[/* resizeable */2]
    ];
    Reprocessing_Matrix.copyInto(env[/* matrix */16], newrecord[/* matrix */16]);
    Curry._5(Reasongl_web.Gl[/* viewport */44], context, 0, 0, glData[/* width */3], glData[/* height */2]);
    Curry._7(Reasongl_web.Gl[/* Mat4 */51][/* ortho */6], newrecord[/* camera */0][/* projectionMatrix */0], 0, glData[/* width */3], 0, glData[/* height */2], 0, 1);
    Reasongl_web.Gl[/* uniformMatrix4fv */52](newrecord[/* gl */2], newrecord[/* pMatrixUniform */8], newrecord[/* camera */0][/* projectionMatrix */0]);
    Curry._5(Reasongl_web.Gl[/* clearColor */6], context, 0, 0, 0, 0);
    Curry._1(cb, newrecord);
    flushGlobalBatch(newrecord);
    image[/* drawnTo */1] = /* true */1;
    Curry._5(Reasongl_web.Gl[/* clearColor */6], context, 0, 0, 0, 1);
    Curry._2(Reasongl_web.Gl[/* bindDefaultFramebuffer */23], context, RGLConstants.framebuffer);
    var match_000 = Curry._1(Reasongl_web.Gl[/* Window */2][/* getPixelWidth */2], env[/* window */1]);
    var match_001 = Curry._1(Reasongl_web.Gl[/* Window */2][/* getPixelHeight */3], env[/* window */1]);
    Curry._5(Reasongl_web.Gl[/* viewport */44], context, 0, 0, match_000, match_001);
    return Reasongl_web.Gl[/* uniformMatrix4fv */52](context, env[/* pMatrixUniform */8], env[/* camera */0][/* projectionMatrix */0]);
  } else {
    return /* () */0;
  }
}

function clearImage(image, env) {
  image[/* drawnTo */1] = /* false */0;
  var match = image[/* glData */0];
  if (match) {
    var match$1 = match[0][/* framebuffer */0];
    if (match$1) {
      Curry._3(Reasongl_web.Gl[/* bindFramebuffer */22], env[/* gl */2], RGLConstants.framebuffer, match$1[0]);
      Curry._2(Reasongl_web.Gl[/* clear */45], env[/* gl */2], RGLConstants.color_buffer_bit | RGLConstants.depth_buffer_bit);
      return Curry._2(Reasongl_web.Gl[/* bindDefaultFramebuffer */23], env[/* gl */2], RGLConstants.framebuffer);
    } else {
      return /* () */0;
    }
  } else {
    return /* () */0;
  }
}

var Matrix = 0;

exports.Matrix               = Matrix;
exports.getProgram           = getProgram;
exports.createCanvas         = createCanvas;
exports.makeLocalBatch       = makeLocalBatch;
exports.drawGeometry         = drawGeometry;
exports.flushGlobalBatch     = flushGlobalBatch;
exports.maybeFlushBatch      = maybeFlushBatch;
exports.addRectToGlobalBatch = addRectToGlobalBatch;
exports.drawTriangle         = drawTriangle;
exports.drawLineWithMatrix   = drawLineWithMatrix;
exports.drawArc              = drawArc;
exports.drawEllipse          = drawEllipse;
exports.drawArcStroke        = drawArcStroke;
exports.loadImage            = loadImage;
exports.loadImageFromMemory  = loadImageFromMemory;
exports.drawImage            = drawImage;
exports.drawImageWithMatrix  = drawImageWithMatrix;
exports.drawImageWithMatrixf = drawImageWithMatrixf;
exports.resetSize            = resetSize;
exports.createImage          = createImage;
exports.drawOnImage          = drawOnImage;
exports.clearImage           = clearImage;
/* Reasongl_web Not a pure module */

},{"bs-platform/lib/js/list.js":8,"bs-platform/lib/js/curry.js":9,"bs-platform/lib/js/caml_int32.js":41,"bs-platform/lib/js/pervasives.js":12,"Reasongl/src/RGLConstants.js":46,"Reasongl/src/web/reasongl_web.js":45,"./Reprocessing_Common.js":34,"./Reprocessing_Matrix.js":32,"./Reprocessing_Shaders.js":48,"./Reprocessing_Constants.js":17}],13:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Block                 = require("bs-platform/lib/js/block.js");
var Curry                 = require("bs-platform/lib/js/curry.js");
var Reasongl_web          = require("Reasongl/src/web/reasongl_web.js");
var Reprocessing_Common   = require("./Reprocessing_Common.js");
var Reprocessing_Matrix   = require("./Reprocessing_Matrix.js");
var Reprocessing_Internal = require("./Reprocessing_Internal.js");

function width(env) {
  return env[/* size */18][/* width */1];
}

function height(env) {
  return env[/* size */18][/* height */0];
}

function mouse(env) {
  return env[/* mouse */12][/* pos */0];
}

function pmouse(env) {
  return env[/* mouse */12][/* prevPos */1];
}

function mousePressed(env) {
  return env[/* mouse */12][/* pressed */2];
}

function keyCode(env) {
  return env[/* keyboard */11][/* keyCode */0];
}

function key(key$1, env) {
  return Curry._2(Reprocessing_Common.KeySet[/* mem */2], key$1, env[/* keyboard */11][/* down */3]);
}

function keyPressed(key, env) {
  return Curry._2(Reprocessing_Common.KeySet[/* mem */2], key, env[/* keyboard */11][/* pressed */1]);
}

function keyReleased(key, env) {
  return Curry._2(Reprocessing_Common.KeySet[/* mem */2], key, env[/* keyboard */11][/* released */2]);
}

function size(width, height, env) {
  Curry._3(Reasongl_web.Gl[/* Window */2][/* setWindowSize */6], env[/* window */1], width, height);
  return Reprocessing_Internal.resetSize(env, width, height);
}

function resizeable(resizeable$1, env) {
  env[/* size */18][/* resizeable */2] = resizeable$1;
  return /* () */0;
}

function frameRate(env) {
  return env[/* frame */15][/* rate */1];
}

function frameCount(env) {
  return env[/* frame */15][/* count */0];
}

function deltaTime(env) {
  return env[/* frame */15][/* deltaTime */2];
}

function localizePointf(p, env) {
  return Reprocessing_Matrix.matptmul(Reprocessing_Matrix.matinv(env[/* matrix */16]), p);
}

function localizePoint(param, env) {
  var match = Reprocessing_Matrix.matptmul(Reprocessing_Matrix.matinv(env[/* matrix */16]), /* tuple */[
        param[0],
        param[1]
      ]);
  return /* tuple */[
          match[0] | 0,
          match[1] | 0
        ];
}

function loadSound(path, env) {
  var sound = [/* Loading */0];
  Curry._3(Reasongl_web.Gl[/* Audio */3][/* loadSound */0], env[/* window */1], path, (function (v) {
          var match = sound[0];
          if (typeof match !== "number") {
            if (!match.tag) {
              Curry._4(Reasongl_web.Gl[/* Audio */3][/* playSound */1], env[/* window */1], v, match[0], match[1]);
            }
            
          }
          sound[0] = /* Loaded */Block.__(1, [v]);
          return /* () */0;
        }));
  return sound;
}

function playSound(sound, $staropt$star, $staropt$star$1, env) {
  var volume = $staropt$star ? $staropt$star[0] : 1.0;
  var loop = $staropt$star$1 ? $staropt$star$1[0] : /* false */0;
  var match = sound[0];
  if (typeof match === "number") {
    sound[0] = /* ShouldPlay */Block.__(0, [
        volume,
        loop
      ]);
    return /* () */0;
  } else if (match.tag) {
    return Curry._4(Reasongl_web.Gl[/* Audio */3][/* playSound */1], env[/* window */1], match[0], volume, loop);
  } else {
    sound[0] = /* ShouldPlay */Block.__(0, [
        volume,
        loop
      ]);
    return /* () */0;
  }
}

exports.width          = width;
exports.height         = height;
exports.mouse          = mouse;
exports.pmouse         = pmouse;
exports.mousePressed   = mousePressed;
exports.keyCode        = keyCode;
exports.key            = key;
exports.keyPressed     = keyPressed;
exports.keyReleased    = keyReleased;
exports.size           = size;
exports.resizeable     = resizeable;
exports.frameRate      = frameRate;
exports.frameCount     = frameCount;
exports.loadSound      = loadSound;
exports.playSound      = playSound;
exports.deltaTime      = deltaTime;
exports.localizePoint  = localizePoint;
exports.localizePointf = localizePointf;
/* Reasongl_web Not a pure module */

},{"bs-platform/lib/js/block.js":37,"bs-platform/lib/js/curry.js":9,"Reasongl/src/web/reasongl_web.js":45,"./Reprocessing_Common.js":34,"./Reprocessing_Matrix.js":32,"./Reprocessing_Internal.js":33}],47:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var $$String = require("bs-platform/lib/js/string.js");

var d_a647e4659c173b8e2a1beed6e11eefcd = "ql\x95\x07\x90p\x8f\x05\xce\x03|M\xa5`\x17@B\xb7C\xf0N1\0\xf8\xab|\x07\xe4!\xe2\x9c!\x8e\xca\xbb\x81\xb4\xb1\xe3\x9b\xe7s\xa1x\x9f#%\xa5\xee\xbf\xf1<\xab\xb30,T\x16<\xc0\x97\x97\x0b\xd7\x90Vs}\x05\0h+\xf7\xfa\x0f\x01\x80\xc6c\xd5Rb\xd5\x94Y\x10\x1c\xb0\xae\x02\0q\xe3w*\xe1\x17*\xe7\x95X\xe8\xc6\xa3\xec\xdcyF\xb0\x19\x07\x8f\x93oO\x02v\x90\x97\xc5\xb6N\xbc\x0f.\xb7\xc2\x15xM\xc82\x97\x1c+vZv\x1f\x89\fU#0\x99\xda\x19\0<\x01\0p<\xdbg\x06\x94\xad\xc0{Z\x05\xf7\x14\xb2\xcc\x947\x1a:*S\x11\x03\x80O\x05\0\xd7%\x9d\n\x9cS[\xf4\xe2*^\x1d\t\0>\xaf\x06?Sir\xda(\xbd\x0b\xa35\xc5C\xef\xa2x-t7%\x9f\x9b\x1f\x12w?!'\x83\x93R\xd2\x0eHi]\xc7\x10\xb9n\xb8n@\x89,\x06\0\xef\x06\x80I\xe0\x9a\xf6 +Vq?\xd7\x19\0\xfcz\xbe\xdaC\xda\x90\xd5\xde\b\0>\xea\xb8\xd2\x1e$\xf5\x8c\xbe\n`r\0\x80\x84\xb0\x02W\xab\xcd\x02k\0\x06\0\xbf<\xac\x9c\0\xe06o\xc1\x8d\0\0\xf0{\xeb\xcd\0\xe0E\0\0\xc0\xf3\xae\xe3E\x1c\xfa\xdcy\x9e\xe5e\0\x80+\xf24\t)\x1c\x07\x7f5C\xcd\x05k}\x03:y\xe8\xfeo6\0\x90\x01\xc0B\xc4\xf75\xfa\x9d\xd0\xe7:&DHe\x04Z\x0b>G\xec\xc6.\x91\xdf\xb3=\xe7\xfb\xd7zh\xdd\x1b\0\x10\0@\xd5l\xe3\xb8>\xf497\xd6\xe5\x88(\x9fH\xde!%\xbepe\x83x\x8eD\x13\x03\x80\xc7\0@E,\xe4\x19\xfe\xddk\x0e}ng\x14\xe1\r\xec=\x93\"\x14\xc0\x03T%aC\r\xfe\xc9Hs\xc4\x02\rMYZ@\xce\xd5\xd8@\xfc\x94\"\xd7@\xc4\xfe\xbe\x86+\xd1\0\xa0 \0\xb8\xd6\xec\b(\xf6H|\xae\x86\xcf\xa1a\x92XuL\x91\xde(\x17\xa3\xb4\xa45\x14v\xcc\x10\xdf\x94\xe5\x03;jN#%K\xc2\xef\xb7\xca\x9c\x8b\x01@a\0\x18<\x89\xac\xda\xf3\0}<n\x03\xe8\xa8\xc9\x9e,\xb8\xe5\xb5c\xe2~\t\xe0a\xc0p\xa7\x02\x8d\xa0\xe3X\xc4\x8a\xebN\x19\xc2\x03\\F\xc2j\xfb\x9a\xc5|\xd73\x13\xde\x83\xfb\f\xce\xc4\x1b\x95O\x8a\xb5\xfe\x06\0\x17\0@\xed\x89\xef{\x8f\xb5\xf7\xf1\xb8-\xf0Y=\xd8\x14\xf3\xb1D9b\0C\xc2\x81\xe7k\xc2\xe1~\xaff\xfe/\xd9\xfa\xa5z\xf9Wb\x1d\x8d\x99\xac\xbf\x01\xc0\x05\0\xe0\xba\xfb+Rl\xec\n\xbb\xdb}\x15\\\x9f\x05?\x9bC|\xa3\xd0\xcf84\xb5\xd9f\x86\xdf\xb5\xf6}D\xdc\xdf\x0b\xdfS+\b=\xa4\x93\xa0\xa8\xd2\xe3\x01d\x04\xa2\xb8\x97\x1f\x98\xd0\xd0\x07fK&\xebo\0\xc0<\x94M\xb1\x98G\xa1{I\xc5\xf5\x0b\xfcK\xf2p\x15\x0f[\x05\xba\xca\xba#\x01\x94p\xb3\xcb\f\xffr*J\xef\x95\x1am\x1dz\x9f\x7f\x18\x0f\x8dS\x02\xea\xb3\x1a\xe6aIe\xe7H(\xf8\x9a\xc9\xfa\x1b\x000\x16\xfb\x0f\x83\xe4\x87\x10\0\xb0\x15\n)\xf6\x80\xc0\xe7\n\xf7\xbf\x01?\xe1\t\xb6\xfe\x1b\xe4c\x88m\x02\xc0\xd2)\xcf\xd1\x83.\xd3\xfd\x87Q\xc6\x94D\xab\x86J\xbe\x02~\xc2\xb0\x16\0\xb6\xc8{0\0\x88\xb0\xec\xbe\x8c1\xb7\x10\x0f\xe0\xab\xfej\x88\x1f#\x1d\xab\x88\x07\xc8\x07V\xb6\xc8\xd2\xa5L4\xc6e\xae\xa5z\xcc;\xe6\xdef\xc8\x93h\xd5n\xab\x86\xae\xe9\x10\0\xc0\x12\0\xb1=\xe1\xba\r\0\x02\x16\xdb\x9d\xe7v\x1e;\xb2\xd2\x12E\x9d\x85\x0b\x1e\x97\x07\x97*\x81\xc5\xae\xb8\xc6\xad\x1f m\xa21V\xccR\x05?\x98\xf5\xa6%\x94\xea@\xd7\x86\xf7\xf1g&<\x89\x05\x80#\x10\xdal\x84\xd7\x10\xea<\xed\r\0\xf2\t\xb7\xbf\xbc1/\x85r5)\xcb9A\xfc \x8b\x14\x0b\xac}\x91\xb1\xd3v|\xe1S\xced\xa7o\xdbLB\xaa\xba:\xb9\x10\x8ako\x10\0w#\xb8\xc6\x10`\xb4\x81\xe7:\x05B\xc7>q\xad\x18\0\b\\^l)'\xc7\xea\x9d^A+X\xf4\xae\x17Q\x11V\xeb\xfcLW\xf0\xde\xf6D\xf7\xbbO\xb0\xde\x98\xfc2\x07\x91g(\x84:\x18pv\xafc\x0b\xe4@$^\xd9\xacx\x9e\xdc\xa8\xad\xd9s\x1d\xa1s\xa7X\x7f\x03\x80/\x95\x0et3\xef(@\xd3*\xac\x8f\xb6\x9a\x1a\x8c\x91\x12V`\x8f\xadf\\\xf7\xf3s\r\xe31\xf9\x9eY\x0bq\x8c\xbc\x7f\b\x80=\xd0o\xf6\x19c\x7f\x03\x80/\x16\xcd\xe8\xb3R\xc0\x83+#\x8f\x02\xd7\xd4\0=\xf3\xde\x07\0\x14\xa0q\xf5\x02\xbe\xb0\xc3m\xa3\xc5c\xe2Sz1\xdc0\xaa\xf5\x003\xce_4\x06\0&\xbe\xf8\xfd\xaa\x17\xc8m\x9br3\xf2R~w\x07\xd9\xac<n[\xb3f<\x15<\x95(t\xf4\x90\xce\xf6;\x02\xbd\x8b %\xef0\0`\xe2\xe3:\xf1\xf3\xdasI\xc7:\xa50\xe0\xdcA\"\"i\x06\xe2\xacu\xac\xf4\x84\xe2\xa6\xb4*S\x1e\x96O\x11w\xe7]\xc4(\x1eg\xfd\x07\xe4\xa1\x9c\x9e\xc7F\x84\n\x06\0L\xbc\xc7e\xa6\xb9R\xd3\x01\xe4;\x05\x15\xf3B\xee\0\x80\xd3u\xe5\x8eZ\xb8`(\xc5\x8e%\x10\xd1\xc4\xba\x7f\x12\xbd\xa1U\xf8\xec*\b\xb3\x04\xd7\x89\xf7\x18\xb2\xfe{\xe0\xef\x8d`-\x18\0\x04^\x10\x97`\xe1f\xc8k\xce\xd5\x0b\xce%\xe1\x82\xc7CK\xab\x04\0\x18!\x8dgOK\xed\x85\xb7\xc8\x06\xe6=5\x89\0\xb0\x80\xae\xe8j\x85t\xef\xa9\x85\xf8B\xaf\x90\xf5\xe7Z\xc7\xb7\xc0\xf34\0\x10\xb8\xa3\x8d\xc0b\x1f\xc2s\xb5\x02\xf72\xc5\xfd\xc5\xd6\x96\x9b\0\\\x15\x04\0M\xb9t(I\xc9\xdd\xc3\xa1\x04\xf4\x83\xf0\xd0$\xd68\xc4\xf3\xe8\x82\xb3\xe6\x1d\xc5\xee\xa2\xac\x04\xa8P\x05O\xa3\x01\x80>n\x9c\x04\x9f\x99\x85\xe7\x92\xf4\x81\xcf\x19\xae\x99Z\\\x1a\xb7\xb7\x16z\x1amd\xdc\x1f\x02Vn\xf4\xba\xa6\x19h$\xae\xa3V\0bK\xbc\xa3Aq=;\xc4m\xdf\xd5\xc4\xbb5\0( \x1c\xab\xef\xaa@\xf2\x83\xb1X\x13\xa4\xd5\xd7Kz\xda}\xbf\x95\xb2\xe5F\x01\x894\xee\x97\xde\xcf\xc4$\xf6*\xe1yZ\xe6>F!(\xb5\xc4\xef\xacB\xe5\xd1V>\xce\x84\x81h\x84\xf7h!@\xc4\x03\xf7)\xb8&\xb6\x97\xe4\n\x0e\x88/\xeah\x94\xaev\xa3t\xa1c\0\xe0\n\xc1\x05D\xad\xc7*K\xea\x0bp\x1d\xc2\x80\xdew-LNbR\x93\x1a\x01\b\xae\x03\xd0\x80\xa2\xbb\xdej\xc6\xc8LD\xa8jI\xc0H+4\x11VtP\x9ek\x89\b7$I!M\xf8\xb0Cz\xc7\xe1\xdd\0\x80\xadr\n\x0f\x1fVr\xae\x07D\x02\xc4\x14\x9f\x826\xf6\x9f\x05\xefw\n\x9c\x7f\x06\xdb\x06\x8c\x96\x10{\x8b\x843\x80R\xba:\x10\xcf\xd6\t\n\xa0)\xa3m!\xbd\xebp{\xc8B\xa0\xc8<w\x90\xd7\xc97@\x17\xf2H\xc8Eq\xf5\xa1\x0f\x88\xb4\xe1P-\\\x1f\xeez8\xe0w\x7fCG\0\x80M\x06\n\x88/\xb9#\xa1\x99\xe2\xce5x^\xae\xb6\x0e~\x01=\x95V\xc8\x82\x1f\x8a\xdcC\xedQ\x94\x969w\xcc\xae\x86\x86\xd4\xb3\x86\xdf\xb5\t\x1d\xc4\xb7*\xe3sU\x19\xce\xd1$\x02\x9c\xd4\xbb\x9b@\xd6\xdf`\0 \xb4\xb2\xd8\xbd\x9e#\x13v\x95G\xd95EG!\xab\x17\xdbE\xe7s\xa1\xd7\x9f\xeb\xa8<\n\xd6\x05\xac\xed\x12\xf8|JQ\x0f\xe6\x1c\xa8\xc1\xa4\x84\x84vx\xaa\xc8\xcf}\xa4,(\f\xd8\x13\x12h\x0b\n\x1d\x96\x88Pb\x84|\xa4!\xd2\xfa\xf5\x18n\xc0X\xce\x01_R\xce\xc4\xe46\xc1\xf3\xf9R\xb6\xd0\xf0\xb9\x0e\xa5\x85\x94\x8e\x14\xd7J\xaf\0\x82]\xe1\x16\xaf\xa0\xcf|\xaf`\xa3\xc1L\x1e&\xbe\xecn\x93x\xae]\xa9\xc8M!\xe5\xf7\xc5\xd2>Zp\t\xf1\tg\xcd9\xd0\xccA7fb\x92]|\x89\x95\\\xe7:\"@\xe8\0\xf9\xf4\xdf\xe9\xe6g7\b\x81\x93\x9b\x1edbr\x9b`\xeb;d<\x974\xbb\x1b;\xfcs}\xc0\xf3\x93\xb0\xfe\x98\xebo\xf2h\x19 ~[\b\xcb\x16\x11J\x8c\x91\xc7\x13\x06\x8bb\xd0\x1b\xcd\xf57\xf9V\xa92\x85\x12%\xad\xb4\xd6#\xd1v\xc1\xb9[{\xb8!\xc7\\\x7f\x93\x8f\x96\\\xd3h\xde\x06\0\xd8\xf39\xdd\xfc\xc5\\\x7f\x93o\x92S\xd1\xf6\x87^WI\0\xf0u\xf9\xa52\x14\x9b\x98\x14\x979Ai{'\x1e\xe7j\xb3\xa5\n\xa7=\x9e\x02\x008\x14\xf8\xaa\xb2R\x93w\n\x8eQ\xb5n\xbb\xaf9$&3\xff4\0\xd0\x12\x9e\x86B\x81\xab\xe9\xc9MLT\x92Z\x030\x82\xbc\xa5\x94;O\xecQ\x02\0R\xf8\xf10W\xa0\xb9\xfe&\x8f\x14\xb7\xdf\x9e\x1b4Iy\x10n\x03\xc5\x13b}\xdfq@x<\xf8\xea\xf1Z\xc6\x04o\xa6\x85{\xe8\xc9ML\xd4\xf1\xbb\xeb\xe6\x9eJ2\xbf\xf8\x9er\x85\x12}\xc2\xb30\x000y\x85\x9cV\xff\xdc\x9e\x9a\x13\xe2\xdeO\x03\x80\x141\x000y\xbc\xb8qj\xe7\xb8\xf3\x9f\x9a\xb8Z/TH\x03\0\x93\xd7(\xc4A\xfc\xfd\xca\xe4\xd5\xd3v\x01\f\0L>V(BPw\xf1\x0e\x06\0\x06\0&\x9f'\x14%\xb8\x9b\x1b\xb8\xb2\x9a\xefi\xdb\x80\x06\0&\x1f)\x92f\x9d\x1e>\xafy\xc5\0\xc0\xc4\x04d\xd3[\xdc\xfa\x80\xd5\0\xc0\0\xc0\xe4sD\xda\xf7\xdfA>~\0\x13\x13\x13\x13\x13\x13\x13\x13\x13\x13\x13\x13\x13\x13\x93\xf2\xf2?\xde\xe2\xf9\xd7\xb5\xa0\xd2\x10\0\0\0-tEXtSoftware\0by.blooddy.crypto.image.PNG24Encoder\xa8\x06\x7f\xee\0\0\0\0IEND\xaeB`\x82";

var d_d89d4399cabd0fbbf0c369ca8c93e2a0 = "\x1f\x93\xc1N\x89y%\xe2c7\xf2)\xe5\x9117\x91\xca$\xbcE\x80b\x1f\xa9\xcc;\xd8v\xe0+D\xbb(\xdc\xcf\xd7\n\xe5\xa7b\xf5\x1d-\xb4\xf1\xe1\0\xd0x\x94\xbac\xc2\x12\xe9L\xc0\x92\0\xa0\xc9\xe6\xe3\xf0p\x8f\xb8\xd6\xd5\0\xe0\xb3\x93N\x12\xc5\xc2\x9d\x801S\x87b\0 e\xdb\x8b\xf3\x82v\x90\xcd\xf6\xa3@p\xbb\x01\0\xdc\xe7\"I\xd0\xd5`\xa4\x1d\x06\0\x89\0\xb01\x8b\xb6\x82\xdf\xdb\x8f\xa9\x000C\xb99\x04#\xc4\x93Y4\b\xf0\x86\x1b\0`PxpnQ\x8f%\xf3\xbe\0\0F\xe5Q\x0b\x16\xbc\xc4\xe25\n\0\xe0\xaei\x81r\xe4\xa2x\x8cZ\xaa\x1b\xbf\xdf\0\0\xae\x170\t\xef\xd5\xac\xff\x97\0@n\xd1\xec=/B\0\x90\x1e%&\x10\xb91\xf4\x9a\0\"\xeeuv7\0@\xeb\xe4\"*\xe6\xb7r\xef\xe5w\xe0O\x06\xbb\xc7d\xa0s\x9dh\x93e\x8d\xc2\xf2i\x12\x86cf\x008\xe3\xf3\x9c\xf5\n\x9a\x1d\x13)\xd8M7\0\x80{/#c\xfds<\xbf\x16d\xa3\xe1\xb5\x95\xa7&\x99\xad4\x97\xd0\xc2\xd6K\xda\x1b\x90:s\0\xe7\x1d\xf01\xc0\xbf\x89E\xbc\xc3\x90\x0b\x04r\xcd\xf3\x1b#=\x89\x9c\0\xe0&3\xeb\xc0\x9a\xc8Q\xf1\xd9\x81\x7f\xd7g\n\x84p3\xfc\xde1\xb2\xb2\xee\x82\x82\x8bfz!XH\x16n\t\0\x90\xde\x93\xab\xac\xb9\xb6\xa2r\x85Km\xe4\xb9\xde6R\xdc\xb5\xfa\xc7\x0f\xa0\xd4\n\x80Z }\xeb\xd4D\xb9\xb0|l\xad\xb5\xc7\x85k\x1e\f\0>%\xab\f\0nS\xfe-\xc1c\x1a\f\x04\xee\x01\x81\x18\xd2N,\xb9\xa6\x0e=e\x04\xb7\x01\x80>\xac\xcc\xe1}\xb9\xdb\xa7\x9b\xa9j9i\x81n\t\x9e\x95\x8a\xe4&\x18S\xa6\x0e\xc5*\xdej\0\x10\xcc\xa3\xe0\xe73*\xcf3\n\xeem&\xdc{\x8a\x13\xd2\xe5\x8c\xf4\x9d\xd7v\b.\xc8\x0b\xe0\x17\x14\x93H\x1b \xcf\xd4\xa1X\xc5\xdb!/9\xc5\x96\xe9|w$\x01\xaf\x02\x80\r\xe8\"\xa9\x10=\xbc;0\xf5|o{ \xac0/\xe0%\"-\x9c\xe1\xa6\x0e\xc5\0\x80\xbbg\x9f\x8b\x9eJ:\xe1\x88\x93%\xd2E~:\0\xf4\xcc\xbb\x96l\x05\xba\xe7X<\x86\xc9\xd8\x86^\x9e[\x88\x99:\xa4\x05\0\xc9\x18\xb3\x18\xe9!\xbd\xca\xf0\xaeB\xa0+\0`#\xbc\x1a\xdf:\xa8\x9dg2\x83\xac\x06`\x03\xab\x0fx=\b\x84(\xbc$\0@U\x90\x85\x86\x9a\xe4\xf4hb\x92\xa1\xa1gqe)\xb0/!\x1bS\xd8\x14\xfa\xfd\x9a\xc8\xb74\x82\xe7\xe6\xeb\t\xf1\x81\xe3\x04\xd6f\x9cUB\xb1hn~\xbf\xd0\xd4\xa13\xf6+Q\t\xb8\x17p\x15G\x88\xdf\x96j \x8da8\x05\0V\x8f\x175\x82\xbe\xb5;\xf4\xfb\x03\x01j\x8b\x10hpr\xb4&\x9e\x81\xd1\x8d\xbd\f\0\\%\xf0%\x16s\x01\xc0\xf1c\x1dJ\xc5\x88\xd8R\x1dB\xeb\x89\tD\x96D\xf0\x19#\xbf\xbbz\x14n\x8fX/c@\xc9g\xc23\x98\x15\xe7?\x14\xf7a\xf2\"\0(\xb1\xb8\xaf\x16\xdc\xd6{\xd6\xf47\x81\xcfN\x9ep\xa7\xba\xf8\x19\xf5\x1e%\xac#\xdc\xe9\xd0\xefo\x82\x1cO\x97\xb0\x1e\xf1\xf9\f\x002Ih6\x9f\x01\0\xef\t,\x10GW^\xbd\xf8\x19q^Z+\b=$9\x96\x91\te&S\xdd{<\x03\x03\x80\xdf\xb9\x8dU\xa8\xf8\xfd\x07\xad\x0b)\0hvM8\xca2\x9b=\xf8\xa5\0\xa0m\x19\xe5>\x9fB\xdbMyR\xbe\x89J\xda\xea\xc9O\x05\0\xc9:r=*_85\0\xcfc`\xa2\x14\x97\x84A\xfb\xe2&\xe2\xfbO\x06\0\xaa\xd4\xd9$\r\0\xbaH\0p\x93\x85G\xc0\xfa\x1f\xe6\xfe_g\xe9\xb9\x177g\x8ak\xdd\x05\x10*;\xe6Fv\xf7\x04\0Hj\x050\x89\xc8\x13\xa5\xfe\xb1\x80\xd8\xcbX\x14\xa1E\xa7\x04D\r\0l\xcc\xdf\xb9\x8eL\xae\xd5|3\xeb\xff\x1c\0\xc8\xad\xfc\xa5\xeeI\x9ax\x9a\x1f\xee\t`&\xe2X\xefe,\b\0K\0@'Ang$<:\x9cl\xb5\xd8\xfff\0x\xba\xf2k\x01\xc0\x97\x80J\xed\x1el\x80\x1e\x156A|W\xe5\x0e\xff2\xe8h\x88OV\x90UT\xae\x84\xe7\xc7\x15\x02aK\x8f\xfbAF\x947Y\x039\x9a\x93\xe9\xc9\x1dGg]\x807\x03\xc0\x1b\x94?\x16\0\xf0\xfd\xc5$?+\xf0\xf76\xa4p\x16Jf\xfa-B\xe0\nu\xd9\xe5\xc8\x014\xc4\xffz\xe0wH\xb8\xe7f\xca\x7f3\0\\\xa5\xfcx\xb1\xd4\x17\x02\0\xa6G\xd3V\x13n\x10W\xae\\\t\x94\x96\x8a}k\xe0\xfb\x0b\xaaLy\x0e\xca\x9d_!<<\xb6\x03\xff\x10\x98\x93}\xaa\n\xfc\xbfD9\xb7\x89\x12\x000\xb7[I\xcb\x8f\x95h\xba\x10\0\xb05\xd5\xfcv\x8b\x9e\x117*\xec\x10\xb8\xee\x9d\xc2\xbd\xe7\xe2\xe4\x16\xf2\xd4YP\xe7\x90\xcc\x81p\t\\\x1b\x0fH\xb9\xe1\x8d\xcf\xea\xa7\x8c97\x89\0\0\xdfQ*\x11S\x83\xbf\xb6\xbf\xba\x10\0b\xc9:\xb4\x89*\x89\xa7\xa3Y\xec\\\xa80f\xcaoh\x12z\xb9\x93\xa99\xe62\x98D\x02\xc0~\x81\x17\x80\x17|,\xd2\xa7\0@\x07q\x13\x90cx\x02\xdc\x04\xd8\xc0\xfc\x9fS\xda\x96Q\x8e\x05=\x13\x1f-W\x9d\x01\0|\xb9\x94\xd4\xb5Ry\xbc\xd0\xdaT\xf7:\x008\xe7\xda/Pv\xbf\x1c'\xa9b\x89 S\0 \x96\xaf\xaf\x04\xc5\x97f\xc0)\x97\x07ps\tT\x0f\x03\x97\x98\x94\x86\x11Xac\xab-{\xf4\x1c,'p1\0l\b\x89\x8fB\xa1@\xe7\xb1\x86s\xa4\xdbz\x07\0\xa4\xce\f\xccq\x1f\xd4\xe7\xb5-\xd5U\"\0\x9c\xca{\x80\xbf]\xbb%\x8e.\0R#X\x11\xd0\xe5\0\xb0z\x928%B\x81\xc5\x13\x0fk\x92`w\x03\0\xb6x\xed\x83\0\xa0\xf5\x84s#\xfc\x9e\xae\xb4\x01\xbf\xd3\xa3M$\x9e\x89\xbd\x03\xe2\xca\xb3\x8f\x9f\xd0\xd0\\\xfe\x87\0\0\x8eMs\x84\x02\x15\x11C\x1f\xa0\x1f\xee\x91\x0b\x004\xfb\xe5>\x8e\x80s\x04V\x1b\t\x94\xb9\0`\x009\x99)7\xce=e'\xa1\xff\x01\xca\x15\xe8\xca\xc6\r\xfe\xee\x02\x98\xc5\x7f \0\xd4\x99C\x81\x81H\xf8M\xa0g\xe2\xbdc\x17\0{,\xa1=\xffY\xb1\xb0s\x86\x001\0xd\x06\0\x93\x0f\x01\x80\xdc\xa1\0\xd50\")r\xc9\xa9\b\xa9\xd4\xdf\xbe1j\xd4\b\xf3\xeaa\0\0\xc8:\xb7\x06\0\x06\0\x12\xc5\x8d\r\x05\x1aA\x9c\xaf\x990\x94\xa2\b\xda\xe9\xc7\xdc\xb9N\x97wgb\xdcP\xbe\xe0\x88\x04\x80T&\xe4\xd5\0\xc0\0@\x02\0\x98\xe56&\x14\x90p\xc6\xf5J\xa0\x89\x05\x80\x05\xd2y\xff\xb9\x10a\n\0B\xabTD\xcau__\x02\0\x15\xe3mM\x11\xc6\xa55\x80z\x97\x1cB\xabu(,s\x8en\xc0\xd2e\xa6\x03\xba'\xae\xedZ\x03\0\x93'\xaf1*\x94\x82\x1a\xea\x9a\x13\0\xdckn\b\x0fS\xf2[g\x07\xe6\xec<\xcf\x11>\x8b\x8d\xe9\xe3\x04O\xda\x19\x89cS,>\r\0\xd4\xe0\x1f\x8f~\x85p<\xf8\x83\xe2\x9eG\xc2\x93\xda\x15@\xc21\xf3\xe4\x04\x80\x01d\xdc\x03\x1ds\xbd\x1c'\xe3a@\xf0L\x89a\xd5\x95\x94\xe8J'\t\x85z\xd1c\xc3\xa8\x98\xe4\xdbA(g\xad\bI6\xe2\xd9\xcc\x10\xc7\x19P\x1a\bg\xe2\x99\xb7\x02\x8f\xcf7M\x88Z3VA\xa8\xb0\"c\xc0\x8dl\x1d\xf4\xc6\xca\xb4\x80<s^C<w\x1f\xe7\xa2\xc7\x9e\xf3,y\xd6J\xca\x14b\xce:\xaf\x82{\xe6\x1a\x81Z\xe1\xb3\xbb\xba\xde\x9er\xf1G\x01\xd8c\x82\x93\x1a\xe5\0j\x04\x10\xbb\xa9x<\0\xb8\x7f\xe7\b\x1e$m\xb4\x9a\xd1\xe1\xbe\x05\xbaf\x02\x80\x15\xfe\x1dT\x99b\xc9\xb4\t+\xbc\xebP\t\x94w$\xde\x19\xb5\x1d;y\xc2\x1c\xb7\x12p\x05\xfd\xb4\xa3T\xa1\\\xfc\x85y\xcf\r\xf89\x15p\x12\x10\xd7\xac\x98\x17\x90\b\0x\xeb\xef\xf4\fpv\x9b\x8b\x115q\xa9\xef\xa5\xa7n\xd3\xe5\x94\x1a\xfc$\x17\xb9\0\xad\x07\x99\x8b\xcb=\xc7\td%\xb9%\x94\x1f\xd7\xfb\xf7\b\0\xf0\xff\x0fg\x8d\xb5\x9e{\x0b\x15\x8f\xf9v\x014\xb9\x94\xaf\x16\x8a\x99W\xc2\tP\x0b\xdd\xe1\xd8r[\0\x1d\x07\xde]\xe0y\xdeW\x1fx\x06\xb8\xd9E\x12\x9fv\x84\xf2n\n\xcb\xd6\x80\xbfP\xe9\xec\x12,\x05\xaa\x7f2\x1c\xa1\xe7\xdd2\0P;\xe1\xab\xf5\x14dx\x813\xb3P\xb9\xcf\xcd\x10\xcf\xf8S\xaa\x19)gRK{H=\xa0\n\xfee\xd4\x19\xe1=\xac8%\x01\xa0c\0\xc0$\xf3\x0b\xe4\x94\x8e\xeac\xaf\x12c\xb2*\x93\xbb\x9a\xb2\x10G\xc6]\xdfA\x9e\x7f\xf8V\x8b\x14\x1a&\xea\xe6+\x8e\bCc\0\x90 =\xf0\xc36$I.\xaa\x80\xa5\x87\xf4\xac\xec\x9c\xe1\x1c\xa5\0\xc0]\x88\xbe\x9d\x92\xb3@\xe5\x9b\x93Q\x15\xc8v>\xb8\xb5\xe6\xa3\x1b7\0(\x9c\x04\x1c\x13\xcf\xc3\xd1`I\x13J\xa9\x1c\xfe\x9aZ\x01n\x12\xd17)nO<\x93*\xe2\xfdU\x84b\x8f\xcau\xb0;\xc6\xc1\0\xe0\xa1\0\xf0\xc4\x90\xe6\xad\x92\xba\xd8W\x90\x17?\xe1\xed\xb4\xd0ND\xadX\x1fG\x84w\xe0\x0b\x05B\xd7\xb5\x83q\n\x18\0|(\0\xa4\xd2|kx\x0fp\xc5\xdd\x19\xc6\x9c\x87\x9b\xf3\x90\xcc\x8c\xa0\xf6\xf89\xef\x80\xf2Lv\x02\x98\x06S\xef<\0 \xc9\xdaK:\xfc>\x19\0\xb8\xdatIr\x90\x92\x06\xc2\xe3\xb6$\xd2(\x7fo\x04\xbe$\x99+!\xe6\xf6\xf8\xcfcr\xac7\xfe\x9f4\x8fu~\x7f\x87\xf42o\x03\0\xa40\xabR\x01rg\xb9k\xf8w,\xb9{\x94d\xdby\n\0\f\x10\x97\x94t\xad\xa5V1v\xc1\xfb\xc4\xc5P\x15\xf1\xbcsl\x03r\x9e\xd1\xe8<\xafRD\xb6_\t\0\x9ck\xa6i`\xd1&\xa04\xcdC\xdd\x8d\0\x10\x02(iS\xd2\xaa\xbc\x7f\r\0\xcc\x8e[,\x05\0\xe9\xe7$<\x02W\x03\x80\xeb\x15\x94\xe2y\xf8:\0\x98\x05\xf1]\xea\x04\x1a\xfcRq\xa2gC\n\xb4y\xe2\xbe\xfe&\0Hy\xee\xa1\xad\xd3\x03%\xb7\x96\b\0p\xf7\xce\xfb\x8b\x01\0\x87\x87\\\x02\xb0IX+\xbeg\xb2\xc3\xfb\x93\xbe\x8f\x01\x80S\x01kd\xf9\xb7\x02\xf1\x16&\xda\\\x187\x14[\xc9^\0\0\xad\xf0(\xb1w\x8f\xeb\xfc\x07\xe6Z\xcf\x8eEm\xa2\xb5F\xb1\xb7F\xb17\x81\xf7W\x81\xacB\x93\xda\xe3\xef\x14Jz\xe6\x0bf!\0h\xd8\x95\f\0\b\0\xd8\x81\xdf\x0e\xca5=\x18W\rJ\x9alp\xc6:\xb45U\"9\xa7\x95\x06dCB\xcfg\xda\x0b\xdf\x15\xa5x\xaer\xc6$\x01%\xe5\xdd\xd4\xf5P{\xfc\xa3\xc2M\x0f1D\x19\0\\\x90\x04\xac\xc1O\xc4p\x0e\x9c\xc8\xb5\xef:A\\\xe3\x0f\x06\x8e\xe9\x81\0\x80\x93q\x1b\xe3%h\xde\x15\x958l#\\{\x1c\xda\x9d\xa3\xbe|\xdb\x80\x8b0?DU\0\xce\xca\xeb\xe9\x05\0\xf0\tu\x1f\x8f\x01\0\xecri\xb6ib\x948\xa6\xe9\x07\xf7\xc9S\x000\n\x8f\x9c\x15\x80+\xa455I\x01\xa0!\x80P\x0bl\xdc^;\x07D\x9c\x8b\xaf\xa9\x10\x1d@\xc6\x07\x80\x9f\xd5bj\x9e\x17\0JI\x8eQ\xd0\x14)\xe4\x9d\x16\x01w\r6\x99\xdf\x95/\x1c\xda\x12\x92{\x12\xde=\t\xab\x12\xe5\xe27J\x17\x1d{y;\xfcf\x04\xc2^\xe4\x938$\f\0\x14.^\x89j\xc2\xbb\0 \x17\xfb\xb0\x04\0\xdc\x8c{\x13\t\0X\xd1\x16\xcf\xb9j\xa4h\x1bq\xcdk\xc0\xc2w\xf0wG'\xa6\xa7@B\x98\xd2\x9b\x8a\xbf\x07\0vHo\x1az\x1a\0\xe0\n\xbc\xb9\xd0\xbb\xc2\xee\xf6\xc0<\x03i\xe1\xd1\xce(\xe7\x02\xd7\xd1\xaa\xbb\xe03\x03\x9d\x98\xd6\x10\xa6\x18\0<\x04\0R\xbb\xfd\x9e\x06\0\xd8\x92\xae\x05\xdf\x95\xfb[\x12\xeeD\xe9\xf4\xa7^\xa0\x8cw\x95\xdd\xd6?`\x85\xe7\x02X\xe5\xdf\x07\0\0|\0\0l\nK\x9a\xfa\xae\xf0(\xb5P]\x83k!C\xb5\x0e\x1a\"\x18|\x9fw\x88\xf1\x01\x14ZT%\x8ba>\x1d\x000\xddvS\xf8]\xe5\xecC\xd0>\xa7\xd5\0\xe03\x01\xe0j9@\xdf\x16\xfaD\0\xc0\xcd;\xfd\x05\xef\xaa\x14\0H\x80\xebn\x0f\xa0\x02#\xff\x8c\x96\xe9A\0P\xbar\xeb\n\0\xc0Y\xea)\xe3\xb9%C\\\xb8\x03\x17p\xf9j\x1d4\fNw\xe6\0L2\xc8\x0e\xcf)\x97\xcc\x01F\xc3O\f\\\xdd\0\0\x98A'w\x01J\x0eo\xad\xe4.\x80\x11p\xbcDN\xe2J\\?\x9f\xc3\xe2\xb5\xc2\x05\xec[\x80\x1d\xa4\x11\x7f\xe2\xfe\xf4\xfaB\0\xc0\xfd\b\xb9z#\xee\0\0l\x18\xb6\x9fw\xe3>\xcf\x06l\x04\xd7k\xc5\xd7F\x9b\x92\xa4\x92\x14\x844 +\x83=\x12<\x12\t\x8bM)Y\xa0\xfcP\xca+\x01\x007-\xbdy\b\xe79\x94\x05\xcf\xb4\xfc\xda\xedB\x1c\x17\xd6\x99Aed\xacc't?5J\x8c\xad\x7f\x7f\xf1\xf3,]\xc3p5\0\x9c\xef\x8d\x1b|\xa2\xa9\xe2\xbbk\xad\xa7\xd2\xbd\x9b\b\x84\x9a\xe1\xe7z\b\x93`\xd1\xb9\xee\xe7,\xfc\xed\xe3F\xeb\x8f\xad\xe1\x1ay<\r\0\\p\x1d<\x86\xe3\xe9\x95vx\x1c\x9d;\xd32\xc5\xd34Q\xb8\xe0-\xe8\x8ba|\xdc\xef>O\xa5\xf6X(\xce\x1dM\xc9\x03\x84\xbe\xfb\x07\xae\xa3\xbf2\x89\xf3J\xfbL\x9e\xa6\x89\xe2\xa1c\xa4\xd5X\x8c>B\x81$\xb1\xa8\x01\xc0\xf7\b\x97\xa0\xb4g\x0f\x7f\xf9\xd5\x17\x8fK:E\xe4\x07B\xc9\xa3\x18\x97\x15\xcf\xb0\xa7\x0e\xe9\xb5\x96\0\0\x93g\xcaa\0@K\x07\xe9\xfd\xde>\x19 /\xabN\x03a\xd6\xddI\xe9Y\xbc\x15\0\xba\x9fp\xc7G\x8b\xaeaC\xceU!HU\"jb\xea\x92e\xc4\xee\xceLG\xac\xfd\xaf\f\x01\xb0\xa5\xdeQ\x82g\xf6\x80@L\xf2%W#Ln\xb7\xf0-\0 \x19\xcf\xc5\x8d\xe8\xba\x1a\0\xf6\x87\0@\x1fx>\x98q\xfa+\x93\x80n\xac>\x13\x8bo\x07\xdd\x80\x85*\xb0`'\x03\x80\xa8\xf0\f\x17\xdbL\xf0o6{\x17xZ\x9a\x9d\b\x8aWQ\n\0\x9a\x90\xaft#\x91o\xbc\xd9\x13\xd7\xe5\xa5\x82\x91\xb1\x12~V\x82\xec\x0b\x84\x93\x80\x9d\x01\x80J\xa4\xb3\xfc\xdcg\xdcgZ\x173s\xff\x92f\xa4\xe6\x01\0@\x154}-[\x90\xb6~{\x15\xbeT\xdf4\x96\x0e\xd2\x880S3\xeb\xe3K\x01@C\x90\xdad\xc8\xb74\x82\x90M\x0b\0k\x06\x008;\xfdb\x89h;\xf8MjZ\xa2L\xfbU\xb2+Qz\x10\xa0&\x8eU\x9b\0\xe0,\x06\0\xe2\x85\xab)\x86Ji\xc9\xad\x841\xb1\xe4\xb9be\x1b\x12\0`\fX\xef]\xe0Mrc\xe5\xbe\x9a.,v\xf6\x1a\x15\xdbq\xa5\xc0\xb1\xa1\0\xb6(\xda\xa3g\x16\xb1\xe6\xb8\x12\0zG94C@b\xaem\x14\x82\xcd\x012\xf6\xa8Q\xe1\xf5\x85\xae{\x10\x80{#\xcc\x9d\x9c\xe4\xa0\x0bq]\xa7\xa7Q\x19\0\xe8\x01`\x14\xb8\x8f\xa1\x8c\xec\xd5V\xf7S\x8bvv\x88\xdb\xd2\xaa#\x95\xb5#\0\0\x97s/J\0\xa8\xe17\xf5\xb7o-\xae\x82s\xba[\xd8\xbe\xc1,\x95\x07pf\x03\x009\0\xe0\x1e\x80V\xf8\xb2W\x03\x80\xac\x89\xae\xd8\xc5+\x1d\xef\x85\xdf_K\0\0^3\x94\xd7\xe7\x03\0.\xe4\x9c\b/\x80\x9b-\x11bi\xbe\x83\xdd\xf8\x11\0 qyz\xe2\xe1\xf4 \x9f\xa2S\x83\xbe\x0b\xb1$\0<9\x07\xa0\x915r\xf1\xd6\xa0\xab\xd5X\x14\0\x80\xc1%t~\x1f\0\xac\xcc\xfal\x89\x1c\xc3&0F\xbd'\x14\xfc\xaa\xaa@-\xf5\xd6\f\xf7\x15M\x18\0\xc8\xdf\xcd\x9e\xf0]\tp\x8cJ\0\x90\xcck\xe4\0@\xeb\x91J\xdfQ\xa8\xcdy\xfe\x06\0\xd0\xb6\xe7\xba\xdbQ`\0\xf0\x18\0\x98!\xbe\x04\x17\xc7\xfe\xdada%\0\0\x9f\xb5m\x1f\x02\x008Q\xf8Uc\xc4\xf0\xcbo2\xc5\x88\x06\0\xf7)\xbf6n\x8d\xe1_\x1c\x88\xfb\xa7\xe2\xee\x15\xc2u\xf7>e\x9f\x19\x85\xa4BRM\xe5*\xceS\x1c\xf0E\xcc\xc28\xee\x19\x10\xaa\xe3q\xe0[\xe1\xa4\xda(8\x7f\xab<\x9a\x0f\x04\x80\n~O\x19\x8e\t\xcb\x8e\b\xab\xd7F\x02\0\xae\x11\x19\x19\0\xe8\x81\xae#\xa0\0BZ=\x19\xf2\0\xbe\xaa1h\x14*'U9u%\0\xa46\xb3\xbc\x1d\0|\xfb\xdb1\xca\x1f\xdb\t\x17\x0b\0x\xad\xb9\x96\xd6\x07\0\xeev\xdd\x81,9\xa7\xe0\xbe";

var d_096bc231ae663e6b83097c210f8a7ac4 = " width=19 height=24 xoffset=1 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=84 x=103 y=101 width=19 height=23 xoffset=1 yoffset=2 xadvance=20 page=0 chnl=15\nchar id=85 x=104 y=57 width=18 height=24 xoffset=3 yoffset=2 xadvance=23 page=0 chnl=15\nchar id=86 x=123 y=29 width=21 height=23 xoffset=0 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=87 x=126 y=3 width=30 height=23 xoffset=0 yoffset=2 xadvance=30 page=0 chnl=15\nchar id=88 x=84 y=203 width=21 height=23 xoffset=0 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=89 x=84 y=229 width=21 height=23 xoffset=0 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=90 x=87 y=156 width=18 height=23 xoffset=1 yoffset=2 xadvance=20 page=0 chnl=15\nchar id=48 x=106 y=127 width=15 height=24 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=49 x=108 y=154 width=9 height=23 xoffset=3 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=50 x=108 y=180 width=16 height=23 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=51 x=108 y=206 width=15 height=24 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=52 x=120 y=154 width=16 height=23 xoffset=0 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=53 x=124 y=127 width=16 height=23 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=54 x=126 y=206 width=15 height=24 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=55 x=127 y=180 width=15 height=23 xoffset=2 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=56 x=139 y=153 width=15 height=24 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=57 x=144 y=206 width=15 height=24 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=33 x=145 y=180 width=4 height=23 xoffset=3 yoffset=2 xadvance=9 page=0 chnl=15\nchar id=8470 x=152 y=180 width=31 height=23 xoffset=3 yoffset=2 xadvance=34 page=0 chnl=15\nchar id=59 x=45 y=75 width=4 height=21 xoffset=3 yoffset=8 xadvance=9 page=0 chnl=15\nchar id=37 x=162 y=206 width=25 height=24 xoffset=2 yoffset=2 xadvance=28 page=0 chnl=15\nchar id=58 x=68 y=3 width=4 height=17 xoffset=3 yoffset=8 xadvance=9 page=0 chnl=15\nchar id=63 x=125 y=55 width=15 height=24 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=42 x=82 y=29 width=11 height=10 xoffset=1 yoffset=2 xadvance=12 page=0 chnl=15\nchar id=40 x=125 y=82 width=8 height=30 xoffset=2 yoffset=2 xadvance=11 page=0 chnl=15\nchar id=41 x=136 y=82 width=8 height=30 xoffset=2 yoffset=2 xadvance=11 page=0 chnl=15\nchar id=95 x=22 y=193 width=19 height=2 xoffset=0 yoffset=29 xadvance=18 page=0 chnl=15\nchar id=43 x=59 y=237 width=15 height=15 xoffset=2 yoffset=6 xadvance=19 page=0 chnl=15\nchar id=45 x=44 y=125 width=9 height=3 xoffset=1 yoffset=15 xadvance=11 page=0 chnl=15\nchar id=61 x=41 y=240 width=15 height=10 xoffset=2 yoffset=9 xadvance=19 page=0 chnl=15\nchar id=46 x=82 y=42 width=4 height=4 xoffset=3 yoffset=22 xadvance=9 page=0 chnl=15\nchar id=44 x=97 y=57 width=4 height=8 xoffset=3 yoffset=22 xadvance=9 page=0 chnl=15\nchar id=47 x=143 y=55 width=9 height=24 xoffset=0 yoffset=2 xadvance=9 page=0 chnl=15\nchar id=124 x=143 y=115 width=3 height=30 xoffset=3 yoffset=2 xadvance=8 page=0 chnl=15\nchar id=92 x=147 y=82 width=9 height=24 xoffset=0 yoffset=2 xadvance=9 page=0 chnl=15\nchar id=34 x=125 y=115 width=9 height=8 xoffset=1 yoffset=2 xadvance=11 page=0 chnl=15\nchar id=39 x=77 y=237 width=4 height=8 xoffset=1 yoffset=2 xadvance=6 page=0 chnl=15\nchar id=64 x=149 y=109 width=30 height=30 xoffset=2 yoffset=2 xadvance=32 page=0 chnl=15\nchar id=35 x=157 y=142 width=17 height=24 xoffset=0 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=36 x=177 y=142 width=16 height=29 xoffset=1 yoffset=0 xadvance=18 page=0 chnl=15\nchar id=94 x=3 y=240 width=14 height=13 xoffset=1 yoffset=2 xadvance=15 page=0 chnl=15\nchar id=38 x=186 y=174 width=20 height=24 xoffset=1 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=123 x=155 y=29 width=9 height=30 xoffset=1 yoffset=2 xadvance=11 page=0 chnl=15\nchar id=125 x=159 y=62 width=9 height=30 xoffset=1 yoffset=2 xadvance=11 page=0 chnl=15\nchar id=91 x=190 y=201 width=7 height=30 xoffset=2 yoffset=2 xadvance=9 page=0 chnl=15\nchar id=93 x=200 y=201 width=7 height=30 xoffset=1 yoffset=2 xadvance=9 page=0 c";

var d_8f72a8e66d30e2a8b44b5f50ccb81b54 = "hnl=15\nchar id=32 x=0 y=0 width=0 height=0 xoffset=1 yoffset=2 xadvance=9 page=0 chnl=15\nkernings count=97\nkerning first=32 second=65 amount=-2\nkerning first=32 second=84 amount=-1\nkerning first=32 second=89 amount=-1\nkerning first=49 second=49 amount=-2\nkerning first=65 second=32 amount=-2\nkerning first=65 second=84 amount=-2\nkerning first=65 second=86 amount=-2\nkerning first=65 second=87 amount=-1\nkerning first=65 second=89 amount=-2\nkerning first=65 second=118 amount=-1\nkerning first=65 second=119 amount=-1\nkerning first=65 second=121 amount=-1\nkerning first=70 second=44 amount=-4\nkerning first=70 second=46 amount=-4\nkerning first=70 second=65 amount=-2\nkerning first=76 second=32 amount=-1\nkerning first=76 second=84 amount=-2\nkerning first=76 second=86 amount=-2\nkerning first=76 second=87 amount=-2\nkerning first=76 second=89 amount=-2\nkerning first=76 second=121 amount=-1\nkerning first=80 second=32 amount=-1\nkerning first=80 second=44 amount=-4\nkerning first=80 second=46 amount=-4\nkerning first=80 second=65 amount=-2\nkerning first=82 second=84 amount=-1\nkerning first=82 second=86 amount=-1\nkerning first=82 second=87 amount=-1\nkerning first=82 second=89 amount=-1\nkerning first=84 second=32 amount=-1\nkerning first=84 second=44 amount=-4\nkerning first=84 second=45 amount=-2\nkerning first=84 second=46 amount=-4\nkerning first=84 second=58 amount=-4\nkerning first=84 second=59 amount=-4\nkerning first=84 second=65 amount=-2\nkerning first=84 second=79 amount=-1\nkerning first=84 second=97 amount=-4\nkerning first=84 second=99 amount=-4\nkerning first=84 second=101 amount=-4\nkerning first=84 second=105 amount=-1\nkerning first=84 second=111 amount=-4\nkerning first=84 second=114 amount=-1\nkerning first=84 second=115 amount=-4\nkerning first=84 second=117 amount=-1\nkerning first=84 second=119 amount=-2\nkerning first=84 second=121 amount=-2\nkerning first=86 second=44 amount=-3\nkerning first=86 second=45 amount=-2\nkerning first=86 second=46 amount=-3\nkerning first=86 second=58 amount=-1\nkerning first=86 second=59 amount=-1\nkerning first=86 second=65 amount=-2\nkerning first=86 second=97 amount=-2\nkerning first=86 second=101 amount=-2\nkerning first=86 second=105 amount=-1\nkerning first=86 second=111 amount=-2\nkerning first=86 second=114 amount=-1\nkerning first=86 second=117 amount=-1\nkerning first=86 second=121 amount=-1\nkerning first=87 second=44 amount=-2\nkerning first=87 second=45 amount=-1\nkerning first=87 second=46 amount=-2\nkerning first=87 second=58 amount=-1\nkerning first=87 second=59 amount=-1\nkerning first=87 second=65 amount=-1\nkerning first=87 second=97 amount=-1\nkerning first=87 second=101 amount=-1\nkerning first=87 second=105 amount=0\nkerning first=87 second=111 amount=-1\nkerning first=87 second=114 amount=-1\nkerning first=87 second=117 amount=-1\nkerning first=87 second=121 amount=0\nkerning first=89 second=32 amount=-1\nkerning first=89 second=44 amount=-4\nkerning first=89 second=45 amount=-3\nkerning first=89 second=46 amount=-4\nkerning first=89 second=58 amount=-2\nkerning first=89 second=59 amount=-2\nkerning first=89 second=65 amount=-2\nkerning first=89 second=97 amount=-2\nkerning first=89 second=101 amount=-3\nkerning first=89 second=105 amount=-1\nkerning first=89 second=111 amount=-3\nkerning first=89 second=112 amount=-2\nkerning first=89 second=113 amount=-3\nkerning first=89 second=117 amount=-2\nkerning first=89 second=118 amount=-2\nkerning first=102 second=102 amount=-1\nkerning first=114 second=44 amount=-2\nkerning first=114 second=46 amount=-2\nkerning first=118 second=44 amount=-2\nkerning first=118 second=46 amount=-2\nkerning first=119 second=44 amount=-2\nkerning first=119 second=46 amount=-2\nkerning first=121 second=44 amount=-2\nkerning first=121 second=46 amount=-2";

var d_0118d93503fb26f597f0e4924d5b8c0d = "info face=font size=32 bold=0 italic=0 charset= unicode= stretchH=100 smooth=1 aa=1 padding=3,3,3,3 spacing=0,0 outline=0\ncommon lineHeight=36 base=25 scaleW=256 scaleH=256 pages=1 packed=0\npage id=0 file=\"font.png\"\nchars count=91\nchar id=97 x=3 y=3 width=16 height=18 xoffset=1 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=98 x=3 y=24 width=15 height=24 xoffset=2 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=99 x=3 y=51 width=15 height=18 xoffset=1 yoffset=8 xadvance=16 page=0 chnl=15\nchar id=100 x=3 y=72 width=15 height=24 xoffset=1 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=101 x=3 y=99 width=16 height=18 xoffset=1 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=102 x=21 y=24 width=10 height=24 xoffset=0 yoffset=2 xadvance=9 page=0 chnl=15\nchar id=103 x=21 y=51 width=15 height=24 xoffset=1 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=104 x=34 y=3 width=14 height=23 xoffset=2 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=105 x=3 y=120 width=3 height=23 xoffset=2 yoffset=2 xadvance=7 page=0 chnl=15\nchar id=106 x=3 y=146 width=7 height=30 xoffset=-1 yoffset=2 xadvance=7 page=0 chnl=15\nchar id=107 x=9 y=120 width=14 height=23 xoffset=2 yoffset=2 xadvance=16 page=0 chnl=15\nchar id=108 x=22 y=78 width=3 height=23 xoffset=2 yoffset=2 xadvance=7 page=0 chnl=15\nchar id=109 x=34 y=29 width=23 height=17 xoffset=2 yoffset=8 xadvance=27 page=0 chnl=15\nchar id=110 x=51 y=3 width=14 height=17 xoffset=2 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=111 x=3 y=179 width=16 height=18 xoffset=1 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=112 x=13 y=146 width=15 height=24 xoffset=2 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=113 x=26 y=104 width=15 height=24 xoffset=1 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=114 x=22 y=3 width=9 height=17 xoffset=2 yoffset=8 xadvance=11 page=0 chnl=15\nchar id=115 x=28 y=78 width=14 height=18 xoffset=1 yoffset=8 xadvance=16 page=0 chnl=15\nchar id=116 x=39 y=49 width=8 height=23 xoffset=1 yoffset=3 xadvance=9 page=0 chnl=15\nchar id=117 x=3 y=200 width=14 height=17 xoffset=2 yoffset=8 xadvance=18 page=0 chnl=15\nchar id=118 x=3 y=220 width=16 height=17 xoffset=0 yoffset=8 xadvance=16 page=0 chnl=15\nchar id=119 x=20 y=200 width=23 height=17 xoffset=0 yoffset=8 xadvance=23 page=0 chnl=15\nchar id=120 x=22 y=173 width=16 height=17 xoffset=0 yoffset=8 xadvance=16 page=0 chnl=15\nchar id=121 x=22 y=220 width=16 height=24 xoffset=1 yoffset=8 xadvance=16 page=0 chnl=15\nchar id=122 x=41 y=220 width=15 height=17 xoffset=1 yoffset=8 xadvance=16 page=0 chnl=15\nchar id=65 x=31 y=131 width=22 height=23 xoffset=0 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=66 x=44 y=99 width=18 height=23 xoffset=2 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=67 x=41 y=157 width=21 height=24 xoffset=2 yoffset=2 xadvance=23 page=0 chnl=15\nchar id=68 x=56 y=125 width=19 height=23 xoffset=2 yoffset=2 xadvance=23 page=0 chnl=15\nchar id=69 x=46 y=184 width=17 height=23 xoffset=3 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=70 x=65 y=151 width=16 height=23 xoffset=3 yoffset=2 xadvance=20 page=0 chnl=15\nchar id=71 x=59 y=210 width=22 height=24 xoffset=2 yoffset=2 xadvance=25 page=0 chnl=15\nchar id=72 x=66 y=177 width=18 height=23 xoffset=3 yoffset=2 xadvance=23 page=0 chnl=15\nchar id=73 x=50 y=49 width=3 height=23 xoffset=3 yoffset=2 xadvance=9 page=0 chnl=15\nchar id=74 x=56 y=49 width=13 height=24 xoffset=1 yoffset=2 xadvance=16 page=0 chnl=15\nchar id=75 x=60 y=23 width=19 height=23 xoffset=2 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=76 x=65 y=76 width=15 height=23 xoffset=2 yoffset=2 xadvance=18 page=0 chnl=15\nchar id=77 x=72 y=49 width=22 height=23 xoffset=2 yoffset=2 xadvance=27 page=0 chnl=15\nchar id=78 x=82 y=3 width=18 height=23 xoffset=2 yoffset=2 xadvance=23 page=0 chnl=15\nchar id=79 x=78 y=102 width=22 height=24 xoffset=2 yoffset=2 xadvance=25 page=0 chnl=15\nchar id=80 x=83 y=75 width=18 height=23 xoffset=2 yoffset=2 xadvance=21 page=0 chnl=15\nchar id=81 x=97 y=29 width=23 height=25 xoffset=1 yoffset=2 xadvance=25 page=0 chnl=15\nchar id=82 x=103 y=3 width=20 height=23 xoffset=3 yoffset=2 xadvance=23 page=0 chnl=15\nchar id=83 x=84 y=129";

var d_37e5d986c886a357d80b4e7e80cfb0bc = "\x89PNG\r\n\x1a\n\0\0\0\rIHDR\0\0\x01\0\0\0\x01\0\b\x06\0\0\0\\r\xa8f\0\0)\x12IDATx\xda\xed]i\xb5\xacL\xac\x8d\x03$ \x01\tH@\x02\x12\x90\x80\x04$ \x01\tH@\x02\x12\x90p\xdf\xf7\xde:\xbc[7\xa7*C\r\f\xdd\xc9Z\xfc9\xa7\x9bf\xa8\xec\f\x95\xec\0\x98\x98\x98\x98\x98\x98\x98\x98\x98\x98\x98\x98\xfc\x9f\xd4\xff\x1d\xcb\x7f\xc7\x1a8F\xe6\xfb\xe3\xcf\xd1\xfewT\xff\x1d\x03\xfa~\x8f>\xff\xe7\xe7X\x13\xae\xd9\xfd\xcd\xf3\x1ef\xe5\xb5\xffq\x8eV\xf1\xdb\xb1\xdf\xc3\xdf\r\xfd\x9d:6t\x7f\xcb\xcf3\xa7dw\xbe_\t\xd7\x83\xfb\x9b\xb3\xf0\xdef\xe7;\xbd\xa9\xd5;d\x14.\xbc\xf5gaP\x8bzD\x8b\xe0<\xf6\x02\0\xe0\xfe\xe6\xc0\\\xfb\x11\xb8\xf6\x1c\0\xb0\x0b\x95*\x17\0\x84\xee\xaf\x17*f'\xb8\xc6\xdes~\x89\xb8@S\x9bj=_:dY&\xc7\xb2\x9e\xc7N(\xb2O\xa1}\x0bt(\b\0{\xc0:\x1e\x1e\0+\x01\0\x7f~\x9e[N\0\x18\x89\xc3\xf5\xd4\xf0ut\x02\x85\x96\\\xeb\xe29w\xa3\xf0\x1avS\xadw\xc8\xea |\xe8\x05WH\x99\x1a\xa1B\xb4?\xc7\xe8\xb1\x909\x01\xe0\xbc~\x9f\x15\xc6\x9e\x01\xb6J\xadsT\t\0\xa0\x01\x10\t\0H\xa5B\0\xb8\n\x94s\x13\x9c\xf7|\xdf\x8b\x028\xfaH@4\xb9IZ\xc5\x0b\x9b\tk\x0e\x8c\xb5\xe7<\x86\x1c\0\xd0\x0b\xadY\xae\xb8\xf4O \xcc\xa9.\x06\0\xf8\x01\xe4?\x82\x18\x7f\x17\x9e\xbfC\x1e\xc5.\x04\x0em\x98a\xf2\x80\xc4\xdfi\xa1\xb9xmD\xeei\xaa+\x9d\x1b\0\xa4\x96i,\0\0\xab\xd2\xf2\xe5\x06\0\xf8QN\xee\xf9\xcf\xc2w4!0\x99\x84q\xbd6\xd1h\xf2\x12\xa9\xd0\xe2\x19\x13\x941\x04\0)\x19|\x0eD\xda\xc2\0P\xa3\x10\xa9\xbd\x01\0V\xc1\xefw\xc2\xe7\xb0\xa3\xe7\xda\n\xbc\xbb:\x13\xa8\x9b\xdc\x1c\x12\xb4?\x16\xf3L6\xed\x1eW\x97\x02\x80=\x02\0\xb8]\x88\x8d\xc9;\xdc\r\x008\xd7\xc0\x85\x02%\0`\x07>YW)s\x05\xa3\xe2Y\x97\xf0\xb2L.\x92>\xa0\xe8n\x82m\x17\x02\xc0\x1a\xa1@\xd8\x9d\xf6e\xf1\xb7\x87\x03\0(B\x81\xdc\x000\x83|\xbbnc>7\x04\x80da\xdc\xfb\x19\xe4\xbb\x05&\x0f\x92\x89P\xc4\xc9I\xe6\x8c\x85\x01`\x0eX,j\xf7\xe1i\0 \r\x05r\x01@\x05\xbfw9F\xc5\xfb\xf6)\xea\x12\0\b\xf7wz\xc2\x039L\xa5\xde#\xb8\x06\xa0'\x92<%\x01`\x16.\xd8\xe1\xe1\0 \r\x05J\x14\x02I\x9f}\x07\xb2\xdd\x9c\x05\xfd\xbd!\xdeWM|\xcf\xe4\xc1\xb2\x80|\xebn.\b\0U\xa4\xf2>\x11\0$\xa1@n\x008~~G\x92y\xaf\bE\xee\"\xad|\x0f\xba-`\x93\x87\x88T\t\xb1+\x9e\x13\0R\x94\xf7\xa9\0\xc0\x85\x02\x12\0\xf0\xf5c\x1c\x1e\xcf\xa9\x03\xfd\x96\xdb\n\xfe\x84\xad\x0b\xf2\xb5\"\xce\xe7\xbeg\xf2P9\x84/n\x04\xf9.\xc0\xdb\0\xc0-\xb1\xad3\x01\0\x17\n\xc4\xe6\0*\xf8]\xa2\x1b\x03hc\xe0\xbd\xef@\xef\xe4\x84,=\xf7=\x93\x17\x84\0\x9bG\x01j\xf0'\t?\t\0r\xf4\x02p\x96\x16\x87\x02\xa9I@\x9c\xf8\xd3\xba\xdd\xad\xc7\xd5o\x80\xdf\xc1\xf0\x85\x0f5\xe8;\x06M\x1e\"\x8d\xc7\xad\xa4:\xcd\xa8\x17m\0 \x0f\x05r\xec\x02`\x10\xd0n\xbd\xe1w\xe9\x9e\x8f*\xe3\xdd\x90\xb5\x97~\xcf\xe4\xc1 \xb0\b\x93K\x07\x913\xb0\x10@\x1e\n\xe4\xda\x06\\!\xbe%\x19\xe7\x01\xb8}\xfeSp\x99\xb0\xf4{&/\0\x82\xd8\xce\xb8\x94$\xda\x1d\t\xbc\x9c\xd7\xffG\xa9\xa8SF\0\xc0\x1e\x86f\x0bn@y\0i\xc3O\x87<\x1a\xe9\xf7LL\xbe\x16\0j\"\xd4J\x01\x80\xd3\x83\x89\tc\x1a\x94C\xd0<c\x1f\x98Y\xf9\xaf\x89\x01\x80\"f\xcfY\n\xbcE\x86\x02\x87\x13\xeai\0d\x8d\xfc\x9e\x89\xc9\xe5\0\x10K\xb2\xb1\xa1\\H\x93\xe1\xbck!\0\xc0|\0R2\x8e\x05\xe2h\xbf\x86\xc8\xef\x99\xbcT\t\xb5\x82\tAW\xcf\xa2|*\0H\x94?VY}\xa1@\x0e\0\0On\xa1\x8dP\xe4%\x12p\xac\xfc\xd7\0\xe0\xff\xa5\x0b\xb8\xba\xe3\x0b\0@\xaa\xfc)\xca:\x14\x02\0L\r\xb6E(\xb2\xa6\x9e\xe0\0+\xff5\0 ,\xdc\x8e<\x80\xf6\xe6{\xfc\x93Q\xf9ML\f\0<2\xc2\xf3H!%\0\x80\x95\x7f7\xe571\0H\x03\x80\xf6%\0\x80\x95\x7f\x03+h11\0(\x0e\0\xbe\xa9>\xff[n\xec\xf2\x02.\xf0\xbb\xbc\xb4\x85\xdf\xdc\x81sd\xac\x9eS\xf9s\0_\xfd\xf3L\xa8\xe9L\x9ajE7'\xd0'\\SN\xae\xff\x16\xfe\xce5\xb0\xdd\x83\x87\x01\x80\xfbr4\xf1{\xeb(\xa6\x9b\x18:\xffNM\xe4\x19\x81\xe7\x04\xec=\0#\xe5\xe5\x0f\x01@n\xcb\x9f\x02\0\x15\x84\x07\xaa\xf8\x8eEx\xadC\x06\x90\xa7\bYR\fDl\xb2\xd3\xa4\x10\0,B%\xe4\xac\xacd\x07\0\x90\xe2\xf9\xfa\xe0qB\xce\xa5\xaar\xc1\x89\x9bZ\xe4[l9\x94\xbf\x02\x7f+m\xe3XN\x89\xb5n<\xcf\xe0\0\x9e\x0b`\x13\xe4)p\xdfAL\xaf~.\xaao\x97Sbs<7\x93\x87\xc4\xc7\xaeu9\xad\xf2\x84\x16\xc0T\0\0\xa8\xb9v\x0b\xf0\x94W\xb8\xa3\xb1c\0\xa0\xf2(\\L\xc2o\x82\x7f\xa9\xd4V\xf8]\x1f\xbf\x0b\x94\x1f\x13\x9fR\x1eD\xe7yn\xdc\xb5kX\x9f\xa8\xdfK\xdd\xeb\xb7\xae\xc1\x17\0@\x17\x88\x01\xa5\x03\x1f59\0\t\xa9E\x03\xb2\xe2\x16\x8a\x92\x1a\xb3\x1em\xe0\xa7\x1d\xd7\xca\x02\xb2)\xbe\xd4\xf3\xda\x10\xb8I,l\x03\xba\xfd\xfe.!\x86\xcf9\xe9g5\xb7\xff\xd9\x000\x0b\x17\xd1\\\0\0$\x1c\xfa;\x93\x83\x90\0\xc0\x86,Z\xecpO\xfcl0\xb1J/p\xb7\x07\x88\xaf9\xc0\x9e\x03g\xd9%3\x03\xa8\xf0!G\xf2\xcf\0\xe0\xc1\0p\x80n\xbe|\x9d\x11\x006\xe1\xe7\xd6\f\0@\x91`\xc4&\xf0Ne<\x1c\xa5\x94d\xdc\xf7D\xeb:*\x144\xa6>#\xf7\xa0\x0f\x03\x80\x07\x03\x80$\xbe\x9b\x05\t\xc1\x18\0X/\x06\x80\x99X\x98\x12 \xc4Vrw~\xb7\x17*u\x07\xe9\xd9\xf9J\x01^5\xe8\x1bw6\xc8K\xf4i\0\xf0`\0\x90 \xfc(\xf8\xfc\xd3\x01`\x0e(\xc7\x11\xa9\x90\x13\xfcn\xc1]\x05\x9e\xcd\x04y\xa6\x15/ \xe7\xe3[\x14\x1eG\t\x9e\x7f\x03\0\x03\x80\xdb\x01@b\x91\xb5\xd9\xf2\x11)\xd49\xe4\xb4\x12*CJ\xc9\xf1\xa0\b\xa5z\x05X\xe4\x02(\x03\0\x03\x80W\0\0\xb6\x90\xa5\xe7\xdb\xe5*\x84i\x95\xe7\xa28\x1d}\x9f\xcbY\xa9\xb7\x81M\x0e~,\0H\n2>!\x07 \x8d\xe7cH6\xdf\0\0\x12\xcb\xeezC\xd3Mk\xcd\xe4b\0\x90\xec\x83K\x92Bo\x06\0\x9fB\xcd\x1f\x06\0\xb5\xe0y.\x90\x7f\xcaO_ \xa40\xc9\xbc\x10\xa5Y\xe4]\x18&\xbc\x11\0\xb0\x95\xa4\x16l\xca\xf6\xe1]\0\x80c\xf1\xda\xe3\x05\xe5l\x10k\xd1\x9a0\xe6\xe0\x07\x03\0\xb5\x05\xb6\b\x11\xfc\x13\0\0{;\x07\xd0\xcdL1\0\xb0B\x9e\xee\xc11Ba\xa9A\x9e\x03\xe4\xb5\xd4\xb8\xd0\xca\xda\xac\x1f\f\0\xbe\xd2\xd5\x1a~\x97\xab\xc2\x17\0@\x03|\xa9p\n\0\xe4\xea\xb0[\"\xe2u\xb7)g\x0f\0\xdf\x91IY]\xaf\xd1\\\xff\x07\x03\xc0\x04\xfe\x1aym\x0b\xea\xa7\0\0\xb6\x86>\x05K\x19\xa2\xd2dp\x8b\xf1\xc4f\r\b\xf9\xa6\xfc6\x05r\x1f#\xfa\xad\xc9T\xee\x99\x000\x02\xdd\x93>*^\xb8\xf1\xc4\xcbd\x17>\xab\xb3\xd7\xa0'\x9e\xf5\x9e\0@\x93\xc7+\xc9\xbd\x05:\x81\x8d\x0f\x7f\x8d\xa4\x8c\b\xab\xe1\xba\xd1bo\x97\x16d[\x8e\x0b\xfa\\\xeb\tQb\xdck<\xe4\xb3\xf4\x88/\xf3\x02LL\x90\xe0\xe1\x9eM\xc0]\xc7d G\x86\x10\xa2G\x1eH\xe9m:\x9b!h\xa2\x8eq'\x81E\x89\xd9J\xa3\xb2\xe7\\\xf3\x90V\xb94\x84\xa4\xe74\xe6\xc6\xe3\x95\xcd\xe0\x9f\xde\\'<_\x17|JO\xf8\xb5R`\x13\xb1\f\x8e\x95\xbb\x1b\0b\xcaa\x17\x90s\xdfa\x82\x0f\xcd\x91\x9a]\x9f\xe1\x9a\xc2'\x03\x80\x17\b\xc5H\xab\xd9\xaaj~\xac\x98\xef\x1c\x95\xa3\x80.#p\x8cr_\x05\0\xda~\xfd\n\xf8!\xa0\xbe\xef\x8cB \xd8~>\x8b;\x18c\x92\xae\xb8\x90\xa85\0\xf8N\x91X!\xc9\xde0w\x9e\x03d\xa3\xbe\x9e\x06\0\x1a\xcb\xd8G\0\0\xfe\xfe\xec\x01\xd0\x19)h\r\xbfwm\x9e\x9ca7\0x\xa8`+\xb0:\x16z\x84\xdf\x84\x195a\xc5\x0e\xe4\x9e\xba\xe7\xf1\x8d\xa2~:\0,\x11a\x80\xcb\x07p\x05\xfdu\xeb\x80\x04\x18\0\x98he\x13(\xe4*\xb0\x86\\U\x9a\xaf\xce`\xf4,f\x9f[\xdaB\x9e\xf1\xdcZ\0\x902\xfc\xb8V\xd9\xad\xf03\xfe{\xff\xfa0y\x90\xeb/)&\xc1\xd6\xbd&\x16>\xb5\xa7\xdd0\x1e\0\x15\x82\xac7\0@\xa5\f\x03\x86\xc0w\x9f\xb4\xe8k\xf0\x8fo?\xf341a\xc4\f\xbaF1\xab\x11y\x88h\x98_\x06\b\x8f\xa7\xd2\x9cg|\x11\0\x802\f\xd8\xe0_\x1a\xad\xa7\x01\xc0\x04\xb2\xdd\x05m\xb1\xce.\0\xc9\x01\xfc\xb3'L\x1e\xe2\xfe\xa7\x94\x7fj(\xae\x9a\x17\xe5\0\0\xe4\xbd\xec\xb5\xe7s\xa1k\\!\x7f\xef\x02\xf7\xdd^\x91\xeb\xd1\x14\x04\xd5\xc20)4\x93\xc1\xe4F\xc9\xf5\"\xb4\xe7y\x13\0T #\xc8\x1c<.\xeeS\0\xa0\x02Y\xf2\xd5}.\xd2\"\xa3A\xe1\xdaW\xf0\xbb\xf6\xc0\xc4\0\xe0\xd1\0\x80\x13X\x95\xd0\xfd\x7f\x12\0\x8c g\xf9\x9dA\xd7\x04\xb6\x80q\xfd\x19\0|8\0pa@\xc8\r\x0e]c\xe3X\xce+\0`\x03\xf9n\x86\x96\x15\xe8\xf4,\x06S\xa7w\x03@JfV\x93K\xa8_\b\0\\\x180\x81?Q(\x89\xc9\x87\x0b\0\xc0\x9d\xa2\xac9\x0f\x07\0-\\\xc3\xa2lRH4\xd4Tn\xc1IO\xb8\x8d\\\xf2\xa8{!\0pa@(\x0bN]\xe3y\xbe\xfa\x02\0\xd0\x88t\x0e\xa4\xfb\x1cw\xc5\xf5\xc5\x94\x97\x9b\x14\x12w[hR|\xb6!,\xc1\xae\0\x9d7\x01@(\fh@>\x9a\x1c\x03f\x9f\xf9\xber\0\xc0\xaa\0\xf3\rt\xa5\xd2\xdc\xd6\xae\xc9\xc5\x82g\xc6\x85\xdc8\xb7\x80g\x13,\x1c\x1f}X\x05\xbf\xbb\xe4\xde\x04\0\xa10 \xe4\xfeS\xe7\x1a@\xc66|5\0\xcc\n\xe5\xac@\xdf,u\xf68l`4\xe1\x8f\x91\x11\xe8\xb1X=\xfc\xbb\x85\xd4\x10`B\xf5\x02\xf8\x9a\x84J\0\xc0\xc9C7e\x06\x80P\x18\xb0\x13\x1eT\x8cB\xde\x05\0x\xc49\xb7\x05\xd8%\xe4\x8f$\xb5 &7\x82@\xe8\xe8\x05/\xf6\0\xba\x1bp(\f\0\x92\xef\xc6\x02\0\x0e\x03\x1a\x06\x18\xdf\0\0\xb8@g\x03YBoNt\xe3mR\xd0\xc3\xa4#\x94W\xba(\xce\x05\xe5c\xafY\xe0/g`I\0p=\x8dZ`\xed4\xdbp8\f\x98\x98\xbc\xc7\x1b\0\0[~\xa95\xdf\x13-\xf8jy\x80g\n&\x05\xcd\xbd\xbd\xd3\x02\xcf\x89/\t9\xb8\x04[h\xcb\x0e\x13j\xb6J%r{\x03\x0e\xa0\x13\xa8O\x07\x80&R\xf9\x1bH\xdf\xfe3\0\xf8 9G@I\xd8\x80%\xd4\xe1>J-\xa9\xab\xde\x82\x9fAg\xfc9\xef\xc1$\xba8%\xf2\x11~4/\x05\x80\xd81\xe0\x03\xa4O\x0f6\0\xf8 \xd1\x8c\x94\x92\x10P\xfar\t\x9a\"\x9bY\x90\xcf\x90\x8c\xfc\x02&\f\xe0Xn\x9f\x0e\0k\xa4\"/\x19\xe2w\x03\x80\x0f\x0b\x1b\xb8\xedDL\b\xc2-\x9e\x1a\xfe\xddE\xd0\x96\xccv\x10\xa6'[\t\xf0\x91(\xd1\x02\xb2\xd1^O\x07\x80#R\tsl\xe1\x19\0\xbcL\xa8>~\x80\xdf\xed\xa4\xb3\xa3\xb8\x13\xb2\xe8\xb9f\xcfqR\xa1|\xc6\x1b\x06\x96\x1c\x91\0PGz\0+\xe8\xfa\xff[\xc8S>>\x83\xcd\t\xf8(\0\xa0F\x8ba\xebk\xe3\xa1x\xcb\xa8e\xe9m\xe1\x9a\n\xbb)\x93\xe2\x8e`-\xc1\x1f\x05\0\xae%\xf2\xb1\xda\x8e`\r#\x1a\x05\xd3v\xd8Mp\xcd\xde\xfa\x06y\nx\x1a\xb0j\xc0\x8f\x04\x80\xd2V\xf1I\x95c\x92\xc1\x1d\x18\x049\xde\xbd\x0ed\xfc\x8a\xd8\xfb:\x94\n\xd5F\x84\fn\x02\xb4)\xf0^m\xa0\xac\x01\xc0%\0P\x82\x07As\x1c\xccb\xc7\x95y5\xa3\xc8[\x04h\xc4\0@\x0f\xe9\xdb\x7f\x18P\x160\x86 \x03\x80\x0f\0\x805pP \xd0\b\x95\xd3\xc7\xe17\x82\xbf^B\xda\x98\x13\x03\0s\xe6\x10\xc37\x11\xc9\xe4&i!<\x91\xa6\x12\0\x80$\x01\xd5\x11\x8a\xd20\xf1\xe2\x99\xc5\xaf\x1f\n\0\x92\xc5\x8e\xcb\xad\x17\x81\xb5\xd5x\x15\xbdR\xf9\xdc\xdd\x11)\0\xac\xa0\x1b\x95&\x05\xf6\x19\xac1\xe86\xa1\xfa\0N7tJ\0\x80\x1ad\xc59+\\\xb3Mw\x17\x15\x1a\x8e\xf1\xb9q^\r\xfc\xae^\xf4)\xfe\x04\xef\xdbYq=\x90\xc9T\xf0^\xe5\x97\xee\xdf\xc7\x02\xc0\xee,\xd6\x19\xb9\xb1\x13r\x01\xa7\x0f\x07\0l\xf9\x06\x85\xc2\xf8\x8e\xb7\x0e\xd9\x98\xcc\xed\xbf_p\xf6\xb8\r|fM\0\x80\x1a\xf8\xed\xa9\x1e\xd2\xc6q\xbf\r\0\xee\xcc\xa7<E\xdc\x19\x8a&7I\x0f\xb2\xbd\xe3&\x01\0\x06\x90\x15\xb6\xccp\xcd\x98j\x03\x80\x7f\x15\xb0\x15\xfe\x1d\b\xcf\xaeO\xf8}+\x05\xbeQ\xdc,r\xa7\xf8\xac\x06\0\xc6\x07\xc6zw\x03\xc0v!\xd8Q\0\x14\xca\xd7\x9c\xad\xce\\x\x91\xb2+`\0\xf0\0\x91t\xe6I\xadV\b\0\xf0v\xd3\xf2\xe3\x154_\n\0\xd3\xc5\xe1\x0e\x10!Y\xc3\\#7D$\xa5.\xc0\0\xe0e\x96\xb0\x85\xf8$`h\x07\xe0lD\xe9\xbe\0\0j\x88\x9f\xbfW\xc2\xf5\x9f\x99\xdc\x90\xc4CI\xa9\f4\0\xf8\"\x008\xad\x05\xb7\x9d5\xc2{\xb7\x01\xb5\xc7\x1d\\x\x9aN>\xc9\xc8o7\x9c\x19\r\0\f\0\xb8\x17Z\xfd\0\xc1\x02t\xcd\xc1'\x03\x80\xb6`\xa7\x84\xf5_\x04\x9f\x956\xeb\xc4v\x07\x1a\0<,\x07\xa0\xa1\x81\x8e\x05\0\xdf\"\x1b\x04\xaeq\x0f\x7f\xeb\x06\xda\x87\x02\xc0(8\xba\x1b\xdfuL\xf7\xdd*\xf0\x02b\xf8\x01*0V\xe0G\x88f\x17 \xa5\x14\xb8\x16\xc4\x88\x03q\x8e7\xf4\x02<]\xa6\bE\x95n\xe1J\x81\xe5\x04B\x1b\f\xf2\x10\xd1\xcc\x81\xdb#\x01\xe0\0y\xa6\xd8\0\xa0\x9c\x1c\n\xf7\xdf\xe75\xcc\x02C2+\x9e\x97\x96\x89\xd8\xa4\x90H&\xfb\x0e\x10_\b\xe4\xee\0\fBWr\xf2\x84\0\xb3\x01@\x16\xf7\x7f\x8c\x04\x8e]\xe0)\x1c\x8a\xe75\x9b\xf2?C\xf0>\xfd@\xb8\x8e9\xea\0&\xf4\xe2}]r-q\x9d\x06\0z\x19!\x8ee\b{_\x95\0`\x8c\xf5\xe9\x85\"\x19\r6@|\x0e`\0y\x96\xbcgb\xd8\xce\0@-\xb1<\x83xm\xb4\x82\x10\xd1Zz_\x9c\x0f\xd8\xc0Ok\xd5B\xfa6`\x07\xf4\xf6\xdfN(\xf79' \xd7\x16\xe1\xb7\x01@J\xe9q\x0f\xb2\x84]\xea\xac@\x93\x07\xc5\x8bZ\xa2\b\t\0\x84\xce/\x19?\xb6dN\x18}\x1b\0H\xf9\x07\xb8\x10qd\fH\x0e\xbap\x93\x97\xca\x15\x94\xd4%\x14bU\x1c\xcd\x07\0\0\x14\x02\0wo\xbf3u0\0x\x8bBh\x8e\xd6\0@\x14jXq\x8f\x01\xc0W\0\xc0\xdb\xdeMi\x008\x13\x86\xbb\xa9\xc3;\xe5\xac\xd3\xf7\r\xf5\xa8o\x02\0\r\xf7\xfe\xd9jl\xf2\xafh\xda\xbe}kBZ\xb5\xe7\x82\x85m\x07\xbeH\x1a\xf0\xef\0H\xf6\xff\xef\x06\x80PC\x91-\xc0\xbfr\xc56\xe0)g=\x87\x01\xf1K\xa4B\x16b\x83\x7f\x1bXp/\xff\xd5/\x96J\xd8\xed\xa0\x1f\xff\xfd\x89\xa1\t\x17\xaaL\x10_{?+\xbd\x87\x05l;\xf0U\xc2Q}\xc1\x8f\"\xed7)\x96&~\xc5#\xc1\xafHF\x9dc\xccC;\x07\xa3\xe2y\x95\x02\0\xd7\x8d\xd7\xd2\xb2m\xca\xb8~\0\xdb\x0e|\x8d\xb4 \xef\xc3\x1f\xe1\x9e\x16Nm\x02\x0b\x8f\xc9.\xb5\b\x1b\x90MCv\xa9\xd0\xb8k\xa1\xb6 w\b\xcf\x1c\xe4\xb6+k\x88\xe3[\x88i\xdbu\x7f\xcb\xb6\x03\x1f.\xb3\xc25\xac \x9e\xcb\xae\xf9\xb1<x\xa1\x0e?\xe7\xad!\xdc\xef";

function file_chunks(param) {
  var exit = 0;
  switch (param) {
    case "/font.fnt" : 
    case "font.fnt" : 
        exit = 2;
        break;
    case "/font.png" : 
    case "font.png" : 
        exit = 1;
        break;
    default:
      return /* None */0;
  }
  switch (exit) {
    case 1 : 
        return /* Some */[/* :: */[
                  d_37e5d986c886a357d80b4e7e80cfb0bc,
                  /* :: */[
                    d_d89d4399cabd0fbbf0c369ca8c93e2a0,
                    /* :: */[
                      d_a647e4659c173b8e2a1beed6e11eefcd,
                      /* [] */0
                    ]
                  ]
                ]];
    case 2 : 
        return /* Some */[/* :: */[
                  d_0118d93503fb26f597f0e4924d5b8c0d,
                  /* :: */[
                    d_096bc231ae663e6b83097c210f8a7ac4,
                    /* :: */[
                      d_8f72a8e66d30e2a8b44b5f50ccb81b54,
                      /* [] */0
                    ]
                  ]
                ]];
    
  }
}

var file_list = /* :: */[
  "font.png",
  /* :: */[
    "font.fnt",
    /* [] */0
  ]
];

function size(param) {
  switch (param) {
    case "/font.fnt" : 
    case "font.fnt" : 
        return /* Some */[/* int64 */[
                  /* hi */0,
                  /* lo */11926
                ]];
    case "/font.png" : 
    case "font.png" : 
        return /* Some */[/* int64 */[
                  /* hi */0,
                  /* lo */10628
                ]];
    default:
      return /* None */0;
  }
}

var Internal = /* module */[
  /* d_a647e4659c173b8e2a1beed6e11eefcd */d_a647e4659c173b8e2a1beed6e11eefcd,
  /* d_d89d4399cabd0fbbf0c369ca8c93e2a0 */d_d89d4399cabd0fbbf0c369ca8c93e2a0,
  /* d_096bc231ae663e6b83097c210f8a7ac4 */d_096bc231ae663e6b83097c210f8a7ac4,
  /* d_8f72a8e66d30e2a8b44b5f50ccb81b54 */d_8f72a8e66d30e2a8b44b5f50ccb81b54,
  /* d_0118d93503fb26f597f0e4924d5b8c0d */d_0118d93503fb26f597f0e4924d5b8c0d,
  /* d_37e5d986c886a357d80b4e7e80cfb0bc */d_37e5d986c886a357d80b4e7e80cfb0bc,
  /* file_chunks */file_chunks,
  /* file_list */file_list,
  /* size */size
];

var size$1 = size;

function read(name) {
  var match = file_chunks(name);
  if (match) {
    return /* Some */[$$String.concat("", match[0])];
  } else {
    return /* None */0;
  }
}

exports.Internal  = Internal;
exports.file_list = file_list;
exports.size      = size$1;
exports.read      = read;
/* No side effect */

},{"bs-platform/lib/js/string.js":10}],31:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var $$Map                    = require("bs-platform/lib/js/map.js");
var List                     = require("bs-platform/lib/js/list.js");
var Curry                    = require("bs-platform/lib/js/curry.js");
var $$String                 = require("bs-platform/lib/js/string.js");
var Caml_obj                 = require("bs-platform/lib/js/caml_obj.js");
var Pervasives               = require("bs-platform/lib/js/pervasives.js");
var Caml_format              = require("bs-platform/lib/js/caml_format.js");
var Reasongl_web             = require("Reasongl/src/web/reasongl_web.js");
var Reprocessing_Common      = require("./Reprocessing_Common.js");
var Reprocessing_Internal    = require("./Reprocessing_Internal.js");
var Reprocessing_DefaultFont = require("./Reprocessing_DefaultFont.js");

function intCompare(i, j) {
  var match = +(i === j);
  if (match !== 0) {
    return 0;
  } else {
    var match$1 = +(i < j);
    if (match$1 !== 0) {
      return -1;
    } else {
      return 1;
    }
  }
}

var IntMap = $$Map.Make(/* module */[/* compare */intCompare]);

function compare(param, param$1) {
  var first = intCompare(param[0], param$1[0]);
  if (first !== 0) {
    return first;
  } else {
    return intCompare(param[1], param$1[1]);
  }
}

var IntPairMap = $$Map.Make(/* module */[/* compare */compare]);

var defaultFont = [/* None */0];

function parse_num(_stream, _acc) {
  while(true) {
    var acc = _acc;
    var stream = _stream;
    var match = Reprocessing_Common.Stream[/* peekch */1](stream);
    var exit = 0;
    var c;
    if (match) {
      var c$1 = match[0];
      if (c$1 >= 47) {
        if (c$1 > 57 || c$1 < 48) {
          exit = 1;
        } else {
          c = c$1;
          exit = 2;
        }
      } else if (c$1 >= 45) {
        c = c$1;
        exit = 2;
      } else {
        exit = 1;
      }
    } else {
      exit = 1;
    }
    switch (exit) {
      case 1 : 
          try {
            return /* tuple */[
                    stream,
                    Caml_format.caml_float_of_string(acc)
                  ];
          }
          catch (exn){
            return Pervasives.failwith("Could not parse number [" + (acc + "]."));
          }
          break;
      case 2 : 
          _acc = Reprocessing_Common.append_char(acc, c);
          _stream = Reprocessing_Common.Stream[/* popch */2](stream);
          continue ;
          
    }
  };
}

function parse_num$1(stream) {
  return parse_num(stream, "");
}

function parse_string(_stream, _acc) {
  while(true) {
    var acc = _acc;
    var stream = _stream;
    var match = Reprocessing_Common.Stream[/* peekch */1](stream);
    if (match) {
      var c = match[0];
      if (c !== 34) {
        _acc = Reprocessing_Common.append_char(acc, c);
        _stream = Reprocessing_Common.Stream[/* popch */2](stream);
        continue ;
        
      } else {
        return /* tuple */[
                Reprocessing_Common.Stream[/* popch */2](stream),
                acc
              ];
      }
    } else {
      return Pervasives.failwith("Unterminated string.");
    }
  };
}

function parse_string$1(stream) {
  return parse_string(stream, "");
}

function pop_line(_stream) {
  while(true) {
    var stream = _stream;
    var match = Reprocessing_Common.Stream[/* peekch */1](stream);
    if (match) {
      if (match[0] !== 10) {
        _stream = Reprocessing_Common.Stream[/* popch */2](stream);
        continue ;
        
      } else {
        return Reprocessing_Common.Stream[/* popch */2](stream);
      }
    } else {
      return Pervasives.failwith("could not pop line");
    }
  };
}

function parse_char_fmt(_stream, _num, _map) {
  while(true) {
    var map = _map;
    var num = _num;
    var stream = _stream;
    if (num < 0) {
      return /* tuple */[
              stream,
              map
            ];
    } else if (Caml_obj.caml_notequal(Reprocessing_Common.Stream[/* peekn */3](stream, 4), /* Some */["char"])) {
      Pervasives.prerr_string("Warning: encountered end of char sequence early when loading font.\n");
      return /* tuple */[
              stream,
              map
            ];
    } else {
      var stream$1 = Reprocessing_Common.Stream[/* match_ */6](stream, "char id=");
      var match = parse_num(stream$1, "");
      var stream$2 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match[0]), "x=");
      var match$1 = parse_num(stream$2, "");
      var stream$3 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$1[0]), "y=");
      var match$2 = parse_num(stream$3, "");
      var stream$4 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$2[0]), "width=");
      var match$3 = parse_num(stream$4, "");
      var stream$5 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$3[0]), "height=");
      var match$4 = parse_num(stream$5, "");
      var stream$6 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$4[0]), "xoffset=");
      var match$5 = parse_num(stream$6, "");
      var stream$7 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$5[0]), "yoffset=");
      var match$6 = parse_num(stream$7, "");
      var stream$8 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$6[0]), "xadvance=");
      var match$7 = parse_num(stream$8, "");
      var stream$9 = pop_line(match$7[0]);
      var new_map = Curry._3(IntMap[/* add */3], match[1] | 0, /* float array */[
            match$1[1],
            match$2[1],
            match$3[1],
            match$4[1],
            match$5[1],
            match$6[1],
            match$7[1]
          ], map);
      _map = new_map;
      _num = num - 1 | 0;
      _stream = stream$9;
      continue ;
      
    }
  };
}

function parse_kern_fmt(_stream, _num, _map) {
  while(true) {
    var map = _map;
    var num = _num;
    var stream = _stream;
    if (num) {
      var stream$1 = Reprocessing_Common.Stream[/* match_ */6](stream, "kerning first=");
      var match = parse_num(stream$1, "");
      var stream$2 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match[0]), "second=");
      var match$1 = parse_num(stream$2, "");
      var stream$3 = Reprocessing_Common.Stream[/* match_ */6](Reprocessing_Common.Stream[/* skipWhite */4](match$1[0]), "amount=");
      var match$2 = parse_num(stream$3, "");
      var stream$4 = pop_line(match$2[0]);
      var new_map = Curry._3(IntPairMap[/* add */3], /* tuple */[
            match[1] | 0,
            match$1[1] | 0
          ], match$2[1], map);
      _map = new_map;
      _num = num - 1 | 0;
      _stream = stream$4;
      continue ;
      
    } else {
      return /* tuple */[
              stream,
              map
            ];
    }
  };
}

function replaceFilename(path, filename) {
  var splitStr = Reprocessing_Common.split(path, /* "/" */47);
  var revLst = List.rev(splitStr);
  var newRevLst = revLst ? /* :: */[
      filename,
      revLst[1]
    ] : /* [] */0;
  var newLst = List.rev(newRevLst);
  return $$String.concat("/", newLst);
}

function getCharMapAndKernMap(str) {
  var stream = Reprocessing_Common.Stream[/* create */8](str + "\n");
  var match = Reprocessing_Common.Stream[/* peekn */3](stream, 9);
  var match$1 = match ? (
      match[0] === "info res=" ? parse_num(Reprocessing_Common.Stream[/* match_ */6](stream, "info res="), "") : /* tuple */[
          stream,
          1
        ]
    ) : /* tuple */[
      stream,
      1
    ];
  var stream$1 = pop_line(match$1[0]);
  var stream$2 = Reprocessing_Common.Stream[/* match_ */6](stream$1, "common lineHeight=");
  var match$2 = parse_num(stream$2, "");
  var stream$3 = pop_line(match$2[0]);
  var stream$4 = Reprocessing_Common.Stream[/* match_ */6](stream$3, "page id=0 file=\"");
  var match$3 = parse_string(stream$4, "");
  var stream$5 = pop_line(match$3[0]);
  var stream$6 = Reprocessing_Common.Stream[/* match_ */6](stream$5, "chars count=");
  var match$4 = parse_num(stream$6, "");
  var stream$7 = pop_line(match$4[0]);
  var match$5 = parse_char_fmt(stream$7, match$4[1] | 0, IntMap[/* empty */0]);
  var stream$8 = Reprocessing_Common.Stream[/* match_ */6](match$5[0], "kernings count=");
  var match$6 = parse_num(stream$8, "");
  var stream$9 = pop_line(match$6[0]);
  var match$7 = parse_kern_fmt(stream$9, match$6[1] | 0, IntPairMap[/* empty */0]);
  return /* tuple */[
          match$5[1],
          match$7[1],
          match$3[1],
          match$1[1],
          match$2[1]
        ];
}

function parseFontFormat(env, path, isPixel) {
  var ret = [/* None */0];
  Curry._2(Reasongl_web.Gl[/* File */1][/* readFile */0], path, (function (str) {
          var match = getCharMapAndKernMap(str);
          var img_filename = replaceFilename(path, match[2]);
          ret[0] = /* Some */[/* record */[
              /* chars */match[0],
              /* kerning */match[1],
              /* res */match[3],
              /* lineHeight */match[4],
              /* image */Reprocessing_Internal.loadImage(env, img_filename, isPixel)
            ]];
          return /* () */0;
        }));
  return ret;
}

function getChar(fnt, ch) {
  try {
    return Curry._2(IntMap[/* find */21], ch, fnt[/* chars */0]);
  }
  catch (exn){
    return Pervasives.failwith("Could not find character " + (Pervasives.string_of_int(ch) + " in font."));
  }
}

function drawChar(env, fnt, image, ch, last, x, y) {
  var c = getChar(fnt, ch);
  var kernAmount;
  if (last) {
    try {
      kernAmount = Curry._2(IntPairMap[/* find */21], /* tuple */[
            last[0],
            ch
          ], fnt[/* kerning */1]);
    }
    catch (exn){
      kernAmount = 0;
    }
  } else {
    kernAmount = 0;
  }
  if (image) {
    Reprocessing_Internal.drawImageWithMatrixf(image[0], x + (c[/* xoffset */4] + kernAmount) / fnt[/* res */2], y + c[/* yoffset */5] / fnt[/* res */2], c[/* width */2] / fnt[/* res */2], c[/* height */3] / fnt[/* res */2], c[/* x */0] | 0, c[/* y */1] | 0, c[/* width */2] | 0, c[/* height */3] | 0, env);
    return (c[/* xadvance */6] + kernAmount) / fnt[/* res */2];
  } else {
    return (c[/* xadvance */6] + kernAmount) / fnt[/* res */2];
  }
}

function drawString(env, fnt, str, x, y) {
  var fnt$1 = fnt ? fnt[0] : defaultFont;
  var match = fnt$1[0];
  if (match) {
    var fnt$2 = match[0];
    var match$1 = fnt$2[/* image */4][/* glData */0];
    if (match$1) {
      var img = match$1[0];
      var offset = [x];
      var lastChar = [/* None */0];
      return $$String.iter((function (c) {
                    var advance = drawChar(env, fnt$2, /* Some */[img], c, lastChar[0], offset[0], y);
                    offset[0] += advance;
                    lastChar[0] = /* Some */[c];
                    return /* () */0;
                  }), str);
    } else {
      console.log("loading font.");
      return /* () */0;
    }
  } else {
    return /* () */0;
  }
}

function calcStringWidth(env, fnt, str) {
  var fnt$1 = fnt ? fnt[0] : defaultFont;
  var match = fnt$1[0];
  if (match) {
    var fnt$2 = match[0];
    var offset = [0];
    var lastChar = [/* None */0];
    $$String.iter((function (c) {
            offset[0] += drawChar(env, fnt$2, /* None */0, c, lastChar[0], offset[0], 0);
            lastChar[0] = /* Some */[c];
            return /* () */0;
          }), str);
    return offset[0];
  } else {
    return 0;
  }
}

function loadDefaultFont(env) {
  var match = Reprocessing_DefaultFont.read("font.fnt");
  var data = match ? match[0] : Pervasives.failwith("Failed to load default font. This shouldn't happen.");
  var match$1 = Reprocessing_DefaultFont.read("font.png");
  var imageData = match$1 ? match$1[0] : Pervasives.failwith("Failed to load default font image. This shouldn't happen");
  var match$2 = getCharMapAndKernMap(data);
  defaultFont[0] = /* Some */[/* record */[
      /* chars */match$2[0],
      /* kerning */match$2[1],
      /* res */match$2[3],
      /* lineHeight */match$2[4],
      /* image */Reprocessing_Internal.loadImageFromMemory(env, imageData, /* false */0)
    ]];
  return /* () */0;
}

var Font = /* module */[
  /* IntMap */IntMap,
  /* IntPairMap */IntPairMap,
  /* defaultFont */defaultFont,
  /* parse_num */parse_num$1,
  /* parse_string */parse_string$1,
  /* pop_line */pop_line,
  /* parse_char_fmt */parse_char_fmt,
  /* parse_kern_fmt */parse_kern_fmt,
  /* replaceFilename */replaceFilename,
  /* getCharMapAndKernMap */getCharMapAndKernMap,
  /* parseFontFormat */parseFontFormat,
  /* getChar */getChar,
  /* drawChar */drawChar,
  /* drawString */drawString,
  /* calcStringWidth */calcStringWidth,
  /* loadDefaultFont */loadDefaultFont
];

var Internal = 0;

exports.Internal   = Internal;
exports.intCompare = intCompare;
exports.Font       = Font;
/* IntMap Not a pure module */

},{"bs-platform/lib/js/map.js":7,"bs-platform/lib/js/list.js":8,"bs-platform/lib/js/curry.js":9,"bs-platform/lib/js/string.js":10,"bs-platform/lib/js/caml_obj.js":11,"bs-platform/lib/js/pervasives.js":12,"bs-platform/lib/js/caml_format.js":53,"Reasongl/src/web/reasongl_web.js":45,"./Reprocessing_Common.js":34,"./Reprocessing_Internal.js":33,"./Reprocessing_DefaultFont.js":47}],14:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Curry                  = require("bs-platform/lib/js/curry.js");
var Pervasives             = require("bs-platform/lib/js/pervasives.js");
var RGLConstants           = require("Reasongl/src/RGLConstants.js");
var Reasongl_web           = require("Reasongl/src/web/reasongl_web.js");
var Reprocessing_Env       = require("./Reprocessing_Env.js");
var Reprocessing_Font      = require("./Reprocessing_Font.js");
var Reprocessing_Matrix    = require("./Reprocessing_Matrix.js");
var Reprocessing_Internal  = require("./Reprocessing_Internal.js");
var Reprocessing_Constants = require("./Reprocessing_Constants.js");

function translate(x, y, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createTranslation(x, y));
}

function rotate(theta, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createRotation(theta));
}

function scale(x, y, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createScaling(x, y));
}

function shear(x, y, env) {
  return Reprocessing_Matrix.matmatmul(env[/* matrix */16], Reprocessing_Matrix.createShearing(x, y));
}

function fill(color, env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* fillColor */3] = /* Some */[color];
  env[/* style */13] = newrecord;
  return /* () */0;
}

function noFill(env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* fillColor */3] = /* None */0;
  env[/* style */13] = newrecord;
  return /* () */0;
}

function tint(color, env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* tintColor */4] = /* Some */[color];
  env[/* style */13] = newrecord;
  return /* () */0;
}

function noTint(env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* tintColor */4] = /* None */0;
  env[/* style */13] = newrecord;
  return /* () */0;
}

function stroke(color, env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* strokeColor */0] = /* Some */[color];
  env[/* style */13] = newrecord;
  return /* () */0;
}

function noStroke(env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* strokeColor */0] = /* None */0;
  env[/* style */13] = newrecord;
  return /* () */0;
}

function strokeWeight(weight, env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* strokeWeight */1] = weight;
  env[/* style */13] = newrecord;
  return /* () */0;
}

function strokeCap(cap, env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* strokeCap */2] = cap;
  env[/* style */13] = newrecord;
  return /* () */0;
}

function rectMode(rm, env) {
  var newrecord = env[/* style */13].slice();
  newrecord[/* rectMode */5] = rm;
  env[/* style */13] = newrecord;
  return /* () */0;
}

function pushStyle(env) {
  env[/* styleStack */14] = /* :: */[
    env[/* style */13],
    env[/* styleStack */14]
  ];
  return /* () */0;
}

function popStyle(env) {
  var match = env[/* styleStack */14];
  if (match) {
    env[/* style */13] = match[0];
    env[/* styleStack */14] = match[1];
    return /* () */0;
  } else {
    return Pervasives.failwith("Too many `popStyle` without enough `pushStyle`.");
  }
}

function pushMatrix(env) {
  var copy = Reprocessing_Matrix.createIdentity(/* () */0);
  Reprocessing_Matrix.copyInto(env[/* matrix */16], copy);
  env[/* matrixStack */17] = /* :: */[
    copy,
    env[/* matrixStack */17]
  ];
  return /* () */0;
}

function popMatrix(env) {
  var match = env[/* matrixStack */17];
  if (match) {
    env[/* matrix */16] = match[0];
    env[/* matrixStack */17] = match[1];
    return /* () */0;
  } else {
    return Pervasives.failwith("Too many `popMatrix` without enough `pushMatrix`.");
  }
}

function loadImage(filename, $staropt$star, env) {
  var isPixel = $staropt$star ? $staropt$star[0] : /* false */0;
  return Reprocessing_Internal.loadImage(env, filename, isPixel);
}

function subImage(img, param, width, height, param$1, subw, subh, env) {
  var match = img[/* glData */0];
  if (match) {
    return Reprocessing_Internal.drawImageWithMatrix(match[0], param[0], param[1], width, height, param$1[0], param$1[1], subw, subh, env);
  } else {
    console.log("image not ready yet, just doing nothing :D");
    return /* () */0;
  }
}

function subImagef(img, param, width, height, param$1, subw, subh, env) {
  var match = img[/* glData */0];
  if (match) {
    return Reprocessing_Internal.drawImageWithMatrixf(match[0], param[0], param[1], width, height, param$1[0], param$1[1], subw, subh, env);
  } else {
    console.log("image not ready yet, just doing nothing :D");
    return /* () */0;
  }
}

function image(img, param, width, height, env) {
  var match = img[/* glData */0];
  if (match) {
    var img$1 = match[0];
    var imgw = img$1[/* width */3];
    var imgh = img$1[/* height */2];
    var exit = 0;
    var w;
    var h;
    if (width) {
      var w$1 = width[0];
      w = w$1;
      if (height) {
        h = height[0];
        exit = 1;
      } else {
        h = imgh;
        exit = 1;
      }
    } else {
      w = imgw;
      if (height) {
        h = height[0];
        exit = 1;
      } else {
        h = imgh;
        exit = 1;
      }
    }
    if (exit === 1) {
      return Reprocessing_Internal.drawImageWithMatrix(img$1, param[0], param[1], w, h, 0, 0, imgw, imgh, env);
    }
    
  } else {
    console.log("image not ready yet, just doing nothing :D");
    return /* () */0;
  }
}

function linef(p1, p2, env) {
  var match = env[/* style */13][/* strokeColor */0];
  if (match) {
    var color = match[0];
    var width = env[/* style */13][/* strokeWeight */1];
    var radius = width / 2;
    var project = +(env[/* style */13][/* strokeCap */2] === /* Project */2);
    Reprocessing_Internal.drawLineWithMatrix(p1, p2, env[/* matrix */16], color, width, project, env);
    if (env[/* style */13][/* strokeCap */2]) {
      return 0;
    } else {
      Reprocessing_Internal.drawEllipse(env, p1, radius, radius, env[/* matrix */16], color);
      return Reprocessing_Internal.drawEllipse(env, p2, radius, radius, env[/* matrix */16], color);
    }
  } else {
    return /* () */0;
  }
}

function line(param, param$1, env) {
  return linef(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ], env);
}

function ellipsef(center, radx, rady, env) {
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.drawEllipse(env, center, radx, rady, env[/* matrix */16], match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    return Reprocessing_Internal.drawArcStroke(env, center, radx, rady, 0, Reprocessing_Constants.tau, /* true */1, /* false */0, env[/* matrix */16], match$1[0], env[/* style */13][/* strokeWeight */1]);
  } else {
    return /* () */0;
  }
}

function ellipse(param, radx, rady, env) {
  return ellipsef(/* tuple */[
              param[0],
              param[1]
            ], radx, rady, env);
}

function quadf(p1, p2, p3, p4, env) {
  var partial_arg = env[/* matrix */16];
  var transform = function (param) {
    return Reprocessing_Matrix.matptmul(partial_arg, param);
  };
  var match_000 = Curry._1(transform, p1);
  var match_001 = Curry._1(transform, p2);
  var match_002 = Curry._1(transform, p3);
  var match_003 = Curry._1(transform, p4);
  var tp4 = match_003;
  var tp3 = match_002;
  var tp2 = match_001;
  var tp1 = match_000;
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.addRectToGlobalBatch(env, tp3, tp4, tp2, tp1, match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    var color = match$1[0];
    var width = env[/* style */13][/* strokeWeight */1];
    var matrix = env[/* matrix */16];
    Reprocessing_Internal.drawLineWithMatrix(p1, p2, matrix, color, width, /* false */0, env);
    Reprocessing_Internal.drawLineWithMatrix(p2, p3, matrix, color, width, /* false */0, env);
    Reprocessing_Internal.drawLineWithMatrix(p3, p4, matrix, color, width, /* false */0, env);
    Reprocessing_Internal.drawLineWithMatrix(p1, p4, matrix, color, width, /* false */0, env);
    var r = width / 2;
    Reprocessing_Internal.drawEllipse(env, tp1, r, r, Reprocessing_Matrix.identity, color);
    Reprocessing_Internal.drawEllipse(env, tp2, r, r, Reprocessing_Matrix.identity, color);
    Reprocessing_Internal.drawEllipse(env, tp3, r, r, Reprocessing_Matrix.identity, color);
    return Reprocessing_Internal.drawEllipse(env, tp4, r, r, Reprocessing_Matrix.identity, color);
  } else {
    return /* () */0;
  }
}

function quad(param, param$1, param$2, param$3, env) {
  return quadf(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ], /* tuple */[
              param$2[0],
              param$2[1]
            ], /* tuple */[
              param$3[0],
              param$3[1]
            ], env);
}

function rectf(param, width, height, env) {
  var y = param[1];
  var x = param[0];
  var match = env[/* style */13][/* rectMode */5];
  switch (match) {
    case 0 : 
        return quadf(/* tuple */[
                    x,
                    y
                  ], /* tuple */[
                    x + width,
                    y
                  ], /* tuple */[
                    x + width,
                    y + height
                  ], /* tuple */[
                    x,
                    y + height
                  ], env);
    case 1 : 
        var x$1 = x - width / 2;
        var y$1 = y - height / 2;
        return quadf(/* tuple */[
                    x$1,
                    y$1
                  ], /* tuple */[
                    x$1 + width,
                    y$1
                  ], /* tuple */[
                    x$1 + width,
                    y$1 + height
                  ], /* tuple */[
                    x$1,
                    y$1 + height
                  ], env);
    case 2 : 
        var x$2 = x - width;
        var y$2 = y - height;
        var width$1 = width * 2;
        var height$1 = height * 2;
        return quadf(/* tuple */[
                    x$2,
                    y$2
                  ], /* tuple */[
                    x$2 + width$1,
                    y$2
                  ], /* tuple */[
                    x$2 + width$1,
                    y$2 + height$1
                  ], /* tuple */[
                    x$2,
                    y$2 + height$1
                  ], env);
    
  }
}

function rect(param, width, height, env) {
  return rectf(/* tuple */[
              param[0],
              param[1]
            ], width, height, env);
}

function bezierPoint(param, param$1, param$2, param$3, t) {
  return /* tuple */[
          Math.pow(1 - t, 3) * param[0] + 3 * Math.pow(1 - t, 2) * t * param$1[0] + 3 * (1 - t) * Math.pow(t, 2) * param$2[0] + Math.pow(t, 3) * param$3[0],
          Math.pow(1 - t, 3) * param[1] + 3 * Math.pow(1 - t, 2) * t * param$1[1] + 3 * (1 - t) * Math.pow(t, 2) * param$2[1] + Math.pow(t, 3) * param$3[1]
        ];
}

function bezierTangent(param, param$1, param$2, param$3, t) {
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  return /* tuple */[
          -3 * Math.pow(1 - t, 2) * param[0] + 3 * Math.pow(1 - t, 2) * xx2 - 6 * t * (1 - t) * xx2 - 3 * Math.pow(t, 2) * xx3 + 6 * t * (1 - t) * xx3 + 3 * Math.pow(t, 2) * param$3[0],
          -3 * Math.pow(1 - t, 2) * param[1] + 3 * Math.pow(1 - t, 2) * yy2 - 6 * t * (1 - t) * yy2 - 3 * Math.pow(t, 2) * yy3 + 6 * t * (1 - t) * yy3 + 3 * Math.pow(t, 2) * param$3[1]
        ];
}

function bezier(param, param$1, param$2, param$3, env) {
  var yy4 = param$3[1];
  var xx4 = param$3[0];
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var yy1 = param[1];
  var xx1 = param[0];
  for(var i = 0; i <= 19; ++i){
    var match = bezierPoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var y1 = match[1];
    var x1 = match[0];
    var match$1 = bezierPoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var y2 = match$1[1];
    var x2 = match$1[0];
    var match$2 = bezierTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var match$3 = bezierTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var a1 = Math.atan2(match$2[1], match$2[0]) - Reprocessing_Constants.half_pi;
    var a2 = Math.atan2(match$3[1], match$3[0]) - Reprocessing_Constants.half_pi;
    var strokeWeightf = env[/* style */13][/* strokeWeight */1];
    quadf(/* tuple */[
          x1 + Math.cos(a1) * strokeWeightf / 2,
          y1 + Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x1 - Math.cos(a1) * strokeWeightf / 2,
          y1 - Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x2 - Math.cos(a2) * strokeWeightf / 2,
          y2 - Math.sin(a2) * strokeWeightf / 2
        ], /* tuple */[
          x2 + Math.cos(a2) * strokeWeightf / 2,
          y2 + Math.sin(a2) * strokeWeightf / 2
        ], env);
  }
  return /* () */0;
}

function curvePoint(param, param$1, param$2, param$3, t) {
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var mx0 = (1 - 0.5) * (xx3 - param[0]);
  var my0 = (1 - 0.5) * (yy3 - param[1]);
  var mx1 = (1 - 0.5) * (param$3[0] - xx2);
  var my1 = (1 - 0.5) * (param$3[1] - yy2);
  return /* tuple */[
          (2 * Math.pow(t, 3) - 3 * Math.pow(t, 2) + 1) * xx2 + (Math.pow(t, 3) - 2 * Math.pow(t, 2) + t) * mx0 + (-2 * Math.pow(t, 3) + 3 * Math.pow(t, 2)) * xx3 + (Math.pow(t, 3) - Math.pow(t, 2)) * mx1,
          (2 * Math.pow(t, 3) - 3 * Math.pow(t, 2) + 1) * yy2 + (Math.pow(t, 3) - 2 * Math.pow(t, 2) + t) * my0 + (-2 * Math.pow(t, 3) + 3 * Math.pow(t, 2)) * yy3 + (Math.pow(t, 3) - Math.pow(t, 2)) * my1
        ];
}

function curveTangent(param, param$1, param$2, param$3, t) {
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var mx0 = (1 - 0.5) * (xx3 - param[0]);
  var my0 = (1 - 0.5) * (yy3 - param[1]);
  var mx1 = (1 - 0.5) * (param$3[0] - xx2);
  var my1 = (1 - 0.5) * (param$3[1] - yy2);
  return /* tuple */[
          (6 * Math.pow(t, 2) - 6 * t) * xx2 + (3 * Math.pow(t, 2) - 4 * t + 1) * mx0 + (-6 * Math.pow(t, 2) + 6 * t) * xx3 + (3 * Math.pow(t, 2) - 2 * t) * mx1,
          (6 * Math.pow(t, 2) - 6 * t) * yy2 + (3 * Math.pow(t, 2) - 4 * t + 1) * my0 + (-6 * Math.pow(t, 2) + 6 * t) * yy3 + (3 * Math.pow(t, 2) - 2 * t) * my1
        ];
}

function curve(param, param$1, param$2, param$3, env) {
  var yy4 = param$3[1];
  var xx4 = param$3[0];
  var yy3 = param$2[1];
  var xx3 = param$2[0];
  var yy2 = param$1[1];
  var xx2 = param$1[0];
  var yy1 = param[1];
  var xx1 = param[0];
  for(var i = 0; i <= 19; ++i){
    var match = curvePoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var y1 = match[1];
    var x1 = match[0];
    var match$1 = curvePoint(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var y2 = match$1[1];
    var x2 = match$1[0];
    var match$2 = curveTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], i / 20.0);
    var match$3 = curveTangent(/* tuple */[
          xx1,
          yy1
        ], /* tuple */[
          xx2,
          yy2
        ], /* tuple */[
          xx3,
          yy3
        ], /* tuple */[
          xx4,
          yy4
        ], (i + 1 | 0) / 20.0);
    var a1 = Math.atan2(match$2[1], match$2[0]) - Reprocessing_Constants.half_pi;
    var a2 = Math.atan2(match$3[1], match$3[0]) - Reprocessing_Constants.half_pi;
    var strokeWeightf = env[/* style */13][/* strokeWeight */1];
    quadf(/* tuple */[
          x1 + Math.cos(a1) * strokeWeightf / 2,
          y1 + Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x1 - Math.cos(a1) * strokeWeightf / 2,
          y1 - Math.sin(a1) * strokeWeightf / 2
        ], /* tuple */[
          x2 - Math.cos(a2) * strokeWeightf / 2,
          y2 - Math.sin(a2) * strokeWeightf / 2
        ], /* tuple */[
          x2 + Math.cos(a2) * strokeWeightf / 2,
          y2 + Math.sin(a2) * strokeWeightf / 2
        ], env);
  }
  return /* () */0;
}

function pixelf(param, color, env) {
  var y = param[1];
  var x = param[0];
  var w = env[/* style */13][/* strokeWeight */1];
  return Reprocessing_Internal.addRectToGlobalBatch(env, /* tuple */[
              x + w,
              y + w
            ], /* tuple */[
              x,
              y + w
            ], /* tuple */[
              x + w,
              y
            ], /* tuple */[
              x,
              y
            ], color);
}

function pixel(param, color, env) {
  return pixelf(/* tuple */[
              param[0],
              param[1]
            ], color, env);
}

function trianglef(p1, p2, p3, env) {
  var partial_arg = env[/* matrix */16];
  var transform = function (param) {
    return Reprocessing_Matrix.matptmul(partial_arg, param);
  };
  var match_000 = Curry._1(transform, p1);
  var match_001 = Curry._1(transform, p2);
  var match_002 = Curry._1(transform, p3);
  var tp3 = match_002;
  var tp2 = match_001;
  var tp1 = match_000;
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.drawTriangle(env, tp1, tp2, tp3, match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    var color = match$1[0];
    var width = env[/* style */13][/* strokeWeight */1];
    var matrix = env[/* matrix */16];
    Reprocessing_Internal.drawLineWithMatrix(p1, p2, matrix, color, width, /* false */0, env);
    Reprocessing_Internal.drawLineWithMatrix(p2, p3, matrix, color, width, /* false */0, env);
    Reprocessing_Internal.drawLineWithMatrix(p1, p3, matrix, color, width, /* false */0, env);
    var r = width / 2;
    Reprocessing_Internal.drawEllipse(env, tp1, r, r, Reprocessing_Matrix.identity, color);
    Reprocessing_Internal.drawEllipse(env, tp2, r, r, Reprocessing_Matrix.identity, color);
    return Reprocessing_Internal.drawEllipse(env, tp3, r, r, Reprocessing_Matrix.identity, color);
  } else {
    return /* () */0;
  }
}

function triangle(param, param$1, param$2, env) {
  return trianglef(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ], /* tuple */[
              param$2[0],
              param$2[1]
            ], env);
}

function arcf(center, radx, rady, start, stop, isOpen, isPie, env) {
  var match = env[/* style */13][/* fillColor */3];
  if (match) {
    Reprocessing_Internal.drawArc(env, center, radx, rady, start, stop, isPie, env[/* matrix */16], match[0]);
  }
  var match$1 = env[/* style */13][/* strokeColor */0];
  if (match$1) {
    return Reprocessing_Internal.drawArcStroke(env, center, radx, rady, start, stop, isOpen, isPie, env[/* matrix */16], match$1[0], env[/* style */13][/* strokeWeight */1]);
  } else {
    return /* () */0;
  }
}

function arc(param, radx, rady, start, stop, isOpen, isPie, env) {
  return arcf(/* tuple */[
              param[0],
              param[1]
            ], radx, rady, start, stop, isOpen, isPie, env);
}

function loadFont(filename, $staropt$star, env) {
  var isPixel = $staropt$star ? $staropt$star[0] : /* false */0;
  return Reprocessing_Font.Font[/* parseFontFormat */10](env, filename, isPixel);
}

function text(font, body, param, env) {
  return Reprocessing_Font.Font[/* drawString */13](env, font, body, param[0], param[1]);
}

function textWidth(font, body, env) {
  return Reprocessing_Font.Font[/* calcStringWidth */14](env, font, body) | 0;
}

function clear(env) {
  return Curry._2(Reasongl_web.Gl[/* clear */45], env[/* gl */2], RGLConstants.color_buffer_bit | RGLConstants.depth_buffer_bit);
}

function background(color, env) {
  clear(env);
  var w = Reprocessing_Env.width(env);
  var h = Reprocessing_Env.height(env);
  return Reprocessing_Internal.addRectToGlobalBatch(env, /* tuple */[
              w,
              h
            ], /* tuple */[
              0,
              h
            ], /* tuple */[
              w,
              0
            ], /* tuple */[
              0,
              0
            ], color);
}

var createImage = Reprocessing_Internal.createImage;

var withImage = Reprocessing_Internal.drawOnImage;

function isImageDrawnTo(image) {
  return image[/* drawnTo */1];
}

var clearImage = Reprocessing_Internal.clearImage;

exports.translate      = translate;
exports.rotate         = rotate;
exports.scale          = scale;
exports.shear          = shear;
exports.fill           = fill;
exports.noFill         = noFill;
exports.tint           = tint;
exports.noTint         = noTint;
exports.stroke         = stroke;
exports.noStroke       = noStroke;
exports.strokeWeight   = strokeWeight;
exports.strokeCap      = strokeCap;
exports.rectMode       = rectMode;
exports.pushStyle      = pushStyle;
exports.popStyle       = popStyle;
exports.pushMatrix     = pushMatrix;
exports.popMatrix      = popMatrix;
exports.loadImage      = loadImage;
exports.image          = image;
exports.subImage       = subImage;
exports.subImagef      = subImagef;
exports.rectf          = rectf;
exports.rect           = rect;
exports.curve          = curve;
exports.linef          = linef;
exports.line           = line;
exports.ellipsef       = ellipsef;
exports.ellipse        = ellipse;
exports.quadf          = quadf;
exports.quad           = quad;
exports.pixelf         = pixelf;
exports.pixel          = pixel;
exports.trianglef      = trianglef;
exports.triangle       = triangle;
exports.bezier         = bezier;
exports.arcf           = arcf;
exports.arc            = arc;
exports.loadFont       = loadFont;
exports.text           = text;
exports.textWidth      = textWidth;
exports.clear          = clear;
exports.background     = background;
exports.withImage      = withImage;
exports.createImage    = createImage;
exports.isImageDrawnTo = isImageDrawnTo;
exports.clearImage     = clearImage;
/* Reasongl_web Not a pure module */

},{"bs-platform/lib/js/curry.js":9,"bs-platform/lib/js/pervasives.js":12,"Reasongl/src/RGLConstants.js":46,"Reasongl/src/web/reasongl_web.js":45,"./Reprocessing_Env.js":13,"./Reprocessing_Font.js":31,"./Reprocessing_Matrix.js":32,"./Reprocessing_Internal.js":33,"./Reprocessing_Constants.js":17}],15:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var $$Array                = require("bs-platform/lib/js/array.js");
var Random                 = require("bs-platform/lib/js/random.js");
var Caml_array             = require("bs-platform/lib/js/caml_array.js");
var Caml_int32             = require("bs-platform/lib/js/caml_int32.js");
var Pervasives             = require("bs-platform/lib/js/pervasives.js");
var Reprocessing_Common    = require("./Reprocessing_Common.js");
var Reprocessing_Constants = require("./Reprocessing_Constants.js");

var lookup_table = [/* int array */[]];

function round(i) {
  return Math.floor(i + 0.5);
}

function sq(x) {
  return Caml_int32.imul(x, x);
}

function pow(base, exp) {
  if (exp !== 0) {
    if (exp !== 1) {
      var b = pow(base, exp / 2 | 0);
      return Caml_int32.imul(Caml_int32.imul(b, b), exp % 2 ? base : 1);
    } else {
      return base;
    }
  } else {
    return 1;
  }
}

function constrain(amt, low, high) {
  return Pervasives.max(Pervasives.min(amt, high), low);
}

function remapf(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * ((value - low1) / (high1 - low1));
}

function remap(value, low1, high1, low2, high2) {
  return remapf(value, low1, high1, low2, high2) | 0;
}

function norm(value, low, high) {
  return remapf(value, low, high, 0, 1);
}

function randomf(min, max) {
  return Random.$$float(max - min) + min;
}

function random(min, max) {
  return Random.$$int(max - min | 0) + min | 0;
}

var randomSeed = Random.init;

function randomGaussian() {
  var u1 = 0.0;
  var u2 = 0.0;
  while(u1 <= Pervasives.min_float) {
    u1 = Random.$$float(1.0);
    u2 = Random.$$float(1.0);
  };
  return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(Reprocessing_Constants.two_pi * u2);
}

function lerpf(low, high) {
  return (function (param) {
      return remapf(param, 0, 1, low, high);
    });
}

function lerp(low, high, value) {
  return lerpf(low, high)(value) | 0;
}

function distf(param, param$1) {
  var dx = param$1[0] - param[0];
  var dy = param$1[1] - param[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function dist(param, param$1) {
  return distf(/* tuple */[
              param[0],
              param[1]
            ], /* tuple */[
              param$1[0],
              param$1[1]
            ]);
}

function magf(vec) {
  return distf(/* tuple */[
              0,
              0
            ], vec);
}

function mag(vec) {
  return dist(/* tuple */[
              0,
              0
            ], vec);
}

function lerpColor(low, high, value) {
  return /* float array */[
          lerpf(low[/* r */0], high[/* r */0])(value),
          lerpf(low[/* g */1], high[/* g */1])(value),
          lerpf(low[/* b */2], high[/* b */2])(value),
          lerpf(low[/* a */3], high[/* a */3])(value)
        ];
}

function degrees(x) {
  return 180.0 / Reprocessing_Constants.pi * x;
}

function radians(x) {
  return Reprocessing_Constants.pi / 180.0 * x;
}

function noise(x, y, z) {
  var p = lookup_table[0];
  var fade = function (t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  };
  var grad = function (hash, x, y, z) {
    var match = hash & 15;
    if (match > 15 || match < 0) {
      return 0.0;
    } else {
      switch (match) {
        case 0 : 
            return x + y;
        case 1 : 
            return -x + y;
        case 2 : 
            return x - y;
        case 3 : 
            return -x - y;
        case 4 : 
            return x + z;
        case 5 : 
            return -x + z;
        case 6 : 
            return x - z;
        case 7 : 
            return -x - z;
        case 8 : 
            return y + z;
        case 10 : 
            return y - z;
        case 12 : 
            return y + x;
        case 9 : 
        case 13 : 
            return -y + z;
        case 14 : 
            return y - x;
        case 11 : 
        case 15 : 
            return -y - z;
        
      }
    }
  };
  var xi = x & 255;
  var yi = y & 255;
  var zi = z & 255;
  var xf = x - Math.floor(x);
  var yf = y - Math.floor(y);
  var zf = z - Math.floor(z);
  var u = fade(xf);
  var v = fade(yf);
  var w = fade(zf);
  var aaa = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + yi | 0) + zi | 0);
  var aba = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + (yi + 1 | 0) | 0) + zi | 0);
  var aab = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + yi | 0) + (zi + 1 | 0) | 0);
  var abb = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi) + (yi + 1 | 0) | 0) + (zi + 1 | 0) | 0);
  var baa = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + yi | 0) + zi | 0);
  var bba = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + (yi + 1 | 0) | 0) + zi | 0);
  var bab = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + yi | 0) + (zi + 1 | 0) | 0);
  var bbb = Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, Caml_array.caml_array_get(p, xi + 1 | 0) + (yi + 1 | 0) | 0) + (zi + 1 | 0) | 0);
  var x1 = lerpf(grad(aaa, xf, yf, zf), grad(baa, xf - 1.0, yf, zf))(u);
  var x2 = lerpf(grad(aba, xf, yf - 1.0, zf), grad(bba, xf - 1.0, yf - 1.0, zf))(u);
  var y1 = lerpf(x1, x2)(v);
  var x1$1 = lerpf(grad(aab, xf, yf, zf - 1.0), grad(bab, xf - 1.0, yf, zf - 1.0))(u);
  var x2$1 = lerpf(grad(abb, xf, yf - 1.0, zf - 1.0), grad(bbb, xf - 1.0, yf - 1.0, zf - 1.0))(u);
  var y2 = lerpf(x1$1, x2$1)(v);
  return (lerpf(y1, y2)(w) + 1.0) / 2.0;
}

function shuffle(array) {
  var array$1 = $$Array.copy(array);
  var length = array$1.length;
  for(var i = 0; i <= 255; ++i){
    var j = Random.$$int(length - i | 0);
    var tmp = Caml_array.caml_array_get(array$1, i);
    Caml_array.caml_array_set(array$1, i, Caml_array.caml_array_get(array$1, i + j | 0));
    Caml_array.caml_array_set(array$1, i + j | 0, tmp);
  }
  return array$1;
}

function noiseSeed(seed) {
  var state = Random.get_state(/* () */0);
  Random.init(seed);
  var array = Caml_array.caml_make_vect(256, 0);
  var array$1 = $$Array.mapi((function (i, _) {
          return i;
        }), array);
  var array$2 = shuffle(array$1);
  var double_array = $$Array.append(array$2, array$2);
  lookup_table[0] = double_array;
  return Random.set_state(state);
}

function color(r, g, b, a) {
  return /* float array */[
          r / 255,
          g / 255,
          b / 255,
          a / 255
        ];
}

function colorf(r, g, b, a) {
  return /* float array */[
          r,
          g,
          b,
          a
        ];
}

function intersectRectCircle(param, rectW, rectH, param$1, circleRad) {
  var halfW = rectW / 2;
  var halfH = rectH / 2;
  var cdistX = Math.abs(param$1[0] - (param[0] + halfW));
  var cdistY = Math.abs(param$1[1] - (param[1] + halfH));
  if (cdistX > halfW + circleRad || cdistY > halfH + circleRad) {
    return /* false */0;
  } else if (cdistX <= halfW || cdistY <= halfH) {
    return /* true */1;
  } else {
    var cornerDistSq = Math.pow(cdistX - halfW, 2) + Math.pow(cdistY - halfH, 2);
    return +(cornerDistSq <= Math.pow(circleRad, 2));
  }
}

function intersectRectRect(param, rect1W, rect1H, param$1, rect2W, rect2H) {
  var ry2 = param$1[1];
  var rx2 = param$1[0];
  var ry1 = param[1];
  var rx1 = param[0];
  return 1 - +(rx2 > rx1 + rect1W || rx2 + rect2W < rx1 || ry2 > ry1 + rect1H || ry2 + rect2H < ry1);
}

var split = Reprocessing_Common.split;

exports.color               = color;
exports.colorf              = colorf;
exports.round               = round;
exports.sq                  = sq;
exports.pow                 = pow;
exports.constrain           = constrain;
exports.remapf              = remapf;
exports.remap               = remap;
exports.norm                = norm;
exports.randomf             = randomf;
exports.random              = random;
exports.randomSeed          = randomSeed;
exports.randomGaussian      = randomGaussian;
exports.lerpf               = lerpf;
exports.lerp                = lerp;
exports.lerpColor           = lerpColor;
exports.distf               = distf;
exports.dist                = dist;
exports.magf                = magf;
exports.mag                 = mag;
exports.degrees             = degrees;
exports.radians             = radians;
exports.noise               = noise;
exports.noiseSeed           = noiseSeed;
exports.split               = split;
exports.intersectRectCircle = intersectRectCircle;
exports.intersectRectRect   = intersectRectRect;
/* Reprocessing_Common Not a pure module */

},{"bs-platform/lib/js/array.js":38,"bs-platform/lib/js/random.js":39,"bs-platform/lib/js/caml_array.js":40,"bs-platform/lib/js/caml_int32.js":41,"bs-platform/lib/js/pervasives.js":12,"./Reprocessing_Common.js":34,"./Reprocessing_Constants.js":17}],35:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';


function checkRebuild() {
  return /* false */0;
}

var NoHotreloading = /* module */[/* checkRebuild */checkRebuild];

exports.NoHotreloading = NoHotreloading;
exports.checkRebuild   = checkRebuild;
/* No side effect */

},{}],36:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Reasongl_web = require("Reasongl/src/web/reasongl_web.js");

var init = Reasongl_web.Gl[/* Window */2][/* init */5];

exports.init = init;
/* Reasongl_web Not a pure module */

},{"Reasongl/src/web/reasongl_web.js":45}],16:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Sys                        = require("bs-platform/lib/js/sys.js");
var Curry                      = require("bs-platform/lib/js/curry.js");
var Random                     = require("bs-platform/lib/js/random.js");
var Hashtbl                    = require("bs-platform/lib/js/hashtbl.js");
var RGLConstants               = require("Reasongl/src/RGLConstants.js");
var Reasongl_web               = require("Reasongl/src/web/reasongl_web.js");
var Reprocessing_Env           = require("./Reprocessing_Env.js");
var Reprocessing_Draw          = require("./Reprocessing_Draw.js");
var Reprocessing_Font          = require("./Reprocessing_Font.js");
var Reprocessing_Utils         = require("./Reprocessing_Utils.js");
var Reprocessing_Common        = require("./Reprocessing_Common.js");
var Reprocessing_Matrix        = require("./Reprocessing_Matrix.js");
var Reprocessing_Internal      = require("./Reprocessing_Internal.js");
var Reprocessing_Constants     = require("./Reprocessing_Constants.js");
var Reprocessing_Hotreload     = require("./Reprocessing_Hotreload.js");
var Caml_builtin_exceptions    = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var Reprocessing_ClientWrapper = require("./Reprocessing_ClientWrapper.js");

var hotreloadData = Hashtbl.create(/* None */0, 10);

function unwrapOrDefault($$default, opt) {
  if (opt) {
    return opt[0];
  } else {
    return $$default;
  }
}

function identity(a, _) {
  return a;
}

var defaultScreen = "reprocessing-default";

var currentScreen = [defaultScreen];

function setScreenId(id) {
  currentScreen[0] = id;
  return /* () */0;
}

function clearScreenId() {
  currentScreen[0] = defaultScreen;
  return /* () */0;
}

var pauseFns = Hashtbl.create(/* None */0, 10);

function playPause(id, play) {
  var exit = 0;
  var fn;
  try {
    fn = Hashtbl.find(pauseFns, id);
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return /* Some */[Curry._1(fn, play)];
  }
  
}

function hotreload($staropt$star, filename) {
  var screen = $staropt$star ? $staropt$star[0] : defaultScreen;
  Hashtbl.replace(hotreloadData, screen, /* record */[
        /* started : false */0,
        /* filename */filename,
        /* draw */identity,
        /* mouseMove */identity,
        /* mouseDragged */identity,
        /* mouseDown */identity,
        /* mouseUp */identity,
        /* keyPressed */identity,
        /* keyReleased */identity,
        /* keyTyped */identity
      ]);
  return Reprocessing_Hotreload.checkRebuild(filename);
}

function run(setup, screen, draw, mouseMove, mouseDragged, mouseDown, mouseUp, keyPressed, keyReleased, keyTyped, _) {
  var screen$1 = screen ? screen[0] : currentScreen[0];
  var fns;
  var exit = 0;
  var hr;
  try {
    hr = Hashtbl.find(hotreloadData, screen$1);
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      var hr$1 = /* record */[
        /* started : false */0,
        /* filename */"",
        /* draw */unwrapOrDefault(identity, draw),
        /* mouseMove */unwrapOrDefault(identity, mouseMove),
        /* mouseDragged */unwrapOrDefault(identity, mouseDragged),
        /* mouseDown */unwrapOrDefault(identity, mouseDown),
        /* mouseUp */unwrapOrDefault(identity, mouseUp),
        /* keyPressed */unwrapOrDefault(identity, keyPressed),
        /* keyReleased */unwrapOrDefault(identity, keyReleased),
        /* keyTyped */unwrapOrDefault(identity, keyTyped)
      ];
      Hashtbl.replace(hotreloadData, screen$1, hr$1);
      fns = hr$1;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    hr[/* draw */2] = unwrapOrDefault(identity, draw);
    hr[/* keyPressed */7] = unwrapOrDefault(identity, keyPressed);
    hr[/* keyReleased */8] = unwrapOrDefault(identity, keyReleased);
    hr[/* keyTyped */9] = unwrapOrDefault(identity, keyTyped);
    hr[/* mouseMove */3] = unwrapOrDefault(identity, mouseMove);
    hr[/* mouseDragged */4] = unwrapOrDefault(identity, mouseDragged);
    hr[/* mouseDown */5] = unwrapOrDefault(identity, mouseDown);
    hr[/* mouseUp */6] = unwrapOrDefault(identity, mouseUp);
    console.log("Successfully changed functions");
    fns = hr;
  }
  if (fns[/* started */0]) {
    return 0;
  } else {
    fns[/* started */0] = /* true */1;
    Random.self_init(/* () */0);
    Reprocessing_Utils.noiseSeed(Random.$$int(Reprocessing_Utils.pow(2, 29)));
    var env = Reprocessing_Internal.createCanvas(Curry._2(Reprocessing_ClientWrapper.init, /* Some */[screen$1], Sys.argv), 200, 200);
    Reprocessing_Font.Font[/* loadDefaultFont */15](env);
    var userState = [Curry._1(setup, env)];
    var width = Curry._1(Reasongl_web.Gl[/* Window */2][/* getWidth */0], env[/* window */1]);
    var height = Curry._1(Reasongl_web.Gl[/* Window */2][/* getHeight */1], env[/* window */1]);
    var data = Reasongl_web.Gl[/* readPixels_RGBA */30](env[/* gl */2], 0, 0, width, height);
    var textureBuffer = Curry._1(Reasongl_web.Gl[/* createTexture */17], env[/* gl */2]);
    Curry._3(Reasongl_web.Gl[/* bindTexture */19], env[/* gl */2], RGLConstants.texture_2d, textureBuffer);
    Reasongl_web.Gl[/* texImage2D_RGBA */41](env[/* gl */2], RGLConstants.texture_2d, 0, width, height, 0, data);
    Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_mag_filter, RGLConstants.linear);
    Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_min_filter, RGLConstants.linear);
    Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_s, RGLConstants.clamp_to_edge);
    Curry._4(Reasongl_web.Gl[/* texParameteri */20], env[/* gl */2], RGLConstants.texture_2d, RGLConstants.texture_wrap_t, RGLConstants.clamp_to_edge);
    var reDrawPreviousBufferOnSecondFrame = function () {
      var match_000 = 0 + width | 0;
      var match_000$1 = 0 + width | 0;
      var match_001 = 0 + height | 0;
      var match_001$1 = 0 + height | 0;
      var verticesColorAndTexture = /* float array */[
        match_000,
        0,
        0.0,
        0.0,
        0.0,
        0.0,
        1,
        1.0,
        1.0,
        0,
        0,
        0.0,
        0.0,
        0.0,
        0.0,
        1,
        0.0,
        1.0,
        match_000$1,
        match_001,
        0.0,
        0.0,
        0.0,
        0.0,
        1,
        1.0,
        0.0,
        0,
        match_001$1,
        0.0,
        0.0,
        0.0,
        0.0,
        1,
        0.0,
        0.0
      ];
      return Reprocessing_Internal.drawGeometry(Curry._2(Reasongl_web.Gl[/* Bigarray */28][/* of_array */1], /* Float32 */1, verticesColorAndTexture), Curry._2(Reasongl_web.Gl[/* Bigarray */28][/* of_array */1], /* Uint16 */3, /* array */[
                      0,
                      1,
                      2,
                      1,
                      2,
                      3
                    ]), RGLConstants.triangles, 6, textureBuffer, env);
    };
    var playPauseFn = Reasongl_web.Gl[/* render */5](env[/* window */1], /* Some */[(function (_, _$1, x, y) {
              env[/* mouse */12][/* pos */0] = /* tuple */[
                x,
                y
              ];
              env[/* mouse */12][/* pressed */2] = /* true */1;
              userState[0] = Curry._2(fns[/* mouseDown */5], userState[0], env);
              return /* () */0;
            })], /* Some */[(function (_, _$1, x, y) {
              env[/* mouse */12][/* pos */0] = /* tuple */[
                x,
                y
              ];
              env[/* mouse */12][/* pressed */2] = /* false */0;
              userState[0] = Curry._2(fns[/* mouseUp */6], userState[0], env);
              return /* () */0;
            })], /* Some */[(function (x, y) {
              env[/* mouse */12][/* pos */0] = /* tuple */[
                x,
                y
              ];
              if (env[/* mouse */12][/* pressed */2]) {
                userState[0] = Curry._2(fns[/* mouseDragged */4], userState[0], env);
                return /* () */0;
              } else {
                userState[0] = Curry._2(fns[/* mouseMove */3], userState[0], env);
                return /* () */0;
              }
            })], /* Some */[(function (keycode, repeat) {
              env[/* keyboard */11][/* keyCode */0] = keycode;
              if (!repeat) {
                userState[0] = Curry._2(fns[/* keyPressed */7], userState[0], env);
                env[/* keyboard */11][/* pressed */1] = Curry._2(Reprocessing_Common.KeySet[/* add */3], keycode, env[/* keyboard */11][/* pressed */1]);
                env[/* keyboard */11][/* down */3] = Curry._2(Reprocessing_Common.KeySet[/* add */3], keycode, env[/* keyboard */11][/* down */3]);
              }
              userState[0] = Curry._2(fns[/* keyTyped */9], userState[0], env);
              return /* () */0;
            })], /* Some */[(function (keycode) {
              env[/* keyboard */11][/* keyCode */0] = keycode;
              env[/* keyboard */11][/* released */2] = Curry._2(Reprocessing_Common.KeySet[/* add */3], keycode, env[/* keyboard */11][/* released */2]);
              env[/* keyboard */11][/* down */3] = Curry._2(Reprocessing_Common.KeySet[/* remove */5], keycode, env[/* keyboard */11][/* down */3]);
              userState[0] = Curry._2(fns[/* keyReleased */8], userState[0], env);
              return /* () */0;
            })], /* Some */[(function () {
              if (env[/* size */18][/* resizeable */2]) {
                var height = Curry._1(Reasongl_web.Gl[/* Window */2][/* getHeight */1], env[/* window */1]);
                var width = Curry._1(Reasongl_web.Gl[/* Window */2][/* getWidth */0], env[/* window */1]);
                return Reprocessing_Internal.resetSize(env, width, height);
              } else {
                return Reprocessing_Env.size(Reprocessing_Env.width(env), Reprocessing_Env.height(env), env);
              }
            })], (function (f) {
            if (env[/* frame */15][/* count */0] === 2) {
              reDrawPreviousBufferOnSecondFrame(/* () */0);
            }
            var exit = 0;
            var val;
            try {
              val = Hashtbl.find(hotreloadData, screen$1);
              exit = 1;
            }
            catch (exn){
              if (exn !== Caml_builtin_exceptions.not_found) {
                throw exn;
              }
              
            }
            if (exit === 1) {
              Reprocessing_Hotreload.checkRebuild(fns[/* filename */1]);
            }
            userState[0] = Curry._2(fns[/* draw */2], userState[0], env);
            var f$1 = f;
            var env$1 = env;
            var rate = 1000 / f$1 | 0;
            env$1[/* mouse */12][/* prevPos */1] = env$1[/* mouse */12][/* pos */0];
            env$1[/* frame */15] = /* record */[
              /* count */env$1[/* frame */15][/* count */0] + 1 | 0,
              /* rate */rate,
              /* deltaTime */f$1 / 1000
            ];
            env$1[/* keyboard */11][/* released */2] = Reprocessing_Common.KeySet[/* empty */0];
            env$1[/* keyboard */11][/* pressed */1] = Reprocessing_Common.KeySet[/* empty */0];
            Reprocessing_Matrix.copyInto(Reprocessing_Matrix.identity, env$1[/* matrix */16]);
            if (env$1[/* batch */10][/* elementPtr */3] > 0) {
              return Reprocessing_Internal.flushGlobalBatch(env$1);
            } else {
              return 0;
            }
          }), /* () */0);
    return Hashtbl.replace(pauseFns, screen$1, playPauseFn);
  }
}

var Draw = 0;

var Env = 0;

var Events = 0;

var Utils = 0;

var Constants = 0;

exports.Draw          = Draw;
exports.Env           = Env;
exports.Events        = Events;
exports.Utils         = Utils;
exports.Constants     = Constants;
exports.hotreload     = hotreload;
exports.setScreenId   = setScreenId;
exports.clearScreenId = clearScreenId;
exports.playPause     = playPause;
exports.run           = run;
/* hotreloadData Not a pure module */

},{"bs-platform/lib/js/sys.js":42,"bs-platform/lib/js/curry.js":9,"bs-platform/lib/js/random.js":39,"bs-platform/lib/js/hashtbl.js":43,"Reasongl/src/RGLConstants.js":46,"Reasongl/src/web/reasongl_web.js":45,"./Reprocessing_Env.js":13,"./Reprocessing_Draw.js":14,"./Reprocessing_Font.js":31,"./Reprocessing_Utils.js":15,"./Reprocessing_Common.js":34,"./Reprocessing_Matrix.js":32,"./Reprocessing_Internal.js":33,"./Reprocessing_Constants.js":17,"./Reprocessing_Hotreload.js":35,"bs-platform/lib/js/caml_builtin_exceptions.js":44,"./Reprocessing_ClientWrapper.js":36}],3:[function(require,module,exports) {
// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var $$Map = require("bs-platform/lib/js/map.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Reprocessing = require("Reprocessing/src/Reprocessing.js");
var Reprocessing_Env = require("Reprocessing/src/Reprocessing_Env.js");
var Reprocessing_Draw = require("Reprocessing/src/Reprocessing_Draw.js");
var Reprocessing_Utils = require("Reprocessing/src/Reprocessing_Utils.js");
var Reprocessing_Constants = require("Reprocessing/src/Reprocessing_Constants.js");

var StringMap = $$Map.Make([$$String.compare]);

var zero_vec = /* float array */[0, 0];

function global_forces(t) {
  return (/* float array */[100 * Math.sin(t / 2) + 20 * Math.cos(t / 3), -1000]
  );
}

var repo_init_p = /* float array */[150, 550];

var origin_init_001 = /* repo_refs : :: */[
/* record */[
/* gref_name */"master",
/* gref_sha */"abc"],
/* [] */0];

var origin_init_002 = /* repo_commits */List.fold_left(function (m, c) {
  return Curry._3(StringMap[/* add */3], c[/* commit_sha */0], c, m);
}, StringMap[/* empty */0], /* :: */[
/* record */[
/* commit_sha */"abc",
/* commit_parent : None */0,
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"def",
/* commit_parent : Some */["abc"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"ghi",
/* commit_parent : Some */["def"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"jkl",
/* commit_parent : Some */["ghi"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"mno",
/* commit_parent : Some */["jkl"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"pqr",
/* commit_parent : Some */["mno"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"stu",
/* commit_parent : Some */["def"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"vwx",
/* commit_parent : Some */["stu"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"yzz",
/* commit_parent : Some */["vwx"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"1ab",
/* commit_parent : Some */["stu"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"1bc",
/* commit_parent : Some */["1ab"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* :: */[
/* record */[
/* commit_sha */"1de",
/* commit_parent : Some */["1bc"],
/* commit_p */repo_init_p,
/* commit_v */zero_vec],
/* [] */0]]]]]]]]]]]]);

var origin_init = /* record */[
/* repo_name */"origin", origin_init_001, origin_init_002,
/* repo_p */repo_init_p];

var initState_000 = /* repos : :: */[origin_init,
/* [] */0];

var initState = /* record */[initState_000,
/* t */0];

var target_d_sq = Math.pow(10, 2);

function calc_mag_sq(p) {
  return Math.pow(p[/* x */0], 2) + Math.pow(p[/* y */1], 2);
}

function add_vecs(p, p2) {
  return (/* float array */[p[/* x */0] + p2[/* x */0], p[/* y */1] + p2[/* y */1]]
  );
}

function sub_vecs(p, p2) {
  return (/* float array */[p[/* x */0] - p2[/* x */0], p[/* y */1] - p2[/* y */1]]
  );
}

function scale_vec(c, p) {
  return (/* float array */[c * p[/* x */0], c * p[/* y */1]]
  );
}

function rand_direction() {
  var phi = 2 * 3.14 * Math.random();
  return (/* float array */[Math.cos(phi), Math.sin(phi)]
  );
}

function one_parent_p(repo, commit) {
  var match = commit[/* commit_parent */1];
  if (match) {
    return Curry._2(StringMap[/* find */21], match[0], repo[/* repo_commits */2])[/* commit_p */2];
  } else {
    return repo[/* repo_p */3];
  }
}

function gather_parent_ps(_$staropt$star, repo, _commit) {
  while (true) {
    var commit = _commit;
    var $staropt$star = _$staropt$star;
    var acc = $staropt$star ? $staropt$star[0] : /* [] */0;
    var match = commit[/* commit_parent */1];
    if (match) {
      var c = Curry._2(StringMap[/* find */21], match[0], repo[/* repo_commits */2]);
      _commit = c;
      _$staropt$star = /* Some */[/* :: */[c[/* commit_p */2], acc]];
      continue;
    } else {
      return List.rev( /* :: */[repo[/* repo_p */3], acc]);
    }
  };
}

function step_commit(dt, state, repo, commit) {
  var parent_ps = gather_parent_ps( /* None */0, repo, commit);
  var sibling_ps = Curry._2(StringMap[/* filter */13], function (_, c) {
    if (Caml_obj.caml_equal(c[/* commit_parent */1], commit[/* commit_parent */1])) {
      return Caml_obj.caml_notequal(c, commit);
    } else {
      return (/* false */0
      );
    }
  }, repo[/* repo_commits */2]);
  var p = commit[/* commit_p */2];
  var parent_repel_a = List.fold_left(function (acc, pp) {
    var a;
    if (Caml_obj.caml_equal(pp, p)) {
      a = scale_vec(1000, rand_direction( /* () */0));
    } else {
      var delta = sub_vecs(p, pp);
      var r_sq = calc_mag_sq(delta);
      var r = Math.sqrt(r_sq);
      a = scale_vec(1000 / r, delta);
    }
    return add_vecs(acc, a);
  }, zero_vec, parent_ps);
  var sibling_repel_a = Curry._3(StringMap[/* fold */10], function (_, commit, acc) {
    var pp = commit[/* commit_p */2];
    var a;
    if (Caml_obj.caml_equal(pp, p)) {
      a = scale_vec(1000, rand_direction( /* () */0));
    } else {
      var delta = sub_vecs(p, pp);
      var r_sq = calc_mag_sq(delta);
      var r = Math.sqrt(r_sq);
      a = scale_vec(700 / r, delta);
    }
    return add_vecs(acc, a);
  }, sibling_ps, zero_vec);
  var r_sq = calc_mag_sq(commit[/* commit_v */3]);
  var r = Math.sqrt(r_sq);
  var drag_a = scale_vec(-Pervasives.min(5, r * 0.2), commit[/* commit_v */3]);
  var direct_parent = one_parent_p(repo, commit);
  var delta = sub_vecs(direct_parent, p);
  var r_sq$1 = calc_mag_sq(delta);
  var r$1 = Math.sqrt(r_sq$1);
  var unit_vec = scale_vec(1 / r$1, delta);
  var attract_a = r$1 <= 10 ? zero_vec : scale_vec(Math.pow(10 - r$1, 2), unit_vec);
  var a = add_vecs(drag_a, add_vecs(attract_a, add_vecs(sibling_repel_a, add_vecs(parent_repel_a, add_vecs(global_forces(state[/* t */1]), zero_vec)))));
  var v = /* float array */[commit[/* commit_v */3][/* x */0] + a[/* x */0] * dt, commit[/* commit_v */3][/* y */1] + a[/* y */1] * dt];
  var p$1 = /* float array */[p[/* x */0] + v[/* x */0] * dt, p[/* y */1] + v[/* y */1] * dt];
  return (/* record */[
    /* commit_sha */commit[/* commit_sha */0],
    /* commit_parent */commit[/* commit_parent */1],
    /* commit_p */p$1,
    /* commit_v */v]
  );
}

function step_repo(dt, state, repo) {
  return (/* record */[
    /* repo_name */repo[/* repo_name */0],
    /* repo_refs */repo[/* repo_refs */1],
    /* repo_commits */Curry._2(StringMap[/* map */22], function (param) {
      return step_commit(dt, state, repo, param);
    }, repo[/* repo_commits */2]),
    /* repo_p */repo[/* repo_p */3]]
  );
}

function step_state(dt, state) {
  return (/* record */[
    /* repos */List.map(function (param) {
      return step_repo(dt, state, param);
    }, state[/* repos */0]),
    /* t */state[/* t */1] + dt]
  );
}

function draw_commit_lines(env, repo, commit) {
  var p = commit[/* commit_p */2];
  var parent_p = one_parent_p(repo, commit);
  return Reprocessing_Draw.linef( /* tuple */[parent_p[/* x */0], parent_p[/* y */1]], /* tuple */[p[/* x */0], p[/* y */1]], env);
}

function draw_commit(env, commit) {
  var p = commit[/* commit_p */2];
  Reprocessing_Draw.fill(Reprocessing_Utils.color(241, 78, 50, 255), env);
  Reprocessing_Draw.stroke(Reprocessing_Constants.black, env);
  Reprocessing_Draw.strokeWeight(3, env);
  return Reprocessing_Draw.ellipsef( /* tuple */[p[/* x */0], p[/* y */1]], 20, 20, env);
}

function draw_repo(env, repo) {
  Reprocessing_Draw.fill(Reprocessing_Constants.white, env);
  Reprocessing_Draw.stroke(Reprocessing_Constants.black, env);
  Reprocessing_Draw.strokeWeight(3, env);
  Reprocessing_Draw.rectMode( /* Center */1, env);
  Reprocessing_Draw.rectf( /* tuple */[repo[/* repo_p */3][/* x */0], repo[/* repo_p */3][/* y */1]], 100, 50, env);
  Curry._2(StringMap[/* iter */9], function (_, c) {
    return draw_commit_lines(env, repo, c);
  }, repo[/* repo_commits */2]);
  return Curry._2(StringMap[/* iter */9], function (_, c) {
    return draw_commit(env, c);
  }, repo[/* repo_commits */2]);
}

function draw(state, env) {
  var dt = Reprocessing_Env.deltaTime(env);
  var dt_sim = Pervasives.min(dt, 0.1);
  var state$prime = step_state(dt_sim, state);
  Reprocessing_Draw.background(Reprocessing_Utils.color(199, 217, 229, 255), env);
  List.iter(function (param) {
    return draw_repo(env, param);
  }, state$prime[/* repos */0]);
  return state$prime;
}

function setup(env) {
  Reprocessing_Env.size(600, 600, env);
  return initState;
}

Reprocessing.setScreenId("gitsim-screen");

Reprocessing.run(setup, /* None */0, /* Some */[draw], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* () */0);

var target_d = 10;

exports.StringMap = StringMap;
exports.zero_vec = zero_vec;
exports.global_forces = global_forces;
exports.origin_init = origin_init;
exports.initState = initState;
exports.target_d = target_d;
exports.target_d_sq = target_d_sq;
exports.calc_mag_sq = calc_mag_sq;
exports.add_vecs = add_vecs;
exports.sub_vecs = sub_vecs;
exports.scale_vec = scale_vec;
exports.rand_direction = rand_direction;
exports.one_parent_p = one_parent_p;
exports.gather_parent_ps = gather_parent_ps;
exports.step_commit = step_commit;
exports.step_repo = step_repo;
exports.step_state = step_state;
exports.draw_commit_lines = draw_commit_lines;
exports.draw_commit = draw_commit;
exports.draw_repo = draw_repo;
exports.draw = draw;
exports.setup = setup;
/* StringMap Not a pure module */
},{"bs-platform/lib/js/map.js":7,"bs-platform/lib/js/list.js":8,"bs-platform/lib/js/curry.js":9,"bs-platform/lib/js/string.js":10,"bs-platform/lib/js/caml_obj.js":11,"bs-platform/lib/js/pervasives.js":12,"Reprocessing/src/Reprocessing.js":16,"Reprocessing/src/Reprocessing_Env.js":13,"Reprocessing/src/Reprocessing_Draw.js":14,"Reprocessing/src/Reprocessing_Utils.js":15,"Reprocessing/src/Reprocessing_Constants.js":17}],88:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '34615' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[88,3], null)
//# sourceMappingURL=/demo.bs.fec80524.map