import { TrophyOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { Component } from 'react';
import Banner from '../components/banner';
import BaseLayout from '../layouts/baseLayout';

class AwardList extends Component {
    render() {
        return (
            <BaseLayout>
                <Banner title="Award" subtitle="Who am I?" message="Check your Achievement" />
                <Row gutter = {[20, 40]} className = "padding-30">
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"#ffd700"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        Beta Tester
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        게임 10개 이상 참가하기
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        게임 15개 이상 참가하기
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        게임 20개 이상 참가하기
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        게임 30개 이상 참가하기
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        게임 50개 이상 참가하기
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        게임 100개 이상 참가하기
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        TOP 10
                    </Col>
                    <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color:"white"}}>
                        <TrophyOutlined style = {{fontSize: 100}}/><br/>
                        TOP 100
                    </Col>
                </Row>
            </BaseLayout>
        )
    }
}

export default AwardList;