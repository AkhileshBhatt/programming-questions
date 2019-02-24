/*
Lilah has a string, "s" , of lowercase English letters that she repeated infinitely many times.

Given an integer, "n" , find and print the number of letter a's in the first "n" letters of Lilah's infinite string.

For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first 10 characters of her infinite string.
There are 4 occurrences of "a" in the finite substring.

Full Description of problem is at Hackerrank:
https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

    Logic Used:
                - Check occurrence of "a" in the given string "s"
                - Find out how many times the string "s" will be repeated to reach the finite 
                  string of length "n"
                - Multiply that value with occerence of "a" in the string "s"
                - Find the length of substring to be picked up from given string "s", which 
                  on adding will result in the finite string of length "n"
                - Find out occerence of "a" in this sbustring of "s"
*/

// "s" is the infinite string given. "n" is the length of finite string made up of infinite string "s"
function repeatedString(s, n) {

   // Variables required
    let occurrenceOfA = 0;
    let occurrenceTillLastString = 0;
    let remainingStringLength = 0;
    let i, j = 0;

    // Loop to find out occurrence of A in the given string
    for (j = 0; j < s.length; j++) {

        if (s[j] === 'a') {
            occurrenceOfA++;
        }
    }

    // Finding length of substring to be picked from given string "s" required to reach 
    // "n" finite length.
    remainingStringLength = n % s.length;

    // Finding how many times the string "s" gets repeated in finite string of length "n"
    // Math.floor is used to round down to nearest integer
    occurrenceTillLastString = Math.floor(n / s.length);

    // Finding occurence of "A" in the finite string
    // Addition of last substring and the count of 'a' in it will be added later 
    occurrenceOfA = occurrenceOfA * occurrenceTillLastString;

    // Loop to find out occurrence of "A" in last substring, to be addd in  the finite string
    // to make length of finite string equal to "n"
    for (let i = 0; i < remainingStringLength; i++) {

        if (s[i] === 'a') {
            occurrenceOfA++;
        }
    }
    return occurrenceOfA;
}
