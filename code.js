
/* 1. Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program
 */

function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
console.log(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

/*  1a. Inner Function is a closure, as it sends all required data/ variables with the function call. It sends all required
data to run that Fucntion

     1b. 100
*/


/*    2. What is the difference between a closure and a scope ?

   In programming scope means , accessability of a variable . we can define variables in 2 ways .
    Globlal declaration 
    Local Declaration.
    when you define variables outside main function or outside {} curly braces , they said to be as global scope. we can access 
    them from anypart of our program .But this is not a real time helpful ,it leads to too many name collisions and if you use 
    var data type ,your second data overrides the primary data.
    when varibles within {} is said to be local . You cannot use them outside this {}.
    accessibility of variables is called scope.
    
    When you have fucntion within a function and the inner function needs to access the data members of the outer function .
    Generally this is not possible . But closure supports .Inner function can access all outer function varaibles but not vice 
    versa . Here Inner function is "closure". 

*/



/* 

3. What is a lexical scope and how is it related to closure ?


   Basically a childeren scope has every access to its parents scope , this concpet is called " Lexical scope".
    even closure deals with the same , inner function(child) can access outer function(parent).

*/

for (var i = 0; i < 3; i++) {
     setTimeout(function log() {
     console.log(i); // What is logged?
     }, 1000);
     }

     /*  
     Here fucntion is an asynchronous function and it is delayed by 1000ms . whenever it tried to print i value , delay 
     isnt over it perfoming another task that is incrementing i value. 
     it increased i value to 3 before the day and i value prints 3 times after the delay.
     
     */