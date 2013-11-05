
/*********************************************
 * Ajx class
 * this function is use for all ajax treatment
 *******************************************/
function Ajx()
{
    var location = undefined;
    var requester;

 /*********************************************
 * sendGraph(queryString)
 * this function send the queryString to the server
 * argument :ValidMove
 * queryString : queryString of the graph in model
 *******************************************/
    this.sendGraph = function(queryString)
    {
        try
        {
            requester = $.post(URL_SERVER + "/graphes", queryString, recupLocation);
        }
        catch(e)
        {
            ENABLED_SERVER = false;
        }
    }
/*********************************************
 * sendGraph(queryString)
 * this function is the answer of the ajax,
 * check if the request create Graph is good and stock the location of the graph
 *******************************************/
    var recupLocation = function ()
    {
        //console.log("toto");
        if(requester.readyState == 4 && requester.status == 201)
        {
            location = requester.getResponseHeader("Location");
        //    console.log(location);
        }
    }
/*********************************************
 * removeGraph()
 * this function send an AJAX request to remove the graph into the server
 *******************************************/
    this.removeGraph = function()
    {
        if(location == undefined)
        {
            ENABLED_SERVER = false;
                return;
        }
        try
        {
            requester = $.ajax({
                type: "DELETE",
                url: URL_SERVER + location
            });
        }
        catch(e)
        {
            ENABLED_SERVER = false;
        }
    }
 /*********************************************
 * throwDijkstra(start,goal,entitie)
 * this function send an AJAX request, to throw a dijkstra betwenn start and goal
 * argument :
 * start: id of start node
 * goal : id of goal node
 * entite : entitie who demand a planification
 *******************************************/
    this.throwDijkstra = function (start,goal,entitie)
    {
        if(location == undefined)
        {
            ENABLED_SERVER = false;
            return;
        }
        try
        {
            console.log("lancement Dijkstra ghost : " + entitie.getId());
            location = location.replace("graphes", "dijkstra");
            $.ajax({
                type: "GET",
                url: URL_SERVER + location +".js?start=" + start + "&goal=" +goal,
                success: function(data){
                    entitie.setDijkstraSolution(data);
                    entitie.incrementNumDijkstra();
                    console.log("arrivée D ghost : " + entitie.getId());
                          }
                
            });
        }
        catch(e)
        {
            ENABLED_DIJKSTRA = false;
        }
            location =  location.replace("dijkstra", "graphes");
        //}
        //catch(e)
        //{
            //ENABLED_SERVER = false;
        //}
    }

 /*********************************************
 * recupDijkstra(entitie)
 * this function reception the answer of dijkstra
 * if the request status is 503 we stop to send AJAX request into the server, if different from 200 or 204 we stop to send dijkstra request
 * argument :
 * entitie : entitie who demand a planification
 *******************************************/
    this.recupDijkstra = function(requester,entitie)
    {
       if(requester.readyState == 4)
       {
           if(requester.status == 200 || requester.status == 201)
           {
              entitie.setDijkstraSolution(requester.responseText);
               entitie.incrementNumDijkstra();
               console.log("arrivée D ghost : " + entitie.getId());

           }
           else if(entitie.requester.status == 204)
           {
               entitie.setDijkstraSolution(undefined);
           }
           else if(entitie.requester.status == 503)
           {
                ENABLED_SERVER = false;
                ENABLED_DIJKSTRA = false;
           }
           else
           {
               //ENABLED_DIJKSTRA = false;
               entitie.setDijkstraSolution(undefined);
           }

       }
    }

}

