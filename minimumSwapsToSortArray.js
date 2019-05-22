/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed 
to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array arr = [7, 1, 3, 2, 4, 5, 6] we perform the following steps:

    i   arr                     swap (indices)
    0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
    1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
    2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
    3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
    4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
    5   [1, 2, 3, 4, 5, 6, 7]
It took 5 swaps to sort the array.

Full Description of problem is at Hackerrank:
https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

    Logic Used:
        - Loop throught the given array "arr" and check whether
            - the index value is equal to the correct value(index+1 > as array starts from 0)
                - If yes.. continue
                - Else, Loop through remaining items in the array to look for correct value
                - Once find replace them and add to the counter "swapCount"

*/

// "arr' is the given array
function minimumSwaps(arr) {

    // Variables required
    let tempVariableForSwap;
    let swapCount = 0;
    let i, j;

    // Looping thourgh the given array "arr"
    for (i = 0; i < arr.length; i++) {

        // Checking current value is equal to index+1(as array index starts at 0)
        if (arr[i] !== i + 1) {

            // When current value is not correct, looping thorugh rest of the array to find
            // correct value
            for (j = i; j < arr.length; j++) {

                // Finding correct value and swapping them
                // also adding the swap counter "swapCount"
                // also breaking out from current loop(j loop), once swap is complete
                if (arr[j] === i + 1) {

                    tempVariableForSwap = arr[j];
                    arr[j] = arr[i];
                    arr[i] = tempVariableForSwap;
                    swapCount++;
                    break;
                }
            }
        }
    }

    return swapCount;
}
