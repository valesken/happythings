var React = require('react');
var MUI = require('material-ui');

var bodyStyle = {
    fontFamily: "'Roboto', sans-serif",
};

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>Hello World</title>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' type='text/css' />
                    <script src="/assets/js/index.js"></script>
                </head>
                <body style={bodyStyle}>
                    <div id="reactContainer" />
                    <div id="reactHelloContainer" dangerouslySetInnerHTML={ {__html: this.props.content} } />
                    <div id="buttonContainer" />
                </body>
            </html>
        );
    }
});