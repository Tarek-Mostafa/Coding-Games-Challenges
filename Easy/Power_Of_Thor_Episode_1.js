/**
 * Problem link -> https://www.codingame.com/training/easy/power-of-thor-episode-1
 * 
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 *
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialX = parseInt(inputs[2]); // Thor's starting X position
var initialY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    var directionX = "";
    var directionY = "";
    
    // LightX
    if(lightX > initialX) {
        directionX ='E';
        initialX++;
    }
    
    else if (lightX < initialX) {
        directionX = 'W';
        initialX--;
    }
    
    // LightY
    if(lightY > initialY) {
        directionY = 'S';
        initialY++;
    }
    
    else if(lightY < initialY) {
        directionY = 'N';
        initialY--;
    }
     
    print(directionY + directionX);
}
