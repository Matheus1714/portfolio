import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import InsertChartIcon from '@material-ui/icons/InsertChart';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(1),
    },
}))

export default function Research() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <h1>Research</h1>
                <div style={{color: 'gray'}}>
                    <div style={{display:'flex'}}>
                        <NetworkWifiIcon style={{color: 'black'}} />
                        <h4 style={{marginTop:4, marginLeft:10}}>Network Encryption</h4>
                    </div>
                    <div style={{display:'flex'}}>
                        <InsertChartIcon style={{color: 'black'}} />
                        <h4 style={{marginTop:4, marginLeft: 10}}>Artificial Intelligence</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}