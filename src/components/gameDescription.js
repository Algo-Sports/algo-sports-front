import React, { Component } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import PdfViewer from './pdfViewer'

class GameDescription extends Component {

  render() {
    const { game } = this.props;
    return (

      <Scrollbars
        className = "height-100" 
        style={{ minHeight: "300px"}}
      >
        <div className="game-description-container">
          <h2>
            {game.game_name}
          </h2>
          <hr />
          <PdfViewer filename={game.game_content} />
        </div>
      </Scrollbars>
    )
  }
}


export default GameDescription;