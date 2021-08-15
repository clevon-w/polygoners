import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, ButtonGroup, Button, Grid } from '@material-ui/core';
import theme from './theme';

function Appbar() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Typography variant="h4" style={{color: theme.palette.primary.contrastText, fontWeight: 'bold'}}>
            Polygon
          </Typography>
          <ButtonGroup style={{color: theme.palette.secondary.contrastText}} variant="text" aria-label="text primary button group">
            <Button style={{color: theme.palette.secondary.contrastText, borderColor: theme.palette.secondary.contrastText}} component={Link} to="/">
              Take the Quiz
            </Button>
            <Button style={{color: theme.palette.secondary.contrastText}} component={Link} to="/types">
              Personality Types
            </Button>
          </ButtonGroup>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar