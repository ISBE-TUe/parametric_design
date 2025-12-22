---
title: Coding into Grasshopper
subtitle: Parametric Design (7ZM7M07)
author: Pieter Pauwels
---

# Slide 1

Coding into Grasshopper
THURSDAY 16 MARCH 2023 –PARAMETRIC DESIGN (7ZM7M07)
Pieter Pauwels, Associate Professor
Department of the Built Environment, Information Systems in the Built Environment

<!-- image: slide_001 -->


---

# Slide 2

Presentation Outline
1. Why on earth coding, and what kinds of coding are there?
2. Python – the shorter version
3. Getting started in Grasshopper
4. Examples
5. OOP in Grasshopper with C# and RhinoCommon
6. Python – the elaborate version
2 Parametric Design: Coding into Grasshopper

<!-- image: slide_002 -->


---

# Grasshopper is visual scripting

Scripting components works as an integrated part of GH. They can get input and
produce output from and to other standard GH components. They can be used to
create specialized functionality that opens up tremendous potential beyond the
standard components.

https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/




---

# Multiple scripting languages available

• .NET scripting languages:
- VB.NET
- C#
• Python
It is actually IronPython
4 Parametric Design: Coding into Grasshopper

<!-- image: slide_004 -->


---

# Slide 5

Scripting in Rhino: Python
Rhino allows access to its algorithms through the Rhino SDK. The most
basic SDK for Python is RhinoScriptSynax.
https://developer.rhino3d.com/guides/rhinopython/
https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/
5 Parametric Design: Coding into Grasshopper

<!-- image: slide_005 -->


---

# Slide 6

Scripting in Rhino: C#
Rhino allows access to its algorithms through the Rhino SDK. Rhino
publishes a cross-platform SDK for .NET languages called RhinoCommon.
The documentation of the SDK and other developer resources are available
at http://developer.rhino3d.com/
6 Parametric Design: Coding into Grasshopper

<!-- image: slide_006 -->


---

# Slide 7

Rhino.Python
1. Rhino.Python Guide
2. Your First Python Script in
Grasshopper Guide
Further alternative:
RhinoCommon:
https://developer.rhino3d.co
m/guides/rhinocommon/what
-is-rhinocommon/
7 Parametric Design: Coding into Grasshopper

<!-- image: slide_007 -->


---

# Slide 8

Version of Python used in Rhino
Rhino uses Python version 2.7. To be more specific Rhino
uses IronPython which brings together the Python language
and Microsoft’s .NET framework.
https://ironpython.net/
8 Parametric Design: Coding into Grasshopper

<!-- image: slide_008 -->


---

# Slide 9

Hello world
Add
documentation!!
https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/
9 Parametric Design: Coding into Grasshopper

<!-- image: slide_009 -->


---

# Slide 10

Presentation Outline
1. Why on earth coding, and what kinds of coding are there?
2. Python – the shorter version
3. Getting started in Grasshopper
4. Examples
5. OOP in Grasshopper with C# and RhinoCommon
6. Python – the elaborate version
10 Parametric Design: Coding into Grasshopper

<!-- image: slide_010 -->


---

# Slide 11

Definition
Python is an interpreted, object-oriented, high-level programming language with
dynamic semantics. Its high-level built in data structures, combined with dynamic
typing and dynamic binding, make it very attractive for Rapid Application
Development, as well as for use as a scripting or glue language to connect
existing components together. Python's simple, easy to learn syntax emphasizes
readability and therefore reduces the cost of program maintenance. Python
supports modules and packages, which encourages program modularity and
code reuse. The Python interpreter and the extensive standard library are
available in source or binary form without charge for all major platforms, and can
be freely distributed.
https://www.python.org/
11 Parametric Design: Coding into Grasshopper

<!-- image: slide_011 -->


---

# Slide 12

Python – executive summary
What?
- Fastest growing
- Most popular
Why?
- Big Data
- Machine Learning
- Data Science
- Simple scripts for automation
Who?
- Kids
- People
12 Parametric Design: Coding into Grasshopper

<!-- image: slide_012 -->


---

# Slide 13

Python in interactive shell
Exit:
- Windows: press Ctrl-Z and Enter
- OS X and Linux: Ctrl-D
- Run the python command exit()
Progressive forward programming
13 Parametric Design: Coding into Grasshopper

<!-- image: slide_013 -->


---

# Slide 14

There is an entire myriad of editors – also within
existing tools
14 Parametric Design: Coding into Grasshopper

<!-- image: slide_014 -->


---

# Slide 15

Features of the language
• Datatypes and variables
• Operators
• Loops
• Functions
• Modules and packages
15 Parametric Design: Coding into Grasshopper

<!-- image: slide_015 -->


---

# Slide 16

Datatypes
A python script works with data. This data can be stored in variables with
certain datatypes.
A number of datatypes are available in python:
• int - integer: integer value (no floating point)
• float - float: floating point number
• str - string: sequence of characters
• list - list: list of datatypes
• bool - boolean: binary value (True or False)
16 Parametric Design: Coding into Grasshopper

<!-- image: slide_016 -->


---

# Slide 17

Variables
Values in any of these datatypes can be stored in variables. These variables
ideally have well-defined, good, and meaningful names, so that you can
understand them as a developer.
• myInt = 1
• myFloat = 3.1415
• myStr = “Eindhoven University of Technology ... !?”
• myList = [2, 4, 42, 3.1415, 5000]
• myBool = False
17 Parametric Design: Coding into Grasshopper

<!-- image: slide_017 -->


---

# Slide 18

Operators
Operators allow to perform operations on variables of particular data types.
For example:
- x + y : summation of two variables
- x != y : comparison of two variables (not equal)
- myString[1:5] : select character 1 to 5 of string (note that Python counts from
0)
See more: https://gitlab.tue.nl/CME/python/wikis/01_03_featuresofthelanguage
18 Parametric Design: Coding into Grasshopper

<!-- image: slide_018 -->


---

# Slide 19

Types of operators
- Number operators
- Boolean operators
- String operators
- List operators
19 Parametric Design: Coding into Grasshopper

<!-- image: slide_019 -->


---

# Slide 20

Operators: use cheat sheets! And plenty of Google…
and StackOverFlow… and Google again… etc.
• https://www.pythoncheatsheet.org/
• https://sinxloud.com/python-cheat-sheet-beginner-advanced/
20 Parametric Design: Coding into Grasshopper

<!-- image: slide_020 -->


---

# Slide 21

Python scripting in Dynamo and Grasshopper
With these operators and variables, you can already do a lot in a Dynamo
and Grasshopper environment.
➔ Simple scripting
https://gitlab.tue.nl/CME/python/wikis/02_02_dynamo
21 Parametric Design: Coding into Grasshopper

<!-- image: slide_021 -->


---

# Slide 22

Functions
• Functions are defined using def
• Functions need to be called
22 Parametric Design: Coding into Grasshopper

<!-- image: slide_022 -->


---

# Slide 23

Standard functions!!!
https://docs.python.org/3/library/functions.html#open
23 Parametric Design: Coding into Grasshopper

<!-- image: slide_023 -->


---

# Slide 24

Modules
• A module is a library of functions
• Used to import extra functionality into your program
• Some are built-in
• math simple mathematic operations
• datetime dates and times
• os interfaces to operating system
• Some are external
• numpy math structured around arrays
• matplotlib for plotting data
• Pandas working with dataframes
• Some you write yourself
https://gitlab.tue.nl/CME/python/wikis/01_05_modulesandpackages
24 Parametric Design: Coding into Grasshopper

<!-- image: slide_024 -->


---

# Slide 25

Importing and using a module
• Importing a module
• Importing and renaming a module
https://docs.python.org/3/tutorial/modules.html
25 Parametric Design: Coding into Grasshopper

<!-- image: slide_025 -->


---

# Slide 26

Presentation Outline
1. Why on earth coding, and what kinds of coding are there?
2. Python – the shorter version
3. Getting started in Grasshopper
4. Examples
5. OOP in Grasshopper with C# and RhinoCommon
6. Python – the elaborate version
26 Parametric Design: Coding into Grasshopper

<!-- image: slide_026 -->


---

# Slide 27

Syntax and programming reminders
• Python is Case Sensitive (“A” and “a” are NOT the same thing!)
• Python is Indent Sensitive (Use indentation to delineate the scope of loops, conditionals,
functions and classes) Remember an extra space or the absence of a space can make a world
of a difference!
• You do NOT need to declare variables or variables types! Just simply use them (x=3)!
• The “ # “ sign is used for comments, the computer will skip over them.
• Print and Return are NOT the same thing - print writes something to the screen, return
actually passes a value!
• Remember Variable Scope - where you define a variable is important! Variables defined
within functions & classes can only be used within those functions/classes unless passed as
input or through the return statement!
• “return” only works inside a function.
• Develop code incrementally, testing, debugging and printing as you finish smaller sections.
Writing hundreds of lines and hitting run will most likely not work and will make it far more
difficult to spot errors!
27 Parametric Design: Coding into Grasshopper

<!-- image: slide_027 -->


---

# Slide 28

ghPython component
The GhPython component brings:
• Rhinoscript syntax to Grasshopper
• a Python parallel to the C# and Vb.Net scripting
components
• a dynamic UI with control over the number of
inputs and outputs
• ability to reference .NET libraries and a huge
number of Python packages
• integration with the Python editor included in
Rhino
28 Parametric Design: Coding into Grasshopper

<!-- image: slide_028 -->


---

# Slide 29

ghPython and SDKs
ghPython provides access to SDKs:
• The most basic SDK for Python is RhinoScriptSyntax.
• For more direct access to Rhino functions, more experienced
programmers may choose to use the RhinoCommon SDK.
29 Parametric Design: Coding into Grasshopper

<!-- image: slide_029 -->


---

# Slide 30

Rhinoscriptsyntax
One of the key features of
RhinoScript that make it easy to
write powerful scripts is a large
library of Rhino specific functions
that can be called from scripts.
Rhino.Python includes a set of
similar functions that can be
imported and used in any python
script for Rhino. This set of
functions is known as the
rhinoscriptsyntax package.
https://developer.rhino3d.com/guides/rhinopython/what-is-rhinopython/
30 Parametric Design: Coding into Grasshopper

<!-- image: slide_030 -->



---

# GhPython component

• The GhPython component supports rhinoscriptsyntax functions.
• The rhinoscriptsyntax functions can be set to generate geometry inside
of Grasshopper that does not live in the Rhino document.

https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/


<!-- slide_23 -->


---

# Slide 33

What’s inside
x: first input of a .NET type (object).
y: second input of a .NET type
(object).
out: output string with compiling
messages and prints.
A: Returned output of type object.
https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/
33 Parametric Design: Coding into Grasshopper

<!-- image: slide_033 -->


---

# Slide 34

Reaching the code editor
34 Parametric Design: Coding into Grasshopper

<!-- image: slide_034 -->


---

# Slide 35

Hello world
https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/
35 Parametric Design: Coding into Grasshopper

<!-- image: slide_035 -->


---

# Slide 36

Hello world (1)
- Double click GhPython node
- Add code to editor
- Double check names of input and
output variables
- OK
https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/
36 Parametric Design: Coding into Grasshopper

<!-- image: slide_036 -->


---

# Slide 37

Hello world (2)
Expand your code bit by bit
https://developer.rhino3d.com/guides/rhinopython/your-first-python-script-in-grasshopper/
37 Parametric Design: Coding into Grasshopper

<!-- image: slide_037 -->


---

# Slide 38

Adding more input parameters
+ and – to add and remove parameters
Right click to change names
Make sure that names match with variables
in script
https://developer.rhino3d.com/guides/rhinopython/ghpython-component/
38 Parametric Design: Coding into Grasshopper

<!-- image: slide_038 -->


---

# Slide 39

Controlling the input
39 Parametric Design: Coding into Grasshopper

<!-- image: slide_039 -->


---

# Slide 40

Naming variables
• names of the parameters must follow Python naming conventions.
• names should reflect what the parameter is
• Parameter1
• Mypaarameter
Recipe for disaster
• Someotherparameter
• Afadfjadfj
• names do not contain white spaces or special characters
• the height -> height
• Element thickness -> elementThickness
https://developer.rhino3d.com/guides/rhinopython/ghpython-component/
40 Parametric Design: Coding into Grasshopper

<!-- image: slide_040 -->


---

# Slide 41

Output parameters
https://developer.rhino3d.com/guides/rhinopython/ghpython-component/
41 Parametric Design: Coding into Grasshopper

<!-- image: slide_041 -->


---

# Slide 42

Out parameter
Gives you the errors and warnings in your code:
• The compile-time messages. Those include errors and warning about
your code that prevent your component from running or can potentially
give incorrect results. These are very helpful information to help point
you to the lines in code that the compiler is having trouble with so that
you can make appropriate adjustments.
• The run-time messages. You can send bits of text to the out parameter.
You can use those to track information generated by your code as it is
running
https://developer.rhino3d.com/guides/rhinopython/ghpython-component/
42 Parametric Design: Coding into Grasshopper

<!-- image: slide_042 -->


---

# Slide 43

Advanced Input Properties
The three access options ‘Item Access’, ‘List Access’
and ‘Tree Access’ change the way lists and datatrees
are imported into the GhPython component. This
controls how lists of objects are imported.
https://developer.rhino3d.com/guides/rhinopython/ghpython-component/
43 Parametric Design: Coding into Grasshopper

<!-- image: slide_043 -->


---

# Slide 44

List access versus Item access
Input
Item Access
List Access
The same input can be accessed in different ways. In each Grasshopper iteration,
each item (character in string), or each object in list (full string) is handled.
44 Parametric Design: Coding into Grasshopper

<!-- image: slide_044 -->


---

# Slide 45

Type Hint
Input parameters are set by default to the .NET type
“object”. Sometimes is best to specify a datatype on
input to make the code more readable and
efficient. Types can be primitive such as integers or
doubles, or geometry specific RhinoCommon types
that are used only in Rhino such as “Point3d” or a
“Curve”. You need to select the appropriate type for
each input.
https://developer.rhino3d.com/guides/rhinopython/ghpython-component/
45 Parametric Design: Coding into Grasshopper

<!-- image: slide_045 -->


---

# Slide 46

Debugging in Visual Studio IDE
An IDE works more comfortable
than a simple editor, once you
know where everything is.
Finding bugs in your code is
possible
Not covered in detail, but possible
– see link below
https://developer.rhino3d.com/guides/rhinopython/ghpython-debugging/
46 Parametric Design: Coding into Grasshopper

<!-- image: slide_046 -->


---

# Slide 47

Frequently Asked Questions
- How can I use the rhinoscriptsyntax?
- How can I use RhinoCommon?
- What is “ghdoc” and how does it relate to the rhinoscriptsyntax?
- Are there RhinoScript and/or RhinoCommon objects which are not
recognized as valid Grasshopper geometry?
+ million other fora
=> Best reference: https://discourse.mcneel.com/c/rhino-developer
https://developer.rhino3d.com/guides/rhinopython/ghpython-question-answer/
47 Parametric Design: Coding into Grasshopper

<!-- image: slide_047 -->


---

# Slide 48

Presentation Outline
1. Why on earth coding, and what kinds of coding are there?
2. Python – the shorter version
3. Getting started in Grasshopper
4. Examples
5. OOP in Grasshopper with C# and RhinoCommon
6. Python – the elaborate version
48 Parametric Design: Coding into Grasshopper

<!-- image: slide_048 -->


---

# Slide 49

Example 1 – taking care of output values
Be careful with naming your output variables. Take a look at below example
and find out what could be wrong here.
https://developer.rhino3d.com/guides/rhinopython/ghpython-editor/
49 Parametric Design: Coding into Grasshopper

<!-- image: slide_049 -->


---

# Slide 50

Example 1 – taking care of output values
Be careful with naming your output variables. Take a look at below example
and find out what could be wrong here.
- It is not allowed to set the output variable to a specific
variable as in the line a = []
- The for loop will loop through the items in l, only to output
the last assigned value to a at the completion of the
Grasshopper cycle.
https://developer.rhino3d.com/guides/rhinopython/ghpython-editor/
50 Parametric Design: Coding into Grasshopper

<!-- image: slide_050 -->


---

# Slide 51

Example 1 – taking care of output values
This would be the correct version
https://developer.rhino3d.com/guides/rhinopython/ghpython-editor/
51 Parametric Design: Coding into Grasshopper

<!-- image: slide_051 -->


---

# Slide 52

Example 2 – sinusoidal series of circles
https://developer.rhino3d.com/guides/rhinopython/ghpython-editor/
52 Parametric Design: Coding into Grasshopper

<!-- image: slide_052 -->


---

# Slide 53

Example 2 – Script analysis (1)
Commenting
53 Parametric Design: Coding into Grasshopper

<!-- image: slide_053 -->


---

# Slide 54

Example 2 – Script analysis (2)
Setting (default) input variables
54 Parametric Design: Coding into Grasshopper

<!-- image: slide_054 -->


---

# Slide 55

Example 2 – Script analysis (3)
Setting placeholder variables to collect output
55 Parametric Design: Coding into Grasshopper

<!-- image: slide_055 -->


---

# Slide 56

Example 2 – Script analysis (4)
For loop that creates points and circles based on
input variables
56 Parametric Design: Coding into Grasshopper

<!-- image: slide_056 -->


---

# Slide 57

Example 2 - Full overview
Common flow of a script in GhPython
57 Parametric Design: Coding into Grasshopper

<!-- image: slide_057 -->


---

# Slide 58

Example 2 - Full overview
Common flow of a script in GhPython
58 Parametric Design: Coding into Grasshopper

<!-- image: slide_058 -->


---

# Slide 59

Example 3 – Curve Length example
https://developer.rhino3d.com/samples/rhinopython/curve-length/
59 Parametric Design: Coding into Grasshopper

<!-- image: slide_059 -->


---

# Slide 60

Example 3 - Be flexible with Python formats that you
find
Dare to Type!
60 Parametric Design: Coding into Grasshopper

<!-- image: slide_060 -->


---

# Slide 61

Example 4 – Iceray pattern
https://www.youtube.com/watch?v=jAEoqxL5IzA
61 Parametric Design: Coding into Grasshopper

<!-- image: slide_061 -->


---

# Slide 62

Multitude of examples
Try them
https://developer.rhino3d.com/samples/
62 Parametric Design: Coding into Grasshopper

<!-- image: slide_062 -->


---

# Slide 63

Presentation Outline
1. Why on earth coding, and what kinds of coding are there?
2. Python – the shorter version
3. Getting started in Grasshopper
4. Examples
5. OOP in Grasshopper with C# and RhinoCommon
6. Python – the elaborate version
63 Parametric Design: Coding into Grasshopper

<!-- image: slide_063 -->


---

# Slide 64

Grasshopper setup: The C# component
• Input data on the left,
outputs on the right (return
data).
• Increase or decrease
inputs/outputs by zooming in
and +/-
• Out parameter – returns
messages from within the C#
script, useful for viewing
errors
64 Parametric Design: Coding into Grasshopper

<!-- image: slide_064 -->


---

# Slide 65

The C# component: inputs
• How the data we have used is utilized by the component
• Changing access - how the data will be operated on
• Item Access is default - the script will run for each item
input in the component (e.g., every item on a list)
• List Access - the component will execute once for the
whole list
• Tree Access - execute once for the entire tree that is input
65 Parametric Design: Coding into Grasshopper

<!-- image: slide_065 -->


---

# Slide 66

Type of data inserted in the C# component
• Type Hint – specify the type of data inserted
• The default will assume System.Object - the base
type for all data
• Perimeter types (not specific to Rhino), e.g.,
bool, int, double, etc.
• Rhino types - (specific to Rhino), e.g., Point3d,
Vector3d, etc.
• Specifying inputs = more efficiency and cleaner
code (no need to specify from within the script)
66 Parametric Design: Coding into Grasshopper

<!-- image: slide_066 -->


---

# Slide 67

C# component options
• Manage Assemblies – import
other C# libraries or assemblies
to use from within the code.
• More flexible components
• Remove out- hides ouput
parameter
• Edit source – edit the C# code
from within the component
67 Parametric Design: Coding into Grasshopper

<!-- image: slide_067 -->


---

# Slide 68

Script editor structure
• Run script – execute code, without closing
window
• SolveInstance Overrides – insert methods
before and after the script runs
• Preview Overrides – change the way geometry
is previewed in Rhino
• Font editor
• Shrink script editor – change appearance of the
window
• Cache and Recover from cache – saving the
state of the script and revert to previous state
• OK – close window and execute
68 Parametric Design: Coding into Grasshopper

<!-- image: slide_068 -->


---

# Slide 69

Text editor
• Regions – similar code
grouped together
• Using region – using
statements, libraries of code
to interact with Rhino and GH
• Code to execute contained in
this Script_Instance class
• Utility functions – premade
functions to utilise
• Members – variables or
objects to utilise in the script
• Run script – execute
• Custom functions
69 Parametric Design: Coding into Grasshopper

<!-- image: slide_069 -->


---

# Slide 70

RhinoCommon API
Application Programming Interface
Allows for one piece of software to communicate with another by
providing commands that the API translates to receive and send requests
between both.
The RhinoCommon API contains all the classes and structures (methods)
that allow us to interact (send commands) with Rhino using C#
70 Parametric Design: Coding into Grasshopper

<!-- image: slide_070 -->


---

# Slide 71

RhinoCommon API
Using region – libraries
"using" word = C# keyword
System library – allows us to use system
type objects like lists (not Rhino specific).
Grasshopper library – allows us to interact
with the GH API
Dots (e.g., Grasshopper.Kernel) - access
different namespaces of those libraries
71 Parametric Design: Coding into Grasshopper

<!-- image: slide_071 -->


---

# Slide 72

Searching RhinoCommon
Use RhinoCommon to access various
classes and create geometry.
How to view and navigate the Rhino
Common API?
• Through the web
portal: https://developer.rhino3d.com
72 Parametric Design: Coding into Grasshopper

<!-- image: slide_072 -->


---

# Slide 73

Searching RhinoCommon
73 Parametric Design: Coding into Grasshopper

<!-- image: slide_073 -->


---

# Slide 74

Searching RhinoCommon
• Namespaces – a way to group similar
objects and functions
• Full extension of class names
• Rhino.Geometry - different geometry
types, blueprints to create the different
types
74 Parametric Design: Coding into Grasshopper

<!-- image: slide_074 -->


---

# Slide 75

Example: Point3d Structure
• Description
• Constructors – different methods to use to
create an object
• Properties- the properties that are accessible
once a point object is created
• Methods – methods to use with the point object
• Static methods – an instance of a point is not
needed to use the methods. We can access
them directly using the point structure
75 Parametric Design: Coding into Grasshopper

<!-- image: slide_075 -->


---

# Slide 76

Example: Point3d.DistanceTo Method
• Description
• A breakdown of parameters that are
required to use with this method
• Public method – access it using a Point3d
object
• Examples (in some cases) on how the
method is used with C#, VB or Python
76 Parametric Design: Coding into Grasshopper

<!-- image: slide_076 -->


---

# Slide 77

Data access: example scripts
77 Parametric Design: Coding into Grasshopper

<!-- image: slide_077 -->


---

# Slide 78

78 Parametric Design: Coding into Grasshopper

<!-- image: slide_078 -->


---

# Slide 79

Example: Penrose -> iterative function
Recall Week 1: Generative Design
79 Parametric Design: Coding into Grasshopper

<!-- image: slide_079 -->


---

# Slide 80

80 Parametric Design: Coding into Grasshopper

<!-- image: slide_080 -->


---

# Slide 81

Defining rules to generate shape
81 Parametric Design: Coding into Grasshopper

<!-- image: slide_081 -->


---

# Slide 82

Iterative function
Nesting and
iterating
functions
82 Parametric Design: Coding into Grasshopper

<!-- image: slide_082 -->


---

# Slide 83

Essential Guide to C# for GH
83 Parametric Design: Coding into Grasshopper

<!-- image: slide_083 -->


---

# Slide 84

Content shared on Canvas
- Python sample code
- Tutorial for custom Dynamo
using Python
- C# Essential Guide in PDF
- C# Essential Guide in GH file
84 Parametric Design: Coding into Grasshopper

<!-- image: slide_084 -->


---

# Slide 85

More advanced functionality: creating your own GH
Component using C#
https://www.youtube.com/watch?v=hdW3JVA0k8o
85 Parametric Design: Coding into Grasshopper

<!-- image: slide_085 -->


---

# Slide 86

Presentation Outline
1. Why on earth coding, and what kinds of coding are there?
2. Python – the shorter version
3. Getting started in Grasshopper
4. Examples
5. OOP in Grasshopper with C# and RhinoCommon
6. Python – the elaborate version
86 Parametric Design: Coding into Grasshopper

<!-- image: slide_086 -->


---

# Slide 87

What is it?
87 Parametric Design: Coding into Grasshopper

<!-- image: slide_087 -->


---

# Slide 88

Definition
Python is an interpreted, object-oriented, high-level programming language with
dynamic semantics. Its high-level built in data structures, combined with dynamic
typing and dynamic binding, make it very attractive for Rapid Application
Development, as well as for use as a scripting or glue language to connect
existing components together. Python's simple, easy to learn syntax emphasizes
readability and therefore reduces the cost of program maintenance. Python
supports modules and packages, which encourages program modularity and
code reuse. The Python interpreter and the extensive standard library are
available in source or binary form without charge for all major platforms, and can
be freely distributed.
https://www.python.org/
88 Parametric Design: Coding into Grasshopper

<!-- image: slide_088 -->


---

# Slide 89

Python – executive summary
What?
- Fastest growing
- Most popular
Why?
- Big Data
- Machine Learning
- Data Science
- Simple scripts for automation
Who?
- Kids
- People
89 Parametric Design: Coding into Grasshopper

<!-- image: slide_089 -->


---

# Slide 90

Python – executive summary
- Less time and fewer lines of code
- Cross-platform
- Large ecosystem of libraries, tools,
and frameworks
- High-Level language
https://www.youtube.com/watch?v=Y8Tko2YC5hA
90 Parametric Design: Coding into Grasshopper

<!-- image: slide_090 -->


---

# Slide 91

Growth of major programming languages
Based on Stack Overflow question
views in World Bank high-income
countries
2012 2014 2016 2018
91 Parametric Design: Coding into Grasshopper

<!-- image: slide_091 -->


---

# Slide 92

Python in construction
• Python in Dynamo
• Python in Grasshopper
• Python in BIM tools
• Python in data mining
• Python in IoT
• Python in GIS
• …
92 Parametric Design: Coding into Grasshopper

<!-- image: slide_092 -->


---

# Slide 93

Where to find it?
93 Parametric Design: Coding into Grasshopper

<!-- image: slide_093 -->


---

# Slide 94

Which kinds of Python
- Python in interactive shell
- Python in simple code editor
- Python in full Integrated Development Environment (IDE)
94 Parametric Design: Coding into Grasshopper

<!-- image: slide_094 -->


---

# Slide 95

Python in interactive shell
Exit:
- Windows: press Ctrl-Z and Enter
- OS X and Linux: Ctrl-D
- Run the python command exit()
Progressive forward programming
95 Parametric Design: Coding into Grasshopper

<!-- image: slide_095 -->


---

# Slide 96

True programming starts with an editor
Code Editor
Examples:
➔ Visual Studio Code (VSCode)
➔ Atom
➔ Sublime
Integrated Development Environment (IDE)
Includes: Autocompletion, Debugging, and Testing
Examples:
➔ PyCharm
➔ Spyder
More stable interactive programming
96 Parametric Design: Coding into Grasshopper

<!-- image: slide_096 -->


---

# Slide 97

There is an entire myriad of editors – also within
existing tools
97 Parametric Design: Coding into Grasshopper

<!-- image: slide_097 -->


---

# Slide 98

Features of the language
https://gitlab.tue.nl/CME/python/wikis/01_03_featuresofthelanguage
98 Parametric Design: Coding into Grasshopper

<!-- image: slide_098 -->


---

# Slide 99

Features of the language
• Datatypes and variables
• Operators
• Loops
• Functions
• Modules and packages
99 Parametric Design: Coding into Grasshopper

<!-- image: slide_099 -->


---

# Slide 100

Datatypes and variables
100 Parametric Design: Coding into Grasshopper

<!-- image: slide_100 -->


---

# Slide 101

Datatypes
A python script works with data. This data can be stored in variables with
certain datatypes.
A number of datatypes are available in python:
• int - integer: integer value (no floating point)
• float - float: floating point number
• str - string: sequence of characters
• list - list: list of datatypes
• bool - boolean: binary value (True or False)
101 Parametric Design: Coding into Grasshopper

<!-- image: slide_101 -->


---

# Slide 102

Variables
Values in any of these datatypes can be stored in variables. These variables
ideally have well-defined, good, and meaningful names, so that you can
understand them as a developer.
• myInt = 1
• myFloat = 3.1415
• myStr = “Eindhoven University of Technology ... !?”
• myList = [2, 4, 42, 3.1415, 5000]
• myBool = False
102 Parametric Design: Coding into Grasshopper

<!-- image: slide_102 -->


---

# Slide 103

Variable names
You can name a variable anything as long as it obeys the following three
rules:
• It can be only one word.
• It can use only letters, numbers, and the underscore (_) character.
• It can’t begin with a number.
Furthermore:
• Variable names starting with an underscore (_) are considered as
unuseful.
103 Parametric Design: Coding into Grasshopper

<!-- image: slide_103 -->


---

# Slide 104

Comments
Comments are used to document your code inline.
• ””” - comments multiple lines until ”””
• # - comments out a single line
104 Parametric Design: Coding into Grasshopper

<!-- image: slide_104 -->


---

# Slide 105

Operators
https://gitlab.tue.nl/CME/python/wikis/01_03_featuresofthelanguage
105 Parametric Design: Coding into Grasshopper

<!-- image: slide_105 -->


---

# Slide 106

Operators
Operators allow to perform operations on variables of particular data types.
For example:
- x + y : summation of two variables
- x != y : comparison of two variables (not equal)
- myString[1:5] : select character 1 to 5 of string (note that Python counts from
0)
See more: https://gitlab.tue.nl/CME/python/wikis/01_03_featuresofthelanguage
106 Parametric Design: Coding into Grasshopper

<!-- image: slide_106 -->


---

# Slide 107

107 Parametric Design: Coding into Grasshopper

<!-- image: slide_107 -->


---

# Slide 108

108 Parametric Design: Coding into Grasshopper

<!-- image: slide_108 -->


---

# Slide 109

109 Parametric Design: Coding into Grasshopper

<!-- image: slide_109 -->


---

# Slide 110

Operators: use cheat sheets! And plenty of Google…
• https://www.pythoncheatsheet.org/
• https://sinxloud.com/python-cheat-sheet-beginner-advanced/
110 Parametric Design: Coding into Grasshopper

<!-- image: slide_110 -->


---

# Slide 111

Python scripting in Dynamo and Grasshopper
With these operators and variables, you can already do a lot in a Dynamo
and Grasshopper environment.
➔ Simple scripting
https://gitlab.tue.nl/CME/python/wikis/02_02_dynamo
111 Parametric Design: Coding into Grasshopper

<!-- image: slide_111 -->


---

# Slide 112

Loops
https://gitlab.tue.nl/CME/python/wikis/01_04_simplescripting
112 Parametric Design: Coding into Grasshopper

<!-- image: slide_112 -->


---

# Slide 113

Loops
Three different types of loops:
- If-loop: "If this is true, do that"
- While-loop: "While this is true, do"
- For-loop: "For this entire sequence, do"
https://gitlab.tue.nl/CME/python/wikis/01_04_simplescripting
113 Parametric Design: Coding into Grasshopper

<!-- image: slide_113 -->


---

# Slide 114

If-then-else loop
114 Parametric Design: Coding into Grasshopper

<!-- image: slide_114 -->


---

# Slide 115

While loop
115 Parametric Design: Coding into Grasshopper

<!-- image: slide_115 -->


---

# Slide 116

For loop
116 Parametric Design: Coding into Grasshopper

<!-- image: slide_116 -->


---

# Slide 117

Boolean evaluations: and, or, not
117 Parametric Design: Coding into Grasshopper

<!-- image: slide_117 -->


---

# Slide 118

Functions
https://gitlab.tue.nl/CME/python/wikis/01_04_simplescripting
118 Parametric Design: Coding into Grasshopper

<!-- image: slide_118 -->


---

# Slide 119

Functions
• Functions are defined using def
• Functions need to be called
119 Parametric Design: Coding into Grasshopper

<!-- image: slide_119 -->


---

# Slide 120

Functions
• Functions are defined using def
• Functions need to be called
• Can accept arguments
120 Parametric Design: Coding into Grasshopper

<!-- image: slide_120 -->


---

# Slide 121

Functions
• Functions are defined using def
• Functions need to be called
• Can accept arguments
• Can have default values
121 Parametric Design: Coding into Grasshopper

<!-- image: slide_121 -->


---

# Slide 122

Functions
• Functions are defined using def
• Functions need to be called
• Can accept arguments
• Can have default values
• Can return values
122 Parametric Design: Coding into Grasshopper

<!-- image: slide_122 -->


---

# Slide 123

Standard functions!!!
https://docs.python.org/3/library/functions.html#open
123 Parametric Design: Coding into Grasshopper

<!-- image: slide_123 -->


---

# Slide 124

Modules and packages
https://gitlab.tue.nl/CME/python/wikis/01_05_modulesandpackages
124 Parametric Design: Coding into Grasshopper

<!-- image: slide_124 -->


---

# Slide 125

Modules
• A module is a library of functions
• Used to import extra functionality into your program
• Some are built-in
• math simple mathematic operations
• datetime dates and times
• os interfaces to operating system
• Some are external
• numpy math structured around arrays
• matplotlib for plotting data
• Pandas working with dataframes
• Some you write yourself
https://gitlab.tue.nl/CME/python/wikis/01_05_modulesandpackages
125 Parametric Design: Coding into Grasshopper

<!-- image: slide_125 -->


---

# Slide 126

Importing and using a module
• Importing a module
• Importing and renaming a module
https://docs.python.org/3/tutorial/modules.html
126 Parametric Design: Coding into Grasshopper

<!-- image: slide_126 -->


---

# Slide 127

Packages
• Used to organize your code
• __init__.py files needed to
indicate that this is a
package folder
• Users of the package can
import individual modules
from the package, for
example:
127 Parametric Design: Coding into Grasshopper

<!-- image: slide_127 -->


---

# Slide 128

128 Parametric Design: Coding into Grasshopper

<!-- image: slide_128 -->


---
