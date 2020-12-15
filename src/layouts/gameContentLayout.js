/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Col, Row } from 'antd';
import GameDetail from '../components/gameDetail';
import { Link } from 'react-router-dom';
import CodeInputCard from '../components/codeInputCard';

import { authHeader, handleTokenResponse } from '../_helpers';
import { BASE_API_URL } from '../_constants';


const langList = [
  {
    value: 'python', label: 'Python (3.8.1)',
    language_code: 38,
  },
  {
    value: 'c', label: 'C (GCC 9.2.0)',
    language_code: 7,
  },
  {
    value: 'cpp', label: 'C++ (GCC 9.2.0)',
    language_code: 9,
  }
];

class GameContentLayout extends Component {
  state = {
    code: "",
    lang: langList[0],
  }

  constructor(props) {
    super(props);
    this.handleLang = this.handleLang.bind(this);
    this.handleCode = this.handleCode.bind(this);
    this.submitCode = this.submitCode.bind(this);
  }

  componentDidMount() {
  }

  handleLang(lang) {
    this.setState({
      ...this.state,
      lang: lang,
    })
  }

  handleCode(code) {
    this.setState({
      ...this.state,
      code: code,
    })
  }

  /**
   * 코드를 제출하는 함수 (게임방에 참여함을 의미)
   */
  submitCode() {
    console.log("submitCode");
    const { code, lang } = this.state;
    const { game } = this.props;

    // console.log(JSON.stringify(game));
    // console.log(JSON.stringify({ 'code': code }));
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({ "code": code, "gamerooms": game.id, "programming_language": lang.language_code }),
      headers: authHeader(),
    }

    fetch(`${BASE_API_URL}/codes/user/`, requestOptions)
      .then(res => handleTokenResponse(res, `${BASE_API_URL}/codes/user/`, requestOptions))
      .then(res => {
        this.handleCode("");
        return this.runMatch(res.id, game.id);
      })
      .catch(e => {
        console.log(e);
      });
  }

  /**
   * 실제 Match를 생성하는 함수
   * @param {number} code_id 
   * @param {number} game_id 
   */
  runMatch(code_id, game_id) {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({ "mycode_id": code_id, "gameroom_id": game_id }),
      headers: authHeader(),
    }

    fetch(`${BASE_API_URL}/games/match/`, requestOptions)
      .then(res => handleTokenResponse(res, `${BASE_API_URL}/games/match/`, requestOptions))
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(e => {
        console.log(e);
      });
  }
  
  render() {
    const { lang, code } = this.state;
    const { game, ranking, gameResult, loading, patchMatchList } = this.props;
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
            <GameDetail game={game} ranking={ranking} loading={loading.game_content} gameResult={gameResult}  patchMatchList={patchMatchList} />
          </Col>
          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 1 }} xs={{ span: 1 }} />
          <Col
            lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 22 }} xs={{ span: 22 }}
            className="outer-card-layout">
            <CodeInputCard game={game} lang={lang} setLang={this.handleLang} langList={langList} code={code} setCode={this.handleCode} submitCode={this.submitCode} />
          </Col>
          <Col lg={{ span: 0 }} md={{ span: 0 }} sm={{ span: 1 }} xs={{ span: 1 }} />
        </Row>
      </>
    )
  }
}

export default GameContentLayout;