/**
 * React stuff
 * Action should be from server
*/
var actions = [
    {
      "text": "New web app",
      "url": "/dashboard/new/app"
    },
    {
      "text": "Make a note",
      "url": "/dashboard/note"
    },
    {
      "text": "Stats",
      "url": "/dashboard/stats"
    },
    {
      "text": "Help...",
      "url": "/help"
    }
  ]
/**
 * Quick action
*/
var QuickAction = React.createClass({
  render: function () {
    return (
      <a href={this.props.url}><button type="button" className="btn btn-primary open-sans-font">{this.props.children}</button></a>
    )
  }
});
/**
 * Render all quick actions
*/
var QuickActions = React.createClass({
  render: function () {
    var actionNodes = actions.map(function (action) {
      return (
        <QuickAction url={action.url}>{action.text}</QuickAction>
      )
    })
    return (
      <div>
        {actionNodes}
      </div>
    )
  }
})
ReactDOM.render(
  <QuickActions />,
  document.getElementById('quickactions-react')
)
