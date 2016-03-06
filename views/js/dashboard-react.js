  render: function () {
    return (
      React.createElement("a", {href: this.props.url}, React.createElement("button", {type: "button", className: "btn btn-info open-sans-font"}, this.props.children))
    )
  }
});
var QuickActions = React.createClass({displayName: "QuickActions",
  getInitialState: function() {
    return {data: []};
  },
  getActions: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.getActions();
    setInterval(this.getActions, this.props.pollInterval);
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(QuickAction, {url: "/dashboard/new/app"}, "New web app"), 
        React.createElement(QuickAction, {url: "/dashboard/new/note"}, "Make a note"), 
        React.createElement(QuickAction, {url: "/dashboard/production/stats"}, "Stats"), 
        React.createElement(QuickAction, {url: "/help"}, "Help...")
      )
    )
  }
})
ReactDOM.render(
  React.createElement(QuickActions, {url: "/api/user/quickactions", pollInterval: 2000}),
  document.getElementById('quickactions-react')
)