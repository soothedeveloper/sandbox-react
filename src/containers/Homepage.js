import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Homepage extends Component {

    constructor(props) {
        super(props)
    }

    handler = (val) => {
        let componentContext = this;
        componentContext.setState({
            value: val
        })
    };

    state = {
        value: ""
    };

    render() {
        return (
            <div>
                <Header handler = {this.handler} />
                <div>on est dans la homepage : {this.state.value}</div>
                <Footer/>
            </div>
        );
    }
}

export default Homepage;
