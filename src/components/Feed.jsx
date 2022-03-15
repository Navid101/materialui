import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10)
    }
}))
const Feed = () => {
    const classes = useStyle()
  return (
    <Container className={classes.container}>Feed</Container>
  )
}

export default Feed