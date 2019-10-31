import React from 'react'
import {SearchableText} from './SearchText'
import { Searchable } from './Searchable'

export class WordPage extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = {data: null}
    }

    fetchWordData(){
        this.setState({data: null})
        fetch('http://localhost:5000/define/' + this.props.match.params.word)
        .then(blob => blob.json())
        .then(json => this.setState({data: json}))
    }

    componentDidMount(){
        this.fetchWordData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.word !== this.props.match.params.word) {
          this.fetchWordData();
        }
      }

    render(){
        if(!this.state.data)
            return <h1>loading...</h1>

        console.log(this.state.data)

        let words = []
        for(let i = 0; i<this.state.data.length; i++){
            let word = this.state.data[i]

            let senses = []
            for(let j = 0; j<word.senses.length; j++){
                let sense = word.senses[j];
                let definitions = sense.definitions.map(el => {
                    return <div className="sense_definition" key={word.word_id + "_sense_definition_" + i + "_" + j}>
                            <Searchable className="definition">
                                {"definition: " + el}
                            </Searchable>
                        </div>
                })
                
                senses.push(<div className="sense" key={`sense_${sense.id}_${i}_${j}`}>
                    {definitions}
                </div>)
            }
            let wordRender = <div key={`${word.word_id}_`}>
                {senses}
            </div>
            words.push(wordRender)
        }
        return <div>
            <h1>{this.props.match.params.word}</h1>
            {words}
        </div>
    }
}