import React from 'react'
import {SearchableText} from './WordPage/SearchText'

export class HomePage extends React.Component{
    render(){
        return <div>
            <SearchableText>This text will become searchable. Even with punctuation. Try it, or don't!</SearchableText>
        </div>
    }
}

