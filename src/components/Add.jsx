import { Add as AddIcon } from '@mui/icons-material'
import { Alert, Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'


const useStyle = makeStyles((theme)=>({
    fab:{
        position: 'fixed !important',
        bottom: 20,
        right:20
    },
    container:{
        width:"500px !important",
        height:"550px",
        backgroundColor:"white",
        position: "absolute",
        top:0,
        bottom:0,
        right:0,
        left:0,
        margin:"auto",
        [theme.breakpoints.down("sm")]:{
            width: "100vw",
            height:"100vh"
        }
    },
    form:{
        padding:theme.spacing(2),
    },
    item:{
        marginBottom:theme.spacing(3)
    }
}))



const Add = () => {
    const classes = useStyle()
    const [open,setOpen] = useState(false)
    const [openAlert,setOpenAlert] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAlert(false);
      };
  return (
      
    <>
    <Tooltip title="Add" onClick={()=>setOpen(true)}>
        <Fab color='primary' className={classes.fab}>
            <AddIcon></AddIcon>
        </Fab>
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.container}>
            <form className={classes.form} autoComplete="off">
                <div className={classes.item}>
                    <TextField id='standard-basic' label="Title" size='small' style={{width:"100%"}}></TextField>
                </div>
                <div className={classes.item}>
                    <TextField id='outlined-multiline-static'  multiline rows={4} variant="outlined" label="Description" size='small' style={{width:"100%"}}></TextField>
                </div>
                <div className={classes.item}>
                    <TextField select label="Visibility" value="Public">
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Unlisted">Unlisted</MenuItem>
                    </TextField>
                </div>
                <div className={classes.item}>
                <FormLabel id="demo-radio-buttons-group-label">Who can Comment</FormLabel>
                <RadioGroup>
                    <FormControlLabel value="everyone" control={<Radio />} label="Everyone" />
                    <FormControlLabel value="friends" control={<Radio />} label="Friends" />
                    <FormControlLabel value="custom" control={<Radio />} label="Custom" />
                </RadioGroup>
                </div>
                <div className={classes.item}>
                    <Button variant='outlined' color='primary' style={{marginRight:20}} onClick={()=>setOpenAlert(true)}>Create</Button>
                    <Button variant='outlined' color='secondary' onClick={()=>setOpen(false)}>Cancel</Button>
                </div>
            </form>
        </Container>
    </Modal>
    <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
        </Alert>
    </Snackbar>
    </>
  )
}

export default Add