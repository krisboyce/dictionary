import React, { Fragment } from 'react'
import Definition from './Definition'
import Searchable from '../Searchable'
import Example from './Example'
import { Box, Typography } from '@material-ui/core'

export default function WordSense(props) {
    return (<Searchable>
            <Box display="flex" justify-content="center" flexDirection="column" width="100%">
                {props.data.definitions.map((x, i) => <Definition data={x} category={props.data.lexical_category} key={"def_" + i}/>)}
                {props.data.examples.map((x, i) => <Example data={x} key={"eg_" + i}/>)}
                <br />
                {props.data.synonyms.length > 0 ? <Fragment><Typography variant="body1"><b>Synonyms:</b></Typography> <Typography variant="body2">{props.data.synonyms.map(x => x[1]).join(", ")}</Typography></Fragment> : undefined}
                {props.data.antonyms.length > 0 ? <Fragment><Typography variant="body1"><b>Antonyms:</b></Typography> <Typography variant="body2">{props.data.antonyms.map(x => x[1]).join(", ")}</Typography></Fragment> : undefined}
            </Box>
        </Searchable>)
} 