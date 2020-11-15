import React, { Component } from 'react';
import { rankingData } from '../dev/data';
import { Table } from 'antd';

class RankingTable extends Component {

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

    console.log(sorter.field);
  };

  fetch(params = {}) {
    this.setState({ loading: true });

    // request

    this.setState({
      ...this.state,
      loading: false,
      data: rankingData,
    });
  }

  render() {
    const { data, pagination, loading } = this.state;

    
    const columns = [
      {
        title: 'Ranking',
        dataIndex: 'ranking',
        sorter: true,
        width: '20%',
        sortDirections: ['descend', 'ascend'],
        sorter: {
          compare: (a,b) => b.ranking - a.ranking,
        }
      },
      {
        title: 'Username',
        dataIndex: 'username',
        width: '20%',
        filterMultiple: false,
        sorter: {
          compare: (a,b) => a.username < b.username,
        }
      },
      {
        title: 'Comment',
        dataIndex: 'comment',
        width: '40%',
        ellipsis: true,
      },
      {
        title: 'Score',
        dataIndex: 'score',
        width: '20%',
        sorter: {
          compare: (a,b) => b.score - a.score,
        }
      },
    ];

    return (
      <Table
        columns={columns}
        rowKey={ranking => ranking.username}
        dataSource={data}
        loading={loading}
        onChange={this.handleTableChange}
        showSorterTooltip={false}
        className = {"rankingTable"}
      />
    )
  }
}


export default RankingTable;