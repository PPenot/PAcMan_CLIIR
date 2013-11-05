$(document).ready(function()
{
    // tool box init
    initTB();
    // changement reaction
    $("#apply").click(function()
    {
        ENABLED_DIJKSTRA = document.getElementById("Dijkstra").checked;
        //main();
    });

    $("#toolboxTitle").click(function(){
            appear();
            });

    $("#DT").change(function()
    {
        DT = document.getElementById("DT").value;
    }
    );

    $("#dijkstra").change(function()
    {
        ENABLED_DIJKSTRA = document.getElementById("Dijkstra").checked;
    }
    );

   $("#Start").click(function()
    {
        startGame();
    });
});

function appear()
{
	var object = "#toolboxElement";
	if($(object).is(":hidden"))
	{
		$(object).slideDown(2000);
	}
	else
	{
		$(object).slideUp(2000);
	}

}


function initTB()
{
   $("#toolboxElement").hide();
   $("#annonce").hide();
   document.getElementById("Dijkstra").checked = ENABLED_DIJKSTRA;
   document.getElementById("DT").value = DT;
   document.getElementById("Height").value = HEIGHT;
   document.getElementById("Width").value = WIDTH;
   document.getElementById("Rows").value = ROWS;
   document.getElementById("Cols").value = COLUMNS;
   document.getElementById("Ghosts").value = NB_GHOSTS;
   document.getElementById("DTC").value = DT;
   document.getElementById("DijkstraC").value = ENABLED_DIJKSTRA;
   document.getElementById("Serveur").value = ENABLED_SERVER;
}

function startGame()
{
    var height = document.getElementById("Height").value *1;
    var width = document.getElementById("Width").value * 1;
    var rows = document.getElementById("Rows").value * 1;
    var cols = document.getElementById("Cols").value *1;
    var nbGhosts = document.getElementById("Ghosts").value *1;
    var Dt = document.getElementById("DTC").value * 1;
    if(height != "" && typeof(height) == "number")
    {
        HEIGHT = Math.floor(height);
    }
    if(width != "" && typeof(width) == "number")
    {
        WIDTH = Math.floor(width);
    }
    if(rows != "" && typeof(rows) == "number")
    {
        ROWS = Math.floor(rows);
    }
    if(cols != "" && typeof(cols) == "number")
    {
        COLUMNS = Math.floor(cols);
    }
    if(nbGhosts != "" && typeof(nbGhosts) == "number")
    {
        NB_GHOSTS = Math.floor(nbGhosts);
    }
    if(Dt != "" && typeof(Dt) == "number")
    {
        DT = Dt;
    }
    ENABLED_SERVER = document.getElementById("Serveur").checked;
    ENABLED_DIJKSTRA = document.getElementById("DijkstraC").checked;
    $("#configElement").slideUp(2000);
    $("#annonce").show();
    main();


}





