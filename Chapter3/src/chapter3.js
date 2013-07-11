(function () {
    "use strict";

    console.log("Chapter 3");

    var obj = {
        hello: function () {
            return "hello" + this.username;
        },
        username: "Hans Gruber"
    };
    console.log(obj.hello());

    var obj2 = {
        hello: obj.hello,
        username: "Boo Radley"
    };
    console.log(obj2.hello());

    function User(name, passwordHash) {
        this.name = name;
        this.passwordHash = passwordHash;
    }
    var u = new User("sfalken", "kgkluu");
    console.log(u.name);

    // get comftable with using higher order functions
    // Higher order function are function which take othe rfunctions as args or return functions
    function mySort(x, y) {
        if (x < y) {
            return 1;
        }
        if (x > y) {
            return -1;
        }
        return 0;
    }
    console.log([2, 6, 2, 6, 2, 5, 8, 2].sort());
    console.log([2, 6, 2, 6, 2, 5, 8, 2].sort(mySort));

    var names = ["Fred", "Wilma", "Pebbles"];
    var upper = names.map(function (name) {
        return name.toUpperCase();
    });
    console.log(upper);

    // use "call"" to Call Methods with a custom receiver

    // variable-arity functions. "Apply" method
    var buffer = {
        state: [],
        append: function () {
            var i, n;
            for (i = 0, n = arguments.length; i < n; i = i + 1) {
                this.state.push(arguments[i]);
            }
        }
    };

    buffer.append("hello");
    buffer.append("Colin", " ", "Moore", "!");
    buffer.append("\n");
    console.log(buffer.state);

    function callMethod(obj, method) {
        var args = [].slice.call(arguments, 2); // copy arguments in to array
        return obj[method].apply(obj, args);
    }

    var obj3 = {
        add: function (x, y) { return x + y; }
    };

    console.log(callMethod(obj3, "add", 17, 25));

    // use variables to Save a reference to arguments
    function values() {
        var i = 0, n = arguments.length, a = arguments;
        return {
            hasNext: function () {
                return i < n;
            },
            next: function () {
                if (i >= n) {
                    throw new Error("end of iteration");
                }
                i =  i + 1;
                return a[i - 1];
            }
        };
    }
    var it = values(1, 4, 1, 4, 2, 1, 3, 5, 6);
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

}());