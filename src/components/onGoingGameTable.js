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