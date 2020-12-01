/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Col, Row } from 'antd';
import GameDetail from '../components/gameDetail';
import { Link } from 'react-router-dom';
import GameParticipateCard from '../components/gameParticipateCard';
import CodeInputCard from '../components/codeInputCard';


class GameContentLayout extends Component {
  state = {
    isDescription : true,
  }

  constructor(props) {
    super(props);
    this.changeDescription = this.changeDescription.bind(this);
  }
  
  componentDidMount() {
    this.setState({game: this.props.game });
    this.setState({rankingList: this.props.ranking });
  }

  changeDescription() {
    this.setState({isDescription: !this.state.isDescription});
  }

  render() {
    return (
      <>
        <nav className = "game-detail-nav">
          
          {this.state.isDescription ?
            <Link to="/gamelist">
              <h1 style = {{lineHeight: "60px"}}>
                &lt; Back to Game List
              </h1>
            </Link>:
            <a>
              <h1 style = {{lineHeight: "60px"}} onClick = {this.changeDescription}>
                &lt; Back to Game Description
              </h1>
            </a>
          }
        </nav>
        {this.state.isDescription ? 
          <Row className = "padding-20" style = {{minHeight: "90%"}}>
            <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
              <Col lg={{ span: 14 }} md={{ span: 14 }} sm={{ span: 22 }} xs={{ span: 22 }} className = "outer-card-layout">
                <GameDetail game = {this.props.game} ranking = {this.props.ranking} gameResult = {this.props.gameResult}/>
              </Col>
              <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
              <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 1 }} xs={{ span: 1 }} />
              <Col lg={{ span: 7}} md={{ span: 7 }} sm={{ span: 22 }} xs={{ span: 22 }} className = "outer-card-layout">
                <GameParticipateCard game = {this.props.game}  changeDescription = {this.changeDescription} />
              </Col>
            <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
          </Row>
          :
          <Row className = "padding-20" style = {{minHeight: "90%"}}>
            <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
            <Col lg={{ span: 22 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 22 }} className = "outer-card-layout">
              <CodeInputCard/>
            </Col>
            <Col lg={{ span: 1 }} md={{ span: 1 }} sm={{ span: 1 }} xs={{ span: 1 }} />
          </Row>
        }
        {this.props.children}
      </>
    )
  }
}

export default GameContentLayout;