# HW Assignment #3

### Problem 7.1

>The greatest common divisor (GCD) of two integers is the largest integer that evenly divides them both. For example, the GCD of 84 and 36 is 12, because 12 is the largest integer that evenly divides both 84 and 36. You can learn more about the GCD and the Euclidean algorithm, which you can find at en.wikipedia.org/wiki/Euclidean_algorithm. (Don't worry about the code if you can't understand it. Just focus on the comments.)(Hint: It should take you only a few seconds to fix these comments. Don't make a career out of it.)

```
// Use Euclid's algorithm to calculate the GCD.
private long GCD( long a, long b )
{
   // Get the absolute value of a and b
   a = Math.abs( a );
   b = Math.abs( b );

   //Repeat until we're done
   for( ; ; )
   {
      // Set remainder to the remainder of a / b
      long remainder = a % b;
      // If remainder is 0, we're done.  Return b.
      If( remainder == 0 ) return b;
      // Set a = b and b = remainder.
      a = b;
      b = remainder;
   };
}
```
The code above shows what it is supposed to do but it doesn't explain why it does it. There are some unnecessary comments. For explanation one should view the URL where you can find a description of the algorithm.

My Version of the same code above:

```
// Use Euclid's algorithm to calculate the GCD.
// See en.wikipedia.org/wiki/Euclidean_algorithm.
private long GCD (long a, long b){
  a = Math.Abs(a);
  b = Math.Abs(b);

  for (  ;  ; ){
    long remainder = a % b;
    if ( remainder  == 0 ){
      return b;
    }
    a = b;
    b = remainder;
  };
}
```
### Problem 7.2

>Under what two conditions might you end up with the bad comments shown in the previous code?

1. Top-Down design, where the code is described in agonizing detail.
2. Writing comments before writing code. After writing the code, it's easy to just say what each line of code does and not why it is doing it.


### Problem 7.4

>How could you apply offensive programming to the modified code you wrote for exercise 3? [Yes, I know that problem wasn't assigned, but if you take a look at it you can still do this exercise.]

The validation code written for Exercise 3 is already fairly offensive. It validates the inputs and the result, and the Debug.Assert method throws an exception if there is a problem.

### Problem 7.5

>Should you add error handling to the modified code you wrote for Exercise 4?

You actually want the calling code to handle any errors. If the code throws any exception, they are passed up to the calling code so that they can be handled there. In that case, you don't need to add error handling code here.


### Problem 7.6

>Using top-down design, write the highest level of instructions that you would use to tell someone how to drive your car to the nearest supermarket. (Keep it at a very high level.) List any assumptions you make.

|#| steps | description|
| --- | --- | --- |
| 1. | Find the car. | The car is parked outside of garage |
| 2. | Open the car. | Adjust seat, get comfortable. |
| 3. | Start the car. | There’s gas in the car. Check car dashboard. |
| 4. | Back out of the parking space. | Observe surroundings. |
| 5. | Turn to the right from the backed out space.| There’s nothing behind the car when you pull out. |
| 6. | Turn right. Drive until the street ends | You can safely drive when instructed. |
| 7. | Turn left. Merge onto one way road. | Slowly merge and accelerate appropriately to traffic speed|
| 8. | Turn left. Drive to the first stoplight. | There are empty parking spaces in the supermarket parking lot. |
| 9. | Turn right. Drive until you see the supermarket.| The supermarket is open.|
| 10. | Turn into the supermarket parking lot.| -- |
| 11. | Find an empty parking space and park in it.| -- |
| 12. | Stop the car and get out.| -- |
| 13. | Go buy all the cheese and wine.| -- |


### Problem 8.1

> Two integers are relatively prime (or coprime) if they have no common factors other than 1. For example, 21 = 3 X 7 and 35 = 5 X 7 are not relatively prime because they are both divisible by 7. By definition -1 and 1 are relatively prime to every integer, and they are the only numbers relatively prime to 0.
Suppose you've written an efficient IsRelativelyPrime method that takes two integers between -1 million and 1 million as parameters and returns true if they are relatively prime. Use either your favorite programming language or pseudocode (English that sort of looks like code) to write a method that tests the IsRelativelyPrime method. (Hint: You may find it useful to write another method that also tests two integers to see if they are relatively prime.)

IsRelativelyPrime function:

```
def IsRelativelyPrime(a, b):
  newA = abs(a)
  newB = abs(b)

  if ( a == 1 or b == 1 ):
    return True

  if ( a == 0 or b == 0 ):
    return False

  minimum = min(a ,b)
  for factor, minimum in enumerate():
    if ( a % factor == 0 && b % factor == 0 ):
      return False
  return True

  ```
This code first converts a and b into positive values. Then if either value is 1, it returns true because 1 and –1 are relatively prime to every number. Next if a or b is 0, the method returns false because only 1 and –1 are relatively prime to 0 and the code already checked whether a or b is 1. The code then makes the value factor loop from 2 to the smaller of a and b. The code takes the values a and b modulus factor to see if factor divides evenly into a and b. (The modulus is the remainder after division. For example, 14 % of 5 is 4 because 14 divided by 5 is 2 with a remainder of 4. If a % factor is 0, then factor divides into a evenly so factor is a factor of a.) If factor divides into both a and b evenly, then a and b are not relatively prime so the method returns false. Finally, if none of the values of factor divide into both a and b, then the numbers are relatively prime so the method returns true.

tester:

```
import unittest

class testFunction (unittest.TestCase):
  def firstTest (self):
    self.assertEqual( AreRelativelyPrime(a, b), IsRelativelyPrime(a, b))
  def secondTest (self):
    self.assertEqual( AreRelativelyPrime(a, a), IsRelativelyPrime(a, a))
  def thirdTest (self):
    self.assertEqual( AreRelativelyPrime(a, 1), IsRelativelyPrime(a, 1))
    self.assertEqual( AreRelativelyPrime(a, -1), IsRelativelyPrime(a, -1))
    self.assertEqual( AreRelativelyPrime(1, a), IsRelativelyPrime(1, a))
    self.assertEqual( AreRelativelyPrime(-1, a), IsRelativelyPrime(-1, a))
  def thirdTest (self):
    self.assertEqual( AreRelativelyPrime(a, 0), IsRelativelyPrime(a, 0))
    self.assertEqual( AreRelativelyPrime(0, a), IsRelativelyPrime(0, a))
  def fourthTest (self):
    self.assertEqual( AreRelativelyPrime(1000000, 1000000), IsRelativelyPrime (1000000, 1000000))
    self.assertEqual( AreRelativelyPrime(-1000000, -1000000), IsRelativelyPrime (-1000000, -1000000))
    self.assertEqual( AreRelativelyPrime(a, 1000000), IsRelativelyPrime (a, 1000000))
```
This code verifies the method’s results for pairs of random values, pairs of identical numbers, 1, –1, 0, and the smallest and largest values supported by the AreRelativelyPrime method –1 million and 1 million.

### Problem 8.3

> What testing techniques did you use to write the test method in Exercise 1? (Exhaustive, black-box, white-box, or gray-box?) Which ones could you use and under what circumstances? [Please justify your answer with a short paragraph to explain.]

black-box, because the exercise does not say how the method works.

You could try to perform an exhaustive test, but with allowed values ranging from –1 million and 1 million, there would be (1,000,000 – –1,000,000 + 1)2 = 2,000,0012 ≈ 4 trillion pairs of values to test, which is probably too many. If the allowed values ranged from –1,000 to 1,000, you would have only approximately 1 million pairs to test, so this would be possible.

### Problem 8.5

> the following code shows a C# version of the AreRelativelyPrime method and the GCD method it calls.

         // Return true if a and b are relatively prime.
         private bool AreRelativelyPrime( int a, int b )
         {
            // Only 1 and -1 are relatively prime to 0.
            if( a == 0 ) return ((b == 1) || (b == -1));
            if( b == 0 ) return ((a == 1) || (a == -1));

            int gcd = GCD( a, b );
            return ((gcd == 1) || (gcd == -1));
         }

         // Use Euclid's algorithm to calculate the
         // greatest common divisor (GCD) of two numbers.
         // See https://en.wikipedia.org/wiki/Euclidean_algorighm
         private int GCD( int a, int b )
         {
            a = Math.abs( a );
            b = Math.abs( b );

            // if a or b is 0, return the other value.
            if( a == 0 ) return b;
            if( b == 0 ) return a;

            for( ; ; )
            {
               int remainder = a % b;
               if( remainder == 0 ) return b;
               a = b;
               b = remainder;
            };
         }
>The AreRelativelyPrime method checks whether either value is 0. Only -1 and 1 are relatively prime to 0, so if a or b is 0, the method returns true only if the other value is -1 or 1.

>The code then calls the GCD method to get the greatest common divisor of a and b. If the greatest common divisor is -1 or 1, the values are relatively prime, so the method returns true. Otherwise, the method returns false.

>Now that you know how the method works, implement it and your testing code in your favorite programming language. Did you find any bugs in your initial version of the method or in the testing code? Did you get any benefit from the testing code?

Code:
```
def gcd(x , y):
    t =0
    while (y != 0):
        t = x
        x = y
        y = t % y
    return x;

def relativePrime( x , y):
    z = gcd(x , y)
    if z == 1:
        return True
    else:
        return False

a = int(input("a="))
b = int(input("b="))
print( relativePrime(a , b))
```

Test:
```
import unittest

class testFunction (unittest.TestCase):
  def firstTest (self):
    self.assertEqual(gcd(0,0), 0)
    self.assertEqual(gcd(55,0), 55)
    self.assertEqual(gcd(0,66), 66)
    self.assertEqual(gcd(7,21), 7)
    self.assertEqual(gcd(41,47), 1)
    self.assertEqual(gcd(99,51), 3)
    self.assertEqual(gcd(24,-8), 8)
    self.assertEqual(gcd(-36,9), 9)
  def secondTest (self):
    self.assertEqual(relativePrime(2,3), True)
    self.assertEqual(relativePrime(2,4), False)
```

I found that AreRelativelyPrime method didn't have restrictions on the values of a and b.
The method had trouble handling the maximum and minimum integer values. Other than that, the AreRelativelyPrime method works well.

### Problem 8.9

>Exhaustive testing actually falls into one of the categories black-box, white-box, or gray-box. Which one is it and why?

Exhaustive tests are black-box tests because they don’t rely on knowledge of what’s going on inside the method they are testing.

### Problem 8.11

> Suppose you have three testers: Alice, Bob, and Carmen. You assign numbers to the bugs so the testers find the sets of bugs {1, 2, 3, 4, 5}, {2, 5, 6, 7}, and {1, 2, 8, 9, 10}. How can you use the Lincoln index to estimate the total number of bugs? How many bugs are still at large?

Alice/Bob:    5 x 4 ÷ 2 = 10
Alice/Carmen: 5 x 5 ÷ 2 = 12.5
Bob/Carmen:   4 x 5 ÷ 1 = 20

Take an average of the three
(10 + 12.5 + 20) ÷ 2 ≈ 14 bugs

### Problem 8.12

>What happens to the Lincoln estimate if the two testers don't find any bugs in common? What does it mean? Can you get a "lower bound" estimate of the number of bugs?

If the testers don’t find any bugs in common, then the equation for the Lincoln index divides by 0, giving you an in nite result. You can get a sort of lower bound for the number of bugs by pretending the testers found 1 bug in common. For example, if the testers found 5 and 6 bugs, respectively, then the lower bound index would be (5 × 6) ÷ 1= 30 bugs.
