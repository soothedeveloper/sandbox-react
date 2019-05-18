import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header>Header</header>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Header;
