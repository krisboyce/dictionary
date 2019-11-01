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
        const json = await fetch('http://20191101t163354-dot-worddive-1572382941629.appspot.com/search/' + params.query).then(blob => blob.json())
        setResults(json)
    }

    useEffect(() => {fetchSearchData()}, [params.query])

    return (
    <Box>
        <Typography variant="h3">{params.query}</Typography>
        {results ?
            <List>
                {results.map((x, i) => <ListItem><LookupWord lemma={x.id} display={x.word}/></ListItem>)}
            </List>
        : <Searchable>"No results found"</Searchable>
        }
    </Box>)
}