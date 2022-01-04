import React from 'react';
import {Grid, Typography} from '@material-ui/core';

function Results() {
  return (
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Results page</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Results