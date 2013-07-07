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
}());

