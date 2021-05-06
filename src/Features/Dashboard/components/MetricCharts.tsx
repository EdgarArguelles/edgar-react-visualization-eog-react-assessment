import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { client, getMultipleMeasurementsQuery as query } from '../../../common/graphql';
import { actions } from '../reducer';
import { Provider, useQuery } from 'urql';
import LinearProgress from '@material-ui/core/LinearProgress';
import { IState } from '../../../store';

export default () => {
  return (
    <Provider value={client}>
      <MetricCharts />
    </Provider>
  );
};

const MetricCharts = () => {
  const dispatch = useDispatch();
  const metrics = useSelector((state: IState) => state.dashboard.metrics);
  const [after] = useState(new Date().getTime() - 30 * 60 * 1000); // current time - 30 mins
  const input = metrics.filter(({ isSelected }) => isSelected).map(({ name }) => ({ metricName: name, after }));

  const [result] = useQuery({
    query,
    variables: {
      input,
    },
  });
  const { fetching, data, error } = result;
  useEffect(() => {
    if (error) {
      dispatch(actions.apiErrorReceived({ error: error.message }));
      return;
    }
    if (!data) return;
    const { getMultipleMeasurements } = data;
    dispatch(actions.setMeasurementHistory(getMultipleMeasurements));
  }, [dispatch, data, error]);

  if (fetching) return <LinearProgress />;

  return <div>Chart</div>;
};
