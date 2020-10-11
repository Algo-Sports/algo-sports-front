import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer, Tooltip
} from 'recharts';


class WinningRateChart extends PureComponent {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.height = props.height;
  }

  render() {
    return (
      <ResponsiveContainer width = "99%" height = {this.height}>
        <RadarChart
          data={this.data} 
          margin={{
            top: 10, right: 0, left: 0, bottom: 0,
          }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="gamename"/>
          <PolarRadiusAxis />
          <Tooltip />
          <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default WinningRateChart;