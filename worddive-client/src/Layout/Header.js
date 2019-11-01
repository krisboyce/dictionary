import React from 'react'
import {AppBar, Toolbar, Typography, Button, makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between"
    }
})

export default function Header(props) {
    const classes = useStyles();

    return (<AppBar position="static">
                <Toolbar className={classes.root} >
                <Button color="inherit" component={Link} to="/">
                    <Typography variant="h6">WordDive</Typography>
                </Button>
                <SearchBox />
                </Toolbar>
            </AppBar>)
}