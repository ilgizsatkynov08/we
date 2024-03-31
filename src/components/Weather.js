import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import LocalInfo from './LocalInfo';
import Today from './Today';
import Weekly from './Weekly';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
    padding: 15,

  },
  card: {
    padding: theme.spacing(2),
  },

  
  section: {
    height: "100%",
    paddingTop: 5,
    backgroundColor: '#00000000',
    color: "white"
  },
}));

function Weather({today, weekly}) {
  const classes = useStyles();

  return (
    <Grid style={{marginLeft: "14pc"}} className={classes.root}>

      <Grid style={{display: "flex"}}  container spacing={0}>

        <Grid item xs={12} sm={6}>

        <Grid item xs={12} sm={6}>
        <Card className={classes.section} >
          <LocalInfo today={today}/>
        </Card>
        </Grid>


        <Grid item xs={12} sm={60}>
        <Card className={classes.section}>
          <Today today={today}/>
        </Card>
        </Grid>
        </Grid>


        <Box sx={{width: "250px", display: "flex", textAlign: "center", marginLeft: "400px"}}>
          <Card style={{marginLeft: "-18pc"}} className={classes.section}>
            <Weekly   weekData={ weekly } />
          </Card>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Weather