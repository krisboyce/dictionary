import React from 'react'
import LookupWord from './LookupWord'

export default function Searchable(props){
    const make_searchable = (text) => {
        return <React.Fragment>
        {text.split(' ').map((x, i) => {
            return <React.Fragment key={i}>
                {i > 0 ? ' ' : null}
                {x !== '' ? <LookupWord key={i} word={x} display={x}/> : ' '}
            </React.Fragment>
        })}</React.Fragment>
    }

    const render_elements = () => { 
        return React.Children.map(props.children, (x, i) => {
            if(x != null){
                if(typeof x == 'string'){
                    return make_searchable(x)
                }else if(x.type === Searchable || x.type === LookupWord){
                    return x
                }else{
                    if(!x.props.children)
                        return x

                    return React.cloneElement(x, {
                        children: [<Searchable key={i}>{x.props.children}</Searchable>]
                    })
                }
            }
        })
    }

    return <React.Fragment>{render_elements()}</React.Fragment>
}