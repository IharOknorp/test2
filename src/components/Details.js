import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { hash } from '../constants/marvel'
import {connect} from "react-redux";
import {object, func } from "prop-types";

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

const Details = ({item, showCharacterInDetail}) => {
  const classes = useStyles();

  const onClick = () =>{
    showCharacterInDetail(false);
  };

  return(
    <Card className={classes.card} onClick={onClick}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.name}
        </Typography>
        <img
          alt=''
          width="50"
          height="50"
          src={`${item.thumbnail.path}.${item.thumbnail.extension}` + hash}
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

Details.propTypes = {
  item: object,
  showCharacterInDetail: func,
};

const mapDispatchToProps = (dispatch) => ({
  showCharacterInDetail: (bool) => dispatch({type: 'SHOW_CHARACTER_IN_DETAIL', payload: bool}),
});

export default connect(
  null,
  mapDispatchToProps,
)(Details);
