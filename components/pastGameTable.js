import React, { Component } from 'react'
import Link from 'next/link';
import { Table, Tooltip } from 'antd';

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
    dataIndex: "currentUser",
    width: '10%',
    render: (count, row) => (
      <Link  href = {"/game/user/"+row.id}>
        <a  style={{color:"#7095FF", textDecoration:"underline"}}>
          {count}
        </a>
      </Link>
    )
  },
  {
    title: "Ranking",
    dataIndex: "id",
    width: '10%',
    render: id => (
      <Link href = {"/game/result/"+id}>
        <a style={{color:"#FF7596", textDecoration:"underline"}}>
          Ranking
        </a>
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
    if(this.showRanking == false) {
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
            <Link  href = {"/game/user/"+row.id}>
              <a  style={{color:"#7095FF", textDecoration:"underline"}}>
                {count}
              </a>
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
    const { data, pagination, loading } = this.state;

    return (
      <div style={{ backgroundColor: "#1F263B", boxShadow: "3px 3px 10px #000000", margin: "50px 0 50px 0", padding: "20px" }}>
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