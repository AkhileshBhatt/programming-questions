/* 
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he
took exactly "n" steps. For every step he took, he noted if it was an uphill, "U", or a downhill, "D" step. Gary's hikes start and end at sea level 
and each step up or down represents a "1" unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to 
sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to 
sea level.
Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

For example, if Gary's path is s= [DDUUUUDD], he first enters a valley 2 units deep. Then he climbs out an up onto a mountain 2 units 
high. Finally, he returns to sea level and ends his hike.

Full Description of problem is at Hackerrank:
https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

    Logic Used:  Consider uphill step = 1, and downhill = -1, so sea level will be 0
            - Initial level is 0(sea level) now for each step:
                - Keep adding the value +1 or -1 to the level, according to step taken(uphill or downhill)
                    - If after addition sea level reaches "First Negative value"
                        - Bingoo... We have entered one valley, so add to the valleyCount
                        - Also set a flag enteredValley to true, so that we do not add to valleyCount before we reach the sea level first.
                          As a valley will start from sea level only(subsquent negative values of sea level indicates the depth of Valley).
                          Once we hit sea level set the enteredValley flag to false.
                          
*/

// n is number of steps, s is the hike consisting of all the steps.
function countingValleys(n, s) {

    // Variables required
    let seaLevel = 0;
    let valleyCount = 0;
    let enteredValley = false;
    let stepValue = 0;

    // for loop to trace each step
    for (let step = 0; step < s.length; step++) {

        // checking the step was uphill or downhill
        if (s[step] === 'U') {          
            stepValue = 1;
        } else if (s[step] === 'D') {
            stepValue = -1;
        }

        // Changing value of seaLevel according to the step taken/value
        seaLevel = seaLevel + stepValue;    

        // If seaLevel is negative and enteredVally flag is false
        if (seaLevel < 0 && enteredValley == false) {
            console.log("Entering a valley.....")

            valleyCount++;          // We have entered the valley
            enteredValley = true;   // Set enteredValley flag to true to avoid confusing depth 
                                    // of valley with valleyCount
        } else if (seaLevel === 0) {    // If reached seaLevel 
            console.log("Reached back to the Sea level.....");
            enteredValley = false;  // reset the enteredValley flag as Gary is now out of valley
        }
    }
    return valleyCount;
}
