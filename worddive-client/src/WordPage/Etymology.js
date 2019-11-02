import React from 'react'
import Searchable from './Searchable'
import { Typography } from '@material-ui/core'


export default class Etymology extends React.Component{
    
    render(){
        return <Searchable><div className="word-etymology"><Typography variant='body1'><b>Origin:</b></Typography> <Typography variant="body2">{this.props.data}</Typography></div></Searchable>
    }
}