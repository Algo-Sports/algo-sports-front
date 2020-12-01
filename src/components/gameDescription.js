import React, { Component } from 'react'

class GameDescription extends Component {

    render() {
        return (
            <div className = {"game-description-container"}>
                <h2>
                    {this.props.game.game_name}
                </h2>
                <hr/>
                {this.props.game.game_content}
            </div>
        )
    }
}


export default GameDescription;