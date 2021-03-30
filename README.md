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

Fields should be arranged in alphabetical order. 
Methods should be arranged in "depth-first search" order.

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
dependencies, and unnecessary brittleness or burden around dependency management.  
- Name things thoughtfully (i.e.: think about whether any other dev is going to understand what you meant)
- Keep code simple and concise. Favor breaking code into sub-components or shorter statements over "clever" or long-winded code. 
Generally speaking code that requires too much effort for a reasonably skilled peer to "grok" will be returned
with a request to make the code friendlier on the eyes and brain. As we all know, needlessly complex code
not only wastes team time to understand, but tends to lead to regressions.

### Test coverage:
- Full Unit/Intg test coverage is expected to be submitted with new code 

### Github/JIRA Workflows
- Ticket/branch work should both fulfill the work requirements described in the ticket, but on the other hand should not include any work that is *not* specified by the ticket
- Keep the content of each commit as well-focused as possible
- Add a short and clear work description to each commit 
- Preface each commit description with the JIRA ticket number: e.g.: "LINQ-65 - adding address table schema to the ddl sql"


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
