import React from 'react'
import { Component } from 'react'
import { GunGame } from './canvas/_actions/'


export default class GameCanvas extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef();
    this.ctx = null;

  }

  componentDidMount() {
    const {json} = this.props;

    this.ctx = this.canvasRef.current.getContext("2d")
    this.canvas = this.canvasRef.current;
    this.setCanvasSize(this.props.canvaswidth, this.props.canvasheight)
    
    this.game = new GunGame(this.canvas, json);

    this.game.animate();
  }

  setCanvasSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  render() {
    return (
      <canvas className="game-canvas" ref={this.canvasRef} />
    )
  }
}