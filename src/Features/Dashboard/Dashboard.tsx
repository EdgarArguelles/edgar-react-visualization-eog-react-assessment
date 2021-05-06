import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { IState } from '../../store';
import SelectedMetric from './components/SelectedMetric';

const useStyles = makeStyles({
  select: {
    textAlign: 'right',
  },
});

export default () => {
  const classes = useStyles();
  const metrics = useSelector((state: IState) => state.dashboard.metrics);
  const showContent = !!metrics.filter(metric => metric.isSelected).length;

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        {showContent && <div>Cards</div>}
      </Grid>
      <Grid item xs={6} className={classes.select}>
        <SelectedMetric />
      </Grid>
      <Grid item xs={12}>
        {showContent && <div>Chart</div>}
      </Grid>
    </Grid>
  );
};
