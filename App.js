import React from 'react';

class App extends React.Component {

    render(){
        return (
            <Button> <Icon/> React</Button>
        )
    }
}

class Button extends React.Component {
    render(){
        return(
            <button>{this.props.children}</button>
        )
    }
}

const Icon = () => {
    return (
        <span className="glyphicon"></span>
    )
};

export default App;
