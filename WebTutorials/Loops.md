# Loop

You could just watch [our video here]().

Check out the [codepen here](https://codepen.io/jay-pancodu/pen/NWNPrGp)

But, if you want some explanations, read below.

[back to table of contents](../readme.md)

# short explanation

A ton of things in life are constant repitition. You get up and you go to sleep. you do the everyday. If you work in an office job, you are at office, you are doing it, again and again. 

Loops.

Programming is essentially a reflection of life. Also, most of the time, almost every app is almost always showing a number of things which are usually part of a collection. 

Like, when you open a news app, it essentially shows a long list of articles from a collection. Anytime you have kind of repitition, you use loops, specificially for loops.

Here is a code showing a loop. 

    for(var i=0;i<numberofloops;i++)
    {
     
      //create a simple paragraph tag
      var tempp = document.createElement("p");
      tempp.innerHTML = "whats up doc?"; 
      //add it to the div
      currentDiv.appendChild(tempp);
      
    }

In any for loop, you will have a few common components. 

* counter variable. Above, i is the counter variable. It is set to begin at some value (here, it is set to begin at 0), and there is an incrementer (++ or --) and an end condition (here, it is i<numberofloops>)
* loop body where you perform an action as long as the counter is valid, and the loop is allowed to enter.
* This action can be anything. It could be the execution of a series of statements, calling functions, or even put a loop inside a loop.

# important note 

This code is provided as is without any warranties. It's primarily meant for our own use. Feel free to use this code as it pleases you.

# About

Owner and Developer of this project - [Jay](http://thechalakas.com)