import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import {  } from '@material-ui/icons'
import {Redirect} from 'react-router-dom'

export default function RandomButton(){
    const [randomSelection, setSelection] = useState(null)
    const getRandom = async () => {
        const result = await fetch(process.env.REACT_APP_BACKEND_API + "random").then(blob => blob.json())
        setSelection(result.id)
    }

    return <React.Fragment>
            <Button variant='outlined' size='large' onClick={getRandom}>Random</Button>
            {randomSelection != null ? <Redirect to={'/dive/' + encodeURIComponent(randomSelection)} /> : null}
        </React.Fragment>
}