import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style = {{background: "#1F263B", borderRadius: 20, margin: 5, padding: 5}}>
                {this.props.children}
            </div>

        )
    }
}

export default Card;
