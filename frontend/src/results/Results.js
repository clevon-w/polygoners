import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Results(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Results page</Typography>
          <Typography>{"cca:" + props.results.cca}</Typography>
          <Typography>{"exp:" + props.results.exp}</Typography>
          <Typography>
            {"relationship:" + props.results.relationship}
          </Typography>
          <Typography>{"health:" + props.results.health}</Typography>
          <Typography>{"academic:" + props.results.academic}</Typography>
          <Typography>{"hustle:" + props.results.hustle}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Results;
