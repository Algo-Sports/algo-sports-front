import React, { Component } from 'react'
import Link from 'next/link';
import { Table, Tooltip } from 'antd';

const data = [
  {
    "name": "AAAA AAAA",
    "id": 1,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":1100,
  },
  {
    "name": "BBBB BB",
    "id": 2,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":900,
  },
  {
    "name": "CC",
    "id": 3,
    "creator" : "singun11",
    "description" : "Go! A! B! C! D! E!",
    "start": "2020.11.11 23:35",
    "end": "2020.11.12 01:35",
    "currentUser":1200,
  }
]

const columns = [
  {
    title: "Game Name",
    dataIndex: "name",
    width: '10%',
  },
  {
    title: "Creator",
    dataIndex: "creator",
    width: '10%',
  },
  {
    title: "Description",
    dataIndex: "description",
    width: '30%',
  },
  {
    title: "start",
    dataIndex: "start",
    width: '15%',
  },
  {
    title: "end",
    dataIndex: "end",
    width: '15%',
  },
  {
    title: "",
    dataIndex: "currentUser",
    width: '10%',
  },
  {
    title: "",
    dataIndex: "id",
    width: '10%',
    render: id => (
      <Link href = {"/game/"+id}>
        <a>
          Join Game
        </a>
      </Link>
    )
  },
]

class OnGoingGameTable extends Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  constructor(props) {
    super(props);
    this.category = this.props.category ? this.props.category : "general";
  }

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }
  
  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch(params = {}) {
    this.setState({ loading: true });

    // request

    this.setState({
      ...this.state,
      loading: false,
      data: data,
    });
  }

  render() {
    const { data, pagination, loading } = this.state;

    return (
      <div style={{ backgroundColor: "#1F263B", boxShadow: "3px 3px 10px #000000", margin: "50px 0 50px 0", padding: "20px" }}>
        <h2>
          Ongoing Game
        </h2>
        <Table
          columns={columns}
          rowKey={ranking => ranking.username}
          dataSource={data}
          loading={loading}
          onChange={this.handleTableChange}
          showSorterTooltip={false}
          className = {"onGoingGameTable"}
          pagination = {false}
        />

      </div>
    )
  }
}
export default OnGoingGameTable;