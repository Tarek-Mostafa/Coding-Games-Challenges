/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526
var tempsArr = temps.split(" ");

function nearestZero(arr) {

    var min;    // Number to be returned

    arr.sort(function (a, b) {
        return b - a;
    });

    for(var i = 0, n = arr.length; i < n; i++) {
    
        var firstItem = parseInt(arr[0]);
        var currentI = parseInt(arr[i]);
        
        for(var j = 0; j < arr.length; j++) {
            
            var currentJ = parseInt(arr[j]);
            
            // Only get the positive nearest number to zero
            // Regardless whether there are negative number in the array or not
            if(currentJ < currentI && currentJ > 0) { min = currentJ; } 
                
                else {
                // If all numbers in the array are negative only
                if(firstItem < 0) {
                    if(currentJ > firstItem) {
                        min = currentJ;
                    } 
                    else { min = firstItem; }
                }
            }
        }
    }

    if(!temps) {
        min = 0;
    }

    return min;
}


// Write an action using print()
// To debug: printErr('Debug messages...');
var tempreture = nearestZero(tempsArr);
print(tempreture);
