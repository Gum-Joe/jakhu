var NavbarHead = React.createClass({
  render: function () {
    return (
      Dashboard
    )
  }
})
var NavbarHamburger = React.createClass({
  render: function () {
    return (
      <button className="hamburger hamburger--vortex" type="button" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    )
  }
})
