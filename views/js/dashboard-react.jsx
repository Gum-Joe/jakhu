var QuickAction = React.createClass({
  render: function () {
    return (
      <a href={this.props.url}><button type="button" className="btn btn-info open-sans-font">{this.props.children}</button></a>
    )
  }
});
var QuickActions = React.createClass({
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
      <div>
        <QuickAction url="/dashboard/new/app">New web app</QuickAction>
        <QuickAction url="/dashboard/new/note">Make a note</QuickAction>
        <QuickAction url="/dashboard/production/stats">Stats</QuickAction>
        <QuickAction url="/help">Help...</QuickAction>
      </div>
    )
  }
})
ReactDOM.render(
  <QuickActions url="/api/user/quickactions" pollInterval={2000}/>,
  document.getElementById('quickactions-react')
)
