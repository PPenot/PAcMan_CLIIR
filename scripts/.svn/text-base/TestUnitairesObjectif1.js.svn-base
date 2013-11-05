
function TestUnitairesObjectif1()
{
    /*
     * we create an empty graph oriented and weighted
     */
    this.test21411111 = function ()
    {
        console.log("test 21411111");
        var newGraph = new Graph(true, true);
        console.log(newGraph.show());
    }
    /*
     * we create an empty graph oriented and non weighted
     */
    this.test21411112 = function()
    {
        console.log("test 21411112");
        var newGraph = new Graph(true, false);
        console.log(newGraph.show());
    }
    /*
     * we create an empty graph non  oriented and weighted
     */
    this.test21411113 = function()
    {
        console.log("test 21411113");
        var newGraph = new Graph(false, true);
        console.log(newGraph.show());
    }
    /*
     * we create an empty graph non oriented and non weighted
     */
    this.test21411114 = function()
    {
        console.log("test 21411114");
        var newGraph = new Graph(false,false);
        console.log(newGraph.show());
    }
    /*
     * we try to create with invalid argument
     */
    this.test21411121 = function ()
    {
        console.log("test 21411121");
        try
        {
            var newGraph = new Graph(25, false);
        }
        catch(e)
        {
            e.print();
        }
        
    }

    //Delete Graph
    /*
     * We create a graph non oriented and weighted with 3 nodes and we delete this
     */
    this.test21411211 = function ()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21411211");
        newGraph.addNode(1, 5);
        newGraph.addNode(3, 15);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we delete this");
        newGraph.remove();
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 1 node and we delete this
     */
    this.test21411221 = function ()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21411221");
        newGraph.addNode(1, 5);
        console.log(newGraph.show());
        console.log("we delete this");
        newGraph.remove();
        console.log(newGraph.show());
    }

    /*
     * We create an empty graph non oriented and weighted and we delete this
     */
    this.test21411222 = function ()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21411222");
        console.log(newGraph.show());
        console.log("we delete this");
        newGraph.remove();
        console.log(newGraph.show());
    }

    //add
    /*
     * We create a graph non oriented and weighted with 3 nodes and we add a new node with the id= 2 and the value = 10
     */
    this.test21412111 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412111");
        newGraph.addNode(1, 5);
        newGraph.addNode(3, 15);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we add a node with the id 2 and the value 10");
        newGraph.addNode(2, 10);
        console.log(newGraph.show());

    }


    /*
     * We create an empty graph non oriented and weighted and we add a node with the id 2 and the value 1°
     */
    this.test21412121 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412121");
        console.log(newGraph.show());
        console.log("we add a node with the id 2 and the value 10");
        newGraph.addNode(2, 10);
        console.log(newGraph.show());

    }
     /*
     * We create a graph non oriented and weighted with 2 nodes and we add a new node with the id= 1 and the value = 7 at the begining of the graph
     */
    this.test21412122 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412122");
        newGraph.addNode(3, 15);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we add a node with the id 1 and the value 7");
        newGraph.addNode(1, 7);
        console.log(newGraph.show());
    }

     /*
     * We create a graph non oriented and weighted with 3 nodes and we add a new node with the id= 10 and the value = 42 at the last of the graph
     */
    this.test21412123 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412123");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we add a node with the id 10 and the value 42");
        newGraph.addNode(10, 42);
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we try to add a new node with the id= -5 and the value = 42
     */
    this.test21412131 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412131");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to add a node with the id -5 and the value 42");
        try
        {
            newGraph.addNode(-5, 42);
        }
        catch(e)
        {
            e.print()
        }
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we try to add a new node with the id= 3 and the value = 12 who has an id already exists
     */
    this.test21412132 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412132");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to add a node with the id 3 and the value 12");
        try
        {
            newGraph.addNode(3, 12);
        }
        catch(e)
        {
            e.print()
        }
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we try to add a new node with the id which isn't a integer and the value = 12
     */
    this.test21412133 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412133");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to add a node with the id \"text\" and the value 12");
        try
        {
            newGraph.addNode("text", 12);
        }
        catch(e)
        {
            e.print()
        }
        console.log(newGraph.show());
    }

    //REMOVE Node
    
    /*
     * We create a graph non oriented and weighted with 3 nodes and we remove the node with the id= 3
     */
    this.test21412211 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412211");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we remove the node with the id 3");
        newGraph.removeNode(3);
        console.log(newGraph.show());
    }
    /*
     * We create a graph non oriented and weighted with 3 nodes and we remove the first node of the graph : the node with the id 1
     */
    this.test21412221 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412221");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we remove the node with the id 1 which is the first node of the graph");
        newGraph.removeNode(1);
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we remove the last node of the graph : the node with the id 5
     */
    this.test21412222 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412222");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we remove the node with the id 5 which is the last node of the graph");
        newGraph.removeNode(5);
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we try to remove a node with a negative id : the node with the id -5
     */
    this.test21412231 = function()
    {
         var newGraph = new Graph(false, true);
        console.log("test 21412231");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to remove a node with a negative id : the node with the id -5");
        try
        {
            newGraph.removeNode(-5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());

    }

     /*
     * We create a graph non oriented and weighted with 3 nodes and we try to remove a node who not exist, a node with the id 4
     */
    this.test21412232 = function()
    {
         var newGraph = new Graph(false, true);
        console.log("test 21412232");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to remove a node who not exist : a node with the id 4");
        try
        {
            newGraph.removeNode(4);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());

    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we try to remove a node whos has an id "text"
     */
    this.test21412233 = function()
    {
         var newGraph = new Graph(false, true);
        console.log("test 21412233");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to remove a node with the id \"text\" ");
        try
        {
            newGraph.removeNode("text");
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());

    }

    //Node exist
    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know if the node with the id 3 exist : Answer Yes
     */
    this.test21412311 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412311");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we want to know if the node with the id 3 exist : ");
        console.log(newGraph.nodeExists(3));

    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know if the node with the id 2 exist : Answer No
     */
    this.test21412312 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412312");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we want to know if the node with the id 2 exist : ");
        console.log(newGraph.nodeExists(2));

    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know if the node with a negative id exist
     */
    this.test21412331 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412331");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we want to know if the node with the id -2 exist : ");
        try
        {
        console.log(newGraph.nodeExists(-2));
        }
        catch(e)
        {
            e.print()
        }

    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know if the node with the id "text" exist
     */
    this.test21412332 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412332");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we want to know if the node with the id \"text\" exist : ");
        try
        {
        console.log(newGraph.nodeExists("text"));
        }
        catch(e)
        {
            e.print();
        }
    }

    //Get Value;
    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know the value of the node with the id 3
     */
    this.test21412411 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412411");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("value of the node with the id 3");
        console.log(newGraph.getNodeValue(3));
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know the value of the first node, the node with the id 1
     */
    this.test21412421 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412421");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("value of the node with the id 1");
        console.log(newGraph.getNodeValue(1));
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know the value of the last node, the node with the id 5
     */
    this.test21412422 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412422");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("value of the node with the id 5");
        console.log(newGraph.getNodeValue(5));
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know the value of a node who not exist, the node with id 2
     */
    this.test21412431 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412431");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to know the value of the node with the id 2");
        try
        {
            console.log(newGraph.getNodeValue(2));
        }
        catch(e)
        {
            e.print();
        }
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know the value of the node with a negative id, the node with id -3
     */
    this.test21412432 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412432");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to know the value of the node with the id -3");
        try
        {
            console.log(newGraph.getNodeValue(-3));
        }
        catch(e)
        {
            e.print();
        }
    }

     /*
     * We create a graph non oriented and weighted with 3 nodes and we want to know the value of the node with id "text"
     */
    this.test21412433 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412433");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to know the value of the node with the id \"text\"");
        try
        {
            console.log(newGraph.getNodeValue("text"));
        }
        catch(e)
        {
            e.print();
        }
    }

    /*
     * We create an empty graph non oriented and weighted and we want to know the value of the node with id 3
     */
    this.test21412434 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412434");
        console.log(newGraph.show());
        console.log("we try to know the value of the node with the id 3");
        try
        {
            console.log(newGraph.getNodeValue(3));
        }
        catch(e)
        {
            e.print();
        }
    }

    //Set Value;
    /*
     * We create a graph non oriented and weighted with 3 nodes and we set the value 4 to the node with the id 3
     */
    this.test21412511 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412511");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we set the value 4 to the node with the id 3");
        newGraph.setNodeValue(3, 4);
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we set the value 4 to the first node, the node with the id 1
     */
    this.test21412521 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412521");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we set the value 4 to the node with the id 1");
        newGraph.setNodeValue(1, 4);
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we set the value 4 to the last node, the node with the id 5
     */
    this.test21412522 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412522");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we set the value 4 to the node with the id 5");
        newGraph.setNodeValue(5, 4);
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to set the value 4 to a node who not exist, the node with id 2
     */
    this.test21412531 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412531");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to set the value of the node with the id 2");
        try
        {
            newGraph.setNodeValue(2, 4);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
    }

    /*
     * We create a graph non oriented and weighted with 3 nodes and we want to set the value 4 to the node with a negative id, the node with id -3
     */
    this.test21412532 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412532");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to set the value of the node with the id -3");
        try
        {
            newGraph.setNodeValue(-3, 4);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
    }

     /*
     * We create a graph non oriented and weighted with 3 nodes and we want to set the value to the node with id "text"
     */
    this.test21412533 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412533");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        console.log(newGraph.show());
        console.log("we try to set the value 4 to the node with the id \"text\"");
        try
        {
            newGraph.setNodeValue("text", 4);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
    }

    /*
     * We create an empty graph non oriented and weighted and we want to set the value to the node with id 3
     */
    this.test21412534 = function()
    {
        var newGraph = new Graph(false, true);
        console.log("test 21412534");
        console.log(newGraph.show());
        console.log("we try to set the value 4 to the node with the id 3");
        try
        {
            newGraph.setNodeValue(3, 4);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
    }

    //add Edge
    /*
     *We create a graph oriented and weighted and we add the edge (1,4) with the value 45 at the middles of an edge list : the edge list of the node with the id 1
    */
   
   this.test21413111 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413111");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
        console.log(newGraph.show());
        console.log("we add the edge (1,4) with the weight 45 ");
        try
        {
            newGraph.addEdge(1, 4, 45);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted and we add the edge (1,4) at the middles of an edge list : the edge list of the node with the id 1
    */

   this.test21413112 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413112");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(1, 5);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
        console.log(newGraph.show());
        console.log("we add the edge (1,4)");
        try
        {
            newGraph.addEdge(1, 4);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }
   
   /*
     *We create a graph non oriented and weighted and we add the edge (1,4) with the value 45 and so the edge (4,1) at the middles of an edge list : the edge list of the node with the id 1
    */

   this.test21413113 = function ()
   {
       var newGraph = new Graph(false, true);
        console.log("test 21413113");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(1, 5);
        newGraph.addEdge(1, 3);
        //newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
        console.log(newGraph.show());
        console.log("we add the edge (1,4) with the value 45 and automatically because it's an unoriented graph this function add also the edge(4,1)");
        try
        {
            newGraph.addEdge(1, 4, 45);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

    /*
     *We create a graph oriented and weighted and we add the edge (1,3) with the value 45 at the begining of an edge list : the edge list of the node with the id 1
    */

   this.test21413121 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413121");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 4,12);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
        console.log(newGraph.show());
        console.log("we add the edge (1,3) with the weight 45 ");
        try
        {
            newGraph.addEdge(1, 3, 45);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

    /*
     *We create a graph oriented and weighted and we add the edge (1,3) at the begining of an edge list : the edge list of the node with the id 1
    */

   this.test21413122 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413122");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 4);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
        console.log(newGraph.show());
        console.log("we add the edge (1,3)");
        try
        {
            newGraph.addEdge(1, 3);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph unoriented and weighted and we add the edge (1,3) at the begining of an edge list : the edge list of the node with the id 1. And automatically the edge (3,1)
     *because it's an unoriented graph
    */

   this.test21413123 = function ()
   {
       var newGraph = new Graph(false, true);
        console.log("test 21413123");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(5, 1,15);
        newGraph.addEdge(3, 4,17);
        console.log(newGraph.show());
        console.log("we add the edge (1,3) with the value 42 and automatically, because it's an unoriented graph, this function add also the edge(3,1)");
        try
        {
            newGraph.addEdge(1, 3,42);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted and we add the edge (1,5) with the value 45 at the last of an edge list : the edge list of the node with the id 1
    */

   this.test21413124 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413124");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 3, 34);
         newGraph.addEdge(1, 4,12);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
        console.log(newGraph.show());
        console.log("we add the edge (1,5) with the weight 45 ");
        try
        {
            newGraph.addEdge(1, 5, 45);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }
   
   /*
     *We create a graph oriented and non weighted and we add the edge (1,5) at the last of an edge list : the edge list of the node with the id 1
    */

   this.test21413125 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413125");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 3);
         newGraph.addEdge(1, 4);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
        console.log(newGraph.show());
        console.log("we add the edge (1,5)");
        try
        {
            newGraph.addEdge(1, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph non oriented and weighted and we add the edge (1,5) at the last of an edge list : the edge list of the node with the id 1 And automatically the edge (3,1)
     *because it's an unoriented graphe
    */

   this.test21413126 = function ()
   {
       var newGraph = new Graph(false, true);
        console.log("test 21413126");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 3, 27);
         newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(3, 4, 12);
        console.log(newGraph.show());
        console.log("we add the edge (1,5)");
        try
        {
            newGraph.addEdge(1, 5, 42);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph non oriented and non weighted, with 4 node and we add an edge(1,5)
    */

   this.test21413127 = function ()
   {
       var newGraph = new Graph(false, false);
        console.log("test 21413127");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        console.log(newGraph.show());
        console.log("we add the edge (1,5)");
        try
        {
            newGraph.addEdge(1, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

    /*
     *We create a graph oriented and non weighted, we try to add the edge (2,5) but the node with the id 2 doesn't exist
    */

   this.test21413131 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413131");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        console.log(newGraph.show());
        console.log("we try to add the edge (2,5) but the node with the id 2 doesn't exist");
        try
        {
            newGraph.addEdge(2, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted, we try to add the edge (3,8) but the node with the id 8 doesn't exist
    */

   this.test21413132 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413132");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        console.log(newGraph.show());
        console.log("we try to add the edge (3,8) but the node with the id 8 doesn't exist");
        try
        {
            newGraph.addEdge(3, 8);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted, we try to add the edge (1,5) with value = 5 but this graph is unweighted
    */

   this.test21413133 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413133");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        console.log(newGraph.show());
        console.log("we try to add the edge (1,5) with the value 5 but this graph is unweighted");
        try
        {
            newGraph.addEdge(1, 5, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted, we try to add the edge with a negative id as id source : the edge (-1,5)
    */

   this.test21413134 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413134");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        console.log(newGraph.show());
        console.log("we try to add the edge (-1,5) but -1 is negative");
        try
        {
            newGraph.addEdge(-1, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted, we try to add the edge with  "text" as id source : the edge ("text",5)
    */

   this.test21413135 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413135");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        console.log(newGraph.show());
        console.log("we try to add the edge (\"text\",5) but -1 is negative");
        try
        {
            newGraph.addEdge("text", 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted, we try to add the edge (3,4) but this edge already exists
    */
   this.test21413136 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413136");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        console.log(newGraph.show());
        console.log("we try to add the edge (3,4) but this edge already exists");
        try
        {
            newGraph.addEdge(3, 4);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }
   
    /*
     *We create a graph oriented and weighted, we want the value of edge(1,4) in the midle of an Edge list : the edge list of node with id 1
    */
   this.test21413211 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413211");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we want the value of the edge (1,4)");
        try
        {
            console.log(newGraph.getEdgeValue(1,4));
        }
        catch(e)
        {
            e.print();
        }
   }

    /*
     *We create a graph oriented and non weighted, we want the value of edge(1,4) in the midle of an Edge list : the edge list of node with id 1
    */
   this.test21413212 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413212");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (1,4)");
        try
        {
            console.log(newGraph.getEdgeValue(1,4));
        }
        catch(e)
        {
            e.print();
        }
   }

   /*
     *We create a graph oriented and weighted, we want the value of edge(1,3) at the begining of an Edge list : the edge list of node with id 1
    */
   this.test21413221 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413221");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 25);
        newGraph.addEdge(1, 4, 42);
        newGraph.addEdge(1, 5, 12)
        console.log(newGraph.show());
        console.log("we want the value of the edge (1,3)");
        try
        {
            console.log(newGraph.getEdgeValue(1,3));
        }
        catch(e)
        {
            e.print();
        }
   }

   /*
     *We create a graph oriented and non weighted, we want the value of edge(1,3) at the begining of an Edge list : the edge list of node with id 1
    */
   this.test21413222 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413222");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (1,3)");
        try
        {
            console.log(newGraph.getEdgeValue(1,3));
        }
        catch(e)
        {
            e.print();
        }
   }

    /*
    * We create a graph oriented and weighted, we want the value of edge(1,5) at the last of an Edge list : the edge list of node with id 1
    */
   this.test21413223 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413223");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 25);
        newGraph.addEdge(1, 4, 12);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we want the value of the edge (1,5)");
        try
        {
            console.log(newGraph.getEdgeValue(1,5));
        }
        catch(e)
        {
            e.print();
        }
   }

        /*
    * We create a graph oriented and non weighted, we want the value of edge(1,5) at the last of an Edge list : the edge list of node with id 1
    */
   this.test21413224 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413224");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (1,5)");
        try
        {
            console.log(newGraph.getEdgeValue(1,5));
        }
        catch(e)
        {
            e.print();
        }
   }
   
      this.test21413231 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test test21413231");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (3,1)");
        try
        {
            newGraph.getEdgeValue(3,1)
        }
        catch(e)
        {
            e.print();
        }
   }



        this.test21413232 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test test21413232");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (12,1)");
        try
        {
            newGraph.getEdgeValue(3,1)
        }
        catch(e)
        {
            e.print();
        }
   }

           this.test21413233 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test test21413233");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (1,12)");
        try
        {
            newGraph.getEdgeValue(1,12)
        }
        catch(e)
        {
            e.print();
        }
   }

           this.test21413234 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test test21413234");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (-3,1)");
        try
        {
            newGraph.getEdgeValue(-3,1)
        }
        catch(e)
        {
            e.print();
        }
   }


           this.test21413235 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test test21413235");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log("we want the value of the edge (toto,1)");
        try
        {
            newGraph.getEdgeValue("toto",1)
        }
        catch(e)
        {
            e.print();
        }
   }
   //setEdgeValue
   /*
     *We create a graph oriented and weighted, we change the value of edge(1,4) with 5 at the middle of an Edge list : the edge list of node with id 1
    */
   this.test21413311 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413311");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we change the value of the edge (1,4) with the value 5");
        try
        {
            newGraph.setEdgeValue(1, 4, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

/*
     *We create a graph unoriented and weighted, we change the value of edge(1,4) with 5 at the middle of an Edge list : the edge list of node with id 1
    */
   this.test21413312 = function ()
   {
       var newGraph = new Graph(false, true);
       console.log("test 21413312");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 12);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we change the value of the edge (1,4) with the value 5");
        try
        {
            newGraph.setEdgeValue(1, 4, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }
   /*
     *We create a graph oriented and weighted, we change the value of edge(1,3) with 5 at the beggining of an Edge list : the edge list of node with id 1
    */
   this.test21413321 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413321");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we change the value of the edge (1,3) with the value 5");
        try
        {
            newGraph.setEdgeValue(1, 3, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted, we change the value of edge(1,5) with 5 at the last of an Edge list : the edge list of node with id 1
    */
   this.test21413322 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413322");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we change the value of the edge (1,5) with the value 5");
        try
        {
            newGraph.setEdgeValue(1, 5, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted, we try to change the value of edge(4,1) with 5 but this edge doesn't exist
    */
   this.test21413331 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413331");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we change the value of the edge (4,1) with the value 5");
        try
        {
            newGraph.setEdgeValue(4, 1, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted, we try to change the value of edge(2,1) with 5 but the node with the id 2 doesn't exist
    */
   this.test21413332 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413332");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we try to change the value of edge(2,1) with 5 but the node with the id 2 doesn't exist");
        try
        {
            newGraph.setEdgeValue(2, 1, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted, we try to change the value of edge(1,2) with 5 but the node with the id 2 doesn't exist
    */
   this.test21413333 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413333");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we try to change the value of edge(1,2) with 5 but the node with the id 2 doesn't exist");
        try
        {
            newGraph.setEdgeValue(1, 2, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted, we try to change the value of edge(-1,3) with 5 but -1 is negative
    */
   this.test21413334 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413334");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we try to change the value of edge(-1,3) with 5 but -1 is negative");
        try
        {
            newGraph.setEdgeValue(-1, 3, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted, we try to change the value of edge("toto",3) with 5 but "text" isn't a number
    */
   this.test21413335 = function ()
   {
       var newGraph = new Graph(true, true);
       console.log("test 21413335");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3, 12);
        newGraph.addEdge(1, 4, 25);
        newGraph.addEdge(1, 5, 42)
        console.log(newGraph.show());
        console.log("we try to change the value of edge(\"text\",3) with 5 but \"text\" isn't a number");
        try
        {
            newGraph.setEdgeValue("text", 3, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted, we try to change the value of edge(1,3) with 5 but this graph is unweighted
    */
   this.test21413336 = function ()
   {
       var newGraph = new Graph(true, false);
       console.log("test 21413336");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
        newGraph.addEdge(3, 4);
        newGraph.addEdge(4, 3);
        newGraph.addEdge(5,1);
        newGraph.addEdge(1, 3);
        newGraph.addEdge(1, 4);
        newGraph.addEdge(1, 5)
        console.log(newGraph.show());
        console.log(" we try to change the value of edge(1,3) with 5 but this graph is unweighted");
        try
        {
            newGraph.setEdgeValue(1, 3, 5);
        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted and we remove the edge (1,4) at the middles of an edge list : the edge list of the node with the id 1
    */

   this.test21413411 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413411");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (1,4)");
        try
        {
            newGraph.removeEdge(1, 4);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted and we remove the edge (1,4) at the middles of an edge list : the edge list of the node with the id 1
    */

   this.test21413412 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413412");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4);
        console.log(newGraph.show());
        console.log("we remove the edge (1,4)");
        try
        {
            newGraph.removeEdge(1, 4);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph non oriented and weighted and we remove the edge (1,4) at the middles of an edge list : the edge list of the node with the id 1
    */

   this.test21413413 = function ()
   {
       var newGraph = new Graph(false, true);
        console.log("test 21413413");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we remove the edge (1,4)");
        try
        {
            newGraph.removeEdge(1, 4);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }
   
    /*
     *We create a graph oriented and weighted and we remove the edge (1,3) at the beggining of an edge list : the edge list of the node with the id 1
    */

   this.test21413421 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413421");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (1,3)");
        try
        {
            newGraph.removeEdge(1, 3);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and non weighted and we remove the edge (1,3) at the beggining of an edge list : the edge list of the node with the id 1
    */

   this.test21413422 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413422");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4);
        console.log(newGraph.show());
        console.log("we remove the edge (1,3)");
        try
        {
            newGraph.removeEdge(1, 3);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph non oriented and weighted and we remove the edge (1,3) at the beggining of an edge list : the edge list of the node with the id 1
    */

   this.test21413423 = function ()
   {
       var newGraph = new Graph(false, true);
        console.log("test 21413423");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we remove the edge (1,3)");
        try
        {
            newGraph.removeEdge(1, 3);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

    /*
     *We create a graph oriented and weighted and we remove the edge (1,5) at the last of an edge list : the edge list of the node with the id 1
    */

   this.test21413424 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413424");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (1,5)");
        try
        {
            newGraph.removeEdge(1, 5);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

    /*
     *We create a graph oriented and non weighted and we remove the edge (1,5) at the last of an edge list : the edge list of the node with the id 1
    */

   this.test21413425 = function ()
   {
       var newGraph = new Graph(true, false);
        console.log("test 21413425");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4);
        console.log(newGraph.show());
        console.log("we remove the edge (1,5)");
        try
        {
            newGraph.removeEdge(1, 5);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph non oriented and weighted and we remove the edge (1,5) at the last of an edge list : the edge list of the node with the id 1
    */

   this.test21413426 = function ()
   {
       var newGraph = new Graph(false, true);
        console.log("test 21413426");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we remove the edge (1,5)");
        try
        {
            newGraph.removeEdge(1, 5);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

    /*
     *We create a graph oriented and weighted and we try remove the edge (2,5) but the node with the id 2 doesn't exist
    */

   this.test21413431 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413431");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (2,5) but the node with the id 2 doesn't exist");
        try
        {
            newGraph.removeEdge(2, 5);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted and we try remove the edge (1,2) but the node with the id 2 doesn't exist
    */

   this.test21413432 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413432");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (1,2) but the node with the id 2 doesn't exist");
        try
        {
            newGraph.removeEdge(1, 2);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

    /*
     *We create a graph oriented and weighted and we try remove the edge (-1,5) but -1 is negative
    */

   this.test21413433 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413433");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (-1,5) but -1 is negative");
        try
        {
            newGraph.removeEdge(-1, 5);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted and we try remove the edge ("text",2) but "text" isn't a number
    */

   this.test21413434 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413434");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (\"text\",2) but \"text\" isn't a number");
        try
        {
            newGraph.removeEdge("text", 2);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   /*
     *We create a graph oriented and weighted and we try remove the edge (3,5) but this edge doesn't exist
    */

   this.test21413435 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test 21413435");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5, 34);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(5, 1);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4, 45);
        console.log(newGraph.show());
        console.log("we remove the edge (3,5) but this edge doesn't exist");
        try
        {
            newGraph.removeEdge(3, 5);

        }
        catch(e)
        {
            e.print();
        }
        console.log(newGraph.show());
   }

   this.test21414111 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test test21414111");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we get number of neighbors of node 1)");
        try
        {
            temp = newGraph.getNeighborhoodSize(1);
            console.log(temp);

        }
        catch(e)
        {
            e.print();
        }
   }



  this.test21414121 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test test21414121");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we get number of neighbors of node 4)");
        try
        {
            temp = newGraph.getNeighborhoodSize(4);
            console.log(temp);

        }
        catch(e)
        {
            e.print();
        }
   }



    this.test21414131 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test test21414131");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we get number of neighbors of node 12)");
        try
        {
            temp = newGraph.getNeighborhoodSize(12);
            console.log(temp);

        }
        catch(e)
        {
            e.print();
        }
   }


    this.test21414132 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test test21414132");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we get number of neighbors of node -3)");
        try
        {
            temp = newGraph.getNeighborhoodSize(-3);
            console.log(temp);

        }
        catch(e)
        {
            e.print();
        }
   }

    this.test21414133 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test test2141413");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we get number of neighbors of node string :toto)");
        try
        {
            temp = newGraph.getNeighborhoodSize("toto");
            console.log(temp);

        }
        catch(e)
        {
            e.print();
        }
   }

      this.test21414211 = function ()
   {
       var newGraph = new Graph(true, true);
        console.log("test test21414211");
        newGraph.addNode(3, 15);
        newGraph.addNode(1, 10);
        newGraph.addNode(5, 25);
        newGraph.addNode(4, 1);
         newGraph.addEdge(1, 5);
         newGraph.addEdge(1, 3);
        newGraph.addEdge(3, 4);
         newGraph.addEdge(1, 4,25);
        console.log(newGraph.show());
        console.log("we get id of neighbor 2)");
        try
        {
            temp = newGraph.getNeighbor(1,2);
            console.log(temp);

        }
        catch(e)
        {
            e.print();
        }
   }








}


