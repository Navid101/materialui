import { Bookmark, Camera, ExitToApp, Home, Person, Settings,List } from '@mui/icons-material';
import { Container,  Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme)=>({
    container:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        height: "100vh",
        color: "white",
        paddingTop:theme.spacing(10),
        backgroundColor:theme.palette.primary.main,
        position: "sticky",
        top:0,
        [theme.breakpoints.up("md")]:{
            backgroundColor:"#fafafa",
            color:"black",
            border:"1px solid #dadada",
        }
    },
    item:{
        display: "flex",
        alignItems:'center',
        justifyContent:"center",
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up("md")]:{
            marginBottom:theme.spacing(3),
            cursor:"pointer",
            justifyContent:"flex-start",
            columnGap: "5px"

        }
    },

    text:{
        display: "none",
        [theme.breakpoints.up("md")]:{
            display: "block",
            fontWeight: 500
        }
    }
}))

const Leftbar = () => {
    const classes = useStyle();
  return (
    <Container className={classes.container}>
        <div className={classes.item}>
            <Home className={classes.icon}></Home>
            <Typography variant='h6' className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
            <Person className={classes.icon}></Person>
            <Typography  variant='h6' className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
            <List className={classes.icon}></List>
            <Typography  variant='h6' className={classes.text}>Lists</Typography>
        </div>
        <div className={classes.item}>
            <Camera className={classes.icon}></Camera>
            <Typography variant='h6'  className={classes.text}>Camera</Typography>
        </div>
        <div className={classes.item}>
            <Bookmark className={classes.icon}></Bookmark>
            <Typography variant='h6'  className={classes.text}>Collection</Typography>
        </div>
        <div className={classes.item}>
            <Settings className={classes.icon}></Settings>
            <Typography variant='h6'  className={classes.text}>Settings</Typography>
        </div>
        <div className={classes.item}>
            <ExitToApp className={classes.icon}></ExitToApp>
            <Typography variant='h6'  className={classes.text}>Logout</Typography>
        </div>
    </Container>
  )
}

export default Leftbar