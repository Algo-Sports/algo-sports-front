import React, { useRef, useEffect } from 'react'
import { Component } from 'react'
import {initJson, GunGame} from './canvas/_actions/'


export default class GameCanvas extends Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef();
    this.ctx = null;
    
  }

  componentDidMount() {
      this.ctx = this.canvasRef.current.getContext("2d")    
      this.canvas = this.canvasRef.current;
      this.setCanvasSize(this.props.canvaswidth, this.props.canvasheight)
      this.json = initJson(this.canvas.width, this.canvas.height);
      this.game = new GunGame(this.canvas, this.json);
      
      this.game.animate();
  }

  setCanvasSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  render() {
    return (
        <canvas className = "game-canvas" ref={this.canvasRef} />
    )
  }
}