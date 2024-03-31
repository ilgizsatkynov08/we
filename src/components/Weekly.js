import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
// import { CardMedia } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    background: '#202b3b',
    
    
  },
  gridList: {
    flexWrap: 'wrap',
    alignContent: 'center',
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: "30px",
  },
  weather__icon: {
    width: 60,
    height: 60,
    top: 0,
    transform: 'translateY(0%)',
    left: 0,
},
day: {
  textAlign: 'center',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5pc"
},
info:{
  fontSize: 21,
  fontWeight: "bold",
  color: " rgb(213, 211, 211)"
}
}));

function Weekly({weekData}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.gridList} cellHeight="auto" spacing={4}>
        {weekData.map((data) => (
            <div key={data.key} cols={0.5} className={classes.day}>
              { (data.key === 0) ? 
                <Typography className={classes.info} gutterBottom color='error'>
                  Today
                </Typography> :
                <Typography className={classes.info} gutterBottom color='error'>
                  {data.day}
                </Typography> 
              }
              
              <img
                src={`https://openweathermap.org/img/w/${data.icon}.png`}
                alt={data.icon}
                className={classes.weather__icon}
              />

              <Typography gutterBottom className={classes.info}>
                {data.lTemp}°C - {data.hTemp}°C
              </Typography>

              {/* <Typography variant="h6"  gutterBottom>
                {data.main},
              </Typography> */}
              {/* <h4 style={{fontWeight: 'bold', paddingBottom: '10px'}}>{data.desc}</h4> */}
            </div>
        ))}
      </div>
    </div>
  );
}

export default Weekly;