import React from 'react'
import LookupWord from './LookupWord'

export default class Searchable extends React.Component{
    constructor(props){
        super(props)

        this.element = React.createRef();

        this.render_elements = React.Children.map(this.props.children, (x, i) => {
            if(x != null){
                if(typeof x == 'string'){
                    return this.make_searchable(x)
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

    make_searchable(text){
        return <React.Fragment>
        {text.split(' ').map((x, i) => {
            return <React.Fragment key={i}>
                {i > 0 ? ' ' : null}
                {x !== '' ? <LookupWord key={i} lemma={x} display={x}/> : ' '}
            </React.Fragment>
        })}</React.Fragment>
    }

    render(){
        return <React.Fragment>{this.render_elements}</React.Fragment>
    }
}