import React, {Component} from "react";

class Header extends Component {

    state = {
        value: ""
    };

    render() {
        return (
            <div>
                <header>Header</header>
                <div>on est dans le header : {this.state.value}
                    <button onClick={() => this.props.handler('!!!!!!!!!!!!!!!!!!')}/>
                </div>
            </div>
        );
    }
}

export default Header;
