var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var path = require('path');
var HelloWorld = require('./components/HelloWorld');
var Layout = require('./assets/pages/Layout');

var app = express();

// Static assets
app.use(
    '/assets',
    express.static(path.join(__dirname, 'assets'))
);

// Index
app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/html');

    var content = ReactDOMServer.renderToString(
        <HelloWorld from="server.jsx, running on the server" />
    );

    var html = ReactDOMServer.renderToStaticMarkup(
        <Layout content={content} />
    );

    res.end(html);

});

var server = app.listen(3333, function() {
    var addr = server.address();
    console.log('Listening @ http://%s:%d', addr.address, addr.port);
});