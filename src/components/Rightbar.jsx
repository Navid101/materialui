import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10)
    }
}))
const Rightbar = () => {
    const classes = useStyle()
  return (
    <Container className={classes.container}>Rightbar</Container>
  )
}

export default Rightbar