import React, { Component } from 'react'
import {Link} from 'react-router-dom';
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
        to = {"/game/user/"+row.id}
        className = "font-light-blue text-underline">
        {count}
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
          dataIndex: "name",
          width: '20%',
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
          render: (count, row) => (
            <Link
              to = {"/game/user/"+row.id}
              className = "font-light-blue text-underline">
              {count}
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
export default PastGameTable;