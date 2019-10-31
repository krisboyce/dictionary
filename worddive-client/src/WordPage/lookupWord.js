import React from 'react';
import { Link } from 'react-router-dom'

export class LookupWord extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            active: false,
            lemma: null
        }
        this.interval = -1;
        this.hover = false;
    }

    onMouseEnter(){
        this.hover = true;
        this.timeout = setTimeout(() => {
            if(this.hover){
                this.setState({active: true})
                if(this.state.lemma == null){
                    console.log(this.props.display.replace(/[^0-9A-Za-z|']/g, ''))
                    fetch('http://127.0.0.1:5000/analyze/' + this.props.display.replace(/[^0-9A-Za-z]/g, ''))
                    .then(blob => blob.json())
                    .then(json => {
                        let words = json.filter(x => x[2] != null)
                        this.setState({
                            lemma: words.length > 0 ? words[0][2] : null
                        })
                    })
                }
            }
        }, 100)
    }

    onMouseLeave(){
        clearTimeout(this.timeout);
        this.hover = false;
        this.setState({active: false})
    }

    render(){
        return <span onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
            {
                this.state.active && this.state.lemma
                ? <Link to={this.state.lemma} >{this.props.display}</Link>
                : this.props.display
            }
        </span>
    }
}