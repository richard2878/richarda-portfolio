import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '350px',
    borderRadius:'15px 15px',
    marginBottom: '50px',
    backgroundColor: '#BFBDC1',
  },
  media: {
    marginTop: '20px',
    height: '180px',
    width: '350px',
    padding: 0,
    margin: 0,

    flex: 1
  },
  body: {
    height: 250
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={props.href}>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Click here"
        />
        <CardContent className={classes.body}>
          <Typography gutterBottom variant="h5" component="h2" style={{color:'#6D6A75'}}>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" style={{color:'#6D6A75'}}>
            <span>{props.desc1}</span><br/><br/>
            <span>{props.desc2}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.repo}>
          GitHub Repository
        </Button>
      </CardActions>
    </Card>
  );
}

