# Objects

You could just watch [our video here]().

Check out the [codepen here](https://codepen.io/jay-pancodu/pen/QWNwEgO)

But, if you want some explanations, read below.

[back to table of contents](readme.md)

# short explanation

In JavaScript, every variable is an object. I cannot go into a lenghty explanation about objects here. That will a too deep concept to discuss.

Think of objects as a group which contains properties. These properties can have values attached to them, of any kind. 

Here is how a object looks and is used.

    var superhero = {
    heroname : "Batman",
    realname  : "Bruce Wayne"
    };

    var currentDiv = document.getElementById("objectdisplay");

    var tempp1 = document.createElement("p"); 
    tempp1.innerHTML = superhero.heroname;

    currentDiv.appendChild(tempp1);

    var tempp2 = document.createElement("p"); 
    tempp2.innerHTML = superhero.realname;

    currentDiv.appendChild(tempp2);

When dealing with objects, you will be using the dot operator aka '.'

# important note 

This code is provided as is without any warranties. It's primarily meant for our own use. Feel free to use this code as it pleases you.

# About

Owner and Developer of this project - [Jay](http://thechalakas.com)