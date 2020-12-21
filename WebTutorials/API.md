# API - JSON data servers

In this chapter, I am mostly talking about API servers that serve data to web and mobile apps using JSON.

Note: This should not be confused with [API's](https://developer.mozilla.org/en-US/docs/Web/API) that are available within JavaScript

Check our [full web app](fullwebapp.md) on code related to consuming API servers.

[back to table of contents](readme.md)

# some details

There are dozens of technologies that can be used to deliver data from servers to clients. In our case, the client is the web app, running on the web browser. 

One of the technologies used to server data to web apps (and majority of mobile apps or any app on majority of devices) is API server technology. These are standardized technogy frameworks that can be build using technology platforms such as .NET, .NET Core, Node JS, Java and so on.

API servers usually have the following features. 

* they will have endpoints which are available over HTTPS. They can work over HTTP too, but HTTP is discourage except for local testing and development.
* they will have authorized and unauthorized endpoints. Authorized endpoints are those that are require some form of token to be supplied when a API call is made. 
* They return data in JSON. more details about JSON in (another chapter)[JSON.md]
* API documentation. There will always be some kind of API documentation. Swagger is a popular format right now. 

Its usually a good idea to try out the API server and its endpoints using Swagger or Postman or CURL before using the API in your code.

# tiny note on JSON

JSON is a platform agnostic data exchange format. That means, once you have an API server that serves data using JSON, it can be consumed by pretty much any web app, mobile app, gaming device, desktop app and almost any kind of app that understands JSON. 

# important note 

This code is provided as is without any warranties. It's primarily meant for my own personal use, and to make it easy for me share code with my students. Feel free to use this code as it pleases you.

I can be reached through my website - [Jay's Developer Profile](https://jay-study-nildana.github.io/developerprofile)