import React from 'react'
import Searchable from './Searchable'
import { Box } from '@material-ui/core'

export default class Pronunciation extends React.Component{

    playAudio(){
        this.ref.current.play()
    }

    render(){
        this.ref = React.createRef()
        return <Box>
                <Searchable><b>Pronunciation:</b></Searchable>
                <span style={{cursor: 'help'}} onClick={this.playAudio.bind(this)}>{this.props.data.phonetic_spelling}</span>
                <audio ref={this.ref} src={this.props.data.audio_file_uri}></audio>
                <Searchable>
                    ({this.props.data.phonetic_notation}) {this.props.data.dialects ? this.props.data.dialects.join(', ') : undefined}
                </Searchable>
            </Box>
    }
}