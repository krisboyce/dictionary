import React, {useState} from 'react'
import { TextField, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  search:{
    display:'flex',
    flexDirection:'row',
    verticalAlign:'center'
  },
  input:{
    color:'inherit',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    margin: 'dense',
    borderColor: '#fff'
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
  return (<form className={classes.search} onSubmit={handleSubmit}>
    <TextField className={classes.input}
      variant="outlined"
      label="Search"
      margin="normal"
      name="query-input"
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleInputChange}
    />
    <IconButton color="inherit" type="submit">
      <SearchIcon />
    </IconButton>
    {doRedirect ? <Redirect to={"/find/" + query["query-input"]}/> : null}
  </form>)
}