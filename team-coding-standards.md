# Team Coding Standards

Development takes place as a shared team effort and collaboration.
As such, defining and adhering to a set of code quality standards and related guidelines is indispensable to our team efficiency and success.

### Code Quality Guidelines:

Core: 

- [KISS](https://en.wikipedia.org/wiki/KISS_principle). <br/>
- Stay [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).<br/> 
- Follow [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)) principles.

Adhering to the above principles alone ensures a world of difference in code quality compared to careless 
"one off" code. Simplicity is key. Code should never be repeated - DRY ensures at 
least some initial attempt at modularization, sensible structure, and reuse. SOLID expands on the basic 
foundation/direction of the first two.


### Code Formatting Guidelines:

For most Java formatting concerns our team follows standard Java conventions (not Google). 
Always format your code (with warnings enabled) before issuing a pull request.

Standard java entity order is as follows:
- package declaration
- import statements
- class declaration
- class fields (static first)
- class methods

Fields should be arranged in alphabetical order
Methods should be arranged in "depth-first search" order

Every developer must set up their IDE's Java formatter to follow these conventions and run their code 
formatter before issuing a pull request.

### Compiler/Interpreter warnings:
Should follow a "handle or declare"-type requirement. In this case it's 
"resolve or suppress." Your code should resolve warnings wherever possible. 
Where it's not possible your code must suppress the warning (preferably with a explaining comment).
Where there are known cases where the compiler or interpreter in question is issuing chatty, low-value
warnings that are more trouble than they are worth, we can tweak the standard code parser to stop 
emitting the warning in question.

For new code/pull requests, the ignoring of new warnings will result in a rejection. Please review 
and address any (new) warnings before issuing a pull request.


### Dependency usage and other standards:

- Be mindful about dependency management. Avoid duplication of dependencies, version conflicts between
dependencies, and unnecessarily brittleness or burden around dependency management.  
- Name things thoughtfully (i.e.: think about whether any other dev is going to understand what you meant)
- Keep code simple and concise. Favor breaking code into sub-components over "clever" or long-winded code. 
Generally speaking code that requires too much effort for a reasonably skilled peer to "grok" will be returned
with a request to make the code friendly on the eyes and brain. As we all know, needlessly complex code
not only wastes team time to understand, but tends to lead to regressions

### Test coverage:
- Full Unit/Intg test coverage is expected to be submitted with new code 




