import React, { Fragment } from 'react'
import Definition from './Definition'
import Searchable from '../Searchable'
import Example from './Example'
import { Box, Typography, useTheme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        flex: 1,
        padding: theme.spacing(1)
    }
}))

export default function WordSense(props) {
    const theme = useTheme()
    const classes = useStyles(theme);
    console.log(props.data)
    return (<Searchable>
            <Box className={classes.root}>
                <Typography variant='body1'><i>{props.data.lexical_category}</i></Typography>
                {props.data.definitions.map((x, i) => <Definition data={x} index={props.index+i} key={i}/>)}

                {props.data.domains.length > 0 ? <Typography>{"Domains: " + props.data.domains.join(', ').replace(/_/g, ' ')}</Typography> : null}
                <br />

                {props.data.examples.map((x, i) => <Example data={x} key={"eg_" + i}/>)}
                <br />

                {props.data.synonyms.length > 0 ? <Fragment><Typography variant="body1"><b>Synonyms:</b></Typography> <Typography variant="body2">{props.data.synonyms.map(x => x[1]).join(", ")}</Typography></Fragment> : undefined}
                {props.data.antonyms.length > 0 ? <Fragment><Typography variant="body1"><b>Antonyms:</b></Typography> <Typography variant="body2">{props.data.antonyms.map(x => x[1]).join(", ")}</Typography></Fragment> : undefined}
            </Box>
        </Searchable>)
} 