import React, { useState, useEffect } from 'react'
import { Box, List, ListItem, Typography, Paper, Divider, makeStyles } from '@material-ui/core'
import {useParams} from 'react-router-dom'
import LookupWord from '../WordPage/LookupWord'
import Searchable from '../WordPage/Searchable'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        margin: '1rem',
        padding: '20px',
        flexDirection: 'column',
        justifyContent: "center",
        flex: 1
    },
    word_header:{
        padding:'1rem'
    }
})

export default function SearchPage(props){
    const params = useParams()
    const classes = useStyles()
    const [loaded, setLoaded] = useState(false)
    const [results, setResults] = useState([])

    const fetchSearchData = async () => {
        setResults()
        setLoaded(false)
        const json = await fetch(process.env.REACT_APP_BACKEND_API + 'search/' + params.query).then(blob => blob.json())
        setResults(json)
        setLoaded(true)
    }

    useEffect(() => {fetchSearchData()}, [])

    return (
    <Box className={classes.root}>
        
        <Typography variant="h3" text-align="center">Search Results for {params.query}</Typography>
        <Paper>
            
        {results && results.length > 0 ?
            <List>
                {results.map((x, i) => <ListItem key={i}><LookupWord lemmas={[x.id]} display={x.word}/></ListItem>)}
            </List>
        : loaded ? <Searchable>"No results found"</Searchable> : <Searchable>Fetching Results</Searchable>
        }
        </Paper>
    </Box>)
}