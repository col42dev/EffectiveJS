(function () {
    "use strict";

    console.log("Chapter 4");
    
    function hash(key)
    {
        return key;
    }

    function User(name, passwordHash)
    {
        this.name = name;
        this.passwordHash = passwordHash;
    }

    User.prototype.toString = function () {
        return "[User " + this.name + "]";
    };
    
    User.prototype.checkPassword = function(password) {
        return hash(password) === this.passwordHash;
    };
    
    var u = new User("jkllk", "ddudiookk");
    
    function NewUser(name, passwordHash)
    {   
        if (!(this instanceof NewUser)) {
            return new NewUser(name, password);
        }
        this.name = name;
        this.passwordHash = passwordHash;
    }
}());