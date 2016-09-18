import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        let text = this.props.txt;
        return (
            <div>
                <div>Banaan</div>
                <b> {text} </b>
            </div>
        )
    }
}
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default value for txt'
};

ReactDOM.render(
    <App cat={5} />,
    document.getElementById('app')
 );
