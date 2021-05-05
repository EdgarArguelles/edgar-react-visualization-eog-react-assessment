import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SelectedMetric from './components/SelectedMetric';

const useStyles = makeStyles({
  select: {
    textAlign: 'right',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        Cards
      </Grid>
      <Grid item xs={6} className={classes.select}>
        <SelectedMetric />
      </Grid>
      <Grid item xs={12}>
        Chart
      </Grid>
    </Grid>
  );
};
