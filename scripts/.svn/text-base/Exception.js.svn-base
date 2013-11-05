
function Exception(Message, functionError, Cause)
{
    if(functionError == undefined)
    {
        functionError = "Unknown";
    }
    var message = Message;
    var func = functionError;
    var cause = Cause;

    this.getFunction = function()
    {
        return func;
    }

    this.getCause = function()
    {
        return Cause;
    }

    this.setCause = function(Cause)
    {
        cause = Cause;
    }

    this.print = function()
    {
        console.log(message + ", in the function : " + func);
        if(cause != undefined)
        {
            console.log("cause : ");
            cause.print();
        }
    }


}


