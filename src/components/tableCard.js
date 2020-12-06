import React, { Component } from 'react'
import { Row, Col } from 'antd';

class TableCard extends Component {
  constructor(props) {
    super(props);
    this.tableTitle = this.props.tableTitle;
    this.data = this.props.data;
    this.dataComponet = this.data.map((data, index) => {
      return (
        <Row key = {index} style={{padding: 20}}>
          {data["title"] ?
            <Col 
              lg = {{span : 6}} md = {{span : 24}} sm = {{span : 24}} xs = {{span : 24}} 
              style ={{fontSize: "20px", color: "white", lineHeight: "20px"}}
              className = "padding-5">
              {data["title"]}
            </Col>
            : <></>
          }

          {
            data["description"] ?
              <Col lg = {data["title"] ? {span : 12} : {span: 18}}  md = {{span : 24}} sm = {{span : 18}} xs = {{span : 18}} style ={{fontSize: "15px", color: "white"}}
              className = "padding-5">
                {data["description"]}
              </Col>
            : <></>
          }

          {
            data["date"] ?
            <Col lg = {{span : 6}}  md = {{span : 24}} sm = {{span : 6}} xs = {{span : 6}} style ={{fontSize: "13px", color: "#FF7596"}}
            className = "padding-5">
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
        <h1 style={{ fontSize: 20, textDecoration: "underline" }}>
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