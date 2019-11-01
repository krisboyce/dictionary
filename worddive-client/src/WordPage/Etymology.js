import React from 'react'
import Searchable from './Searchable'

export default class Etymology extends React.Component{
    
    render(){
        return <Searchable><div className="word-etymology"><b>Origin:</b> {this.props.data}</div></Searchable>
    }
}