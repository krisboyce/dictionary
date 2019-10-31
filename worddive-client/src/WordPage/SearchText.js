import React from 'react';
import { LookupWord } from './lookupWord'

export class SearchableText extends React.Component {
    constructor(props){
        super(props)
        this.state = {words: []}
    }

    componentDidMount(){
        
    }

    render(){
        return this.props.children.split(' ').map(x => {
            return <span>
                <span>{' '}</span>
                <LookupWord lemma={x} display={x}/>
            </span>
        })
    }

    renderSearchText(){
        let index = 0;
        let elements = []
        for(let i = 0; i<this.state.words.length; i++){
            let word = this.state.words[i];
            if(word[2]){
                elements.push(<span key={word[2] + '_spacing_' + i}>{new Array(word[1] - index + 1).join( " " )}</span>)
                elements.push(<LookupWord key={word[2] + '_link_' + i} lemma={word[2]} />)
            }else{
                elements.push(<span key={word[2] + '_text_' + i}>{new Array(word[1] - index + 1).join( " " ) + word[0]}</span>)
            }
            index = word[1] + word[0].length
        }

        return elements;
    }

    get_syntax(text, tokens){
        if(this.props.children && this.props.children.length > 0){
            fetch('http://localhost:5000/analyze/' + encodeURIComponent(text))
            .then(blob => blob.json())
            .then(json => this.setState({words: json}))
        }
    }
}