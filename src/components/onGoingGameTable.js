import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'antd';

const columns = [
  {
    title: "Game Name",
    dataIndex: ["gameinfo", "title"],
    width: '15%',
    render: (name) => (
      <span style = {{lineHeight: "1rem"}}>
        {name}
      </span>
    )
  },
  {
    title: "Description",
    dataIndex: ["gameinfo", "description"],
    width: '35%',
    render: (gameinfo) => (
      <span style = {{lineHeight: "1rem"}}>
        {gameinfo}
      </span>
    )
  },
  {
    title: "start",
    dataIndex: ["gameinfo", "created_at"],
    width: '15%',
    render: (start) => (
      <span style = {{lineHeight: "1rem"}}>
        {start}
      </span>
    )
  },
  {
    title: "end",
    dataIndex: "end",
    width: '15%',
    render: (end) => (
      <span>
        {end ? end : "NOT ENDED"}
      </span>
    )
  },
  {
    title: "",
    dataIndex: "user_cnt",
    width: '10%',
    render: (count, row) => (
      <Link 
        to={"/game/user/" + row.id}
        className = "font-light-blue text-underline">
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
        className = "text-underline font-light-red">
        Join Game
      </Link >
    )
  },
]

const notLoggedInColums = [
  {
    title: "Game Name",
    dataIndex: ["gameinfo", "title"],
    width: '15%',
  },
  {
    title: "Description",
    dataIndex: ["gameinfo", "description"],
    width: '35%',
  },
  {
    title: "start",
    dataIndex: ["gameinfo", "created_at"],
    width: '15%',
  },
  {
    title: "end",
    dataIndex: "end",
    width: '15%',
    render: (end, row) => (
      <p>
        {end ? end : "NOT ENDED"}
      </p>
    )
  },
  {
    title: "",
    dataIndex: "user_cnt",
    width: '10%',
    render: (count, row) => (
      <Link to={"/game/user/" + row.id} className = "font-light-blue text-underline">
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
      <div 
        className = "dark-bg padding-20"
        style={{ boxShadow: "3px 3px 10px #000000", margin: "50px 0 50px 0" }}>
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