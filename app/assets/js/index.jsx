var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('../../components/HelloWorld');
var Timestamp = require('../../components/Timestamp');
var MyButton = require('../../components/MyButton');
var getMuiTheme = require('material-ui/styles').getMuiTheme;
var darkTheme = require('../themes/darkTheme');

window.onload = function(e) {

    const style = {
        button: {
            margin: 12
        }
    };

    var clickCallback = function() {
        console.log("Override worked!");
    };

    // Render buttons on client
    ReactDOM.render(
        <div>
            <HelloWorld from='index.jsx, transformed, bundled, and running on the client' />
            <div id="timestampContainer" />
            <br />
            <MyButton theme={darkTheme} id='myButton1' label='default' style={style.button} />
            <MyButton theme={darkTheme} id='myButton2' label='primary' style={style.button} primary={true} clickCallback={clickCallback} />
        </div>,
        document.getElementById('app')
    );

    // Timestamp
    var timestampElement = ReactDOM.render(
        <Timestamp />,
        document.getElementById('timestampContainer')
    );
 
    setInterval(
        function() {
            timestampElement.setState({
                date: 'Updated through setState: ' + new Date().toString() 
            }); 
        }, 
        500
    );
};