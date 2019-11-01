import React from 'react'
import Searchable from '../Searchable'

export default class Example extends React.Component{
    render(){
        return <Searchable><div><i>"{this.props.data}"</i></div></Searchable>
    }
}