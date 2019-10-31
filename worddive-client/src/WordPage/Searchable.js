import React from 'react'
import { LookupWord } from './lookupWord'

export class Searchable extends React.Component{
    constructor(props){
        super(props)
        this.render_elements = React.Children.map(this.props.children, x => {
            if(typeof x == 'string'){
                return this.make_searchable(x)
            }else if(x.type === Searchable || x.type === LookupWord){
                return x
            }else{
                return React.cloneElement(x, {
                    children: [<Searchable>x.props.children</Searchable>]
                })
            }
        })
    }

    make_searchable(text){
        return <span>{text.split(' ').map(x => {
            return <span>
                <span>{' '}</span>
                {x !== '' ? <LookupWord lemma={x} display={x}/> : <span>{' '}</span>}
            </span>
        })}</span>
    }

    render(){
        return <span>{this.render_elements}</span>
    }
}