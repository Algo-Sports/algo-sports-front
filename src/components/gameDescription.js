import React, { Component } from 'react'
import PdfViewer from './pdfViewer'

class GameDescription extends Component {

    render() {
        return (
            <div className = {"game-description-container"}>
                <h2>
                    {this.props.game.game_name}
                </h2>
                <hr/>
                <PdfViewer filename = {"/laysor.pdf"} />
            </div>
        )
    }
}


export default GameDescription;