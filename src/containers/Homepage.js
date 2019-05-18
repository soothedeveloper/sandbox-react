import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Homepage extends Component {
    state = {
        sage: null
    };

    render() {
        return (
            <div>
                <Header/>
                <div>Homepage</div>
                <Footer/>
            </div>
        );
    }
}

export default Homepage