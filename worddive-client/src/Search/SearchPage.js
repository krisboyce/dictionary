import React, { useState, useEffect } from 'react'
import { Box, List, ListItem, Typography } from '@material-ui/core'
import {useParams} from 'react-router-dom'
import LookupWord from '../WordPage/LookupWord'
import Searchable from '../WordPage/Searchable'

export default function SearchPage(props){
    const params = useParams()
    const [results, setResults] = useState([])

    console.log(params.query)
    const fetchSearchData = async () => {
        setResults()
        const json = await fetch('https://worddive-1572382941629.appspot.com/search/' + params.query).then(blob => blob.json())
        setResults(json)
    }

    useEffect(() => {fetchSearchData()}, [])

    return (
    <Box>
        <Typography variant="h3">{params.query}</Typography>
        {results && results.length > 0 ?
            <List>
                {results.map((x, i) => <ListItem><LookupWord lemmas={[x.id]} display={x.word}/></ListItem>)}
            </List>
        : <Searchable>"No results found"</Searchable>
        }
    </Box>)
}