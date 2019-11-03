import React from 'react'
import Searchable from './Searchable'
import { Box, IconButton, Typography, useTheme, makeStyles } from '@material-ui/core'
import {PlayCircleOutline} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root:{
        margin: theme.spacing(1)
    }
}))

export default function Pronunciation (props){
    const theme = useTheme()
    const classes = useStyles(theme)

    const playAudio = () => {
        if(ref.current)
            ref.current.play()
    }

    const ref = React.createRef()
    return <Box className={classes.root}>
            <Typography variant="body2" onClick={playAudio}>{props.data.phonetic_spelling}</Typography>
            <Searchable>
                <Typography variant="body2">({props.data.phonetic_notation}) {props.data.dialects ? props.data.dialects.join(', ') : undefined}</Typography>
            </Searchable>
            {props.data.audio_file_uri ? 
            <IconButton onClick={playAudio}>
                <PlayCircleOutline />
            </IconButton> : null}
            <audio ref={ref} src={props.data.audio_file_uri} />
        </Box>
}