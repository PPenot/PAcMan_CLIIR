var HAUT = 1;
var BAS = 2;
var DROITE = 3;
var GAUCHE = 4;


function Model()
{
    var grid;
    var entities = new Array();
    var views = new Array();
    var Ajax;

    /*************************
     *init()
     *this function initialise the model with the creation of the grid, the map, the Ajax
     *************************/
    this.init = function()
    {
        grid = new Grid();
        grid.InitGrid();
        this.CreateMap();
        Ajax = new Ajx();
        if(ENABLED_SERVER)
        {
            Ajax.sendGraph(grid.ConvertGraphToString())
        }
    //Ajax.sendGraph(grid.ConvertGraphToString());
    }

     /*************************
     *CreateMap()
     *create Walls and add these to the grid
     *************************/
    this.CreateMap = function()
    {
         
        var wall1 = new Wall(2,2,3,2);
        var wall2 = new Wall(3,2,3,3);
        var wall3 = new Wall(4,2,4,3);
        var wall4 = new Wall(3,3,4,3);
        var wall5 = new Wall(2,4,3,4);
        var wall6 = new Wall(2,5,3,5);
        var wall7 = new Wall(3,5,3,6);
        var wall8 = new Wall(2,6,3,6);
        var wall9 = new Wall(2,7,3,7);
        var wall10 = new Wall(3,8,3,9);
        var wall11 = new Wall(3,9,2,9);
        var wall12 = new Wall(3,8,4,8);
        var wall13 = new Wall(4,8,4,9);
        var wall14 = new Wall(4,4,5,4);
        var wall15 = new Wall(4,7,5,7);
        var wall16 = new Wall(5,3,5,4);
        var wall17 = new Wall(6,3,6,4);
        var wall18 = new Wall(5,7,5,8);
        var wall19 = new Wall(6,7,6,8);
        var wall20 = new Wall(6,4,7,4);
        var wall21 = new Wall(6,5,7,5);
        var wall22 = new Wall(6,6,7,6);
        var wall23 = new Wall(6,7,7,7);
        var wall24 = new Wall(7,4,8,4);
        var wall25 = new Wall(7,5,8,5);
        var wall26 = new Wall(7,6,8,6);
        var wall27 = new Wall(7,7,8,7);
        var wall28 = new Wall(8,5,8,6);
        var wall29 = new Wall(9,2,10,2);
        var wall30 = new Wall(9,3,10,3);
        var wall31 = new Wall(9,4,10,4);
        var wall32 = new Wall(9,3,9,4);
        var wall33 = new Wall(10,5,10,6);
        var wall34 = new Wall(9,7,10,7);
        var wall35 = new Wall(9,8,10,8);
        var wall36 = new Wall(9,9,10,9);
        var wall37 = new Wall(9,7,9,8);

        try{
            grid.AddWall(wall1);
            grid.AddWall(wall2);
            grid.AddWall(wall3);
            grid.AddWall(wall4);
            grid.AddWall(wall5);
            grid.AddWall(wall6);
            grid.AddWall(wall7);
            grid.AddWall(wall8);
            grid.AddWall(wall9);
            grid.AddWall(wall10);
            grid.AddWall(wall11);
            grid.AddWall(wall12);
            grid.AddWall(wall13);
            grid.AddWall(wall14);
            grid.AddWall(wall15);
            grid.AddWall(wall16);
            grid.AddWall(wall17);
            grid.AddWall(wall18);
            grid.AddWall(wall19);
            grid.AddWall(wall20);
            grid.AddWall(wall21);
            grid.AddWall(wall22);
            grid.AddWall(wall23);
            grid.AddWall(wall24);
            grid.AddWall(wall25);
            grid.AddWall(wall26);
            grid.AddWall(wall27);
            grid.AddWall(wall28);
            grid.AddWall(wall29);
            grid.AddWall(wall30);
            grid.AddWall(wall31);
            grid.AddWall(wall32);
            grid.AddWall(wall33);
            grid.AddWall(wall34);
            grid.AddWall(wall35);
            grid.AddWall(wall36);
            grid.AddWall(wall37);
        }
        catch(e)
        {
        }
    }
     /*************************
     *addView(view)
     *add a view to this model
     *argument :
     *view : new view
     *************************/
    this.addView = function (view)
    {
        view.CreateImage(grid);
        views.push(view);
    }
    /*************************
     *refresh()
     *this function call the function update of all of this view to refresh
     *************************/
    this.refresh = function()
    {
        var size = views.length;
        for(var i= 0; i < size; i++)
        {
            views[i].update(grid,entities);
        }
    }
    /*************************
     *addEntitie(entitie)
     *add a entitie to this model
     *argument :
     *entitie : new entitie
     *************************/
    this.addEntitie = function(entitie)
    {
        if(!entitie)
        {
            throw new Exception("this entitie is undefined", "addEntitie");
        }
        var val = 0;
        if(entitie.getType() == "pacman")
        {
            val = 4;
        }
        entities.push(entitie);
        var Pos = entitie.getPosition();
        grid.setCelValue(Pos[0], Pos[1], val);
        
    }

     /*************************
     *getGrid()
     *return a reference to grid
     *************************/
    this.getGrid = function()
    {
        return grid;
    }

     /*************************
     *getEntities()
     *return a reference to the entities array
     *************************/
    this.getEntities = function()
    {
        return entities;
    }

    /*************************
     *getEntities()
     *return a reference to the Ajax
     *************************/
    this.getAjax = function()
    {
        return Ajax;
    }

    /*************************
     *move()
     *this function move all entities
     *************************/
    this.move = function()
    {
        var play = 1;
        
        for(var i=0;i < entities.length;i++) // this loop traverses all the entities in the game
        {
            if(entities[i].getType() == "ghost")
            {
                entities[i].finalSolution(this); // this function decide the which IA solution to apply
            }
            if(entities[i].getNewSpeedVector() != undefined) // check the validity of the new speedVector
            {
                var tempPos = this.vectorUserToPosition(entities[i].getNewSpeedVector(),entities[i].getPosition());
                if(tempPos[0]>=1 && tempPos[0]<=ROWS && tempPos[1]>=1 && tempPos[1]<= COLUMNS) //check the validity of the new movement
                {
                    if(grid.ValidMove(entities[i].getPosition()[0],entities[i].getPosition()[1],tempPos[0],tempPos[1]))
                    {
                        entities[i].setSpeed(entities[i].getNewSpeedVector());
                        entities[i].setNewSpeedVector(undefined);
                    }
                }
            }
            if (entities[i].getSpeed() != undefined)
            {
                var tempPosition = this.vectorUserToPosition(entities[i].getSpeed(),entities[i].getPosition());
                if(tempPosition[0]>=1 && tempPosition[0]<=ROWS && tempPosition[1]>=1 && tempPosition[1]<= COLUMNS) //check the validity of the movement
                {
                    if(grid.ValidMove(entities[i].getPosition()[0],entities[i].getPosition()[1],tempPosition[0],tempPosition[1]))
                    {
                        if(entities[i].getType() == "pacman") // move and refresh the pacman if the current entitie is a pacman
                        {
                           
                            if(entities[i].getOpen() == true)
                            {
                                entities[i].setOpen(false);
                            }
                            else
                            {
                                entities[i].setOpen(true);
                            }
                                


                            if(grid.getCelValue(tempPosition[0],tempPosition[1]) == 1)
                            {
                                entities[i].incrementNbGome();
                                document.getElementById("nbgommes").innerHTML = entities[i].getNbGome();
                            }
                            if(grid.getCelValue(tempPosition[0],tempPosition[1]) > 4)
                            {
                                //this.refresh();
                                play = 3;
                            }

                            if (entities[i].getNbGome() == ROWS * COLUMNS )
                            {
                                //entities[i].setNbGome(0);
                                //this.refresh();
                                play =  2;
                            //reinit(); TO DO
                            }
                            grid.setCelValue(entities[i].getPosition()[0],entities[i].getPosition()[1],0);
                            grid.setCelValue(tempPosition[0],tempPosition[1],4);
                        }
                        else if(entities[i].getType() == "ghost") // move and refresh one of  ghosts if the current entitie is one of  ghosts
                        {
                            //if(grid.getCelValue(entities[i].getPosition()[0],entities[i].getPosition()[1]) == 2)
                            //{
                                grid.setCelValue(entities[i].getPosition()[0],entities[i].getPosition()[1], entities[i].getPredCell());
                            //}
                            var predCell = grid.getCelValue(tempPosition[0], tempPosition[1]);
                            if(predCell == 0 || predCell == 1)
                            {
                                entities[i].setPredCell(predCell);
                            }
                            else
                            {
                                  //entities[i].setPredCell(0);
                            }
                            if(grid.getCelValue(tempPosition[0],tempPosition[1]) == 4)
                            {
                                play = 3;
                            }
                            grid.setCelValue(tempPosition[0], tempPosition[1], entities[i].getId());
                        }
                        
                        entities[i].setPosition(tempPosition[0],tempPosition[1]);
                        
                    }
                    else
                    {
                            
                    }
                   
                }
            }
            if(entities[i].getType() == "ghost") // start a new calculation of the IA
             {
                entities[i].iA(this);
             }
        }
        this.refresh();
        return play;
    }

     /*************************
     *vectorUserToPosition(speedVector, actualPosition)
     *return the new position after apply the speed vector
     *argument :
     *speedVector : speedVector to apply
     *actualPosition : current position
     *return :
     *the position after apply the speed vector
     *************************/
    this.vectorUserToPosition = function(speedVector, actualPosition)
    {
        var newPosition = new Array(0,0);
        if(speedVector == HAUT)
        {
            newPosition[0] = actualPosition[0]-1;
            newPosition[1] = actualPosition[1];
            return newPosition;
        }
        else if(speedVector == BAS)
        {
            newPosition[0] = actualPosition[0]+ 1;
            newPosition[1] = actualPosition[1];
            return newPosition;
        }
        else if(speedVector == GAUCHE)
        {
            newPosition[0] = actualPosition[0];
            newPosition[1] = actualPosition[1]- 1;
            return newPosition;
        }
        else if(speedVector == DROITE)
        {
            newPosition[0] = actualPosition[0];
            newPosition[1] = actualPosition[1]+ 1;
            return newPosition;
        }
        return undefined;
    };

     /*************************
     *searchPosPacman()
     *return the index of the pacman in the entities array
     *return :
     *index of the pacman
     *************************/
    this.searchPosPacman = function()
    {
        var entities = this.getEntities();
        var i = 0;
        var found = false;
        while (i < entities.length && found == false)
        {
           if(entities[i].getType() == "pacman")
           {
                found = true;
           }
           else
           {
                i++;
           }

        }
        if(found == false)
        {
            return undefined;
        }
        else
        {
               return i;
        }
    }

     /*************************
     *searchIndexWithId(id)
     *return the index of the entitie with the id : id in the entites array
     *argument :
     *id : id of this entitie
     *return :
     *index of the entitie with the id : id
     *************************/
    this.searchIndexWithId = function(id)
    {
         var entities = this.getEntities();
        var i = 0;
        var found = false;
        while (i < entities.length && found == false)
        {
           if(entities[i].getId() == id)
           {
                found = true;
           }
           else
           {
                i++;
           }

        }
        if(found == false)
        {
            return undefined;
        }
        else
        {
               return i;
        }
    }
}

/*********************************************
 * Wall class
 * this class represent the wall of the map
 *******************************************/
function Wall(row1,col1,row2,col2)
{
    if(typeof(row1) != "number")
    {
        throw new Exception("row1 isn't a number", "Wall Constructor");
    }
    if(typeof(col1) != "number")
    {
        throw new Exception("col1 isn't a number", "Wall Constructor");
    }
    if(typeof(row2) != "number")
    {
        throw new Exception("row2 isn't a number", "Wall Constructor");
    }
    if(typeof(col2) != "number")
    {
        throw new Exception("col2 isn't a number", "Wall Constructor");
    }
    //var postionX;
    //var positionY;
    var case1 = new Array(row1,col1);
    var case2 = new Array(row2,col2);

    this.getCase1 = function()
    {
        return case1;
    }
    this.getCase2 = function()
    {
        return case2;
    }
}

/*********************************************
 * Grid class
 * this class is the grid of the game, she encapsulate and treat a graph
 *******************************************/
function Grid()
{
    var graph = undefined;

 /*********************************************
 * connectAll()
 * this fonction create all edge of the graph
 *******************************************/
    var connectAll = function()
    {
        for(var i = 1; i<=ROWS; i++)
        {
            for(var j = 1; j <=COLUMNS; j++)
            {
                if(j+1 <= COLUMNS)
                {
                    graph.addEdge((i-1) * (COLUMNS) + j, (i-1) * (COLUMNS) + (j+1));
                }
                if(i < ROWS)
                {
                    graph.addEdge((i-1) * (COLUMNS) + j, (i) * (COLUMNS) + j);
                }
            }
        }
        graph.show();
    }

 /*********************************************
 * InitGrid()
 * this fonction init the grid with the creation the graph with the size we want
 *******************************************/
    this.InitGrid = function()
    {
        graph = new Graph(false,false);
        for(var i=1; i<= ROWS * COLUMNS; i++)
        {
            graph.addNode(i, 1);
        
        }
        connectAll();
    
    }

    this.toQueryString = function()
    {
        return graph.toQueryString();
    }

/*********************************************
 * getCelValue(row,col)
 * this fonction get the value of the cell(row,col)
 * argument :
 * row : number of row
 * col : number of column
 *******************************************/
    this.getCelValue = function(row,col)
    {
        if(typeof(row) != "number")
        {
            throw new Exception("row isn't a number", "getCelValue");
        }
        if(typeof(col) != "number")
        {
            throw new Exception("row isn't a number", "getCelValue");
        }
        if(row < 1)
        {
            throw new Exception("row is too small", "getCelValue");
        }
        if(row > ROWS)
        {
            throw new Exception("row is too large", "getCelValue");
        }
        if(col < 1)
        {
            throw new Exception("col is too small", "getCelValue");
        }
        if(col > COLUMNS)
        {
            throw new Exception("col is too large", "getCelValue");
        }
        try
        {
            return graph.getNodeValue((row-1) * (COLUMNS) + col);
        }
        catch(e)
        {
            throw new Exception("impossible to get the value of this cel","getCelValue", e);
        }
    }
/*********************************************
 * setCelValue(row, col, val)
 * this fonction set the value val in the cell(row,col)
 * argument :
 * row : number of row
 * col : number of column
 * val : value we want
 *******************************************/
    this.setCelValue = function(row,col, val)
    {
        if(typeof(row) != "number")
        {
            throw new Exception("row isn't a number", "setCelValue");
        }
        if(typeof(col) != "number")
        {
            throw new Exception("row isn't a number", "setCelValue");
        }
        if(row < 1)
        {
            throw new Exception("row is too small", "setCelValue");
        }
        if(row > ROWS)
        {
            throw new Exception("row is too large", "setCelValue");
        }
        if(col < 1)
        {
            throw new Exception("col is too small", "setCelValue");
        }
        if(col > COLUMNS)
        {
            throw new Exception("col is too large", "setCelValue");
        }
        try
        {
            graph.setNodeValue((row-1) * (COLUMNS) + col, val);
        
        }
        catch(e)
        {
            throw new Exception("impossible to set the value of this cel","setCelValue", e);
        }
    }

/*********************************************
 * ConvertGraphToString()
 * this fonction convert the graph in a QueryString
 * return :
 * string : querystring of the graph
 *******************************************/
    this.ConvertGraphToString = function()
    {
        var string = graph.toQueryString();
        return string;
    }

/*********************************************
 * AddWall(wall)
 * this fonction insert a wall into the grid
 * argument :
 * wall : wall we want add to this grid
 *******************************************/
    this.AddWall = function(wall)
    {
        var start = (wall.getCase1()[0]-1) * (COLUMNS) + wall.getCase1()[1];
        var arrive = (wall.getCase2()[0]-1) * (COLUMNS) + wall.getCase2()[1];
        if(graph.edgeExist(start, arrive))
        {
            graph.removeEdge(start, arrive);
        }
        else
        {
            throw new Exception("wall already exist","AddWall");
        }
    }
/*********************************************
 * ValidMove(row1,col1,row2,col2)
 * this fonction check if this movement is available
 * argument :
 * row1, col1 : position of the first cell
 * row2, col2 : position of the second cell
 *******************************************/
    this.ValidMove = function(row1,col1,row2,col2)
    {
        //Exception a tester
        var nodeSrc = (row1-1)* COLUMNS + col1;
        var nodeDest = (row2-1)* COLUMNS + col2;
        if (nodeSrc != -1)
        {
            try
            {
                return graph.edgeExist(nodeSrc,nodeDest);

            }
            catch(e)
            {
            }
        }
        return true;
    }
//    this.graphShow = function()
//    {
//        return graph.show();
//    }

//    this.show = function()
//    {
//        var string = "";
//        for(var i = 1; i <= ROWS; i++)
//        {
//            string += "|";
//            for(var j =1; j <= COLUMNS; j++)
//            {
//                string += this.getCelValue(i, j);
//                var caseS1 = new Array(i,j);
//                if(j+1 <= COLUMNS)
//                {
//                    var caseD1 = new Array(i+1, j);
//                }
//                else
//                {
//                    var caseD1 = undefined;
//                }
//
//                var caseD2 = new Array(i,j+1);
//
//            }
//        }
//    }
/*********************************************
 * posToNode(row,col)
 * this fonction return the node id which is in the cell(row,col)
 * argument :
 * row,col : position of the cell
 * return :
 * the id of the node we want
 *******************************************/
    this.posToNode = function(row,col)
    {
        return (row-1)*COLUMNS + col;
    }

}


/*********************************************
 * Entities class
 * this class is the mother class of all animate Entitie
 *******************************************/
function Entities(Type, Id)
{
    
    var color = undefined;
    var position = new Array(0,0);
    var predPosition = new Array(0,0);
    var speedVector;
    var newSpeedVector;
    var alive = true;
    var type = Type;
    var id = Id;

/*********************************************
 * getPosition()
 * return the position of the entitie
 *******************************************/
    this.getPosition = function()
    {
        return position;
    }

/*********************************************
 * setPosition(row,col)
 * set the position of the entitie
 *******************************************/
    this.setPosition = function(row,col)
    {
        position[0] = row;
        position[1] = col;
    }

/*********************************************
 * getNextPosition()
 * return the next position of the entitie
 *******************************************/
    this.getPredPosition = function()
    {
        return predPosition;
    }

/*********************************************
 * setNextPosition()
 * set the next position of the entitie
 *******************************************/
    this.setPredPosition = function(row,col)
    {
        predPosition[0] = row;
        predPosition[1] = col;
    }

/*********************************************
 * getSpeed()
 * return the speed vector of the entitie
 *******************************************/
    this.getSpeed = function()
    {
        return speedVector;
    }
/*********************************************
 * setSpeed()
 * set the speed vector of the entitie
 * argument :
 * SpeedVector : this is an int between 1 and 4 to indicate the direction of the entitie
 *******************************************/
    this.setSpeed = function(SpeedVector)
    {
        speedVector = SpeedVector;
    }

/*********************************************
 * setSpeed()
 * set the next speed vector of the entitie
 * argument :
 * SpeedVector : this is an int between 1 and 4 to indicate the direction of the entitie,
 *******************************************/
    this.setNewSpeedVector = function(SpeedVector)
    {
        newSpeedVector = SpeedVector;
    }

/*********************************************
 * getNewSpeedVector()
 * return the next speed vector of the entitie
 *******************************************/
    this.getNewSpeedVector = function()
    {
        return newSpeedVector;
    }
/*********************************************
 * getAlive()
 * check if the entitie is alive
 *******************************************/
    this.getAlive =function()
    {
        return alive;
    }
/*********************************************
 * setAlive()
 * set if the entitie is alive or not
 *******************************************/
    this.setAlive = function(alive)
    {
        alive = alive;
    }
/*********************************************
 * getColor()
 * return the color of the entitie (unuse for the moment)
 *******************************************/
    this.getColor  = function()
    {
        return color;
    }
/*********************************************
 * setColor()
 * set the color of the entitie (unuse for the moment)
 *******************************************/
    this.setcolor = function(newcolor)
    {
        color = newcolor;
    }

/*********************************************
 * getType()
 * return the type of the entitie
 *******************************************/
    this.getType = function()
    {
        return type;
    }
/*********************************************
 * getId()
 * return the id of the entitie
 *******************************************/
    this.getId = function()
    {
        return id;
    }
}

function Pacman(row,col,speedVector)
{

   
    if(!(typeof(row) == "number"))
    {
        throw new Exception("bad x position", "Pacman Constructor");
    }
    if(!(typeof(col) == "number"))
    {
        throw new Exception("bad y position", "Pacman Constructor");
    }
    this.objectConst = Entities;
    this.objectConst("pacman", 4);
    this.setPosition(row, col);
    this.setSpeed(speedVector);
    var open = false;
    var speedVectorUser;
    var nbGome = 1;




    this.getSpeedVectorUser = function()
    {
        return speedVectorUser;
        
    }

    this.setSpeedVectorUser = function(SpeedVector)
    {
        speedVectorUser = SpeedVector;
    }
/*********************************************
 * getNbGome()
 * return the number of the gome eat by the pacman
 *******************************************/
    this.getNbGome = function()
    {
        return nbGome;
    }

    this.incrementNbGome = function()
    {
        nbGome++;
    }
/*********************************************
 * setOpen()
 * set if the mouse of the pacman is open or not
 *******************************************/
    this.setOpen = function(op)
    {
        open = op;
    }
/*********************************************
 * getOpen()
 * check if the mouse of the pacman is open or not
 *******************************************/
    this.getOpen = function()
    {
        return open;
    }

    
}

function Ghost(id,row,col)
{
    var predCell = 1;
    var localSolution = 2;
    var dijkstraSolution = undefined;
    var numDijkstraRef = id * 1000;
    var numDijkstra = id * 1000;
    this.objectConst = Entities;
    this.objectConst("ghost", id);
    this.setPosition(row, col);
    this.setNewSpeedVector(DROITE);
    //this.requester = getRequester();

    this.incrementNumDijkstraRef = function()
    {
        numDijkstraRef++;
    }
    this.getNumDijkstraRef = function()
    {
        return numDijkstraRef;
    }

    this.incrementNumDijkstra = function()
    {
        numDijkstra++;
    }

    this.getNumDijkstra = function()
    {
        return numDijkstra;
    }

/*********************************************
 * iA(model)
 * this is the first function of the AI of the ghost, she throw the localAI and check if the Server and dijkstra is enabled
 * and if these are enabled she throw the dijkstra ia
 * argument :
 * model : reference on the current model
 *******************************************/
    this.iA = function(model)
    {
        localSolution = localIA();
        if(ENABLED_SERVER && ENABLED_DIJKSTRA)
        {
            DijkstraIA(model);
        }
        //this.setNewSpeedVector(solution);

    }
/*********************************************
 * localiA()
 * this function return the solution of the local IA
 *******************************************/
    var localIA = function()
    {
        return Math.floor(Math.random() * 4)+1;
        //return DROITE;
    }
/*********************************************
 * DijkstraIA(model)
 * this is a function of the AI of the ghost, she get the nextPosition of the pacman,
 * search the position of the current entite and call the ajax method who is responsible to send the request to the server
 * and if these are enabled she throw the dijkstra ia
 * argument :
 * model : reference on the current model
 *******************************************/
    var DijkstraIA = function(model)
    {
        //call the serveur, and treat the server solution
        var indexPac = model.searchPosPacman()
        var posPac = model.getEntities()[indexPac].getPosition()
        var nextPosition = model.vectorUserToPosition(model.getEntities()[indexPac].getSpeed(), posPac);
        var goal;
        if(model.getGrid().ValidMove(posPac[0],posPac[1],nextPosition[0],nextPosition[1]))
        {
            goal = model.getGrid().posToNode(nextPosition[0], nextPosition[1]);
        }
        else
        {
            goal = model.getGrid().posToNode(posPac[0], posPac[1]);
        }
        var pos = model.getEntities()[model.searchIndexWithId(id)].getPosition();
        var start = model.getGrid().posToNode(pos[0], pos[1]);
        model.getEntities()[model.searchIndexWithId(id)].incrementNumDijkstraRef();
        model.getAjax().throwDijkstra(start, goal,model.getEntities()[model.searchIndexWithId(id)]);
    }

/*********************************************
 * finalSolution()
 * this function check the two solution of ia (localAI, dijkstra) and check the best solution before the function move apply the solution
 *******************************************/
    this.finalSolution = function(model)
    {
        console.log("ghost : " + this.getId())
        var result = attrackIA(model);
        if(!result)
        {
            if(this.getDijkstraSolution() == undefined || (this.getNumDijkstra() != this.getNumDijkstraRef()) )
            {
                this.setNewSpeedVector(localSolution);
                 console.log("ghost :" + this.getId() + " local");
            }
            else
            {
                //var string = this.getDijkstraSolution();
            try
            {

                    //var path = eval("(" + string + ")");
                    var speedVector = pathToSpeedVector(this.getDijkstraSolution());
                    var nextPosition = model.vectorUserToPosition(speedVector, this.getPosition());
                    if(model.getGrid().getCelValue(nextPosition[0], nextPosition[1]) > 4)
                    {
                        //this.setNewSpeedVector(localSolution);
                    }
                    else
                    {
                        this.setNewSpeedVector(speedVector);
                    }
                    console.log("ghost :" + this.getId() + " ia dijkstra");
            }
            catch(e)
            {
                this.setNewSpeedVector(localSolution);
                console.log("ghost :" + this.getId() + " local");
            }
           
            }
            numDijkstra = numDijkstraRef;
            localSolution = undefined;
            dijkstraSolution = undefined;
        }
        else
        {
           this.setNewSpeedVector(result);
           console.log("ghost :" + this.getId() + " local");
        }
    }

    var pathToSpeedVector = function(path)
    {
        if(path.nodes[1] == path.nodes[0] + 1)
        {
            return DROITE;
        }
        else if(path.nodes[1] == path.nodes[0] - 1)
        {
            return GAUCHE;
        }
        else if(path.nodes[1] == path.nodes[0] - COLUMNS)
        {
            return HAUT;
        }
        else if(path.nodes[1] == path.nodes[0] + COLUMNS)
        {
            return BAS
        }
        else
        {
            return DROITE;
        }
    }
    var attrackIA = function(model)
    {
        var indexPac = model.searchPosPacman();
        var posPac = model.getEntities()[indexPac].getPosition();
        var pos = model.getEntities()[model.searchIndexWithId(id)].getPosition();
        if(pos[0] == posPac[0])
        {
            if(pos[1] == posPac[1] -1)
            {
               if(model.getGrid().ValidMove(pos[0],pos[1],posPac[0], posPac[1]))
               {
                return DROITE;
               }
               return 0;
            }
            else if(pos[1] == posPac[1] +1)
            {
               if(model.getGrid().ValidMove(pos[0],pos[1],posPac[0], posPac[1]))
               {
                return GAUCHE;
               }
                return 0;
            }
            else
            {
                return 0;
            }
        }
        else if(pos[1] == posPac[1])
        {
            if(pos[0] == posPac[0] -1)
            {
               if(model.getGrid().ValidMove(pos[0],pos[1],posPac[0], posPac[1]))
               {
                    return BAS;
               }
               return 0;
            }
            else if(pos[0] == posPac[0] +1)
            {
               if(model.getGrid().ValidMove(pos[0],pos[1],posPac[0], posPac[1]))
               {
                  return HAUT;
               }
            }
            else
            {
                return 0;
            }
        }
        return 0;
    }
    
    this.getPredCell = function()
    {
        return predCell;
    }

    this.setPredCell = function(pC)
    {
        predCell = pC;
    }
    this.setDijkstraSolution = function(solution)
    {
        dijkstraSolution = solution;
    }
    this.getDijkstraSolution = function()
    {
        return dijkstraSolution;
    }
}


function Gomme(ray,color)
{
    this.objectConst = Entities;
    this.objectConst(color,0);

    var ray = ray;
}

//function getRequester(){
//
//	try{
//		return new ActiveXObject("Msxml2.XMLHTTP");
//	} catch(e) {}
//
//	try{
//		return new ActiveXObject("Microsoft.XMLHTTP");
//	} catch(e) {}
//
//	try{
//		return new XMLHttpRequest();
//	} catch(e) {}
//
//	return undefined;
//    }
