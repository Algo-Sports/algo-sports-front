import React, { Component } from 'react'
import Scrollbars from 'react-custom-scrollbars';
import PdfViewer from './pdfViewer'

class GameDescription extends Component {

  render() {
    const { game, loading } = this.props;
    return (

      <Scrollbars
        className = "height-100" 
        style={{ minHeight: "300px"}}
      >
        <div className="game-description-container">
          <h2>
            {loading ? "" : game.gameinfo.title}
          </h2>
          <hr />
          {loading ? "" : game.gameinfo.description}
          <PdfViewer filename={loading ? "" : game.game_content} />
        </div>
      </Scrollbars>
    )
  }
}


export default GameDescription;