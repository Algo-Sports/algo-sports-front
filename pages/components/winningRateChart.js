import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer, Tooltip, Label
} from 'recharts';

class WinningRateChart extends PureComponent {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.height = props.height;
    this.dateKey = props.dataKey;
    this.fillColor = props.fillColor;
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
          <Label dataKey = "gamename" style = {{color: "white"}}/>
          <Radar dataKey={this.dateKey} stroke="#1F263B" fill={this.fillColor} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

export default WinningRateChart;