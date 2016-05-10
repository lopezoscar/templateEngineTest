"use strict";

var helpers = {
    mostrar:function(opts){
        console.log(opts);
    },
    dosParams: function(param1, param2){
        console.log(param1,param2);
    },
    gt: function(v1, v2, options) {
        if(v1 > v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    },
    compare:function(lvalue, rvalue, options) {
        //console.log('comparando: ', lvalue, ' con: ', rvalue);
        if (arguments.length < 3)
            throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
        var operator = options.hash.operator || "==";
        var operators = {
            '==':       function(l,r) { return l == r; },
            '===':      function(l,r) { return l === r; },
            '!=':       function(l,r) { return l != r; },
            '<':        function(l,r) { return l < r; },
            '>':        function(l,r) { return l > r; },
            '<=':       function(l,r) { return l <= r; },
            '>=':       function(l,r) { return l >= r; },
            '%':        function(l,r) { return l % r == 0; },
            'typeof':   function(l,r) { return typeof l == r; },
            'isUndefined':   function(l,r) { return typeof l !== 'undefined'; }
        };
        if (!operators[operator])
            throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);
        var result = operators[operator](lvalue,rvalue);
        if(result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }
};

module.exports = helpers;

