import React, { Component } from 'react'

class GameParticipateCard extends Component {
  render() {
    return (
      <div className="height-100">
        <img
          src="/test-game-img.png"
          alt="게임 타이틀 이미지"
          width="100%"
        />
        <div className="padding-10">
          <h1>
            {this.props.game.game_name}
          </h1>
          <p style={{ color: "#FFFFFF" }}>
            {this.props.game.game_summary}
          </p>
        </div>
        <div className="padding-10">
          <button 
            style={{ backgroundColor: "#465580", color: "white", border: "none", height: "50px", width: "80%", margin: "0 10% 0 10%", fontSize: "1.3rem" }}
            onClick = {this.props.changeDescription}
          >
            Submit Code!
          </button>
        </div>

      </div>
    )
  }
}

export default GameParticipateCard;