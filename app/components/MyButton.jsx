var React = require('react');
var MuiThemeProvider = require('material-ui/styles').MuiThemeProvider;
var getMuiTheme = require('material-ui/styles').getMuiTheme;
var colors = require('material-ui/styles').colors;
var RaisedButton = require('material-ui').RaisedButton;
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

module.exports = React.createClass({

    muiTheme: getMuiTheme(
        null, 
        {
            userAgent: 'all'
        }
    ),

    getInitialState: function() {
        return { 
            id: this.props.id,
            label: this.props.label,
            primary: this.props.primary || false,
            secondary: this.props.secondary || false,
            disabled: this.props.disabled || false
        }
    },

    render: function() {
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                <RaisedButton id={this.state.id} label={this.state.label} primary={this.state.primary} secondary={this.state.secondary} disabled={this.state.disabled} />
            </MuiThemeProvider>
        );
    }
});