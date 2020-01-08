---
title: "Diving into React"
description: 'React is a popular component-based, declarative library.'
date: '2019-12-21'
image:
tags: ['react', 'web-dev', 'learning']
---

### Create React App
This is an environment that takes care of setting up all the little things. It installs a host of dependencies such as React, react-dom, and react-scripts. Let's briefly run through the function of each dependency.

- React-scripts brings in the bulk of dependencies like webpack, babel, postcss, and eslint.  

- Webpack bundles js files and generates static assets ([here](https://survivejs.com/webpack/what-is-webpack/) is a good webpack explainer).  

- Babel transforms your code to make it readable in the browser. Postcss transforms styles with js and supports variables and mixins.  

- Eslint is for linting rules. 

In addition, you'll get node_modules and files like yarn.lock, .gitignore, and package.json.

### React Basics
#### JSX
JSX is a mix of JavaScript and XML. It essentially allows you to use HTML with JS. In the example below we define an element like you would in vanilla JS and associate it with some HTML.
```javascript
    const soccer = <h1 className="sport">Soccer</h1>
```
Additionally expressions can be used with curly brackets.
```javascript
const player = 'Ronaldo'
const statement = <h1>{player} is the best</h1>
```

#### Components
Components are the building blocks of a React application. It can be thought of as a JS class or function that accepts inputs (properties) and returns a React element. The React element is a section of the UI.

There are two types of functions—_class_ and simple (functional). Class components have states whereas simple ones are stateless. Furthermore, class components can contain logic, manage local states, and hold simple components.

An example of a simple component:
```javascript
const SimpleHeader = () => {
    return (
        <h1>Hello World!</h1>
    )
}
```

An example of a class component with a simple component inside:
```javascript
class ClassHeader extends Component {
    render() {
        return (
            <SimpleHeader/>
        )
    }
}
```

In order to be able to use this component within the UI of your application you must export it at the end of the file.
```javascript
export default ClassHeader
```

#### Props
Instead of hardcoding data into our components, React allows us to pass it through when we create an instance of the component. This allows us to use the same component in multiple places without repeating data. Remember a class component can take inputs, these inputs are called _props_ (shorthand for properties).

Let's return to our earlier examples where we create a variable holding the data and pass it along to the component.
```javascript
const SimpleHeader = () => {
    return (
        <h1>{this.props.greeting}</h1>
    )
}
class ClassHeader extends Component {
    render() {
        const hello = 'Hello, World!'
        return (
            <SimpleHeader greeting={hello}/>
        )
    }
}
```

#### State
As of right now, props are being passed with variables. The variable doesn't change unless we go back into the code and explicitly do so. __States__ allow us to modify data dynamically and based on user interaction (events). If we want to change a state we need to bind it with the function that does the changing. This is done in the constructor of the component.

In the following example of a state with an event handler we can see a two new functions added to our component called _constructor_ and _click_. _Constructor_ does a couple things. First, it binds the event of a click to the component and second, it sets the initial state at component construction. _Click_ is our event handler. It actually sets the state and tells what to set within the state.
```javascript
class Header extends Component {
    constructor () {
        super()
        this.click = this.click.bind(this);
        this.state = {
            greeting: 'Welcome dude!'
        }
    }

    click(e) {
        this.setState({
            greeting: 'Hey there bud!'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.greeting}</h2>
                <button onClick={this.click}>Click me</button>
            </div>
        )
    }
}
```

### Resources
1) [Getting Started with React](https://www.taniarascia.com/getting-started-with-react/) by Tania Rascia
2) [Begineers Guide to React](https://welearncode.com/beginners-guide-react/) by Ali Spittel
3) [Learn React in 10 Tweets](https://dev.to/chrisachard/learn-react-in-10-tweets-with-hooks-59bc) by Chris Achard