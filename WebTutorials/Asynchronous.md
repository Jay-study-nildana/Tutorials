# Fetching data from API server

Check out the [codepen here](https://codepen.io/jay-pancodu/pen/wvGBWPe)

Check our [full web app](fullwebapp.md) on code related to consuming API servers.

[back to table of contents](readme.md)

# short explanation

The thing about making a web api call, is that, it is going to be asynchronous call.

So, new word. What is asnchronous? 

Let's say you are at a movie theater. You are buying popcorn, so you are waiting in the queue. While you are waiting, you take out your own, send a quick email reply to your office. 

What did you just do? While you were waiting, you were able to get some other work done. In this case, waiting at the queue to buy popcorn is what we call an asynchronous activity. 

In a web api call, we use the fetch function. When the code makes a call to the API server, the API server might take a few second to respond. While this is happening, the javascript will carry on with the rest of the code flow. This is important becuase, otherwise, the web app would freeze waiting for the api server to respond.

# fetch api

Here is how a simple fetch api looks like. 

    const response = await fetch(fullUrl,
        {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
            }
        }
        );

* fullUrl would contain the complete URL API endpoint that the fetch is to target.
* method: 'GET', supports every other type of methods. In a standard API server, you will find methods like GET, POST, PUT, DELETE and more. 
* headers - every API call will have some headers. Content-Type is the most common one. Also, tokens are included in the headers section. 

when the API server responds or fails, we will get a response. and it will be handled in the code. An example is here. 

    if(response.status == 400)
    {
        console.log("unknown error - " + response.status);
    }
    else if(response.status == 200)
    {
        var responsejson = response.json();
        responsejson.then(
            function(result)
            {
                console.log(result);
                var currentDiv = document.getElementById("objectdisplay");

                var tempp1 = document.createElement("p"); 
                tempp1.innerHTML = result.Message1;
                currentDiv.appendChild(tempp1);              
                var tempp2 = document.createElement("p"); 
                tempp2.innerHTML = result.Message2;
                currentDiv.appendChild(tempp2);              
                var tempp3 = document.createElement("p"); 
                tempp3.innerHTML = result.Number1;
                currentDiv.appendChild(tempp3);              
                var tempp4 = document.createElement("p"); 
                tempp4.innerHTML = result.Number2;
                currentDiv.appendChild(tempp4);                            
            },
            function(error)
            {
                console.log(error);
            }
        );
    }
    else
    {
        //some unknown error
    }

The response comes in the form of a status code, and the body of the response. the API server would have multiple responses and status codes. Just like events, you can choose to catch all responses or just the response you want to use in your web app. 

In most cases, the most important would be response.status == 200. This means, the API server has returned successfully.

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

I can be reached through my website - [Jay's Developer Profile](https://jay-study-nildana.github.io/developerprofile)