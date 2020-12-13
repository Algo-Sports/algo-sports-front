/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Col, Row } from 'antd';
import GameDetail from '../components/gameDetail';
import { Link } from 'react-router-dom';
import CodeInputCard from '../components/codeInputCard';


class GameContentLayout extends Component {
  state = {
    code: "",
    lang: "",
    langList: [
      {
        id: 1,
        name: "python",
      },
      {
        id: 2,
        name: "c++",
      },
      {
        id: 3,
        name: "c",
      },
    ],
  }

  constructor(props) {
    super(props);
    this.handleCode = this.handleCode.bind(this);
    this.submitCode = this.submitCode.bind(this);
  }

  componentDidMount() {
  }

  handleCode(code) {
    this.setState({
      ...this.state,
      code: code,
    })
  }

  submitCode() {
    const { code } = this.state;
    const { game } = this.props;

    console.log(JSON.stringify(game));
    console.log(JSON.stringify({ 'code': code }));
  }

  render() {
    const { game, ranking, gameResult, loading } = this.props;
    return (
      <>
        <nav className="game-detail-nav">
          <Link to="/gamelist">
            <h1 className="line-height-60">
              &lt; Back to Game List
            </h1>
          </Link>
        </nav>
        <Row className="padding-20 min-height-90">
          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 1 }} xs={{ span: 1 }} />
          <Col
            lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 22 }} xs={{ span: 22 }}
            className="outer-card-layout">
            <GameDetail game={game} ranking={ranking} gameResult={gameResult} loading={loading.game_content} />
          </Col>
          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 1 }} xs={{ span: 1 }} />
          <Col
            lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 22 }} xs={{ span: 22 }}
            className="outer-card-layout">
            <CodeInputCard game={game} code={this.state.code} setCode={this.handleCode} submitCode={this.submitCode} />
          </Col>
          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 1 }} xs={{ span: 1 }} />
        </Row>
      </>
    )
  }
}

export default GameContentLayout;