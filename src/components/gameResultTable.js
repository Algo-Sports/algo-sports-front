import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import { modalActions } from '../_actions/modal.action';
import CanvasLayout from '../layouts/CanvasLayout';
import GameCanvas from '../components/GameCanvas';

const data = {
  "me": "user1",
  "winner": "user1",
  "lap": 2,
  "gameinfo": {
    "info": {
      "canvas": {
        "width": 1000,
        "height": 900
      },
      "ball": {
        "color": "#78E1D6",
        "radius": 20,
        "strokecolor": "black",
        "strokesize": 6,
        "num": 10
      },
      "laser": {
        "x": 900,
        "y": 450,
        "vector": {
          "x": -1,
          "y": 0
        },
        "color": "red"
      },
      "plate": {
        "color": "yellow",
        "width": 100,
        "height": 20
      },
      "wave": {
        "color": "rgba(31, 38, 59, 0.7)",
        "speed": 0.1,
        "nums": 15,
        "startpoint": 200,
        "pinspeed": 0.6
      },
      "maxlap": 10
    },
    "ball": [
      [
        119,
        493
      ],
      [
        750,
        275
      ],
      [
        31,
        530
      ],
      [
        778,
        650
      ],
      [
        233,
        515
      ],
      [
        329,
        463
      ],
      [
        454,
        704
      ],
      [
        496,
        513
      ],
      [
        359,
        163
      ],
      [
        502,
        318
      ]
    ]
  },
  "user1": {
    "useroutput": [
      {
        "plate": [
          {
            "x": 200,
            "y": 450,
            "angle": 20
          }
        ]
      },
      {
        "plate": [
          {
            "x": 200,
            "y": 450,
            "angle": 20
          },
          {
            "x": 200,
            "y": 450,
            "angle": 160
          }
        ]
      }
    ],
    "userresult": [
      {
        "hit_point": [
          {
            "x": 229.23804400163093,
            "y": 450
          },
          {
            "x": 0,
            "y": 257.6464418264308
          }
        ],
        "hit_ball": [
          5
        ]
      },
      { "hit_point": [{ "x": 229.23804400163093, "y": 450 }, { "x": 211.5470053837925, "y": 435.1554560206288 }, { "x": 210.1542661188574, "y": 443.0540728933227 }, { "x": 215.5572382686041, "y": 433.6958506180818 }, { "x": 244.79528227023502, "y": 444.33762834284096 }, { "x": 248.69163495088915, "y": 437.5889475357409 }, { "x": 226.77633867323848, "y": 429.612432015551 }, { "x": 217.47701384283772, "y": 445.71933509789216 }, { "x": 219.87412685207144, "y": 432.12463166905616 }, { "x": 237.5651654699099, "y": 446.96917564842744 }, { "x": 241.5753983547216, "y": 424.2260147963621 }, { "x": 244.81834461939937, "y": 426.94716981098094 }, { "x": 241.54322797254417, "y": 445.52127930741796 }, { "x": 223.85218935470564, "y": 430.6767353280468 }, { "x": 220.9752632977045, "y": 446.9925937715016 }, { "x": 232.13596778432785, "y": 427.66168655240784 }, { "x": 247.0547651522449, "y": 433.0916847253787 }, { "x": 239.4356531591455, "y": 446.2883738059842 }, { "x": 210.19760915751468, "y": 435.6465960812249 }, { "x": 206.65601666399058, "y": 441.78081421971325 }, { "x": 207.5689428811582, "y": 436.6033523616382 }, { "x": 219.16523614995077, "y": 446.3337977665055 }, { "x": 239.31085185331094, "y": 446.3337977665056 }, { "x": 248.93516480710088, "y": 438.25804031664575 }, { "x": 203.02272508853179, "y": 438.2580403166456 }, { "x": 201.19376736928965, "y": 439.7927180643005 }, { "x": 201.0497814064233, "y": 438.9761330908166 }, { "x": 201.60835842576043, "y": 439.94361686824885 }, { "x": 243.94071399720184, "y": 424.53589949387134 }, { "x": 201.60835842576094, "y": 439.9436168682491 }, { "x": 201.04978140642362, "y": 438.97613309081646 }, { "x": 201.19376736929, "y": 439.79271806430063 }, { "x": 203.02272508853252, "y": 438.2580403166451 }, { "x": 248.9351648071006, "y": 438.25804031664495 }, { "x": 239.31085185330878, "y": 446.3337977665063 }, { "x": 219.1652361499531, "y": 446.3337977665064 }, { "x": 207.56894288115922, "y": 436.60335236163786 }, { "x": 206.65601666399152, "y": 441.7808142197136 }, { "x": 210.19760915751613, "y": 435.6465960812245 }, { "x": 239.43565315914717, "y": 446.28837380598355 }, { "x": 247.05476515224538, "y": 433.09168472538016 }, { "x": 232.1359677843259, "y": 427.6616865524086 }, { "x": 220.9752632977031, "y": 446.9925937715011 }, { "x": 223.852189354704, "y": 430.67673532804736 }, { "x": 241.54322797254233, "y": 445.52127930741864 }, { "x": 244.81834461939812, "y": 426.9471698109774 }, { "x": 241.57539835472366, "y": 424.2260147963613 }, { "x": 237.5651654699122, "y": 446.9691756484265 }, { "x": 219.87412685207389, "y": 432.12463166905525 }, { "x": 217.47701384284, "y": 445.71933509789295 }, { "x": 226.77633867324215, "y": 429.61243201554976 }, { "x": 248.69163495088787, "y": 437.58894753573765 }, { "x": 244.795282270231, "y": 444.33762834284244 }, { "x": 215.5572382685998, "y": 433.6958506180835 }, { "x": 210.15426611885457, "y": 443.05407289332175 }, { "x": 211.54700538378916, "y": 435.15545602062997 }, { "x": 229.23804400162192, "y": 449.99999999999665 }, { "x": 1000, "y": 449.99999999999045 }], "hit_ball": [5] }
    ]
  },
  "user2": {
    "useroutput": [],
    "userresult": []
  }
}

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
    this.setState({
      ...this.state,
      data: this.props.result,
    })
    this.tt = (
      <CanvasLayout>
        <GameCanvas canvaswidth = "1000" canvasheight = "800" start = {true} json = {data}>
        </GameCanvas>
      </CanvasLayout>
    )
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