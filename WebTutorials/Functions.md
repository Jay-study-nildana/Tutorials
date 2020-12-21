# Functions

Check out the [codepen here](https://codepen.io/jay-pancodu/pen/VwaYjmw)

[back to table of contents](readme.md)

# short explanation

A function is like a box that does something specific. If you have a TV in your home, it has a remote. The remote has one specific function. To interact with your TV.

If you a xbox game controller, it has one function. Talk to the console, and let you play.

Similarly, in the programming world, a function is a specific box of statements, that handle a specific task. 

Look at this function 

    function anotherfunction(quicknumber)
    {
        var logopener="----entering anotherfunction----";
        console.log(logopener);
    
        console.log("this is coming from anotherfunction");
    
        console.log("the number that was sent is " + quicknumber);  
    

        var logcloser="----leaving anotherfunction----";
        console.log(logcloser);
    }

A function usually has the following things.

* the function keyword - function. Above, 'anotherfunction' is the function name.
* parameter. a function is called by other functions. In the calling process, it is possible to send values. Here, the parameter is 'quicknumber'
* return value. functions can choose to return a value back to the calling function. The current example code does not return anything.
* a collection of statements, including calling other functions. for example, the 'log' function is being called by anotherfunctions.

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

I can be reached through my website - [Jay's Developer Profile](https://jay-study-nildana.github.io/developerprofile)