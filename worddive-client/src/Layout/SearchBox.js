import React, {useState} from 'react'
import { InputBase, IconButton, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
  },
  form: {
    display:'flex',
    flex: 1
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    flex: 0
  }
}));


const useSearch = (callback) => {
  const [query, setQuery] = useState();
  const handleSubmit = (event) => {
    if (event){
      event.preventDefault();
    }

    callback(event)
  }
  
  const handleInputChange = (event) => {
    event.persist();
    setQuery(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  return [handleSubmit, handleInputChange, query]
}

export default function SearchBox(props){
  const classes = useStyles();
  const [doRedirect, setDoRedirect] = useState(false)

  const runSearch = (event) => {
    if(query && query["query-input"])
      window.location.href = '/find/' + query["query-input"] //setDoRedirect(true)
  }

  const [handleSubmit, handleInputChange, query] = useSearch(runSearch)
  return (<Paper className={classes.root}>
    <form className={classes.form} onSubmit={handleSubmit}>
    <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search words' }}
        onChange={handleInputChange}
        name='query-input'
      />
      <IconButton className={classes.iconButton} aria-label="search" type='submit'>
        <SearchIcon />
      </IconButton>
    {doRedirect ? <Redirect to={"/find/" + query["query-input"]}/> : null}
  </form></Paper>)
}