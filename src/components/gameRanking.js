import React, { Component } from 'react'
import { Table } from 'antd';

class GameRanking extends Component {
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
    this.state.data = this.props.ranking;
  }

  render() {
    const { data, loading } = this.state;


    const columns = [
      {
        title: 'Ranking',
        dataIndex: 'ranking',
        width: '10%',
        sortDirections: ['descend', 'ascend'],
        sorter: {
          compare: (a, b) => b.ranking - a.ranking,
        }
      },
      {
        title: 'Username',
        dataIndex: 'username',
        width: '20%',
        filterMultiple: false,
        sorter: {
          compare: (a, b) => a.username < b.username,
        }
      },
      {
        title: 'Win',
        dataIndex: 'win',
        width: '10%',
        sorter: {
          compare: (a, b) => b.win - a.win,
        }
      },
      {
        title: 'Lose',
        dataIndex: 'lose',
        width: '10%',
        sorter: {
          compare: (a, b) => b.lose - a.lose,
        }
      },
      {
        title: 'Tie',
        dataIndex: 'tie',
        width: '10%',
        sorter: {
          compare: (a, b) => b.tie - a.tie,
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
        className={"rankingTable"}
      />
    )
  }
}


export default GameRanking;