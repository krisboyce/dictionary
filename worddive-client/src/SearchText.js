import React from 'react';
import { LookupWord } from './lookupWord'

export class SearchableText extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {words: []}
    }

    render(){
        let index = 0;
        let elements = []
        for(let i = 0; i<this.state.words.length; i++){
            let word = this.state.words[i];
            if(word[2]){
                elements.push(<span>{new Array(word[1] - index + 1).join( " " )}</span>)
                elements.push(<LookupWord lemma={word[2]}>{word[0]}</LookupWord>)
            }else{
                elements.push(word[0])
            }
            index = word[1] + word[0].length
        }

        return <p>{elements}</p>;
    }

    componentDidMount(){
        this.replace_with_search(this.props.children)
    }

    async replace_with_search(text, tokens){
        return await fetch('http://localhost:5000/analyze/' + encodeURIComponent(text))
        .then(blob => blob.json())
        .then(json => this.setState({words: json}))
    }
}