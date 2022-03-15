import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
        height:"250px",
        [theme.breakpoints.down("sm")]:{
            height: "150px"
        }
    }
}))

const Post = () => {
    const classes = useStyles()
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image="assets/mountain.avif" title="My Post"></CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5'>My First Post</Typography>
                <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat natus dolor obcaecati quas deserunt corrupti harum itaque! Voluptatum fugiat est aperiam, maiores totam ullam accusamus quidem ab aliquam obcaecati?
                Quod totam mollitia fugiat dolores minima ipsum aspernatur voluptatem autem quis optio, eaque perspiciatis cum architecto quae laborum ex esse ullam at omnis vitae? Eum itaque repudiandae vel impedit quae!
                Enim asperiores aliquid quibusdam? Ipsa accusantium distinctio pariatur obcaecati id, eligendi aut veritatis rerum cum a suscipit quos consequatur voluptate molestiae nam fugit sapiente officiis sit dignissimos alias recusandae facere?
                Vel autem assumenda sapiente dicta similique repellat quo pariatur voluptatibus sunt saepe itaque esse sit vitae culpa obcaecati atque illum exercitationem ipsa quis voluptate non, consequatur est! Eaque, minima ad.</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary' variant='contained'>Share</Button>
            <Button size='small' color='primary' variant='contained'>Learn More</Button>
        </CardActions>
    </Card>
  )
}

export default Post