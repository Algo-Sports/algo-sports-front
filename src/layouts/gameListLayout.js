import React, { Component } from 'react'
import {Row, Col} from 'antd';

class GameListLayout extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.subTitle = this.props.subTitle;
    }

    render() {
        return (
            <div>
                <Row style={{height: 200, backgroundColor: "#465580", paddingTop: "50px"}}>
                <Col lg = {{span: 8}}/>
                <Col lg = {{span: 8}}>
                    <h1 style={{fontSize:30,lineHeight:"30px", textAlign:"center"}}>
                    {this.props.title}
                    </h1>
                    <h2 style={{fontSize:20,lineHeight:"20px", textAlign:"center"}}>
                    {this.props.subTitle}
                    </h2>
                </Col>
                <Col lg = {{span: 8}}/>
                </Row>
                {this.props.children}            
            </div>
        )
    }
}

export default GameListLayout;
