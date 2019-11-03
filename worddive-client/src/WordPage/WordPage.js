import React, { useState, useEffect } from 'react'
import Word from './Word'
import Box from '@material-ui/core/Box'
import { Typography, List, ListItem, makeStyles } from '@material-ui/core'
import { useParams, Redirect } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        flex: 1
    },
    word_header:{
        padding:'1rem'
    },
    wordList:{
        flex:1
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
        let result = await fetch(process.env.REACT_APP_BACKEND_API + "define/" + params.word).then(blob => blob.json())
        if(result.length === 0)
            setNoResult(true)

        return setData(result)
    }

    useEffect(() => {fetchWordData()}, [params.word])
    const homeRedirects = [
        'worddive',
        'worddiving',
        'worddive.curiouslyrecurring.net',
        'worddove',
        'worddiver'
    ]

    return (
    <Box className={classes.root}>
        {homeRedirects.filter(x => x === params.word.toLowerCase()).length > 0 ? <Redirect to="/"/> : null}
        <Typography className={classes.word_header} align="center" variant="h3">{(data ? "" : "loading ") + decodeURIComponent(params.word).replace(/_/g, ' ')}</Typography>
        <List className={classes.wordList}>
            {noResult ? <Redirect to={'/find/' + params.word}/> : null}
            {data ? data.map((x, i) => <ListItem key={i}><Word data={x}/></ListItem>) : null}
        </List>
    </Box>)
}