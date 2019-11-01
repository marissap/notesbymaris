---
title: "Diving into React"
date: '2019-10-24'
image:
tags: ['react', 'web dev', 'learning']
description: 'React is a popular component-based, declarative library.'
---

*Note: I'm following the tutorial from Tania Rascia found [here](https://www.taniarascia.com/getting-started-with-react/) and the wonderful work of Ali Spittel found [here](https://welearncode.com/beginners-guide-react/)*

### Create React App
This is an environment that takes care of setting up all the little
thing.
- It installs a bunch of dependencies like React (duh), react-dom, react-scripts
  - react-scripts brings in the bulk of dependencies like webpack, babel, postcss, and eslint
    - webpack bundles js files and generates static assets ([here](https://survivejs.com/webpack/what-is-webpack/) is a good webpack explainer)
    - babel transforms your code to make it readable in the browser
    - postcss transforms styles with js and supports variables and mixins
    - eslint is for linting rules
- You'll get folders liked node_modules and files like yarn.lock, .gitignore, and package.json

### React Basics
##### JSX
- javascript + xml
- define an element, give it some html
```javascript
    const soccer = <h1 className="sport">Soccer</h1>
```
- expressions use {}
```javascript
const player = 'Ronaldo'
const statement = <h1>The best soccer player is {player}</h1>
```

##### Components
- these are the building blocks of a React application
- a js class or function that accepts inputs (properties) and returns a React element that is a section of the UI
- 2 types, class and simple (function)
  - class components have states whereas simple ones are stateless
  - class components can contain logic, manage loclal state, and can hold simple components
  - a simple component
```javascript
const SimpleHeader = () => {
    return (
        <h1>Hello World!</h1>
    )
}
```
  - a class component with a funcitional component inside
```javascript
class ClassHeader extends Component {
    render() {
        return (
            <SimpleHeader/>
        )
    }
}
```
- remember to export at the bottom so you can put your component wherever you wish!
```javascript
export default ClassHeader
```

##### Props
- instead of hardcoding data into our components we can pass it through when we create an instance of the component
- we do this with proporties of a components aka props
- let's take are earlier examples:
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

##### State
- right now props are just being passed with variables, state allows us to modify data
- if we want to change a state we need to bind it with the function that does the changing
  - this is done in the constructor
- this is an example of a state with an event handler
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