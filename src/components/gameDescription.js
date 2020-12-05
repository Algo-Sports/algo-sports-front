import React, { Component } from 'react'
import PdfViewer from './pdfViewer'

class GameDescription extends Component {

    render() {
        const {game} = this.props;
        return (
            <div className = {"game-description-container"}>
                <h2>
                    {game.game_name}
                </h2>
                <hr/>
                <PdfViewer filename = {game.game_content} />
            </div>
        )
    }
}


export default GameDescription;