import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const NewsItem=(props)=> {
    let {title,description,imageUrl,newsUrl,author, date}=props;
    if(props===undefined)
    return(
      <div><h2>That's all for the news</h2></div>
    )
    else
    {
      return(
          <Card sx={{ minWidth: 275, margin:"10px" }}>
            <CardMedia
              component="img"
              height="140"
              image={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HWdd0n8XoTdFVB9887n5zkDMiX32lUREjw&usqp=CAU"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {title||'title'}...
              </Typography>
              <Typography variant="body2">
              {description}...
              </Typography>
              <Typography mt={1} variant='body2'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</Typography>
            </CardContent>
            <CardActions>
              <Button component='a' href={newsUrl} target="_blank" size="small">Read More</Button>
            </CardActions>
          </Card>
      );
    }
}

export default NewsItem