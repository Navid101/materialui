import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Post from './Post'

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10),
        
        
    }
}))
const Feed = () => {
    const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </Container>
  )
}

export default Feed