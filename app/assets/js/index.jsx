var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('../../components/HelloWorld');
var Timestamp = require('../../components/Timestamp');
var MyButton = require('../../components/MyButton');
var MuiThemeProvider = require('material-ui/styles').MuiThemeProvider;
var getMuiTheme = require('material-ui/styles').getMuiTheme;
var darkTheme = require('../themes/darkTheme');

const style = {
    button: {
        margin: 12
    }
};

var clickCallback = function() {
    console.log("Override worked! Hooray!");
};

window.onload = function(e) {

    // Render main content
    ReactDOM.render(
        <MuiThemeProvider muiTheme={getMuiTheme(darkTheme)}>
            <div>
                <HelloWorld from='index.jsx, transformed, bundled, and running on the client' />
                <div id="timestampContainer" />
                <MyButton id='myButton1' label='default' style={style.button} />
                <MyButton id='myButton2' label='primary' style={style.button} primary={true} clickCallback={clickCallback} />
            </div>
        </MuiThemeProvider>,
        document.getElementById('app')
    );

    // Render Timestamp and set up interval to update timestamp regularly
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
        1000
    );
};