import React, { Component } from 'react'
import { Table } from 'antd';

class GameResultTable extends Component {
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
    this.state.data = this.props.result;
  }

  componentDidMount() {
  }

  render() {
    const { data, loading } = this.state;


    const columns = [
      {
        title: '매칭 번호',
        dataIndex: 'matching_id',
        sorter: true,
        width: '10%',
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'user1',
        dataIndex: 'user1',
        width: '10%',
      },
      {
        title: 'user2',
        dataIndex: '',
        width: '10%',
      },
      {
        title: '제출한 코드',
        dataIndex: '제출한 코드',
        width: '10%',
      },
      {
        title: '결과',
        dataIndex: 'tie',
        width: '10%',
      },
      {
        title: '내용 보기',
        dataIndex: 'result',
        width: '10%',
      }
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

export default GameResultTable;