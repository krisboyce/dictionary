import React, { Fragment } from 'react'
import Definition from './Definition'
import Searchable from '../Searchable'
import Example from './Example'
import { Box } from '@material-ui/core'

export default class WordSense extends React.Component {
    
    render(){
        return <Fragment>
            <Box display="flex" justify-content="center" flexDirection="column" width="100%">
                <Searchable>{this.props.data.definitions.map((x, i) => <Definition data={x} category={this.props.data.lexical_category} key={"def_" + i}/>)}</Searchable>
                <Searchable>{this.props.data.examples.map((x, i) => <Example data={x} key={"eg_" + i}/>)}</Searchable>
                <Searchable><br /></Searchable>
                <Searchable>{this.props.data.synonyms.length > 0 ? <Box><b>Synonyms:</b> {this.props.data.synonyms.map(x => x[1]).join(", ")}</Box> : undefined}</Searchable>
                <Searchable>{this.props.data.antonyms.length > 0 ? <div><b>Antonyms:</b> {this.props.data.antonyms.map(x => x[1]).join(", ")}</div> : undefined}</Searchable>
            </Box>
        </Fragment>
    }
} 