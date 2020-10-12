import React, { Component } from 'react';
import styles from '../../styles/card.module.css'
class Card extends Component {
    constructor(props) {
        super(props);
        this.minHeight = props.minHeight;
        this.maxHeight = props.maxHeight;
    }

    render() {
        return(
            <div className = {styles.card} style = {{height: "auto", minHeight: this.minHeight, maxHeight: this.maxHeight}}>
                {this.props.children}
            </div>

        )
    }
}

export default Card;
