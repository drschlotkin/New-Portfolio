import React, { Fragment } from 'react';
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import School from '@material-ui/icons/School';

const Training = (props) => {
  const { icon, school } = props.class;
  
  /* List items that are iterated and passed props from AdditionalTraining.js */ 

  return (
    
    <Grid item lg={4} style={{padding:0}}>
      <List>
        <ListItem>        
          <ListItemIcon >
            <School className={icon}/>
          </ListItemIcon>
            <ListItemText primary={
              <Fragment>
                <Typography variant="body1" className={school}>
                  {props.name}
                </Typography>
                <Typography variant="body2">
                  {props.school}
                </Typography>
                <Typography variant="body2">
                  {props.location}
                </Typography>
                <Typography variant="body2">
                  {props.year}
                </Typography>
              </Fragment>    
            }
          />
        </ListItem>
      </List>
    </Grid>
   
  );
};

export default Training;