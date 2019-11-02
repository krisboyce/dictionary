import React from 'react'
import {Paper, Box, Typography, List} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Word from './WordPage/Word'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        margin: '1rem',
        padding: '1rem',
        flexDirection: 'column',
        justifyContent: "center",
        flex: 1
    },
    word_header:{
        padding:'1rem',
        align: 'center'
    }
})

export function HomePage(props){
    const classes = useStyles();

    const worddiveDefinition = {
        pronunciations: [{
            phonetic_spelling: "wərd daɪv",
            phonetic_notation: "IPA",
            audio_file_uri: "/worddive.mp3"
        }],
        etymologies: [
            "from the English 'word + dive' circa 2019 by me the developer!"
        ],
        senses: [
            {
                lexical_category: "Verb",
                definitions: [
                    "The act of clicking on any word on this website to take you to the definition of that word"
                ],
                examples: [
                    "All you need to start worddiving is to click on any word on this page."
                ],
                synonyms: [],
                antonyms: []
            },
            {
                lexical_category: "Verb",
                definitions: [
                    "To bask in the glory of the self-referential nature of language"
                ],
                examples: [
                    "Not now ma, I'm worddiving!"
                ],
                synonyms: [],
                antonyms: []
            },
            {
                lexical_category: "Noun",
                definitions: [
                    "Refers to a plummet into a sea of interlocking words"
                ],
                examples: [
                    "I really should be studying but I went on a worddive instead."
                ],
                synonyms: [],
                antonyms: []
            },
            {
                lexical_category: "Noun",
                definitions: [
                    "Refers to the website you are on"
                ],
                examples: [
                    "Hey, you should check out this cool new webpage called 'worddive.curiouslyrecurring.net'. It's a freakin' blast!"
                ],
                synonyms: [],
                antonyms: []
            }]
    };

    return <Box className={classes.root}>
        <Paper >
            <Typography className={classes.word_header} align="center" variant="h3">WordDive</Typography>
            <List width="100%">
                <Word data={worddiveDefinition}></Word>
            </List>
        </Paper>
    </Box>
}

