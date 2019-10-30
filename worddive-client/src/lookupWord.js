import React from 'react';
import {Link} from 'react-router-component'
export class LookupWord extends React.Component {

    render(){
        return <Link href={"/"+this.props.lemma}>{this.props.children}</Link>
    }
}