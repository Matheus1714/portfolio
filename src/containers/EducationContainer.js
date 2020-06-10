import React from 'react';
import Education from '../components/Education';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 500,
      width: 500,
    },
    control: {
      padding: theme.spacing(2),
    },
}));

export default function EducationContainer() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return(
        <div>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid key={1} item>
                        <Paper className={classes.paper}>
                            <Grid key={2} item>
                                <Education />
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}