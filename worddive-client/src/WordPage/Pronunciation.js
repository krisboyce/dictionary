import React from 'react'
import Searchable from './Searchable'
import { Box, IconButton, Typography } from '@material-ui/core'
import PlayArrow from '@material-ui/icons/PlayArrow'

export default class Pronunciation extends React.Component{

    playAudio(){
        if(this.ref.current)
            this.ref.current.play()
    }

    render(){
        this.ref = React.createRef()
        return <Box>
                <Searchable><Typography  variant='body1'><b>Pronunciation: </b></Typography></Searchable>
                <Typography variant="body2" onClick={this.playAudio.bind(this)}>{this.props.data.phonetic_spelling}</Typography>
                
                {this.props.data.audio_file_uri ? 
                <IconButton>
                    <PlayArrow onClick={this.playAudio.bind(this)} style={{ fontSize: 'inherit' }}/>
                    <audio ref={this.ref} src={this.props.data.audio_file_uri} />
                </IconButton> : null}
                <Searchable>
                    <Typography variant="body2">({this.props.data.phonetic_notation}) {this.props.data.dialects ? this.props.data.dialects.join(', ') : undefined}</Typography>
                </Searchable>
            </Box>
    }
}