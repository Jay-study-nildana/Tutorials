
//this function is primarily designed to pick up the input and then send it to the api server
//and get the response.
//for now, it mostly pushes messages to the console.

function pagehasloaded()
{
    var logopener="----entering pagehasloaded----";
    console.log(logopener);

    //hide or show things as per requirement.
    var divstatusmessageafterAPIcall = 
    document.getElementById("statusmessageafterAPIcall");
    divstatusmessageafterAPIcall.style.display = 'none';
    var divtaphomebelow = 
    document.getElementById("taphomebelow");
    divtaphomebelow.style.display = 'none';
   

    var logcloser="----leaving pagehasloaded----";
    console.log(logcloser);
}


async function registration()
{   
    var logopener="----entering registration----";
    console.log(logopener);

    //collect the email address and password.
    var emailaddress = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    //the below one is primarily to do some dev testing
    //var response = userAction();
    var response2 = await userActionWithEnteredValues(emailaddress,password,password);

    //using the promise as usual. 
    // response2.then(
    //     function(result)
    //     {
    //         console.log("registration - "+result.messaget + "status - " + result.statuscodet);
    //         //lets update the result on the screen. 
    //         updatethescreen(result);
    //     },
    //     function(error)
    //     {
    //         console.log(result);
    //     }
    // );

    var logcloser="----leaving registration----";
    console.log(logcloser);
}

//this creates a user with some default values.
const userAction = async () => 
{
    var logopener="----entering userAction----";
    console.log(logopener);
    //build POST body for the registration
    // var POSTbody = {
    //     Email: "jay@ProjectCRUD30.com",
    //     Password: "Password$321",
    //     ConfirmPassword: "Password$321"
    //   }
    // //var POSTbodyinJSON = JSON.stringify(POSTbody);
    // var POSTbodyinJSON = {
    //     "Email": "jay@ProjectCRUD2.com",
    //     "Password": "Password$321",
    //     "ConfirmPassword": "Password$321"
    //   }

      var POSTbody = new Object();
      POSTbody.Email = "jay@ProjectCRUD29a.com";
      POSTbody.Password = "Password$321";
      POSTbody.ConfirmPassword = "Password$321";

      var POSTbodyinJSON = JSON.stringify(POSTbody);

    //http://localhost:64674/api/Account/Register
    //http://projectcrudwebapiserver.azurewebsites.net/api/Account/Register
    const response = await fetch('http://projectcrudwebapiserver.azurewebsites.net/api/Account/Register',
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
        //bad request response. 
        var errormessagefromapiserver = response.json();
        //above I am getting what is called as a promise.
        errormessagefromapiserver.then(
            function(result)
            {
                //this gives the javascript object
                //console.log(result);  
                //this gives the actual message.
                console.log(result.Message);
                //console.log(result.toString());
            },
            function(error)
            {
                console.log(error);
            }

        );
        //these things did not work.
        //var errormessagefromapiserver = response.json();
        // var temp2 = errormessagefromapiserver.Message;
        //the reponse is a promise, noto json.
        // var temp = JSON.parse(errormessagefromapiserver);
        // console.log(errormessagefromapiserver.value.Message);
    }
    else if(response.status == 200)
    {
        var errormessagefromapiserver = "all went good." + POSTbody.Email + " account successfully created";
        console.log(errormessagefromapiserver);
    }
    else
    {
        var errormessagefromapiserver = "unknown error - status code - " + response.status + "contact API server developer";
        console.log(errormessagefromapiserver);
    }
    // const myJson = await response.json(); //extract JSON from the http response
    // console.log(myJson);
    var logcloser="----leaving userAction----";
    console.log(logcloser);
}


