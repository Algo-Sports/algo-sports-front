import React, { Component } from 'react'
import { Row, Col } from 'antd';

class TableCard extends Component {
  constructor(props) {
    super(props);
    this.tableTitle = this.props.tableTitle;
    this.data = this.props.data;
    this.dataComponet = this.data.map((data, index) => {
      return (
        <Row key = {index} className = "padding-20">
          {data["title"] ?
            <Col
              lg = {{span : 6}} md = {{span : 24}} sm = {{span : 24}} xs = {{span : 24}} 
              className = "padding-5 font-white font-20 line-height-20">  
              {data["title"]}
            </Col>
            : <></>
          }

          {
            data["description"] ?
              <Col lg = {data["title"] ? {span : 12} : {span: 18}}  md = {{span : 24}} sm = {{span : 18}} xs = {{span : 18}}
              className = "padding-5 font-white font-15">
                {data["description"]}
              </Col>
            : <></>
          }

          {
            data["date"] ?
            <Col
              lg = {{span : 6}}  md = {{span : 24}} sm = {{span : 6}} xs = {{span : 6}}
              className = "padding-5 font-13 font-light-red">
              {data["date"]}
            </Col>
            : <></>
          }

        </Row>
      )
    })

  }

  render() {
    return (
      <div style={{paddingTop: 20}}>
        <h1
          className = "font-20 text-underline">
          {this.tableTitle}
        </h1>
        <div className = "outer-card-layout-padding-10" style={{ boxShadow:"0px 3px 5px #000000",}}>
          {this.data ? this.dataComponet : <></>}
        </div>
      </div>
    )
  }
}


export default TableCard;