import React, { useState, useEffect } from 'react'
import Word from './Word'
import Box from '@material-ui/core/Box'
import { Typography, List, ListItem, Paper, makeStyles } from '@material-ui/core'
import { useParams, Redirect } from 'react-router-dom'
import LookupWord from './LookupWord'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        margin: '1rem',
        padding: '20px',
        flexDirection: 'column',
        justifyContent: "center",
        flex: 1
    }
})

export default function WordPage(){
    const [data, setData] = useState([])
    const [noResult, setNoResult] = useState(false)
    const params = useParams()
    const classes = useStyles()

    const fetchWordData = async () =>
    {
        setData()
        let result = await fetch('http://20191101t163354-dot-worddive-1572382941629.appspot.com/define/' + params.word).then(blob => blob.json())
        console.log(result)
        if(result.length === 0)
            setNoResult(true)

        return setData(result)
    }

    useEffect(() => {fetchWordData()}, [params.word])

    return (<Box className={classes.root}>
        <Paper >
            <Typography align="center" variant="h3">{(data ? "" : "loading ")} <LookupWord lemma={params.word} display={params.word.replace(/_/g, ' ')}/></Typography>
            <List width="100%">
                {noResult ? <Redirect to={'/find/' + params.word}/> : null}
                {data ? data.map((x, i) => <ListItem key={i}><Word data={x}/></ListItem>) : null}
            </List>
        </Paper>
    </Box>)
}