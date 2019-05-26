import React from 'react';
import { Grid, withStyles, Link, Typography } from '@material-ui/core';

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white',
    
    "fontFamily": "\"Merriweather Sans\", sans-serif"
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    height: '100vh'  
  },
  icon: {
    color: '#fff',
    width: 50,
    height: 50
  },
  link: {
    color: '#fff',
    '&:hover': {
      textDecoration: "none",
   }
  },
  
});

const About = (props) => {
  const { classes } = props;
  return (
   
    <Grid container spacing={16} className={classes.main}>
      <Grid item xs={12} className={classes.title}>
        
        <h1>About Me</h1>
        
      </Grid>
    </Grid>
   
  );
};

export default withStyles(styles)(About);