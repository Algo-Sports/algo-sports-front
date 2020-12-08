import { TrophyOutlined } from '@ant-design/icons';
import { render } from '@testing-library/react';
import { Col, Row } from 'antd';
import React, { Component } from 'react';
import Banner from '../components/banner';
import BaseLayout from '../layouts/baseLayout';

import {awradList} from '../data/data';

class Award extends Component {
    render() {
        const {award, title} = this.props;
        return (
            <Col lg = {{span: 6}} md = {{span: 8}} sm = {{span: 12}} xs = {{span: 12}} style = {{textAlign: "center", color: award?"#ffd700":"white"}}>
                <TrophyOutlined style = {{fontSize: 100}}/><br/>
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