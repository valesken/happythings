var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('../../components/HelloWorld');
var Timestamp = require('../../components/Timestamp');
var MyButton = require('../../components/MyButton');

window.onload = function(e) {

    // Render buttons on client
    ReactDOM.render(
        <MyButton id='myButton' label='default' />,
        document.getElementById('buttonContainer')
    );

    // HelloWorld
    var helloWorldElement = ReactDOM.render(
        <HelloWorld from='server.jsx, running on the server' />,
        document.getElementById('reactHelloContainer')
    );

    // Timestamp
    var timestampElement = ReactDOM.render(
        <Timestamp />,
        document.getElementById('reactContainer')
    );
 
    setInterval(
        function() {
            helloWorldElement.setState({
                from: 'index.jsx, transformed, bundled, and running on the client'
            });
            timestampElement.setState({
                date: 'Updated through setState: ' + new Date().toString() 
            }); 
        }, 
        500
    );
};