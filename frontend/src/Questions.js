import React from 'react';
import {Grid, Typography, Card, CardContent, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import background from './img/homepage_bg_img.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    height: 140,
    width: 100,
  }
}));

function Questions() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Grid container justifyContent="center" spacing={10}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Box my={10}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                      </Typography>
                      <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                      <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Questions page</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Questions