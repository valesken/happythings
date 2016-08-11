var React = require('react');
var MuiThemeProvider = require('material-ui/styles').MuiThemeProvider;
var getMuiTheme = require('material-ui/styles').getMuiTheme;
var RaisedButton = require('material-ui').RaisedButton;
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

module.exports = React.createClass({

    handleClick: function() {
        this.state.clickCallback();
    },

    getInitialState: function() {
        return { 
            theme: this.props.theme || {},
            id: this.props.id,
            label: this.props.label,
            primary: this.props.primary || false,
            secondary: this.props.secondary || false,
            disabled: this.props.disabled || false,
            clickCallback: this.props.clickCallback || function() { console.log("clicked!"); },
            style: this.props.style || {}
        }
    },

    render: function() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(this.state.theme)}>
                <RaisedButton 
                    id={this.state.id} 
                    label={this.state.label} 
                    primary={this.state.primary} 
                    secondary={this.state.secondary} 
                    disabled={this.state.disabled} 
                    onTouchTap={this.handleClick}
                    style={this.state.style} />
            </MuiThemeProvider>
        );
    }
});