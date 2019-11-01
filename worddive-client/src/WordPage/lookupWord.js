import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {Button, makeStyles} from '@material-ui/core'

let useStyles = makeStyles({
    button: {
      padding: '1px',
      margin: '1px',
      minWidth: '0px',
      color: 'inherit',
      textDecoration: 'none'
    },
  });

export default function LookupWord(props){
    const [active, setActive] = useState(false)
    const [lemma, setLemma] = useState(null)
    const classes = useStyles();
    
    const onMouseEnter = () =>
    {
      setTimeout(async () => {
        setActive(true)
        if(!lemma){
          let result = await fetch('http://20191101t163354-dot-worddive-1572382941629.appspot.com/analyze/' + props.lemma.replace(/\W/g, "")).then(blob => blob.json())
          if(result.length > 0) {
            setLemma(result[0][2])
          }
        }
      }, 50)
    }

    const onMouseLeave = () => {
      setTimeout(async () => {
        setActive(false)
      }, 50)
    }

    return (<span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span>{active}</span>

        {
            active && lemma
            ? <Button className={classes.button} component={Link} size="small" to={"/dive/" + lemma}>{props.display}</Button>
            : props.display
        }
    </span>)
}