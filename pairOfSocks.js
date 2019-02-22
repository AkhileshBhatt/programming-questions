/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing 
the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are 7 socks with colors socks = [1,2,1,2,13,,2]. There is one pair of color 1 and one of color 2. There are three odd 
socks left, one of each color. The number of pairs is 2.

Full Description of problem is at Hackerrank:
https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

    Logic Used:
        - First sort the array/socks
        - Starting from first sock, keep checking it with next one(n+1th position)
            - If both the socks match
                - Bingooo.. you have found a pair. Add one to the count of Pair of socks and..
                - Move to the socks next to the matched one(n+2th position)
*/

// "n" is number of socks, "ar" is carton/pile of socks
function sockMerchant(n, ar) {

    const sortedArrayOfSocks = ar.sort();   // sorting the given socks
    let pairOfSocks = 0;                    

    // Pick first sock in your left hand
    for (let leftHandSock = 0; leftHandSock < sortedArrayOfSocks.length; leftHandSock++) {   

        // Pick second sock right hand
        for (let rightHandSock = leftHandSock + 1; rightHandSock < sortedArrayOfSocks.length; rightHandSock++) { 

            // Check -- Are they both same?
            if (sortedArrayOfSocks[leftHandSock] === sortedArrayOfSocks[rightHandSock]) {     
                // Yes they are!!!
                pairOfSocks++;                    // yeeeee. you have found a pair, so put them aside(add counter)
                leftHandSock = rightHandSock + 1; // And.. Now pick next sock in queue in your left hand
                rightHandSock = leftHandSock;     // and.. here we are giving right hand the same sock as left >>> coz second loop will 
                                                  // take care of rightHandSock++ or assigning sock to the right hand
                
            }
        }
    }
    return pairOfSocks;

}
