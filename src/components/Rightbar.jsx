import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Image from './Image'

const useStyle = makeStyles((theme)=>({
    container:{
        paddingTop:theme.spacing(10),
        display: "flex !important",
        alignItems:"flex-start",
        rowGap:"10px",
        flexDirection:"column"

    }
}))
const Rightbar = () => {
    const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Typography>Online Friends</Typography>
      <AvatarGroup max={4}>
      <Avatar alt="Rose Margaret" src="assets/1.jpg" />
      <Avatar alt="Tiffany Cloe" src="assets/2.jpg" />
      <Avatar alt="Cindy Baker" src="assets/3.jpg" />
      <Avatar alt="Agnes Walker" src="assets/4.jpg" />
      <Avatar alt="Rose Margaret" src="assets/1.jpg" />
      <Avatar alt="Tiffany Cloe" src="assets/2.jpg" />
      <Avatar alt="Cindy Baker" src="assets/3.jpg" />
      <Avatar alt="Agnes Walker" src="assets/4.jpg" />
    </AvatarGroup>
    <Typography className={classes.title} gutterBottom>Gallery</Typography>
    <Image></Image>
    </Container>
  )
}

export default Rightbar