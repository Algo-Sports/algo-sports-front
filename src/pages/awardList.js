import { TrophyOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { Component } from 'react';
import Banner from '../components/banner';
import BaseLayout from '../layouts/baseLayout';

import {awradList} from '../data/data';

class Award extends Component {
    render() {
        const {award, title} = this.props;
        return (
            <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}}
                className = "text-align-center"
                style = {{color: award?"#ffd700":"white"}}>
                <TrophyOutlined className = "font-100"/><br/>
                {title}
            </Col>
        )
    }
}

class AwardList extends Component {
    render() {
        const award = awradList.map(
            item => {
                return (
                    <Award key = {item.id} title = {item.title} award = {item.award}/>
                )
            }
        );

        return (
            <BaseLayout>
                <Banner title="Award" subtitle="Who am I?" message="Check your Achievement" />
                <Row gutter = {[20, 40]} className = "padding-30">
                    {award}
                </Row>
            </BaseLayout>
        )
    }
}

export default AwardList;