import React, { Component } from 'react';
import styles from '../../styles/card.module.css'
class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = {styles.card}>
                {this.props.children}
            </div>

        )
    }
}

export default Card;
