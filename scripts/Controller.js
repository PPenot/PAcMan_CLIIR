//constant
KEY_DOWN	= 40;
KEY_UP          = 38;
KEY_LEFT	= 37;
KEY_RIGHT	= 39;
KEY_SPACE	= 32;

/*********************************************
 * Animation class
 * this class is responsible of the animation of the game
 *******************************************/
function Animation(step, m){
    var timestep = step;
    var running;
    var model = m;
 /*********************************************
 * start()
 * this function start the animation of the game
 *******************************************/
    this.start = function(){
        this.running = true;
        this.step();
    }
/*********************************************
 * step()
 * this function is call each tick time and throw the next setTimeOut
 *******************************************/
    this.step = function(){
        if(this.running){

            var encapsulate = function(object){
                var encapsulated = object;

                var run = function(){
                    encapsulated.tick();
                }

                return run;
            }
            

            var torun = encapsulate(this);

            window.setTimeout( torun, timestep*DT);
            //var play = model.move();
            //if(play != 1)
            //{
            //    this.stop(play);
            //}
        }
        else
        {
            //alert("gagner");
            //reInit(grid);
        }
    }
 /*********************************************
 * stop()
 * this function stop the animation of the game and the game
 * argument :
 * cause : cause of the finish of the game
 *******************************************/
    this.stop = function(cause){
        this.running = false;
        model.getAjax().removeGraph();
        if(cause == 2)
        {
            alert("You Win !!");
        }
        else if(cause == 3)
        {
            alert("You Loose !!!");
        }
        else
        {
            alert("Bug !!!");
        }
        
    }
/*********************************************
 * tick()
 * this function is call each tick time
 * she call the function move of the model which is responsible to refresh the game
 *******************************************/
    this.tick = function(){
        var play = model.move();// updates the model
        //$("#game").trigger("update",entitie);
        //console.log("tick");
        if(play == 1)
        {
            this.step();
        }
        else
        {
            this.stop(play);
        }
    }

    this.searchPosPacman = function()
    {
        var entities = model.getEntities();
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
    //this.start();
/*********************************************
 * this function listen the keyboard event and update the newSpeedVector of the pacman
 *******************************************/
    $(document).keydown(function (event)
        {
            var pac;
            var i = 0;
            var found = false;
            var array = model.getEntities();
            while (i < array.length && found == false)
            {
                if(array[i].getType() == "pacman")
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
                pac =  undefined;
            }
            else
            {
                pac = i;
            }
            if(pac ==undefined)
            {
                return;
            }

            if(event.keyCode == KEY_DOWN)
            {
                //model.getEntities[pac].setSpeed(BAS);
                array[pac].setNewSpeedVector(BAS);
            }
            else if(event.keyCode == KEY_UP)
            {
                //model.getEntities[pac].setSpeed(HAUT);
                array[pac].setNewSpeedVector(HAUT);
            }
            else if(event.keyCode == KEY_LEFT)
            {
                //model.getEntities[pac].setSpeed(GAUCHE);
                array[pac].setNewSpeedVector(GAUCHE);
            }
            else if(event.keyCode == KEY_RIGHT)
            {
                //model.getEntities[pac].setSpeed(DROITE);
                array[pac].setNewSpeedVector(DROITE);
            }
        });
    
}
/*
model stocke nb de gomme
try catch envoie de requete
bool verifier si serveur pour envooie requete sinon appliquer strat local
*/
