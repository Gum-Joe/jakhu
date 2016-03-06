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
var QuickAction = React.createClass({displayName: "QuickAction",
  render: function () {
    return (
      React.createElement("a", {href: this.props.url}, React.createElement("button", {type: "button", className: "btn btn-primary open-sans-font"}, this.props.children))
    )
  }
});
/**
 * Render all quick actions
*/
var QuickActions = React.createClass({displayName: "QuickActions",
  render: function () {
    var actionNodes = actions.map(function (action) {
      return (
        React.createElement(QuickAction, {url: action.url}, action.text)
      )
    })
    return (
      React.createElement("div", null, 
        actionNodes
      )
    )
  }
})
ReactDOM.render(
  React.createElement(QuickActions, null),
  document.getElementById('quickactions-react')
)