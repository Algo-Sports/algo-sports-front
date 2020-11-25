import React, { Component } from 'react'

class GameDescription extends Component {
    state = {
        game : {
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            game: this.props.game
        }
    }

    render() {
        return (
            <div className = {"game-description-container"}>
                <h2>
                    {this.state.game.game_name}
                </h2>
                <hr/>
                {this.state.game.game_content}
            </div>
        )
    }
}


export default GameDescription;