import { Home } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme)=>({
    container:{
        height: "100vh",
        color: "white",
        paddingTop:theme.spacing(10),
        backgroundColor:theme.palette.primary.main,
    },
    item:{
        display: "flex",
        alignItems:'center',
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom:theme.spacing(3),
            cursor:"pointer",
            
        }
    }
}))

const Leftbar = () => {
    const classes = useStyle();
  return (
    <Container className={classes.container}>
        <div className={classes.item}>
            <Home className={classes.icon}></Home>
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon}></Home>
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon}></Home>
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon}></Home>
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon}></Home>
            <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Home className={classes.icon}></Home>
            <Typography className={classes.text}>Homepage</Typography>
        </div>
    </Container>
  )
}

export default Leftbar