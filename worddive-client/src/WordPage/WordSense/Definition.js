import React from 'react'
import Searchable from '../Searchable'
import { Box } from '@material-ui/core'

export default class Definition extends React.Component {
    
    render(){
        return <Searchable><Box><b>Definition (<i>{this.props.category}</i>):</b> {this.props.data}</Box></Searchable>
    }
}