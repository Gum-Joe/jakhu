  render: function () {
    return (
      Dashboard
    )
  }
})
var NavbarHamburger = React.createClass({displayName: "NavbarHamburger",
  render: function () {
    return (
      React.createElement("button", {className: "hamburger hamburger--vortex", type: "button", "data-toggle": "collapse", "data-target": ".navbar-collapse"}, 
        React.createElement("span", {className: "hamburger-box"}, 
          React.createElement("span", {className: "hamburger-inner"})
        )
      )
    )
  }
})