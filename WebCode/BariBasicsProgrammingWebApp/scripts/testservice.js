async function buttonTestServiceAuthorized()
{
    var logopener="----entering buttonTestServiceAuthorized----";
    console.log(logopener);

    APIBeingProcessed();

    var baseUrl = returnCurrentBaseURL();
    var endPoint = "api/HelloWorld/TestServiceAuthorized";
    var fullUrl = baseUrl + endPoint;
    var getCurrentToken = getToken();

    if(getCurrentToken == null)
    {
        TokenCheckFailed();
    }

    const response = await fetch(fullUrl,
        {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+getCurrentToken
            }
        }
        );

    if(response.status == 400)
    {
        console.log("unknown error - " + response.status);
        TokenCheckFailed();
    }
    else if(response.status == 200)
    {
        var responsejson = response.json();
        responsejson.then(
            function(result)
            {
                console.log(result);
                ShowbuttonTestServiceResponse(result);
                APICallSuccess();
            },
            function(error)
            {
                console.log(error);
                TokenCheckFailed();
            }
        );
    }
    else
    {
        //some unknown error
    }

    var logcloser="----leaving buttonTestServiceAuthorized----";
    console.log(logcloser);
}



async function buttonTestService()
{
    var logopener="----entering buttonTestService----";
    console.log(logopener);

    APIBeingProcessed();

    var baseUrl = returnCurrentBaseURL();
    var endPoint = "api/HelloWorld/TestService";
    var fullUrl = baseUrl + endPoint;
    //dont need token. this is an unsecured endpoint
    // var getCurrentToken = getToken();

    const response = await fetch(fullUrl,
        {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
            }
        }
        );

    if(response.status == 400)
    {
        console.log("unknown error - " + response.status);
        TokenCheckFailed();
    }
    else if(response.status == 200)
    {
        var responsejson = response.json();
        responsejson.then(
            function(result)
            {
                console.log(result);
                ShowbuttonTestServiceResponse(result);
                APICallSuccess();
            },
            function(error)
            {
                console.log(error);
                TokenCheckFailed();
            }
        );
    }
    else
    {
        //some unknown error
    }

    var logcloser="----leaving buttonTestService----";
    console.log(logcloser);
}



function ShowbuttonTestServiceResponse(result)
{
    var logopener="----entering ShowbuttonTestServiceResponse----";
    console.log(logopener);  

    //pick the div meant for this item
    var currentDiv = document.getElementById("buttonTestServiceResults");

    //as per the postman output, we have four fields.
    var variableMessage1 = document.createElement("p"); 
    var variableMessage2 = document.createElement("p"); 
    var variableNumber1 = document.createElement("p"); 
    var variableNumber2 = document.createElement("p"); 

    var variablehorizontalline = document.createElement("hr"); 

    variableMessage1.innerText = result.Message1;
    variableMessage2.innerText = result.Message2;
    variableNumber1.innerText = result.Number1;
    variableNumber2.innerText = result.Number2;

    currentDiv.appendChild(variablehorizontalline);

    currentDiv.appendChild(variableMessage1); 
    currentDiv.appendChild(variableMessage2); 
    currentDiv.appendChild(variableNumber1); 
    currentDiv.appendChild(variableNumber2); 

    var logcloser="----leaving ShowbuttonTestServiceResponse----";
    console.log(logcloser);
}

async function buttonTestServiceUserDetails()
{
    var logopener="----entering buttonTestServiceUserDetails----";
    console.log(logopener);

    APIBeingProcessed();

    var baseUrl = returnCurrentBaseURL();
    var endPoint = "api/HelloWorld/TestServiceUserDetails";
    var fullUrl = baseUrl + endPoint;
    var getCurrentToken = getToken();

    if(getCurrentToken == null)
    {
        TokenCheckFailed();
    }    

    const response = await fetch(fullUrl,
        {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+getCurrentToken
            }
        }
        );

    if(response.status == 400)
    {
        console.log("unknown error - " + response.status);
        APICallFailed();
    }
    else if(response.status == 200)
    {
        var responsejson = response.json();
        responsejson.then(
            function(result)
            {
                console.log(result);
                ShowbuttonTestServiceUserDetailsResponse(result);
                APICallSuccess();
            },
            function(error)
            {
                console.log(error);
                APICallFailed();
            }
        );
    }
    else
    {
        //some unknown error
        APICallFailed();
    }

    var logcloser="----leaving buttonTestServiceUserDetails----";
    console.log(logcloser);    
}

function ShowbuttonTestServiceUserDetailsResponse(result)
{
    var logopener="----entering ShowbuttonTestServiceUserDetailsResponse----";
    console.log(logopener);  

    //pick the div meant for this item
    var currentDiv = document.getElementById("buttonTestServiceResults");

    //as per the postman output, we have four fields.
    var variableMessageDescription = document.createElement("p"); 
    var variableUserName = document.createElement("p"); 

    var variablehorizontalline = document.createElement("hr"); 

    variableMessageDescription.innerText = result.MessageDescription;
    variableUserName.innerText = result.UserName;


    currentDiv.appendChild(variablehorizontalline);

    currentDiv.appendChild(variableMessageDescription); 
    currentDiv.appendChild(variableUserName);  

    var logcloser="----leaving ShowbuttonTestServiceUserDetailsResponse----";
    console.log(logcloser);
}


function pagehasloaded()
{
    var logopener="----entering pagehasloaded----";
    console.log(logopener);
   
    //check if local storage has a token.
    var getCurrentToken = getToken();

    if(getCurrentToken!=null)
    {
        console.log("You are already signed in");
        //send token and try to get the basic resume information.
        //hide the login page.
        TokenCheckPassed();
    }
    else
    {
        console.log("You need to sign in below");
        TokenCheckFailed();
    }

    var logcloser="----leaving pagehasloaded----";
    console.log(logcloser);
    DefaultMessage();
}

// var entirenamep = document.getElementById("entirename");
// var fullname = result.FirstName + " " + result.MiddleName + " " + result.LastName;
// entirenamep.innerText = fullname;

function TokenCheckPassed()
{

    var logopener="----entering TokenCheckPassed----";
    console.log(logopener);

    var loaddisplay = document.getElementById("pageloadedtokencheck");
    var messageafterloading = "you are already logged in. all endpoints below will work"
    loaddisplay.innerText = messageafterloading;

    var logcloser="----leaving TokenCheckPassed----";
    console.log(logcloser);    
    DefaultMessage();
}

function TokenCheckFailed()
{

    var logopener="----entering TokenCheckFailed----";
    console.log(logopener);

    var loaddisplay = document.getElementById("pageloadedtokencheck");
    var messageafterloading = "you are not logged in. only non-token endpoints will work. Log in by visiting the home page"
    loaddisplay.innerText = messageafterloading;

    var logcloser="----leaving TokenCheckFailed----";
    console.log(logcloser); 
    DefaultMessage();   
}

function APIBeingProcessed()
{

    var logopener="----entering APIBeingProcessed----";
    console.log(logopener);

    var loaddisplay = document.getElementById("pageloadedtokencheck");
    var messageafterloading = "still talking to the API server"
    loaddisplay.innerText = messageafterloading;

    var logcloser="----leaving APIBeingProcessed----";
    console.log(logcloser);  
    DefaultMessage();  
}

function APICallSuccess()
{
    var logopener="----entering APICallSuccess----";
    console.log(logopener);

    var loaddisplay = document.getElementById("pageloadedtokencheck");
    var messageafterloading = "API Call was a success. results updated below!"
    loaddisplay.innerText = messageafterloading;

    var logcloser="----leaving APICallSuccess----";
    console.log(logcloser);  
    DefaultMessage();   
}

function APICallFailed()
{
    var logopener="----entering APICallFailed----";
    console.log(logopener);

    var loaddisplay = document.getElementById("pageloadedtokencheck");
    var messageafterloading = "API Call was a failure. try again or contact developer!"
    loaddisplay.innerText = messageafterloading;

    var logcloser="----leaving APICallFailed----";
    console.log(logcloser);  
    DefaultMessage();   
}

function DefaultMessage()
{
    var logopener="----entering DefaultMessage----";
    console.log(logopener);

    var delayInMilliseconds = 3000; //1 second

    setTimeout(function() {
    //your code to be executed after 1 second
    var loaddisplay = document.getElementById("pageloadedtokencheck");
    var messageafterloading = "Waiting on you to do something. thank you."
    loaddisplay.innerText = messageafterloading;    

    }, delayInMilliseconds);

    var logcloser="----leaving DefaultMessage----";
    console.log(logcloser);      
}