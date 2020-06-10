import React from 'react';
import Title from '../components/Title';
import Description from '../components/Description';
import Profile from '../asserts/profile.jpeg';
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
    imageSize:{
        height: 500,
        width: 500,
    }
}));

export default function AboutContainer() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid key={1} item>
                            <Paper className={classes.paper}>
                                <img src={Profile} className={classes.imageSize} />
                            </Paper>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.paper}>
                                <Grid key={1} item>
                                    <Title />
                                </Grid>
                                <Grid key={2} item>
                                    <Description />
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}