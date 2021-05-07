import React from 'react';
import { useSelector } from 'react-redux';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { IState } from '../../../store';

export default () => {
  const allMetrics = useSelector((state: IState) => state.dashboard.metrics);
  const metrics = allMetrics.filter(({ isSelected, history }) => isSelected && history.length);
  const colors = ['purple', 'red', 'orange', 'brown', 'blue', 'green'];
  const createYAxis = () => {
    // get all units removing empty or duplicated
    const units = Array.from(new Set(metrics.filter(({ unit }) => unit).map(({ unit }) => unit)));
    return units.map(unit => (
      <YAxis
        key={unit}
        yAxisId={unit}
        tickCount={10}
        label={{ value: unit, angle: -90, position: 'insideTopLeft', dy: 10 }}
      />
    ));
  };

  const renderCustomAxisTick = ({ x, y, payload }: { x: number; y: number; payload: any }) => (
    <text x={x - 20} y={y + 15}>
      {new Date(payload.value).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' })}
    </text>
  );

  return (
    <ResponsiveContainer>
      <LineChart>
        <XAxis dataKey="at" tick={renderCustomAxisTick} type="number" domain={['left', 'right']} />
        {createYAxis()}
        <Tooltip labelFormatter={label => new Date(label).toUTCString()} />
        <Legend />
        {metrics.map((metric, index) => (
          <Line
            type="monotone"
            dataKey="value"
            dot={false}
            stroke={colors[index]}
            name={metric.name}
            key={metric.name}
            data={metric.history}
            yAxisId={metric.unit}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
