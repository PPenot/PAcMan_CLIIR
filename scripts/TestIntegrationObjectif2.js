$(document).init(function()
{
    //alert("toto");
    //test41311();
    //test41312();
    //test413211();
    //test413221();
    //test413311();
    test413312();
    //test413212()
    //test3();
});

function test41311()
{
    var string = "we create a graph oriented and weighted with two node : node1 = 5 and node 13 = 42 and the edge1-13 = 45<br/> And we show all graph in the server in JSON";
    document.getElementById("test").innerHTML = string;
    requester = $.post(URL_SERVER +"graphes","oriented=true&weighted=true&node1=5&node13=42&edge1-13=45", requesterTest);
    requester = $.get(URL_SERVER + "graphes.js", requesterShowTest);
}
function test41312()
{
    var string = "we create a graph weighted with two node : node1 = 5 and node 13 = 42 and the edge1-13 = 45<br/>we forget the argument weighted";
    document.getElementById("test").innerHTML = string;
    requester = $.post(URL_SERVER +"graphes","oriented=true&node1=5&node13=42&edge1-13=45",requesterShowTest);
    requester = $.get(URL_SERVER + "graphes.js", requesterShowTest);
}

function test413211()
{
    var string = "we create a graph oriented and weighted with two node : node1 = 5 and node 13 = 42 and the edge1-13 = 45<br/> ";
    string += "we create also a graph oriented and unweighted with two node : node1 = 6 and node 2 = 4<br/>";
    string += "And we show all graph in the server in XML<br/>";
    document.getElementById("test").innerHTML = string;
    requester = $.post(URL_SERVER +"graphes","oriented=true&weighted=true&node1=5&node13=42&edge1-13=45", requesterTest);
    requester = $.post(URL_SERVER +"graphes","oriented=true&weighted=false&node1=6&node2=4", requesterTest);
    requester = $.get(URL_SERVER + "graphes.xml", requesterShowTest);
}

function test413212()
{
    var string = "we create a graph oriented and weighted with two node : node1 = 5 and node 13 = 42 and the edge1-13 = 45<br/> ";
    string += "we create also a graph oriented and unweighted with two node : node1 = 6 and node 2 = 4<br/>";
    string += "And we show all graph in the server in JSON<br/>";
    document.getElementById("test").innerHTML = string;
    requester = $.post(URL_SERVER +"graphes","oriented=true&weighted=true&node1=5&node13=42&edge1-13=45", requesterTest);
    requester = $.post(URL_SERVER +"graphes","oriented=true&weighted=false&node1=6&node2=4", requesterTest);
    requester = $.get(URL_SERVER + "graphes.js", requesterShowTest);
}

function test413221()
{
    var string = "we show all graph in the server in JSON<br/>";
    requester = $.get(URL_SERVER + "graphes.js", requesterShowTest);
}

function test413311()
{
    var string = "we create a graph oriented and weighted with two node : node1 = 5 and node 13 = 42 and the edge1-13 = 45<br/> And we show only this graph in the server in XML";
    document.getElementById("test").innerHTML = string;
    requester = $.post(URL_SERVER +"graphes","oriented=true&weighted=true&node1=5&node13=42&edge1-13=45", requesterTest);
    requester = $.get(URL_SERVER + "graphes/0.xml", requesterShowTest);
}

function test413312()
{
    var string = "we create a graph oriented and weighted with two node : node1 = 5 and node 13 = 42 and the edge1-13 = 45<br/> And we show only this graph in the server in JSON";
    document.getElementById("test").innerHTML = string;
    requester = $.post(URL_SERVER +"graphes","oriented=true&weighted=true&node1=5&node13=42&edge1-13=45", requesterTest);
    requester = $.get(URL_SERVER + "graphes/0.js", requesterShowTest);
}


function requesterTest()
{
    var node = document.getElementById("test");
    if(requester.readyState == 4)
    {
        node.innerHTML += "Statue : " + requester.status;
//        if(requester.status == 201)
//        {
//            node.innerHTML += "Statue : 201";
//        }
//        if(requester.status == 400)
//        {
//            node.innerHTML += "Statue : 201";
//        }
    }
}

function requesterShowTest()
{
    var node = document.getElementById("test");
    if(requester.readyState == 4 && requester.status == 200)
    {
        node.innerHTML += "graph : <br/>" + requester.responseText;
    }
}



