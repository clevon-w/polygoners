import React, {useState, useEffect} from 'react';
import {Grid, Typography, Card, CardContent, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button} from '@material-ui/core';
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

  const handleChange = (e) => {
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
          <form onSubmit={handleSubmit}> {/* instead of a div here should be a form with action as where in the backend u want to send it to as well as the method=post */}
            {questions.map(question => 
              <FormControl component="fieldset" key={question.type + question.id} >
                <FormLabel component="legend">{question.question}</FormLabel>
                <RadioGroup aria-label="question_score" name={question.type + question.id} row style={{display: 'block'}}>
                  <FormControlLabel value="1" control={<Radio />} onChange={handleChange} />
                  <FormControlLabel value="2" control={<Radio />} onChange={handleChange} />
                  <FormControlLabel value="3" control={<Radio />} onChange={handleChange} />
                  <FormControlLabel value="4" control={<Radio />} onChange={handleChange} />
                  <FormControlLabel value="5" control={<Radio />} onChange={handleChange} />
                </RadioGroup>
              </FormControl>
            )}
            {/* <FormControl component="fieldset">
              <FormLabel component="legend">DUMMY QUESTION</FormLabel>
              <RadioGroup aria-label="question_score" name="SOMENAME" row style={{display: 'block'}}>
                <FormControlLabel value="1" control={<Radio />} />
                <FormControlLabel value="2" control={<Radio />} />
                <FormControlLabel value="3" control={<Radio />} />
                <FormControlLabel value="4" control={<Radio />} />
                <FormControlLabel value="5" control={<Radio />} />
              </RadioGroup>
            </FormControl> */}
            <Button type="submit">Submit</Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Questions