import React from 'react'
import {AppBar, Toolbar, Typography, Button, makeStyles, Hidden} from '@material-ui/core'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'
import RandomButton from './RandomButton'

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
    smRoot:{
        display: "flex",
        justifyContent: 'space-around'
    },
    homeLink:{
        display:'flex',
        justifyContent: 'flex-start',
        flex: '1'
    },
    searchBar:{
        flex: '2'
    },
    randomButton:{
        display:'flex',
        justifyContent:'flex-end',
        flex: '1'
    }
}))

export default function Header(props) {
    const classes = useStyles();

    return (<AppBar position="static">
            <Hidden xsDown>
                <Toolbar className={classes.root} >
                    <div className={classes.homeLink}>
                        <Button color="inherit" component={Link} to="/">
                            <Typography variant="h6">WordDive</Typography>
                        </Button>
                    </div>
                    <div className={classes.searchBar}>
                        <SearchBox  />
                    </div>
                    <div className={classes.randomButton}>
                        <RandomButton />
                    </div>
                </Toolbar>
            </Hidden>
            <Hidden smUp>
                <Toolbar className={classes.smRoot}>
                    <div className={classes.homeLink}>
                        <Button color="inherit" component={Link} to="/">
                            <Typography variant="h6">WordDive</Typography>
                        </Button>
                    </div>
                    <div className={classes.randomButton}>
                        <RandomButton size="small"/>
                    </div>
                </Toolbar>
                <div className={classes.searchBar}>
                    <SearchBox/>
                </div>
            </Hidden>
            </AppBar>)
}