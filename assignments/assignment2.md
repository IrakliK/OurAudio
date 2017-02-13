# HW Assignment #2

### Problem 5.1
> What's the difference between a component-based architecture and a service-oriented architecture?

A component-based architecture regards pieces of the system as loosely coupled components that provide services for each other. A service-oriented architecture is similar except the pieces are implemented as services, often running on separate computers communicating across a network. The two are similar, but the pieces are more separated in a service-oriented architecture.

### Problem 5.2
> Suppose you're building a phone application that lets you play tic-tac-toe against a simple computer opponent. It will display high scores stored on the phone, not in an external database. Which architectures would be most appropriate and why?

A monolithic architecture would probably work well because it’s a relatively small, self-contained application.For tic-tac-toe in particular, it’s easy to build tables of moves and the best responses. The UI will be event-driven. You could also make the computer opponent raise events when it makes moves, so you might make that part of the system event-driven, too. Also, you could have distributed components to make different processes explore different sequences of moves simultaneously, but again tic-tac-toe just isn’t that complicated an application, so it’s probably not necessary.


### Problem 5.4
> Repeat question 3 [after thinking about it; it repeats question 2 for a chess game] assuming the chess program lets two users play against each other over an Internet connection.

The tic-tac-toe game architecture is similar to the chess game architecture. Like the tic-tac-toe program, the chess program won’t need to interact with remote processes. Chess programs also use tables of typical moves and pre-calculated responses.
Because searching for optimal moves is so difficult in chess, this program could include distributed pieces running on different cores simultaneously. That would make this a monolithic rule-based application with distributed pieces.

### Problem 5.6
> What kind of database structure and maintenance should the *ClassyDraw* application use?

No need for a database because the *ClassyDraw* application can store each drawing in a separate file. OS tools can let the user manage  files. For example, they let the user delete old  files and make backup copies of files. The program could create a temporary file while the user is editing a drawing. Then if the program crashes or is ended prematurely, it could ask the user if it should restore the temporary file the next time it starts.

### Problem 5.8
> Draw a state machine diagram to let a program read floating point numbers in scientific notation as in +37 or -12.3e+17 (which means -12.3 x 1017). Allow both E and e for the exponent symbol. [Jeez, is this like Dr. Dorin's DFAs, or what???]

![State Machine](images/SM_5_8.png)



### Problem 6.1
> Consider the *ClassyDraw* classes *Line*, *Rectangle*, *Ellipse*, *Star*, and *Text*. What properties do these classes all share? What properties do they not share? Are there any properties shared by some classes and not others? Where should the shared and non-shared properties be implemented?

Those classes all represent things that are drawn, so they share properties needed for drawing, including a foreground color and background color. All the classes can also define their drawing position by storing an upper-left corner, a width, and a height.Some classes need extra data to draw their particular type of shape, and the classes won’t share that data. For example, the Text class needs font information and the string to draw. The Star class needs to know how many points to give the star. Some properties can be shared by some classes and not others. Rectangle, Ellipse, and Star can be  filled, so they need a fill color.


### Problem 6.2
> Draw an inheritance diagram showing the properties you identified for Exercise 1. (Create parent classes as needed, and don't forget the *Drawable* class at the top.)

![UML](images/UML_6_2.png)

### Problem 6.3
> The following list gives the properties of several business-oriented classes.
> - Customer — Name, Phone, Address, BillingAddress, CustomerID
> - Hourly — Name, Phone, Address, EmployeeID, HourlyRate
> - Manager — Name, Phone, Address, EmployeeID, Office, Salary, Boss, Employees
> - Salaried — Name, Phone, Address, EmployeeID, Office, Salary, Boss
> - Supplier — Name, Phone, Address, Products, SupplierID
> - VicePresident — Name, Phone, Address, EmployeeID, Office, Salary, Managers
> Assuming a *Supplier* is someone who supplies products for your business, draw an inheritance diagram showing the relationships among these classes. (Hint: Add extra classes if necessary.)

![UML](images/UML_6_3.png)

### Problem 6.6
> Suppose your company has many managerial types such as department namager, project manager, and division manager. You also have multiple levels of vice president, some of whom reprt to other manager types. How could you combine the *Salaried*, *Manager*, and *Vice President* types you used in Exercise 3? Draw the new inheritance hierarchy.

![UML](images/UML_6_6.png)
