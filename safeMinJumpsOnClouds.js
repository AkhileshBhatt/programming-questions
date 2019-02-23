/* 
Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are 
cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid 
the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is
always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example, c=[0,1,0,0,0,1,0]
indexed from 0...6. 
The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. She could follow the following two 
paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first path takes 3 jumps while the second takes 4. So our result should be 3.

Full Description of problem is at Hackerrank:
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

    Logic Used:
        - Starting from first position till end keep doing follwing check
        
        === Movement Check ===
        - Check is next postion "Bomb" 
            > If yes jump 2 steps
        - Check is position next to the next is "Non Bomb"
            > If yes jump 2 steps(This will reduce the count of jumps)

        === Last step/jump check ===
        - Check have we reached second last step or the third last step
            > If yes, jump two steps and exit(You have reached the last spot safely)
            
*/

function jumpingOnClouds(c) {

    let numberOfJumps = 0;

    // Loop to take steps/jumps. 
    for (let stepNumber = 0; stepNumber < c.length; stepNumber++) {    

        // Check have we reached second/third last position 
        // If yes add one more jump and exit the loop
        if (stepNumber === c.length - 2 || stepNumber === c.length - 3 ) {
            console.log("Reached Second/Third last step. One more jump and Exit!!!");
            numberOfJumps++;
            break;  // to exit the loop
        } 

        // Take a jump. Below If statement will determine the steps covered in this jump.
        numberOfJumps++; 

        // If next step is Bomb OR step next to the next is safe >> Jump two steps
        if (c[stepNumber + 2] === 0 || c[stepNumber + 1] === 1) {
            
            // Add one step here, loops stepNumber++ will add one more. Total steps in jump = 2
            stepNumber++;    
        }
    }

   return numberOfJumps;
}
