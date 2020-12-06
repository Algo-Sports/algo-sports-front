import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'antd';

const columns = [
  {
    title: "Game Name",
    dataIndex: "name",
    width: '15%',
  },
  {
    title: "Creator",
    dataIndex: "creator",
    width: '10%',
  },
  {
    title: "Description",
    dataIndex: "description",
    width: '25%',
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
    dataIndex: "user_cnt",
    width: '10%',
    render: (count, row) => (
      <Link to={"/game/user/" + row.id} style={{ color: "#7095FF", textDecoration: "underline" }}>
        {count}
      </Link>
    )
  },
  {
    title: "",
    dataIndex: "id",
    width: '10%',
    render: id => (
      <Link
        to={'/game/'+ id}
        style={{ color: "#FF7596", textDecoration: "underline" }}>
        Join Game
      </Link >
    )
  },
]

const notLoggedInColums = [
  {
    title: "Game Name",
    dataIndex: "name",
    width: '15%',
  },
  {
    title: "Creator",
    dataIndex: "creator",
    width: '10%',
  },
  {
    title: "Description",
    dataIndex: "description",
    width: '25%',
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
    dataIndex: "user_cnt",
    width: '10%',
    render: (count, row) => (
      <Link to={"/game/user/" + row.id} style={{ color: "#7095FF", textDecoration: "underline" }}>
        {count}
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

  render() {
    const {data, loggedIn} = this.props;
    const { loading } = this.state;
    this.category = this.props.category ? this.props.category : "general";

    return (
      <div style={{ backgroundColor: "#1F263B", boxShadow: "3px 3px 10px #000000", margin: "50px 0 50px 0", padding: "20px" }}>
        <h2>
          Ongoing Game
        </h2>
        <Table
          columns={loggedIn ? columns : notLoggedInColums}
          rowKey={ranking => ranking.username}
          dataSource={data}
          loading={loading}
          onChange={this.handleTableChange}
          showSorterTooltip={false}
          className={"onGoingGameTable"}
          pagination={false}
        />

      </div>
    )
  }
}
export default OnGoingGameTable;