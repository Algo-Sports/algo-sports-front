import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';


class ExperienceChart extends PureComponent {

  constructor(props) {
    super(props);
    this.data = props.data;
    this.height = props.height;
    this.minHeight = props.minHeight;
    this.dataKey = props.dataKey;
  }

  render() {
    return (
      <ResponsiveContainer width = "99%" height = {this.height} minHeight = {this.minHeight} >
        <AreaChart
          data={this.data}
          margin={{
            top: 10, right: 0, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={this.dataKey} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default ExperienceChart;
