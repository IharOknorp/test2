import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { hash } from '../constans/marvel'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Details = (props) => {
  const {item, onClickDetails} = props;
  const classes = useStyles();

  const onClick = () =>{
    onClickDetails();
  };
  
  return(
    <Card className={classes.card} onClick={onClick}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.name}
        </Typography>
        <img
          width="50"
          height="50"
          src={`${item.thumbnail.path}` + `.${item.thumbnail.extension}` + hash}
        />
        <Typography className={classes.pos} color="textSecondary">
          {item.description}
        </Typography>
        {
          item.urls.map((item)=> <Link key={item.type} href={item.url} variant="body2" component="p"> {item.url} </Link>)
        }
      </CardContent>
    </Card>
  )
};


export default Details;
