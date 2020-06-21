//this file contains the common functions used by other files. 

//this creates a user with some entered values.
//check userAction for comments and more details
const userActionWithEnteredValues = async (email,password1,password2) => 
{
    var logopener="----entering userActionWithEnteredValues----";
    console.log(logopener);

    var divinside = 
    document.getElementById("statusmessageafterAPIcall");
    divinside.innerText = "loading...please wait";    

    var POSTbody = new Object();
    POSTbody.Email = email;
    POSTbody.Password = password1;
    POSTbody.ConfirmPassword = password2;
    var returnmessage = "";

    var POSTbodyinJSON = JSON.stringify(POSTbody);

    var baseUrl = returnCurrentBaseURL();
    var endPoint = "api/Account/Register";
    var fullUrl = baseUrl + endPoint;

    const response = await fetch(fullUrl,
        {
            method: 'POST',
            body : POSTbodyinJSON,
            headers:
            {
                'Content-Type': 'application/json'
            }
        }
        );
    
    if(response.status == 400)
    {
        var errormessagefromapiserver = response.json();
        errormessagefromapiserver.then(
            function(result)
            {
                console.log("userActionWithEnteredValues" + result.Message);
                returnmessage = result.Message;
                var returnobj = new MessageStatusCode(returnmessage,response.status);
                console.log("userActionWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);                            
                updatethescreen(returnobj);
            },
            function(error)
            {
                console.log(error);
                returnmessage = result.Message;
            }

        );
    }
    else if(response.status == 200)
    {
        var errormessagefromapiserver = "all went good. " + POSTbody.Email + " account successfully created";
        console.log("userActionWithEnteredValues" + errormessagefromapiserver);
        returnmessage = errormessagefromapiserver;
        var returnobj = new MessageStatusCode(returnmessage,response.status);
        console.log("userActionWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);
        updatethescreen(returnobj);
    }
    else
    {
        var errormessagefromapiserver = "unknown error - status code - " + response.status + "contact API server developer";
        console.log("userActionWithEnteredValues" + errormessagefromapiserver);
        returnmessage = errormessagefromapiserver;
        var returnobj = new MessageStatusCode(returnmessage,response.status);
        console.log("userActionWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);    
        updatethescreen(returnobj);
    }
    if(returnmessage == "The request is invalid.")
    {
        //this means, we have an error that is not caught by our current coding.
        returnmessage = "check for password length or try again";
        var returnobj = new MessageStatusCode(returnmessage,response.status);
        console.log("userActionWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);
        updatethescreen(returnobj);
    }
    var logcloser="----leaving userActionWithEnteredValues----";
    console.log(logcloser);
    //return returnmessage;

    // var returnobj = new MessageStatusCode(returnmessage,response.status);
    // console.log("userActionWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);

    //i thought I will return this value here.
    //but, when i return, the values dissapear. it probably has to do with the API call 
    //being async. so calling the next effect from here itself. 

    //updatethescreen(returnobj)
    //return returnobj;
}

//this is to update the display.
function updatethescreen(result)
{
    if(result.statuscodet == 200)
    {
        //update the diplay with success stuff.
        //show the success message
        var divinside = 
        document.getElementById("statusmessageafterAPIcall");
        divinside.innerText = result.statuscodet + " " + result.messaget;
        divinside.style.display = 'block';
        //show the tap below text display.
        var divtaphomebelow = 
        document.getElementById("taphomebelow");
        divtaphomebelow.style.display = 'block';        
        
        //hide the login boxes.
        var divinputboxforemailandpassword = 
        document.getElementById("inputboxforemailandpassword"); 
        divinputboxforemailandpassword.style.display = 'none';
    }
    else
    {
        //update the display with failure stuff
        var divinside = 
        document.getElementById("statusmessageafterAPIcall");
        divinside.innerText = result.statuscodet + result.messaget;
        divinside.style.display = 'block';
    }

    //also, lets reload the page
    location.reload();

}

function MessageStatusCode(messaget,statuscodet)
{
    this.messaget = messaget;
    this.statuscodet = statuscodet;
}

//check userActionWithEnteredValues for more comments and such
const signInWithEnteredValues = async (email,password1) => 
{
    var logopener="----entering signInWithEnteredValues----";
    console.log(logopener);

    showtheloading();

    // var POSTbody = new Object();
    // POSTbody.username = email;
    // POSTbody.password = password1;
    // POSTbody.grant_type = 'password';
    // var returnmessage = "";

    // var POSTbodyinJSON = JSON.stringify(POSTbody);

    var POSTbodyinPlainText = "userName=" + encodeURIComponent(email) +
    "&password=" + encodeURIComponent(password1) +
    "&grant_type=password";

    var baseUrl = returnCurrentBaseURL();
    var endPoint = "Token";
    var fullUrl = baseUrl + endPoint;

    const response = await fetch(fullUrl,
        {
            method: 'POST',
            body : POSTbodyinPlainText,
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        );
    
    if(response.status == 400)
    {
        hidetheloading();
        var errormessagefromapiserver = response.json();
        errormessagefromapiserver.then(
            function(result)
            {
                returnmessage = result.error_description;
                console.log("signInWithEnteredValues - Error 400 - " + returnmessage);            
                var returnobj = new MessageStatusCode(returnmessage,response.status);
                console.log("signInWithEnteredValues - returnobj - " + returnobj.messaget + returnobj.statuscodet);                            
                updatethescreen(returnobj);
            },
            function(error)
            {
                console.log(error);
                returnmessage = result.Message;
            }
        );
    }
    else if(response.status == 200)
    {
        hidetheloading();
        var responsejson = response.json();
        responsejson.then(
            function(result)
            {
                console.log("access token - " + result.access_token + " userName - " + result.userName);
                // returnmessage = result.Message;
                var returnobj = new MessageStatusCode("token obtained",response.status);
                //update the local storage with token.
                storeToken(result.access_token);
                // console.log("signInWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);                            
                updatethescreen(returnobj);
            },
            function(error)
            {
                console.log(error);
                returnmessage = result.Message;
            }
        );

        // var errormessagefromapiserver = "all went good." + POSTbody.Email + " account successfully created";
        // console.log("signInWithEnteredValues - " + errormessagefromapiserver);
        // returnmessage = errormessagefromapiserver;
        // var returnobj = new MessageStatusCode(returnmessage,response.status);
        // console.log("signInWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);
        // updatethescreen(returnobj);
    }
    else
    {
        hidetheloading();
        var errormessagefromapiserver = "unknown error - status code - " + response.status + "contact API server developer";
        console.log("signInWithEnteredValues - " + errormessagefromapiserver);
        returnmessage = errormessagefromapiserver;
        var returnobj = new MessageStatusCode(returnmessage,response.status);
        console.log("signInWithEnteredValues - returnobj" + returnobj.messaget + returnobj.statuscodet);    
        updatethescreen(returnobj);
    }
    var logcloser="----leaving signInWithEnteredValues----";
    console.log(logcloser);
}

//this function will return the current URL
//add your OWN URLs and switch to the one you want to 
function returnCurrentBaseURL()
{
    var hostUrl1 = "https://baribasicsapiserverjune21st2020.azurewebsites.net/";
    var hostUrl2 = "http://localhost:64674/";
    var currentUrl = hostUrl1;
    return currentUrl;
}

function storeToken(tokentostore)
{
    //put this in local storage.
    //may be we should put a error message
    var setKey = "ProjectWTToken";
    localStorage.setItem(setKey,tokentostore);
}

function removeToken()
{
    //put this in local storage.
    //may be we should put a error message
    var setKey = "ProjectWTToken";
    //localStorage.setItem(setKey,null);
    //localStorage.clear(setKey);
    localStorage.removeItem(setKey);
}

function getToken()
{
    var setKey = "ProjectWTToken";
    var notokenfoundmessage = "getToken - "+ "no token stored. you have to login";
    var tokentoreturn = localStorage.getItem(setKey);
    if(tokentoreturn == null)
    {
        console.log(notokenfoundmessage);
    }
    return tokentoreturn;
}

async function GenericAPICallCode()
{
    var logopener="----entering GetResumeSummary----";
    console.log(logopener);

    // var POSTbody = new Object();
    // POSTbody.username = email;
    // POSTbody.password = password1;
    // POSTbody.grant_type = 'password';
    // var returnmessage = "";

    // var POSTbodyinJSON = JSON.stringify(POSTbody);

    // var POSTbodyinPlainText = "userName=" + encodeURIComponent(email) +
    // "&password=" + encodeURIComponent(password1) +
    // "&grant_type=password";  

    //'Content-Type': 'application/x-www-form-urlencoded'
    //'Content-Type': 'application/json'

    // var inputlastname = document.getElementById("inputlastname").value;

    // var entirenamep = document.getElementById("entirename");
    // var fullname = result.FirstName + " " + result.MiddleName + " " + result.LastName;
    // entirenamep.innerText = fullname;    

    var baseUrl = returnCurrentBaseURL();
    var endPoint = "api/UserandResume/GetResumeSummary";
    var fullUrl = baseUrl + endPoint;
    var getCurrentToken = getToken();

    const response = await fetch(fullUrl,
        {
            method: 'GET',
            // body: body
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
    }        
    else if(response.status == 200)
    {
        var responsejson = response.json();
        responsejson.then(
            function(result)
            {
                
            },
            function(error)
            {
                console.log(error);
            }
        );
    }
    else
    {
        console.log("unknown error - " + response.status);
    }

    var logcloser="----leaving GetResumeSummary----";
    console.log(logcloser);
}

function checkforsigninpageload()
{
    var logopener="----entering checkforsigninpageload----";
    console.log(logopener);
    var getCurrentToken = getToken();

    if(getCurrentToken!=null)
    {
        console.log("You are already signed in");
        // //send token and try to get the basic resume information.
        // //hide the login page.
        // // hidethelogin();
        // // GetResumeSummary();
    }
    else
    {
        console.log("You need to sign in.");
        //lets auto redirect to the sign page.
        //in the same directory, I want to find the view signin.html 
        window.location.href = 'signin.html'; 

    }

    var logcloser="----leaving checkforsigninpageload----";
    console.log(logcloser);
}

function hidetheloading()
{
    var logopener="----entering hidetheloading----";
    console.log(logopener);

    //hide or show things as per requirement.
    var divtohide = document.getElementById("loadinganimation");
    divtohide.style.display = 'none';

    var logcloser="----leaving hidetheloading----";
    console.log(logcloser); 
}

function showtheloading()
{
    var logopener="----entering showtheloading----";
    console.log(logopener);

    var divtohide = document.getElementById("loadinganimation");
    divtohide.style.display = 'block';

    var logcloser="----leaving showtheloading----";
    console.log(logcloser); 
}

function loadresumepage()
{
    var logopener="----entering loadresumepage----";
    console.log(logopener);

    //load to the main resume display.
    window.location.href = 'fullresume.html'; 

    var logcloser="----leaving loadresumepage----";
    console.log(logcloser);     
}

function loadthemeresumepage()
{
    var logopener="----entering loadthemeresumepage----";
    console.log(logopener);

    //load to the main resume display.
    window.location.href = "themeresume/currentresume.html"; 

    var logcloser="----leaving loadthemeresumepage----";
    console.log(logcloser);     
}

function editresumepage()
{
    var logopener="----entering editresumepage----";
    console.log(logopener);

    //load to the main resume display.
    window.location.href = 'editresume.html'; 

    var logcloser="----leaving editresumepage----";
    console.log(logcloser);     
}

function signinpage()
{
    var logopener="----entering signinpage----";
    console.log(logopener);

    //load to the main resume display.
    window.location.href = 'signin.html'; 

    var logcloser="----leaving signinpage----";
    console.log(logcloser); 
}

function signout()
{
    //we need to kill the token.

    //then load the sign in page.

    var logopener="----entering signout----";
    console.log(logopener);

    removeToken();

    //load to the main resume display.
    window.location.href = 'signin.html'; 

    var logcloser="----leaving signout----";
    console.log(logcloser);     
}

function signoutcurrentresume()
{
    //we need to kill the token.

    //then load the sign in page.

    var logopener="----entering signoutcurrentresume----";
    console.log(logopener);

    removeToken();

    //load to the main resume display.
    window.location.href = '../signin.html'; 

    var logcloser="----leaving signoutcurrentresume----";
    console.log(logcloser);     
}

