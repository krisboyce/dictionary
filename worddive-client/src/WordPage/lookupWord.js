import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {Button, makeStyles, Typography} from '@material-ui/core'

let useStyles = makeStyles({
    button: {
      padding: '0px',
      margin: '0px',
      minWidth: '0px',
      fontStyle: 'inherit',
      textTransform: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      flex: '2'
    },
  });

export default function LookupWord(props){
    const [active, setActive] = useState(false)
    const [lemmas, setLemmas] = useState(props.lemmas ? props.lemmas.filter(x => x != null || x !== undefined) : null)
    const classes = useStyles();
    
    const onMouseEnter = () =>
    {
      setTimeout(lookupLemma, 100)
    }

    const lookupLemma = async () => {
      setActive(true)
      if(!lemmas && props.word){
        let result = await fetch('https://worddive-1572382941629.appspot.com/analyze/' + props.word.replace(/\(\)/g, '')).then(blob => blob.json())
        if(result.length > 0) {
          setLemmas(result.map(x => x[2]).filter(x => x != null))
        }
      }
    }

    const onMouseLeave = () => {
      setTimeout(async () => {
        setActive(false)
      }, 100)
    }
    
    const onTouch = () => {
      lookupLemma()
      setTimeout(async () => {
        setActive(false)
      }, 1500)
    }

    return (<span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {
            active && lemmas && lemmas.length > 0
            ? lemmas.map((lemma, i) => {
              return <Button flexShrink="0" key={i} className={classes.button} component={Link} size="small" to={"/dive/" + lemma}>
                <Typography variant="body2">{decodeURIComponent(lemma).replace(/_/g, ' ')}</Typography>
            </Button>})
            : <Typography variant="body2" onTouchStart={onTouch} >{props.display}</Typography>
        }
    </span>)
}