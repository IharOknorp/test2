import React, {useEffect, useState} from 'react';
import './App.css';
import {connect} from 'react-redux';
import Details from './components/Details'
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {hash, charactersHerous} from './constants/marvel'
import {bool, array, func} from "prop-types";

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const App = ({characters, fetchCharacters, details, showCharacterInDetail}) => {
  const classes = useStyles();
  const [idDetails, setIdDetails] = useState('');

  useEffect(() => {
    const fetchItems = () => {
      fetch(charactersHerous + hash)
        .then(res => res.json())
        .then(res => fetchCharacters([...res.data.results]))
        .catch(err => console.log(err));
    };
    fetchItems()
  }, [fetchCharacters]);

  const onClickRow = (id) => {
    setIdDetails(id);
    showCharacterInDetail(true);
  };

  return (
    <div>
      {details ? (
          <Details item={characters && characters.find((item) => item.id === idDetails)} onClickDetails={onClickRow}/>) :
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">comics</TableCell>
                <TableCell align="right">series</TableCell>
                <TableCell align="right">event</TableCell>
                <TableCell align="right">story</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters && characters.map(row => (
                <TableRow key={row.id} onClick={onClickRow.bind(this, row.id)}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <img
                      alt=''
                      width="50"
                      height="50"
                      src={`${row.thumbnail.path}.${row.thumbnail.extension}` + hash}/>
                  </TableCell>
                  <TableCell align="right">{`${(!!row.comics.items.length)}`}</TableCell>
                  <TableCell align="right">{`${(!!row.series.items.length)}`}</TableCell>
                  <TableCell align="right">{`${(!!row.events.items.length)}  `}</TableCell>
                  <TableCell align="right">{`${(!!row.stories.items.length)}  `}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      }
    </div>
  );
};

App.propTypes = {
  characters:array,
  fetchCharacters: func,
  details: bool,
  showCharacterInDetail: func,
};

const mapStateToProps = ({characters, details}) => ({characters, details});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: (arr) => dispatch({type: 'FETCH_CHARACTERS', payload: arr}),
  showCharacterInDetail: (bool) => dispatch({type: 'SHOW_CHARACTER_IN_DETAIL', payload: bool}),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
