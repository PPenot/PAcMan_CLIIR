
 /*********************************************
 *randomPosition(grid, entities)
 * this function return an ramdom position
 *******************************************/
function randomPosition()
{
    var col = Math.ceil(Math.random() * COLUMNS);
    var row = Math.ceil(Math.random() * ROWS);
    var Position = new Array(row, col);
    return Position;

}


