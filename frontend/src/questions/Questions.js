import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography, Card, CardContent, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, LinearProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import background from '../img/homepage_bg_img.jpeg';

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

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

function Questions() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("/questions/").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setQuestions(jsonRes.questionsJson))
  })

  const initialFormData = Object.freeze({
    cca0: "",
    cca1: "",
    cca2: "",
    cca3: "",
    cca4: "",
    cca5: "",
    cca6: "",
    cca7: "",
    cca8: "",
    cca9: "",
    exp10: "",
    exp11: "",
    exp12: "",
    exp13: "",
    exp14: "",
    exp15: "",
    exp16: "",
    exp17: "",
    exp18: "",
    exp19: "",
    health20: "",
    health21: "",
    health22: "",
    health23: "",
    health24: "",
    health25: "",
    health26: "",
    health27: "",
    health28: "",
    health29: "",
    relationship30: "",
    relationship31: "",
    relationship32: "",
    relationship33: "",
    relationship34: "",
    relationship35: "",
    relationship36: "",
    relationship37: "",
    relationship38: "",
    relationship39: "",
    academic40: "",
    academic41: "",
    academic42: "",
    academic43: "",
    academic44: "",
    academic45: "",
    academic46: "",
    academic47: "",
    academic48: "",
    academic49: "",
    hustle50: "",
    hustle51: "",
    hustle52: "",
    hustle53: "",
    hustle54: "",
    hustle55: "",
    hustle56: "",
    hustle57: "",
    hustle58: "",
    hustle59: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);
  const [progress, setProgress] = React.useState(0);

  const handleChange = async (e) => {
    updateFormData({
      ...formData, // spread syntax which allows an iterable to be expanded whenever placed
      [e.target.name]: e.target.value.trim()
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // ..code to submit form to backend here...
  }

  async function handleClick(event) {
    await handleChange(event);
    const number_of_checked = document.querySelectorAll('div[class*=PrivateRadioButtonIcon-checked]').length;
    const new_progress = Math.floor((number_of_checked / 60) * 100);
    setProgress(new_progress);
  }

  return (
    <div>
      <Grid container direction="column">
        <Grid container item alignItems='center' justifyContent='center' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          {/* <Grid container justifyContent="center" spacing={10}> */}
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                {/* <Box my={10}> */}
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
                {/* </Box> */}
              </Grid>
            ))}
          {/* </Grid> */}
        </Grid>
        <Grid container item alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={6}>
            <LinearProgressWithLabel value={progress} />
          </Grid>
        </Grid>
        {/* <Typography variant="h4">Questions page</Typography> */}
        <form onSubmit={handleSubmit}> {/* instead of a div here should be a form with action as where in the backend u want to send it to as well as the method=post */}
          <Grid container item direction="column" alignItems='center' justifyContent='center'>
            {questions.map(question => 
              <Grid item xs={12} md={6}>
                <FormControl component="fieldset" key={question.type + question.id} >
                  <FormLabel component="legend">{question.question}</FormLabel>
                  <RadioGroup aria-label="question_score" name={question.type + question.id} row style={{display: 'block'}}>
                    <FormControlLabel value="1" control={<Radio />} onChange={handleChange} onClick={handleClick} />
                    <FormControlLabel value="2" control={<Radio />} onChange={handleChange} onClick={handleClick} />
                    <FormControlLabel value="3" control={<Radio />} onChange={handleChange} onClick={handleClick} />
                    <FormControlLabel value="4" control={<Radio />} onChange={handleChange} onClick={handleClick} />
                    <FormControlLabel value="5" control={<Radio />} onChange={handleChange} onClick={handleClick} />
                  </RadioGroup>
                </FormControl>
              </Grid>  
            )}
            <Button type="submit">Submit</Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default Questions