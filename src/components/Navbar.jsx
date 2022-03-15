import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { alpha, AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import { Cancel, Mail, Notifications, Search, SearchOutlined } from '@mui/icons-material'

const useStyles = makeStyles((theme)=>({
    toolbar:{
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between"
    },
    logoLg:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display: "block"
        }
    },
    logoSm:{
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    },
    search:{
        display: "flex",
        alignItems:"center",
        // justifyContent:"space-between",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius:theme.shape.borderRadius,
        width:"50%",
        [theme.breakpoints.down("sm")]:{
            display: (props)=> (props.open? "flex" : "none"),
            justifyContent: "space-between"
        }
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display: 'none'
        }
    },
    input:{
       marginLeft:theme.spacing(1)
        
    },
    searchButton:{
        display: "flex",
        [theme.breakpoints.up("md")]:{
            display: 'none'
        },
        cursor: "pointer"
    },
    icons:{
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between",
        columnGap:"20px",
        [theme.breakpoints.down("sm")]:{
            display: (props)=> (props.open? "none" : "flex")
        }
    },
    
}))

const Navbar = () => {
    const [open,setOpen] = useState(false)
    const classes = useStyles({open})
  return (
    <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h6' className={classes.logoLg}>Material</Typography>
            <Typography variant='h6' className={classes.logoSm}>MUI</Typography>
            <div className={classes.search}>
                <Search></Search>
                <InputBase placeholder='Search...' className={classes.input}></InputBase>
                <Cancel className="cancel" onClick={()=>setOpen(false)}></Cancel>
            </div>
            <div className={classes.icons}>
                <SearchOutlined className="searchButton" onClick={()=>setOpen(true)}></SearchOutlined>
                <Badge badgeContent={4} color="error">
                    <Mail></Mail>
                </Badge>
                <Badge badgeContent={5} color="error">
                    <Notifications></Notifications>
                </Badge>
                <Avatar src='assets/rem.avif'></Avatar>
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar