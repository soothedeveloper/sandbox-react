import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Homepage extends Component {
  state = {
    message: ""
  };

  render() {
    return (
      <div>
        <Header value={this.state.message} />

        <div>
          <form>
            <input
              type="text"
              value={this.state.message}
              onChange={event => {
                this.setState({ message: event.target.value });
                console.log(this.state.message);
              }}
            />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
