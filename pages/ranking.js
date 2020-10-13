import React, { Component } from 'react';
import BaseLayout from './layouts/baseLayout'
import RankingTable from '../pages/components/rankingTable'

class Ranking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout>
        <RankingTable/>
      </BaseLayout>
    )
  }
}

export default Ranking;