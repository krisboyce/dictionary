import React from 'react'
import Searchable from './WordPage/Searchable'

export class HomePage extends React.Component{
    render(){
        return <div>
            <Searchable>This text will become searchable. Even with punctuation. Try it, or don't!</Searchable>
        </div>
    }
}

