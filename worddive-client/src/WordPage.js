import React from 'react'
import {SearchableText} from './SearchText'

export class WordPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {data: null}
        this.fetchWordData();
    }

    fetchWordData(){
        fetch('http://localhost:5000/define/' + this.props.word)
        .then(blob => blob.json())
        .then(json => this.setState({data: json}))
    }

    componentDidMount(){
        this.fetchWordData();
    }

    componentWillReceiveProps(){
        this.setState({data: null})
        this.fetchWordData();
    }

    render(){
        if(!this.state.data)
            return <h1>loading</h1>

        return <div>
            <h1>{this.props.word}</h1>
            <SearchableText>{this.state.data[0].etymologies}</SearchableText>
        </div>
    }
}