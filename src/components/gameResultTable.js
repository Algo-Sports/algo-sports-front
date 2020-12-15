import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import { modalActions } from '../_actions/modal.action';
import CanvasLayout from '../layouts/CanvasLayout';
import GameCanvas from '../components/GameCanvas';

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
    this.tt = (
      <></>
    )
  }


  handleModal(element) {
    this.props.showModal(element);
  }

  componentDidMount() {
    const {patchMatchList, gameResult} = this.props;
    this.setState({
      ...this.state,
      data: gameResult !== undefined ? gameResult : [],
    })

    patchMatchList();
    console.log(gameResult);
  }

  renderCanvas(json) {
    return (
      <CanvasLayout>
        <GameCanvas canvaswidth="1000" canvasheight="800" start={true} json={json[this.props.user.user.pk]}>
        </GameCanvas>
      </CanvasLayout>
    )
  }

  render() {
    const { gameResult } = this.props;
    const { loading } = this.state;
    console.log(gameResult);


    const columns = [
      {
        title: '매칭 번호',
        dataIndex: 'id',
        sorter: true,
        width: '10%',
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '상태',
        dataIndex: 'status',
        width: '15%',
        render: (status, row) => {
          if(status === "IN") return (
            <p>
              In progress
            </p>
          )
          else if(status === "FN") return (
            <p>
              Finish
            </p>
          )
          else return (
            <p>
              Error
            </p>
          )
        }
      },
      {
        title: '승자',
        dataIndex: 'winner',
        width: '10%',
      },
      
      {
        title: '점수',
        dataIndex: 'score',
        width: '10%',
      },
      {
        title: "제출 시각",
        dataIndex: 'updated_at',
        width: '10%',
        render: (updated_at) => (
          <p style = {{lineHeight : "1rem"}}>
            {updated_at}
          </p>
        )
      },
      {
        title: '내용 보기',
        dataIndex: 'id',
        width: '10%',
        render: (id, row) => (
            row.status === "FN" ? 
            <button style = {{height : "1.5rem"}} onClick={() => {
              this.handleModal(this.renderCanvas(row.history)
            )
            }}>
              <span className = "font-black">
                Show
              </span>
            </button>:<></>
        )
      }
    ];

    return (
      <>
        <Table
          columns={columns}
          rowKey={ranking => ranking.username}
          dataSource={gameResult}
          loading={loading}
          onChange={this.handleTableChange}
          showSorterTooltip={false}
          className={"rankingTable"}
        />
      </>
    )
  }
}

function mapState(state) {
  const { show, element } = state.modal;
  const {user} = state.authentication;
  return { show, element, user };
}

const actionCreators = {
  showModal: modalActions.showModal,
};

const connectedGameResultTable = connect(mapState, actionCreators)(GameResultTable);
export { connectedGameResultTable as GameResultTable };