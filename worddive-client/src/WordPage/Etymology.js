import React from 'react'
import Searchable from './Searchable'
import { Box, Typography, useTheme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        margin: theme.spacing(1)
    }
}))

export default function Etymology (props){
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <Box className={classes.root}>
            <Searchable><Typography variant="body2">{props.data}</Typography></Searchable>
        </Box>)
}