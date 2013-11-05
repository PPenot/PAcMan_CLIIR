
/****************************
 * Class Object
 * this class is a mother class of other class,
 * argument :
 * Type : it's the type of children class
 *************************/
function Object(Type)
{
    var type = Type;
    this.getType = function()
    {
        return type;
    }

}
/***********************************************
* Class Node
* this class represente the node of the graph
* Constructor argument :
* val : value of the node
* identifiant : id of the new Node
* Class argument :
* id : id of the node
* value : value of the node
* firstEdge : it's reference on the first edge of this node
* lastNode :  it's reference on the last edge of this node
* nextNode :  it's reference on the next node of the graph
* prevNode :  it's reference on the prev edge of this node
*************************************************/
function Node (val, identifiant)
{
    if(identifiant == undefined)
    {
        throw new Exception("node's id is undefined", "Node Constructor");
    }
    if(typeof(identifiant) != "number")
    {
        throw new Exception("node's id isn't a number", "Node Constructor")
    }
    this.objectConst = Object;
    this.objectConst("Node");
    
    //this.prototype = new Object("Node");
    
    var id = identifiant;
    var value = val;
    var firstEdge = undefined;
    var lastEdge = undefined;
    var nextNode = undefined;
    var prevNode = undefined
  /***********************************************
* Fonction getId
* this function returns the id of this node
*************************************************/
        this.getId = function()
        {
            return id;
        }
  /***********************************************
* Fonction show
* this function converts into a string a representation of this node
*************************************************/
        this.show = function()
        {
            var string = "node " +id+"("+value+"):"
            var edge = firstEdge;
            while(edge != undefined)
                {
                    string += edge.show() + "->";
                    edge = edge.getNextEdge();
                }
                return string;
        }
  /***********************************************
* Fonction getNextNode
* this function returns the next node of after this
*************************************************/
        this.getNextNode = function()
        {
            return nextNode;
        }
        
/***********************************************
* Fonction setNextNode
* this function set the next node of after this
* argument :
* node : it's a reference on the new next Node of this node
*************************************************/
        this.setNextNode = function(node)
        {
            if((node != undefined) && (node.getType() != "Node"))
            {
                throw new Exception("this isn't a Node", "setNextNode");
            }
            else
            {
                nextNode = node;
            }
        }
/***********************************************
* Fonction setPrevNode
* this function set the node before this
* argument :
* node : it's a reference on the new previous Node of this node
*************************************************/
        this.setPrevNode = function(node)
        {
            if((node != undefined) && (node.getType() != "Node"))
            {
                throw new Exception("this isn't a Node", "setPrevNode");
            }
            else
            {
                prevNode = node;
            }
        }
/***********************************************
* Fonction getPrevNode
* this function returns the node before this
*************************************************/
        this.getPrevNode = function()
        {
            return prevNode;
        }
/***********************************************
* Fonction getFirstEdge
* this function returns the reference of the first edge of this node
*************************************************/
        this.getFirstEdge = function()
        {
            return firstEdge;
        }
/***********************************************
* Fonction getLastEdge
* this function returns the reference of the last edge of this node
*************************************************/
        this.getLastEdge = function()
        {
            return lastEdge;
        }
/***********************************************
* Fonction setFirstEdge
* this function set a reference of the first edge of this node
* edge : the new value of firstEdge
*************************************************/
        this.setFirstEdge = function(edge)
        {
            if(edge != undefined && edge.getType() != "Edge")
            {
                throw new Exception("this isn't an Edge", "setFirstEdge");
            }
            else
            {
                firstEdge = edge;
            }
        }
/***********************************************
* Fonction setLastEdge
* this function set a reference of the last edge of this node
* edge : the new value of lastEdge
*************************************************/
        this.setLastEdge = function(edge)
        {
            if(edge != undefined && edge.getType() != "Edge")
            {
                throw new Exception("this isn't an Edge", "setLastEdge");
            }
            else
            {
                lastEdge = edge;
            }
        }
/***********************************************
* Fonction getValue
* this function returns the value of this node
*************************************************/
        this.getValue = function()
        {
            return value;
        }
/***********************************************
* Fonction setValue
* this function set the value of this node
* argument :
* val : new value of this node
*************************************************/
        this.setValue = function(val)
        {
            value = val;
        }
/***********************************************
* Fonction removeAllEdge
* this function removes all the edge of this node
*************************************************/
        this.removeAllEdge = function()
        {
            var edge = firstEdge;
            var nextEdge = undefined;
            while(edge != undefined)
            {
                nextEdge = edge.getNextEdge();
                edge.setPrevEdge(undefined);
                edge.setNextEdge(undefined);
                edge = nextEdge;
            }
            firstEdge = undefined;
            lastEdge = undefined;
        }
}

/***********************************************
* Class Edge
* this class represente : Edge of the graph
* Constructor argument :
* Dest : it's reference on the destination 's node
* Weight : it's the weight of this edge
* Class argument :
* weight : it's the weight of this edge
* value : value of the node
* nextEdge : it's reference on the next edge of this
* prevEdge :  it's reference on the previous edge of this
*************************************************/
function Edge(Dest,Weight)
{
    this.objectConst = Object;
    this.objectConst("Edge");
    if(Weight == undefined)
    {
        Weight = 1;
    }
    if (typeof(Weight)!= 'number')
    {
        throw new Exception("Weight isn't a number", "Edge Constructor");
    }
//        
//    if(Dest != undefined && Dest.getType() != "Node")
//    {
//        throw Exception("Destination isn't a Node", "Edge Constructor");
//    }

    var weight = Weight;
    var nextEdge = undefined; //Edge
    var prevEdge = undefined
    var dest = Dest;

/***********************************************
* Fonction getDest
* this function returns a reference of the destination node
*************************************************/
    this.getDest = function()
    {
        return dest;
    }
/***********************************************
* Fonction setDest
* this function set a new reference of the destination node
* argument :
* node : reference of the new destination node
*************************************************/
    this.setDest = function(node)
    {
        if(node == undefined || node.getType() != "Node")
        {
            throw new Exception("Destination isn't a Node", "setDest");
        }
    }

/***********************************************
* Fonction getWeight
* this function returns the weight of this edge
*************************************************/
    this.getWeight = function()
    {
        return weight;
    }
/***********************************************
* Fonction setWeight
* this function set the weight of this edge
* argument :
* Weight : new value of the weight of this edge
*************************************************/
    this.setWeight  =function(Weight)
    {
        if (typeof(weight)!= 'number')
        {
            throw new Exception("Weight isn't a number", "setWeight");
        }
        else
        {
            weight = Weight;
        }
    }

/***********************************************
* Fonction getNextEdge
* this function returns the nextEdge after this
*************************************************/

    this.getNextEdge = function()
    {
        return nextEdge;
    }
/***********************************************
* Fonction setNextEdge
* this function set the nextEdge after this
* argument :
* edge : it's a reference of the new nextEdge of this
*************************************************/
    this.setNextEdge = function(edge)
    {
        if((edge == undefined) || (edge.getType()== "Edge"))
        {
            nextEdge = edge
        }
        else
        {
            throw new Exception("this isn't an Edge", "setNextEdge");
        }
    }

/***********************************************
* Fonction getPrevEdge
* this function returns the previous Edge before this
*************************************************/

    this.getPrevEdge = function()
    {
        return prevEdge;
    }

/***********************************************
* Fonction setPrevEdge
* this function set the previous Edge before this
* argument :
* edge : it's a reference of the new prevEdge of this
*************************************************/
    this.setPrevEdge = function(edge)
    {
        if((edge == undefined) || (edge.getType()== "Edge"))
        {
            prevEdge = edge
        }
        else
        {
            throw new Exception("this isn't an Edge", "setPrevEdge");
        }
    }
/***********************************************
* Fonction show
* this function converts into a string a representation of this edge
*************************************************/
    this.show = function()
    {
        var string = this.getDest().getId() + "(" + this.getWeight() + ") ";
        return string;
    }

}

/***********************************************
* Class Graph
* this class represente : the graph
* Constructor argument :
* orient : it's a boolean to know if this graph is oriented
* weight : it's a boolean to know if this graph is weighted
* Class argument :
* weighted : it's a boolean to know if this graph is weighted
* oriented :  it's a boolean to know if this graph is oriented
* firstNode : it's reference on the firstNode of this graph
* lastNode :  it's reference on the lastNode of this graph
*************************************************/
function Graph(orient, weight)
{
    if(typeof(orient) != "boolean")
    {
        throw new Exception("orient isn't a boolean", "Graph Constructor");
    }
    if(typeof(weight) != "boolean")
    {
        throw new Exception("weight isn't a boolean", "Graph Constructor");
    }
    this.objectConst = Object;
    this.objectConst("Graph");
    var oriented = orient;
    var weighted = weight;
    var firstNode = undefined;
    var lastNode = undefined;
    var order = 0;


    //function Graph
    this.searchEdge = searchEdge;
 /***********************************************
* Fonction getOrder
* this function returns the order of this graph
*************************************************/
    this.getOrder = function()
    {
        return order;
    }
/***********************************************
* Fonction searchNode
* this function returns the node with this id if he exists or the previous node of this id if this node doesn't exist
* argument :
* id : id of node
*************************************************/
    this.searchNode = function(id)
    {
        if(id< 0)
        {
            throw new Exception("negative Id", "searchNode");
        }
        if(typeof(id) != "number")
        {
            throw new Exception("id isn't un integer", "searchNode");
        }
        var nodeTemp = firstNode;
        while((nodeTemp != undefined) && (nodeTemp.getId() < id))
        {
            nodeTemp = nodeTemp.getNextNode();
        }
        if(nodeTemp != undefined)
        {
            if(nodeTemp.getId() == id)
            {
                return nodeTemp;
            }
            else
            {
                return nodeTemp.getPrevNode();
            }

        }
        else
        {
            if(lastNode != undefined && id > lastNode.getId())
            {
                return lastNode;
            }

        }
        return undefined;
    }
    
/***********************************************
* Fonction searchNode
* this function returns true if the node with this id exists, else this function returns false
* argument :
* id : id of node
*************************************************/
    this.nodeExists = function(id)
    {
        return ((this.searchNode(id) != undefined) && (this.searchNode(id).getId() == id));
    }
/***********************************************
* Fonction addNode
* this function adds a Node to this graph
* argument :
* id : id of node the new Node
* val : value of the newNode
*************************************************/
    this.addNode = function(id, val)
    {
        if(typeof(id) != 'number')
        {
            throw new Exception("id isn't a number ", "addNode");
        }
        if(id < 0)
        {
            throw new Exception("negative id", "addNode");
        }
        else
        {
            try
            {
                var node = new Node(val, id);
            }
            catch (e)
            {
                throw new Exception("Impossible to add a Node", "addNode", e);
            }
            if(firstNode != undefined)
            {
                var prevNode = this.searchNode(id);
                if(prevNode == undefined)
                {
                    node.setNextNode(firstNode);
                    node.setPrevNode(undefined);
                    firstNode = node;
                }
                else if(prevNode.getId() == id)
                {
                    throw new Exception("id already exist", "addNode");
                }
                else
                {
                    node.setPrevNode(prevNode);
                    node.setNextNode(prevNode.getNextNode());
                    prevNode.setNextNode(node);
                }
                if(node.getNextNode() == undefined)
                {
                    lastNode = node;
                }
                else
                {
                    node.getNextNode().setPrevNode(node);
                }
                   
            }
            else
            {
                firstNode = node;
                lastNode = node;
                node.setNextNode(undefined);
                node.setPrevNode(undefined);
            }
            order++;
        }
    }
/***********************************************
* Fonction removeNode
* this function removes the Node with this id to this graph
* argument :
* id : id of node we want remove
*************************************************/
    this.removeNode = function(id)
    {
        if(typeof(id) != "number")
        {
            throw new Exception("id isn't a number", "removeNode");
        }
        else if (id < 0)
        {
            throw new Exception("negative Id", "removeNode");
        }
        else
        {
            var node = this.searchNode(id);
            if(node.getId() != id)
            {
                throw new Exception("id don't Exist", "removeNode");
            }
            else
            {
                node.removeAllEdge();
                var tempNode = firstNode;
                while(tempNode != undefined)
                {
                    if(this.edgeExist(tempNode.getId(), node.getId()))
                    {
                        this.removeEdge(tempNode.getId(), node.getId());

                    }
                    tempNode = tempNode.getNextNode();
                }
                if(node.getPrevNode() != undefined)
                {
                    node.getPrevNode().setNextNode(node.getNextNode());
                }
                else
                {
                    firstNode = node.getNextNode();
                }
                if(node.getNextNode() != undefined)
                {
                    node.getNextNode().setPrevNode(node.getPrevNode());
                }
                else
                {
                    lastNode = node.getPrevNode();
                    
                }
            }
            order--;

        }
    }
/***********************************************
* Fonction getNodeValue
* this function returns the value of the node with this id
* argument :
* id : id of node we want the value
*************************************************/
    this.getNodeValue = function(id)
    {
        if(typeof(id) != "number")
        {
            throw new Exception("id isn't a number", "getNodeValue");
        }
         if (id < 0)
        {
           throw new Exception("negative id", "getNodeValue");
        }
        var node = this.searchNode(id);
        if((node == undefined)||(node.getId() != id))
        {
            throw new Exception("node don't exist", "getNodeValue");
        }
        else
        {
            return node.getValue();
        }
        return undefined;
    }
/***********************************************
* Fonction setNodeValue
* this function set the value of the node with this id
* argument :
* id : id of node we want set the value
* val : the new value of the node with this id
*************************************************/
    this.setNodeValue = function(id, val)
    {
        if(typeof(id) != "number")
        {
            throw new Exception("id isn't a number", "setNodeValue");
        }
         if (id < 0)
        {
           throw new Exception("negative id", "setNodeValue");
        }
        else
        {
            var node = this.searchNode(id);
            if((node == undefined)||(node.getId() != id))
            {
                throw new Exception("this node don't exist", "setNodeValue");
            }
            else
            {
                node.setValue(val);
            }
        }
    }

/***********************************************
* Fonction setNodeValues
* this function set the value of all the node of this graph with the value val
* argument :
* val : the new value of all the node of this graph
*************************************************/
    this.setNodeValues = function(val)
    {
        var node = firstNode;
        if(node == undefined)
        {

        }
        else
        {
            while(node !=undefined)
            {
                node.setValue(val);
                node = node.getNextNode();
            }
        }
    }
/***********************************************
* Fonction searchEdge
* this function returns the edge if she exists else this function returns the before this
* argument :
* src : id of the source node
* dest : id of the destination node
*************************************************/
    function searchEdge(src,dest)
    {
        if(typeof(src) != "number")
        {
            throw new Exception("src isn't a number", "search Edge");
        }
        if(typeof(dest) != "number")
        {
            throw new Exception("dest isn't a number", "search Edge");
        }
        if(src< 0 && dest < 0)
        {
            throw new  Exception("negative id", "searchEdge");
        }
        else
        {
            var nodeSrc = this.searchNode(src);
            var nodeDest = this.searchNode(dest);
            if(nodeSrc == undefined || nodeSrc.getId() != src)
            {
                throw new Exception("node Source don't Exist", "searchEdge");
            }
            if(nodeDest == undefined || nodeDest.getId() != dest)
            {
                throw new Exception("node Dest doesn't Exist", "searchEdge");
            }

            var edgeTemp = nodeSrc.getFirstEdge();
            while((edgeTemp != undefined) && (edgeTemp.getDest().getId() < dest))
            {
                edgeTemp =  edgeTemp.getNextEdge();
            }
            if(edgeTemp != undefined)
            {
                if(edgeTemp.getDest().getId() == dest)
                {
                    return edgeTemp;
                }
                else
                {
                    return edgeTemp.getPrevEdge();
                }

            }
            else
            {
                if((nodeSrc.getLastEdge() != undefined) && (dest > nodeSrc.getLastEdge().getDest().getId()))
                {
                    return nodeSrc.getLastEdge();
                }

            }
        }
        return undefined;
    }

/***********************************************
* Fonction edgeExist
* this function returns true if the edge exists else this function return false
* argument :
* src : id of the source node
* dest : id of the destination node
*************************************************/
    this.edgeExist = function (src, dest)
    {
         if(typeof(src) != "number")
        {
            throw new Exception("src isn't a number", "edgeExist");
        }
        if(typeof(dest) != "number")
        {
            throw new Exception("dest isn't a number", "edgeExist");
        }
        if(src< 0 && dest < 0)
        {
            throw new Exception("negativeId", "edgeExist")
        }

        var edge = this.searchEdge(src, dest);
        return (edge != undefined && edge.getDest(dest).getId()== dest);
            
    }

/***********************************************
* Fonction getEdgeValue
* this function returns the value of this edge
* argument :
* src : id of the source node
* dest : id of the destination node
*************************************************/
    this.getEdgeValue = function(src, dest)
    {
        if(typeof(src) != "number")
        {
            throw new Exception("src isn't a number", "getEdgeValue");
        }
        if(typeof(dest) != "number")
        {
            throw new Exception("dest isn't a number", "getEdgeValue");
        }
        if(src< 0 && dest < 0)
        {
            throw new Exception("negativeId", "getEdgeValue");
        }
        if(!this.searchEdge(src,dest))
        {
           throw new Exception("the edge does not exist", "getEdgeValue");
        }
        return this.searchEdge(src,dest).getWeight();
    }

/***********************************************
* Fonction setEdgeValue
* this function set the value of this edge with the value val
* argument :
* src : id of the source node
* dest : id of the destination node
* val : new value of this edge
*************************************************/
    this.setEdgeValue = function(src, dest,val)
    {
        if(typeof(src) != "number")
        {
            throw new Exception("src isn't a number", "setEdgeValue");
        }
        if(typeof(dest) != "number")
        {
            throw new Exception("dest isn't a number", "setEdgeValue");
        }
        if(typeof(val) != "number")
        {
            throw new Exception("val isn't a number", "setEdgeValue");
        }
        if(!weighted)
        {
            throw new Exception("impossible to set a weight of an Eidge because the graph is not weighted", "setEdgeValue");
        }
        if(src< 0 && dest < 0)
        {
            throw new Exception("negative id", "setEdgeValue");
        }
        var edge = this.searchEdge(src,dest);
        if(edge == undefined || edge.getDest().getId() != dest)
        {
            throw new Exception("edge doesn't exist", "setEdgeValue");
        }
        else
        {
            edge.setWeight(val);
        }
        if(!oriented)
        {
            this.searchEdge(dest,src).setWeight(val);

        }
    }

    /***********************************************
* Fonction addEdge
* this function adds edge between two node to this graph
* argument :
* src : id of the source node for the new Edge
* dest : id of the destination node for the new Edge
* weight : the weight of the new edge (only if the graph is weighted)
*************************************************/
    this.addEdge = function (src,dest,weight)
    {
        if(typeof(src) != 'number' && typeof(dest) != 'number')
        {
            throw new Exception("src or dest aren't a number", "addEdge");
        }
        else if(src < 0 || dest < 0)
        {
            throw new Exception("negative id", "addEdge");
        }
        else if(!weighted && weight != undefined)
        {
            throw new Exception("impossible to set an Edge Value on a graph unweighted", "add Edge");
        }
        else
        {
            if(weight == undefined)
            {
                weight = 1;
            }
            var nodeSrc = this.searchNode(src);
            var nodeDest = this.searchNode(dest);
            if(nodeDest == undefined || nodeDest.getId() != dest)
            {
                throw new Exception("the destination node doesn't exist !!", "addEdge");
            }
            if(nodeSrc != undefined && nodeSrc.getId() == src)
            {
                var edge = new Edge(nodeDest,weight);
                if(nodeSrc.getFirstEdge() != undefined)
                {
                    var prevEdge = this.searchEdge(src,dest);
                    if(prevEdge == undefined)
                    {
                        edge.setNextEdge(nodeSrc.getFirstEdge());
                        edge.setPrevEdge(undefined);
                        nodeSrc.setFirstEdge(edge);
                    }
                    else if(prevEdge.getDest().getId() == dest)
                    {
                        throw new Exception("Edge already exist", "addEdge");
                    }
                    else
                    {
                        edge.setPrevEdge(prevEdge);
                        edge.setNextEdge(prevEdge.getNextEdge());
                        prevEdge.setNextEdge(edge);
                    }
                    if(edge.getNextEdge() == undefined)
                    {
                        nodeSrc.setLastEdge(edge);
                    }
                    else
                    {
                        edge.getNextEdge().setPrevEdge(edge);
                    }
                }
                else
                {

                    nodeSrc.setFirstEdge(edge);
                    nodeSrc.setLastEdge(edge);
                    
                }
           }
           else
           {
               throw new Exception("the source node doesn't exist !!", "addEdge");
           }
           if(!oriented)
           {
                var edgeTemp = this.searchEdge(dest,src);
                if(edgeTemp == undefined || edgeTemp.getDest().getId() != src)
                {
                    if(!weighted)
                    {
                        weight = undefined;
                    }
                    this.addEdge(dest, src, weight)
                }
           }
           
        }

    }

    /***********************************************
* Fonction removeEdge
* this function removes an edge between two node of this graph
* argument :
* src : id of the source node
* dest : id of the destination node
*************************************************/
    this.removeEdge = function(src, dest)
    {
        if(typeof(src) != "number")
        {
            throw new Exception("src isn't a number", "removeEdge");
        }
        if(typeof(dest) != "number")
        {
            throw new Exception("dest isn't a number", "removeEdge");
        }
        if(src < 0 || dest < 0)
        {
            throw new Exception("negative id", "removeEdge");
        }
        var nodeSrc = this.searchNode(src);
        if(nodeSrc == undefined || nodeSrc.getId() != src)
        {
            throw new Exception("node Source don't exist", "removeEdge");
        }
        var edge = undefined;
        try
        {
            edge = this.searchEdge(src,dest);
        }
        catch(e)
        {
            throw new Exception("impossible to remove this Edge", "removeEdge", e);
        }
        if(edge == undefined || edge.getDest().getId() != dest)
        {
            throw new Exception("Edge don't exist", "removeEdge");
        }
        if(edge.getPrevEdge() == undefined)
        {
            nodeSrc.setFirstEdge(edge.getNextEdge());
        }
        else
        {
            edge.getPrevEdge().setNextEdge(edge.getNextEdge());
        }
        if(edge.getNextEdge() == undefined)
        {
            nodeSrc.setLastEdge(edge.getPrevEdge());
        }
        else
        {
            edge.getNextEdge().setPrevEdge(edge.getPrevEdge());
        }
        if(!oriented)
        {
            if(this.edgeExist(dest, src))
            {
                this.removeEdge(dest, src);
            }
        }
    }
/***********************************************
* Fonction getNeighborhoodSize
* this function Returns the number of neighbors of node with the id id
* argument :
* src : id  of this node
*************************************************/
    this.getNeighborhoodSize = function(id)
    {
        if(typeof(id) != "number")
        {
            throw new Exception("id isn't a number", "getNeighborhoodSize");
        }
        if(id < 0)
        {
            throw new Exception("negative id", "getNeighborhoodSize");
        }
        var node = this.searchNode(id);
        if(node == undefined || node.getId() != id)
        {
            throw new Exception("node don't exist", "getNeighborhoodSize");
        }
        var compteur = 0;
        var edge = node.getFirstEdge();
        while(edge != undefined)
        {
            edge = edge.getNextEdge();
            compteur++;
        }
        
        return compteur;
    }
/***********************************************
* Fonction getNeighborhoodSize
* this function returns the id of kth neighbor of node with the id id
* argument :
* src : id  of this node
* k : kth neighbor
*************************************************/
    this.getNeighbor = function(id, k)
    {
        if(typeof(id) != "number")
        {
            throw new Exception("id isn't a number", "getNeighbor");
        }
        if(id < 0)
        {
            throw new Exception("negative id", "getNeighbor");
        }
        if(typeof(k) != "number")
        {
            throw new Exception("k isn't a number", "getNeighbor");
        }
        if(k < 1)
        {
            throw new Exception("k is too small", "getNeighbor");
        }
        var node = this.searchNode(id);
        if(node == undefined || node.getId() != id)
        {
            throw new Exception("node don't exist", "getNeighbor");
        }
        var edge = node.getFirstEdge();
        var i = 1;
        while(edge != undefined && i < k)
        {
            edge = edge.getNextEdge();
            i++;
        }
        if(edge == undefined)
        {
            throw new Exception("k is too large", "getNeighbor");
        }
        return edge.getDest().getId();


    }
/***********************************************
* Fonction show
* this function print graph whith this arguments and each node whith there Edge
*************************************************/

    this.show = function()
    {
        var node = firstNode;
        var string = "";
        string += "oriented : " + oriented + "\n";
        string +="weighted : " + weighted + "\n";
        string +="order : " + order + "\n";
        if(node != undefined)
        {
            while(node != undefined)
            {
                string +=node.show() + "\n";
                node = node.getNextNode();
            }
        }
        else
        {
            string += "empty graph";
        }
        return string;
    }

/***********************************************
* Fonction remove
* this function delete completly graph
*************************************************/

    this.remove = function()
    {
        var node = firstNode;
        var nextNode = undefined;
        while(node != undefined)
        {
            nextNode = node.getNextNode();
            node.removeAllEdge();
            node.setPrevNode(undefined);
            node.setNextNode(undefined);
            node = nextNode;
        }
        order = 0;
        firstNode = undefined;
        lastNode = undefined;
    }
/***********************************************
* Fonction setEdgeValues
* this function set value of Edge whith value val 
*************************************************/
    this.setEdgeValues = function(val)
    {
        if(typeof(val) != "number")
        {
            throw new Exception("val isn't a number", "setEdgeValues");
        }
        var node = firstNode;
        var edge;
        while (node != undefined)
        {
            edge = node.getFirstEdge()
            while(edge != undefined)
            {
               edge.setWeight(val);
               edge = edge.getNextEdge();
            }
            node = node.getNextNode();
        }
    }

    this.isOriented = function ()
    {
        return oriented;
    }

    this.isWeighted = function()
    {
        return weighted;
    }

    this.toQueryString = function()
    {
        var string = "";
        var node = firstNode;
        string +="oriented=" + oriented + "&weighted=" + weighted;
        while(node != undefined)
        {
            string+="&node" + node.getId() + "=" + node.getValue();
            node = node.getNextNode();
        }
        node = firstNode;
        while (node != undefined)
        {
            var edge = node.getFirstEdge();
            while (edge != undefined)
            {
                string +="&edge" + node.getId() +"-" + edge.getDest().getId() + "=" + edge.getWeight();
                edge = edge.getNextEdge();
            }
            node = node.getNextNode();
        }
        return string;
    }
}

$(document).ready(function()
{
   /* var node1 = new Node(5,1);
    var node2 = new Node(6,2);
    try
    {
        var edge1 = new Edge(new Node(3,2), 1);
    }
    catch (e)
    {
        e.print();
    }
    var graph = new Graph(true,true);
   //console.log(graph.nodeExists(2));
   //console.log(graph.getFirstNode().getValue());
   graph.addNode(1, 7);
   graph.addNode(4, 23);
   graph.addNode(3, 4);
   graph.addEdge(4, 3, 12);
   graph.addEdge(3, 4);
   graph.addEdge(4, 1, 25);
   console.log(graph.show());
   console.log(graph.getNeighborhoodSize(4));
   graph.addNode(2, 4);
   try
    {
        graph.addNode(1,23);
    }
    catch (e)
    {
        e.print();
    }
    console.log(graph.getNodeValue(3));
    console.log(graph.getEdgeValue(4, 1));
    graph.setEdgeValues(15);
    graph.setNodeValues(117);
    graph.setNodeValue(1,25);
    console.log(graph.show());
    */
   //graph.removeNode(4);
   //console.log(graph.show());
    //console.log(graph.nodeExists(4));
    //console.log(graph.nodeExists(2));
    //console.log(graph.nodeExists(1));
    //console.log(graph.nodeExists(3));
    //console.log(graph.searchNode(3).getPrevNode().getPrevNode().getId());
    //graph.addEdge(2, 3);
    //graph.addEdge(4, 1);
    //graph.addEdge(4, 2);
    //console.log(graph.edgeExist(2, 3));
    //console.log(graph.edgeExist(3, 2));
    //console.log(graph.edgeExist(2, 4));
    //console.log(graph.show());
//    try
//    {graph.removeEdge(2,3);
//
//    }
//    catch (e)
//    {
//    e.print();
//    }

    //console.log(graph.show());
    

    //console.log(graph.searchEdge(2,4).getPrevEdge());
    //graph.removeEdge(2, 1)
    //console.log(graph.edgeExist(2, 1));
    //console.log(graph.edgeExist(2, 3));
    //console.log(graph.searchNode(1).getId());
    //console.log(graph.getNeighbor(4, 2));
//    var test = new TestUnitairesObjectif1();
//    test.test21411111();
//    test.test21411112();
//    test.test21411113();
//    test.test21411114();
//    test.test21411121();
//    test.test21412121();
//    test.test21412122();
//    test.test21412122();
//    test.test21412131();
//    test.test21412132();
//    test.test21412133();
//    test.test21412211();
//    test.test21412221();
//    test.test21412222();
//    test.test21412231();
//    test.test21412232();
//    test.test21412233();
//    test.test21412311();
//    test.test21412312();
//    test.test21412331();
//    test.test21412332();
//    test.test21411211();
//    test.test21411221();
//    test.test21411222();
//    test.test21412411();
//    test.test21412421();
//    test.test21412422();
//    test.test21412431();
//    test.test21412432();
//    test.test21412433();
//    test.test21412434();
//    test.test21412511();
//    test.test21412521();
//    test.test21412522();
//    test.test21412531();
//    test.test21412532();
//    test.test21412534();
//    test.test21413111();
//    test.test21413112();
//    test.test21413121();
//    test.test21413122();
//    test.test21413123();
//    test.test21413124();
//    test.test21413125();
//    test.test21413126();
//    test.test21413127();
//    test.test21413131();
//    test.test21413132();
//    test.test21413133();
//    test.test21413134();
//    test.test21413135();
//    test.test21413136();
//    test.test21413211();
//    test.test21413212();
//    test.test21413221();
//    test.test21413222();
//    test.test21413223();
//    test.test21413224();
//    test.test21413231();
//    test.test21413232();
//    test.test21413233();
//    test.test21413234();
//    test.test21413235();
//    test.test21413311();
//    test.test21413312();
//    test.test21413321();
//    test.test21413322();
//    test.test21413331();
//    test.test21413332();
//    test.test21413333();
//    test.test21413334();
//    test.test21413335();
//    test.test21413336();
//    test.test21413411();
//    test.test21413412();
//    test.test21413413();
//    test.test21413421();
//    test.test21413422();
//    test.test21413423();
//    test.test21413424();
//    test.test21413425();
//    test.test21413426();
//    test.test21413431();
//    test.test21413432();
//    test.test21413433();
//    test.test21413434();
//    test.test21413435();
//    test.test21414111();
//    test.test21414121();
//    test.test21414131();
//    test.test21414132();
//    test.test21414133();
//    test.test21414211();

    //graph.removeEdge(2, 3);
    //
    //onsole.log(graph.show());
//    try
//    {
//        graph.removeEdge(1,4);
//    }
//    catch (e)
//    {
//        e.print();
//    }






// var graph = new Graph(true,true);
//   //console.log(graph.nodeExists(2));
//   //console.log(graph.getFirstNode().getValue());
//   graph.addNode(1, 7);
//   graph.addNode(4, 23);
//   graph.addNode(3, 4);
//   graph.addEdge(4, 3, 12);
//   graph.addEdge(3, 4);
//   graph.addEdge(4, 1, 25);
//   console.log(graph.show());
//   console.log(graph.getNeighborhoodSize(4));
//   graph.addNode(2, 4);
//   try
//    {
//        graph.addNode(1,23);
//    }
//    catch (e)
//    {
//        e.print();
//    }
//    console.log(graph.getNodeValue(3));
//    console.log(graph.getEdgeValue(4, 1));
//    graph.setEdgeValues(15);
//    graph.setNodeValues(117);
//    graph.setNodeValue(1,25);
//    console.log(graph.show());
//    console.log(graph.getNeighbor(4, 2));
//    try
//    {
//       console.log(graph.getNeighbor(4, 12));
//    }
//    catch(e)
//    {
//        e.print();
//    }
});


