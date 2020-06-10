import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(1),
    },
    textEducation: {
        color: 'gray',
    },
}))

export default function Education() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div>
                <h1>Education</h1>
                
                <div className={classes.textEducation}>
                    <h2>UNIVERSITY OF SÃO PAULO</h2>
                    <h3>Aeronautics Institute of Technology (ITA)</h3>
                    <h3>Aerospace Engineering</h3>
                    <h3>2018-2022</h3>
                </div>
            </div>
        </div>
    )
}