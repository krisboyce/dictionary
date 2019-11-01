import React, { Fragment } from 'react'
import WordSense from './WordSense/WordSense'
import Etymology from './Etymology'
import Pronunciation from './Pronunciation'
import { Box, Card, List, ListItem, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    }
})

export default function Word (props){
    const classes = useStyles()
    return (
    <Box className={classes.root}>
        <Box p="1rem">{props.data.pronunciations.map((x, i) => <Pronunciation data={x} key={i}/>)}</Box>
        {props.data.etymologies.length > 0 ? <Box p="1rem">{props.data.etymologies.map((x, i) => <Etymology data={x} key={i}/>)}</Box> : undefined}
        <List>{props.data.senses.map((x, i) => 
            <Fragment key={i}><Divider/><ListItem><WordSense data={x}/></ListItem></Fragment>)}
        </List>
    </Box>)
}