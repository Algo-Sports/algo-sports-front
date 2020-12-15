import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const columns = [
  {
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
    title: "Ranking",
    dataIndex: "id",
    width: '10%',
    render: id => (
      <Link
        to = {"/game/result/"+id}
        className = "text-underline font-light-red">
        Ranking
      </Link>
    )
  },
]

class PastGameTable extends Component {
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
    this.data = this.props.data;
    this.showRanking = this.props.showRanking;
    this.category = this.props.category ? this.props.category : "general";
    this.columns = columns;
    if(this.showRanking === false) {
      this.columns = [
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
          dataIndex: "total_participants",
          width: '10%',
          render: (total_participants, row) => (
            <Link to={"/game/user/" + row.id} className="font-light-blue text-underline">
              {total_participants}
            </Link>
          )
        },
      ]
    }
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
      data: this.data,
    });
  }

  render() {
    const { data, loading } = this.state;

    return (
      <div className = "outer-card-layout" style={{boxShadow: "3px 3px 10px #000000", margin: "50px 0 50px 0"}}>
        <h2>
          Past Game
        </h2>
        <Table
          columns={this.columns}
          rowKey={game => {return game.gameinfo.title}}
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
export default PastGameTable;