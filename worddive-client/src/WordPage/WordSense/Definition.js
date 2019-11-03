import React from 'react'
import Searchable from '../Searchable'
import { Box } from '@material-ui/core'

export default class Definition extends React.Component {
    
    render(){
        return <Searchable><Box><b>{(this.props.index+1) + "."}</b> {this.props.data}</Box></Searchable>
    }
}