import React from 'react';
import { useSelector } from 'react-redux';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { IState } from '../../../store';

export default () => {
  const allHistoryMeasurements = useSelector((state: IState) => state.dashboard.historyMeasurements);
  const historyMeasurements = allHistoryMeasurements.filter(({ measurements }) => measurements.length);
  const colors = ['purple', 'red', 'orange', 'brown', 'blue', 'green'];
  const createYAxis = () => {
    // get all units removing empty or duplicated
    const units = Array.from(new Set(historyMeasurements.filter(({ unit }) => unit).map(({ unit }) => unit)));
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
        <XAxis dataKey="at" tick={renderCustomAxisTick} tickCount={13} type="number" domain={['left', 'right']} />
        {createYAxis()}
        <Tooltip labelFormatter={label => new Date(label).toLocaleString()} />
        <Legend />
        {historyMeasurements.map((history, index) => (
          <Line
            type="monotone"
            dataKey="value"
            dot={false}
            stroke={colors[index]}
            name={history.metric}
            key={history.metric}
            data={history.measurements}
            yAxisId={history.unit}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
