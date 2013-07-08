(function () {
    "use strict";
    // All the bitwsie operators work by converting values to integers and performing operations on operators before converting back to floating point
    console.log(JSON);

    function makeSandwich() {
        var magicIngredient = "peanut butter";
        function make(filling) {
            return magicIngredient + "and" + filling;
        }
        return make("jelly");
    }
    makeSandwich();

    function sandwichMaker() {
        var magicIngredient = "peanut butter";
        function make(filling) {
            return magicIngredient + " and " + filling;
        }
        return make;
    }

    var f = sandwichMaker();
    console.log(f("jelly"));

    //Functions that keep track of variables from their containing scope are called closures
    //In JavaScript functions are first class objects
    //A function can refer to any variable in its scope
    //closures can update the value of outer vaiables.
    function box() {
        var val = undefined;
        return {
            set: function (newVal) { val = newVal; },
            get: function () { return val; },
            type: function () { return typeof val; }
        };
    }

    function makeBox() {
        var b = box();
        console.log(b.type());
        console.log(b.set(98.6));
        console.log(b.get());
        console.log(b.type());
    }
    makeBox();

    //variable hoisting
    //variables are scoped not to the nearest enclosing block or stament but to thrir containing function
    //hoist variables manually to avoid ambiguity
    function test() {
        var x = "var", result = [];
        result.push(x);
        try {
            throw "exception";
        } catch (y) {
            console.log(y);
        }
        result.push(x);
        return result;
    }
    test();

    //Use immeditaly invoked function expressions to create local scopes
    //key point: closure store their over variables by refernce and not by value.
    function wrapElements(a) {
        var result = [], i, n;
        for (i = 0, n = a.length; i < n; i = i + 1) {
            //immediately invoked function expression (IIFE), pronounced "iffy"
            (function () {
                var j = i;
                result[i] = function () { return a[j]; };
            }());
        }
        return result;
    }
    var wrapped = wrapElements([10, 20, 30, 40, 50]);
    var fw = wrapped[0];
    console.log(fw());
    
    //alternatively bind local variable as a parameter
    function wrapElements2(a) {
        var result = [], i, n;
        for (i = 0, n = a.length; i < n; i = i + 1) {
            //immediately invoked function expression (IIFE), pronounced "iffy"
            (function (j) {
                result[i] = function () { return a[j]; };
            }(i));
        }
        return result;
    }
    var wrapped2 = wrapElements2([10, 20, 30, 40, 50]);
    var fw2 = wrapped2[0];
    console.log(fw2());

    //avoid creatng local vars with eval
    var y = "global";
    function testeval(src) {
        (function() { eval(src); } ());
        return y;
    }
    console.log(testeval("var y = 'local';"));
    console.log(testeval("var z = 'local';"));
    
}());

