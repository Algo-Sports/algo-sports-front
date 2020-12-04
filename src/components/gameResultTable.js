import React, { Component } from 'react'
import { Button, Table } from 'antd';
import { connect } from 'react-redux';
import { modalActions } from '../_actions/modal.action';
import Modal from './Modal';
import Banner from './banner';

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
  }

  tt = (
    <p>
      this is test modal
    </p>
  )
  
  handleModal(element) {
    this.props.showModal(element);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      data: this.props.result,
    })
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
      <>
        <Table
          columns={columns}
          rowKey={ranking => ranking.username}
          dataSource={data}
          loading={loading}
          onChange={this.handleTableChange}
          showSorterTooltip={false}
          className={"rankingTable"}
        />
        {this.tt}
        <button onClick = {() => {this.handleModal(this.tt)}}>
          test
        </button>
      </>
    )
  }
}

function mapState(state) {
  const { show, element } = state.modal;
  return { show, element };
}

const actionCreators = {
  showModal: modalActions.showModal,
};

const connectedGameResultTable = connect(mapState, actionCreators)(GameResultTable);
export { connectedGameResultTable as GameResultTable };