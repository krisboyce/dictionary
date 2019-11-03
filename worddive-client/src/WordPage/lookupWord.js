import React, {useState, useRef} from 'react';
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
    const [hasLooked, setHasLooked] = useState(false)
    const ref = useRef(null);

    const classes = useStyles();
    
    const onMouseEnter = () =>
    {
      console.log('enter')
      lookupLemma()
      setTimeout(() => {
        setActive(true)
      }, 100)
    }

    const lookupLemma = async () => {
      const lookupTerm = props.word ? props.word.replace(/[^a-z|A-Z|0-9|_|']/g, '') : ''
      if(!lemmas && lookupTerm){
        let result = await fetch(process.env.REACT_APP_BACKEND_API + 'analyze/' + lookupTerm).then(blob => blob.json())
        if(result.length > 0) {
          let lemmaResults = result.map(x => x.lexical_entries).reduce((x, y) => {
              return x + y
          })
          .map(x => x.inflection_of[0].id.toLowerCase())
          .reduce((x, y) =>{
            return x.includes(y) ? x : [...x, y]
          }, [])

          setLemmas(lemmaResults)
        }
      }
      setHasLooked(true)
    }

    const onMouseLeave = () => {
      setTimeout(async () => {
        setActive(false)
      }, 100)
    }
    
    const outsideTouch = function (event){
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false)
      }
      document.removeEventListener("touchend", this);
    }

    const onTouch = () => {
      console.log('touch')
      lookupLemma()
      if(!active){
        setTimeout(async () => {
          setActive(true)
          document.addEventListener("touchend", outsideTouch);
        }, 100)
      }
    }

    return (<span ref={ref} onTouchEnd={onTouch} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {
            active && hasLooked ? lemmas && lemmas.length > 0
            ? lemmas.map((lemma, i) => {
              return <React.Fragment key={i}>
                <Button className={classes.button} component={Link} size="small" to={"/dive/" + lemma}>
                  <Typography variant="body2">{decodeURIComponent(lemma).replace(/_/g, ' ')}</Typography>
              </Button>
              {i < lemmas.length-1 ? ", " : ""}
            </React.Fragment>})
            : <Button className={classes.button} component={Link} size='small' to={'/find/' + props.display}>
                <Typography variant="body2"  >{props.display}</Typography>
              </Button>
            : <Typography variant="body2" >{props.display}</Typography>
        }
    </span>)
}