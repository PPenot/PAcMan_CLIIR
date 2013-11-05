
/*********************************************
 * GraphicalView class
 * this class is the view of the game
 *******************************************/
function GraphicalView ()
{
    var canvas = "canevas";
    document.getElementById("game").innerHTML = "<div id=canvas><canvas id=" +canvas +" width=" +WIDTH +" height="+HEIGHT +"></canvas></div>";
    canvas = document.getElementById(canvas);
    var offsetC = WIDTH/COLUMNS;
    var offsetR = HEIGHT/ROWS;
    var image;
    var imageNode;
    

    var ctx = canvas.getContext("2d");
/*********************************************
 * drawBackground(grid)
 * this function draw the background of the game : grid and wall
 * argument :
 * grid : grid of the game
 *******************************************/
    this.drawBackground = function(grid){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect (0, 0, WIDTH, HEIGHT);
        ctx.strokeRect(0, 0, WIDTH, HEIGHT);

        //ctx.drawImage(imageNode, 0, 0);
        ctx.fillStyle = "rgb(124,134,134)";
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        for(var i= 0; i<= COLUMNS; i++)
        {
            ctx.moveTo(offsetC*i, 0);
            ctx.lineTo(offsetC*i, HEIGHT);
        }
        for(var i= 0; i<= ROWS; i++)
        {
            ctx.moveTo(0, offsetR*i);
            ctx.lineTo(WIDTH, offsetR*i);
        }
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 15;
        ctx.strokeStyle = "red";
        ctx.strokeRect(0, 0, WIDTH, HEIGHT);

        for(var i=1; i<= ROWS;i++)
        {
            for(var j=1; j<= COLUMNS;j++)
            {
                if(!grid.ValidMove(i,j,i,j+1))
                {
                    if(j != COLUMNS)
                    {
                        drawWall(i, j, i, j+1);
                    }
                }
                if(!grid.ValidMove(i,j, i+1,j))
                {
                    drawWall(i, j, i+1, j);
                }
            }
        }
        ctx.closePath();

    }
    
 /*********************************************
 * CreateImage(grid)
 * this function create the image of the background of the game : grid and wall
 * to use the buffering, to win time and fluidity
 * argument :
 * grid : grid of the game
 *******************************************/
    this.CreateImage = function(grid)
    {
        this.drawBackground(grid);
        image= canvas.toDataURL();
        imageNode = document.createElementNS("http://www.w3.org/2000/svg", "image")
        imageNode.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', image);
    //ctx.clearRect(0,0,WIDTH,HEIGHT);
    //setTimeout(function(){ctx.drawImage(imageNode, 0, 0);},10);
        
    }

    var drawPacman = function drawPacman(row,col,open,direct)
    {

        var cellh = HEIGHT / ROWS;
        var cellw = WIDTH / COLUMNS;

        var rotate //check the direction of pacman
        if (direct == 1)
        {
            rotate = 3;
        }
        else if(direct == 3)
        {
            rotate = 0;
        }
        else if(direct == 2)
        {
            rotate = 1;
        }
        else if(direct == 4)
        {
            rotate = 2;
        }
        var pacsize
        if(cellh<cellw)
            pacsize = cellh;
        else
            pacsize= cellw;

        if(open) //draw the pacman with an open mouse
        {      
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.arc(col * offsetC + offsetC/2 ,row * offsetR + offsetR/2,pacsize/2.3,Math.PI/4+rotate*(1*Math.PI/2),7*Math.PI/4+rotate*(1*Math.PI/2),false);
            ctx.lineTo(col * offsetC + offsetC/2 ,row * offsetR + offsetR/2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

        }
        else //draw the pacman with a close mouse
        {
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.arc(col * offsetC + offsetC/2 ,row * offsetR + offsetR/2,pacsize/2.3,0+rotate*(1*Math.PI/2),2*Math.PI+rotate*(1*Math.PI/2),false);
            ctx.lineTo(col * offsetC + offsetC/2 ,row * offsetR + offsetR/2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        
        }

    }
    
    
    
    
    
    



    var drawGhost = function drawGhost(row,col)
    {
        var ecart = 7;
        ctx.fillStyle = "pink";
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(col*offsetC+1/4*offsetC,row*offsetR+3/4*offsetR);
        ctx.bezierCurveTo(col*offsetC+1/3*offsetC,row*offsetR,col*offsetC+2/3*offsetC,row*offsetR,col*offsetC+3/4*offsetC,row*offsetR+3/4*offsetR);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
  


        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(col*offsetC+(offsetC/2+ecart),row*offsetR+2*offsetR/5,6,0,2*Math.PI,false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(col*offsetC+(offsetC/2-ecart),row*offsetR+2*offsetR/5,6,0,2*Math.PI,false);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    var drawGome = function(row, col)
    {
        ctx.strokeStyle = "red";
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(col * offsetC + offsetC/2 ,row * offsetR + offsetR/2, minSize()/8,0, 2*Math.PI, false);
        ctx.closePath();
        ctx.fill();
    }

    var drawWall = function(row1,col1,row2,col2)
    {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        if(row1 == row2 && (col1 == col2 -1))
        {
            ctx.moveTo(col1*offsetC, (row1-1)* offsetR);
            ctx.lineTo(col1*offsetC, row1* offsetR);
        }
        else if(col1 == col2 && row1 == (row2 -1))
        {
            ctx.moveTo((col1-1)*offsetC, row1* offsetR)
            ctx.lineTo(col1*offsetC, row1* offsetR);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.lineWidth = 1;

    }


 /*********************************************
 *update(grid, entities)
 * this function update the view in redrawing all the canvas : put the image and draw entitie
 * argument :
 * grid : grid of the game
 * entities : all entitie of the game (pacman and ghost)
 *******************************************/
    this.update = function(grid, entities)
    {
        var e =entities[0];
        ctx.clearRect(0,0,WIDTH,HEIGHT);

        // background drawing
        try{
            ctx.drawImage(imageNode, 0, 0);     // buffered drawing
        }
        catch(e){
            this.drawBackground(grid);                // non-buffered drawing
        }
        // entities drawing

        for(var i= 1; i <= ROWS; i++)
        {
            for(var j =1; j <= COLUMNS; j++)
            {
                if(grid.getCelValue(i, j) == 1)
                {
                    drawGome(i-1, j-1);
                }
                else if(grid.getCelValue(i, j) == 4)
                {
                    drawPacman(i-1,j-1, e.getOpen(),e.getSpeed());
                    
                }
                else if(grid.getCelValue(i, j) > 4)
                {
                    drawGhost(i-1,j-1);
                    
                }
            }
        }

    }

    var minSize = function()
    {
        if(offsetC > offsetR)
        {
            return offsetR;
        }
        else
        {
            return offsetC;
        }
    }
}

