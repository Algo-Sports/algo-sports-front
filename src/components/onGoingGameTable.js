import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const initData = [{
  id: 0,
  gameinfo: {
    title: "",
    description: "",
    created_at: "",
    end: "",
  }
}]

const columns = [
  {
    key: "game_name",
    title: "Game Name",
    dataIndex: ["gameinfo", "title"],
    width: '15%',
    render: (name) => (
      <span style={{ lineHeight: "1rem" }}>
        {name}
      </span>
    )
  },
  {
    key: "description",
    title: "Description",
    dataIndex: ["gameinfo", "description"],
    width: '35%',
    render: (gameinfo) => (
      <span style={{ lineHeight: "1rem" }}>
        {gameinfo}
      </span>
    )
  },
  {
    key: "start",
    title: "start",
    dataIndex: ["gameinfo", "created_at"],
    width: '15%',
    render: (start) => (
      <span style={{ lineHeight: "1rem" }}>
        {start}
      </span>
    )
  },
  {
    key: "end",
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
    key: "participants",
    title: "participants",
    dataIndex: "total_participants",
    width: '10%',
    render: (total_participants, row) => (
      <Link
        to={"/game/user/" + row.id}
        className="font-light-blue">
        <UserOutlined style = {{fontSize: "1rem"}}/> &ensp;
        <span className = "text-underline" style={{ lineHeight: "1rem" }}>
          {total_participants}
        </span>
      </Link>
    )
  },
  {
    key: "game_id",
    title: "JOIN_GAME",
    dataIndex: "id",
    width: '10%',
    render: id => (
      <Link
        to={'/game/' + id}
        className="text-underline font-light-red">
        Join Game
      </Link >
    )
  },
]

const notLoggedInColums = [
  {
    key: "game_name",
    title: "Game Name",
    dataIndex: ["gameinfo", "title"],
    width: '15%',
  },
  {
    key: "description",
    title: "Description",
    dataIndex: ["gameinfo", "description"],
    width: '35%',
  },
  {
    key: "start",
    title: "start",
    dataIndex: ["gameinfo", "created_at"],
    width: '15%',
  },
  {
    key: "end",
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
    key: "total_participants",
    title: "",
    dataIndex: "total_participants",
    width: '10%',
    render: (total_participants, row) => (
      <Link to={"/game/user/" + row.id} className="font-light-blue text-underline">
        {total_participants}
      </Link>
    )
  },
]

class OnGoingGameTable extends Component {
  state = {
    data: [{
      key: 0,
      id: 0,
      gameinfo: {
        title: "",
        description: "",
        created_at: "",
        end: "",
      }
    }],
    pagination: {
      current: 1,
      pageSize: 10,
    },
  };

  render() {
    const {loggedIn, loading, data } = this.props;
    
    this.category = this.props.category ? this.props.category : "general";

    return (
      <div
        className="dark-bg padding-20"
        style={{ boxShadow: "3px 3px 10px #000000", margin: "50px 0 50px 0" }}>
        <h2>
          Ongoing Game
        </h2>
        <Table
          columns={loggedIn ? columns : notLoggedInColums}
          rowKey={game => {return game.gameinfo.title}}
          dataSource={loading ? initData : data}
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