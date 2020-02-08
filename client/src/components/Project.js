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

export default function Project (){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <h1>Projects</h1>
                <div style={{color: 'gray'}}>
                    <div>
                        <h3>Psychiatric Institute Chui</h3>
                        <div>
                            <h4 style={{display: 'flex'}}>
                            Project designed to create an ERP for Chuí. A process mapping of the entire hospital was carried out and then a relational database was created in order to create a platform that encompassed the entire hospital system.
                            </h4>
                        </div>
                    </div>
                    <div>
                        <h3>App CASD</h3>
                        <div>
                            <h4 style={{display: 'flex'}}>
                            Project designed to create a platform for the academic center (CASD) to facilitate the students' environment.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}