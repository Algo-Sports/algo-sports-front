import React, { Component } from 'react'
import Link from 'next/link';
import { Col, Row } from 'antd';
import GameDetail from '../components/gameDetail';

const game = {
    game_id: null,
    game_name: "aaa game",
    game_content: "Lorem Ipsum asdaarewgew  rABSKJDVSAFDSAJDFSAKD alshdas;lkdas;dakjs das.,nda jdaslkdbas ,masdlh salka",
    
};

const rankingList = [
    {
        ranking: 1,
        user_id: 1,
        username: "singun11",
        win: 100,
        lose: 20,
        tie: 5,   
    },
    {
        ranking: 2,
        user_id: 2,
        username: "singun19",
        win: 50,
        lose: 30,
        tie: 2,
    }
]

class GameContentLayout extends Component {
    state = {
        game : {
            game_id : null,
            game_name : "",
        },
        rankingList: [],
    }

    constructor(props) {
        super(props);
        this.setState({...this.state, game: game});
        this.setState({...this.state, rankingList: rankingList});
    }

    

    render() {
        return (
            <>
                {this.props.game_id}
                <nav style = {{height: 60, backgroundColor: "#1F263B"}}>
                    <Link href = "/gameList">
                        <a>
                            <h1>
                                &lt; Back to Game List
                            </h1>
                        </a>
                    </Link>
                </nav>
                <Row>
                    <Col lg = {{span: 1}} md = {{span:1}} sm = {{span: 1}} xs = {{span : 1}}/>
                    <Col lg = {{span: 14}} md = {{span:14}} sm = {{span: 14}} xs = {{span : 14}} style={{padding: 10}}>
                        <div style = {{backgroundColor: "#1F263B"}}>
                            <GameDetail/>
                        </div>
                    
                    </Col>
                    <Col lg = {{span: 1}} md = {{span:1}} sm = {{span: 1}} xs = {{span : 1}}/>
                    <Col lg = {{span: 14}} md = {{span:14}} sm = {{span: 14}} xs = {{span : 14}}>
                    </Col>
                    <Col lg = {{span: 1}} md = {{span:1}} sm = {{span: 1}} xs = {{span : 1}}/>

                </Row>


                {this.props.children}
            </>
        )
    }
}

export default GameContentLayout;