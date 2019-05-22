/*
A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations 
are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a 
single line of space-separated integers.

Full Description of problem is at Hackerrank:
https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

    Logic Used:
        - Take out the initial elements corresponding to the value of rotation "d"
          from given array "d". Store them in a temp array "elementsToRotate"
        - Take remaining elements of given array "d" and put them in a new array "rotatedValues"
        - Concat/Add the first array "elementsToRotate" at the end of new aaray "rotatedValues"
          and return.

*/

// "a" is given array & "d" is left rotation value
function rotLeft(a, d) {

    // Required Variables
    var elementsToRotate = [];
    var rotatedValues = [];
    let i = 0;

    // Loop to pick the initial "d" elements from given array "a" and put in temp array "elementsToRotate"
    for ( i = 0; i < d; i++) {
        elementsToRotate.push(a[i]);
    }

    // Loop to copy remaining items from given array in temp array "rotatedValues"
    for (i = d; i < a.length; i++) {
        rotatedValues.push(a[i]);
    }

    // Returning the result of concating the rotatedValues array with elementsToRotate
    return (rotatedValues.concat(elementsToRotate));
}
