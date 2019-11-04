import React, { Fragment } from 'react'
import WordSense from './WordSense/WordSense'
import Etymology from './Etymology'
import Pronunciation from './Pronunciation'
import { Box, Paper, Divider, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        padding: theme.spacing(1) 
    },
    pronunciations:{
        flex: 1,
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        borderWidth: '1px',
        borderColor: theme.palette.divider,
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius
    },
    etymologies:{
        flex: 1,
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        borderWidth: '1px',
        borderColor: theme.palette.divider,
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius
    },
    senses:{
        flex: 1,
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        borderWidth: '1px',
        borderColor: theme.palette.divider,
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius
    }
}))

const renderList = (title, data, Component, className) => {
    if(data && data.length > 0)
        return (
        <Fragment>
            {title} <Box className={className}>
                {data.map((x, i) => <Fragment key={i}>
                    <Component data={x} index={i} /> 
                    { i < data.length - 1 ? <Divider /> : null}
                    </Fragment>)}
            </Box>
        </Fragment>)

    return null
}

export default function Word (props){
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
    <Paper className={classes.root}>
        {renderList("Pronunciations", props.data.pronunciations, Pronunciation, classes.pronunciations)}
        {renderList("Origin", props.data.etymologies, Etymology, classes.etymologies)}
        {renderList("Uses", props.data.senses, WordSense, classes.senses)}
    </Paper>)
}