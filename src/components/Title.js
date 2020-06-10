import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
    },
    textChange: {
        color: 'black',
        fontFamily: 'Times New Roman'
    },
}))

export default function Title() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div>
                <h1 className={classes.textChange}>Matheus Mota</h1>
            </div>
        </div>
    )
}