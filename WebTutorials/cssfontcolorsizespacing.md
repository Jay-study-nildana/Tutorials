# Font, Color, Size and Spacing

We did go through some basic CSS before. Now, lets get into a little depth.

Honestly, I dont like CSS. in my 8 plus years of working as a software developer, I have stayed away from working on advanced UI configuration. I would use ready made templates that already have CSS configured to get the desired results. This way, I spend less time on doing styling aka CSS. I spend more time on building the app itself, mainly the javascript portion which is where all the action happens. 

You see, layouts are mostly standardized. You could take a layout of another app, and use it in your app without any problems. However, the javascript of your app is truly yours and yours alone. That cannot be just copied and lifted straight up. 

Still, even to use ready to use templates of CSS, you still need some basic CSS knowledge. Lets do that in these CSS chapters. 

# Including CSS

Normally, you wou would include CSS stylesheet like this. 

    <link rel="stylesheet" href="styles.css">

Of course, you only need to do this when working with visual studio code. if you are working on codepen, codepen already has a dedicated CSS section where you directly put the CSS code. 

Now, there are two more ways of including CSS. inline, and also with the style tag. I dont recommend it, but you are free to do it that way. CSS gives a lot of flexibility but it also can be confusing. Too many options is good for power users. We are looking at basics, so we will stick to this method.

# Selectors

Ultimately, CSS works by choosing and picking elements, based on the selectors you provide. 

For instance, here is you selecting all the tags with li. this is a type selector.

    li {
    list-style-type: none;
    }

Here, is you selecting all tags with the following CSS class specified. this is a class selector.

    .special {
    color: orange;
    font-weight: bold;
    list-style-type: square;
    }

Here, is you selecting all tags with a specific ID specified. this is a id selector.

    h1#idoftables {
        color: rebeccapurple;
    }

# at-rules

Every now and then, you will end up using at-rules, like @media or @import. 

Here is you, importing another style sheet into the current style sheet.

    @import 'styles2.css';

# Shorthands

You will also run into shorthands in CSS. Here is two main things, you might see a lot. 

    padding: 10px 15px 15px 5px;

and, one more. 

    background: red url(bg-graphic.png) 10px 10px repeat-x fixed;

As always, check the included codepen to see some code in action. 

# CodePen Links

* [Font, Color, Size and Spacing](https://codepen.io/jay-pancodu/pen/MWKoYzr)
* [Quick CSS Demo](https://codepen.io/jay-pancodu/pen/pogwJdO)

# Video Links

* [notyetupdated](Link)

# Podcast Links

* [notyetupdated](Link)

# Reference Materials Used 

* [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
* [Mozilla MDN - Learn web development](https://developer.mozilla.org/en-US/docs/Learn)
* [W3 Schools](https://www.w3schools.com)
* [Get Coding!](https://getcodingkids.com/missions/)

# Code Repositories

* [coderepo](https://github.com/Suvashna-Training-and-Development/Tutorials/tree/master/WebCode/foldername/)
* [coderepo - to use from repository](../WebCode/foldername/)

# Packages Used 

* [notyetupdated](Link)

# Developer Tip 

* watch out for this tag - DEVELOPERTIP - throughout the code for some daily developer tips.

# TRIVIA 

* sure, lets put some trivia here.
* and some more, eh?

# GLOBAL TAGS USED

* TODO - all kind of standard TODO things to do. 
* DEVELOPERTIP - tips for developers.
* SECRETANDSTRINGS69 - places where secrets like API keys and other things are stored. use this add and remove secrets before committing code publicly. private repos is okay but team members trust must be considered based on company policy. 

# important note 

This code is provided as is without any warranties. It's primarily meant for our own use. Feel free to use this code as it pleases you.

# About Us

Our company name is Suvashna. We are a small software training and development based out of Hyderbad and Mysore, India. 

Learn more about us here - [Suvashna Training and Development](https://suvashna.com)

Learn more about our Founder and Chief Developer here - [Jay](http://thechalakas.com)