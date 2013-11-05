$(document).init(function()
{
    //beforeStart();
    //main();
});

function main()
{
    var grid = new Grid();
    var view =  new GraphicalView(grid);
    //view.CreateImage();
    //var ajx = new Ajx();
    var model = new Model();
    model.init();
    var pac = new Pacman(2,2, BAS);
    model.addEntitie(pac);
    for(var i= 0; i< NB_GHOSTS; i++) // this loop place in a ramdom position the ghosts
    {
            Position = randomPosition();
            model.addEntitie(new Ghost(5 + i, Position[0], Position[1]));//dans notre table d'entité les id des fantome commence a 5
    }
    //model.addEntitie(new Ghost(5, 8, 8));
    //model.addEntitie(g1);
    
    //model.addEntitie(g1)
    model.addView(view);
   model.refresh();
   var animation = new Animation(1000*DT, model);
   animation.start();
   //reInit(grid,model);
   


}

function reInit(grid, model)
{
   model.init();
   //model.addView(view);
   model.refresh();
   var pac = new Pacman(2,2, BAS);

   var animation = new Animation(1000*DT,pac,grid, model);
   animation.start();
}

function beforeStart()
{
     var canvas = "canevas";
    document.getElementById("game").innerHTML = "<div id=canvas><canvas id=" +canvas +" width=" +WIDTH +" height="+HEIGHT +"></canvas></div>";
    canvas = document.getElementById(canvas);
    var ctx = canvas.getContext("2d");
    //ctx.beginPath();
    //ctx.strokeStyle = "red";
    //    ctx.fillStyle = "red";
        //ctx.fillRect (0, 0, WIDTH, HEIGHT);
    //    ctx.mozDrawText("Exemple de texte");
        //ctx.stroke();
        ctx.mozTextStyle = "20pt Arial";
ctx.fillStyle = "Yellow";
var text = "Loading";
var len = ctx.mozMeasureText(text);
ctx.translate((WIDTH - len)/2, HEIGHT/2);
ctx.mozDrawText(text);

}


