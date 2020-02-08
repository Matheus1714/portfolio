import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(1),
    },
    textAdress: {
        color: 'gray',
    },
}))

export default function Description(){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <div className={classes.textAdress}>
                <h3>Aeronautics Institute of Technology (ITA)</h3>
                <h3>Rua H8B, 210 · 12228-452 · São José dos Campos/SP · Brazil</h3>
                <h3>+55 (85) 99720-0622 · <a href="https://accounts.google.com/">matheussilvamartins1714@gmail.com</a></h3>

                <h3>
                    I am a graduate student of
                    Aerospace Engineering. I made company
                    junior for 2 years at ITA Júnior as a web developer. I've used
                    the languages Golang, Flask, NodeJS, Django.
                    I participated in many entrepreneurship events, such as the ENEJ (National Meeting of Junior Companies) in 2019.
                    I participated in competitions, Hackathon, like the one in Code in Quero provided by QueroEducarion.
                    I did an internship at QueroEducation developing an application using React Native.
                </h3>
            </div>
            <div>
                <a href="https://github.com/Matheus1714">
                    <GitHubIcon/>
                </a>
                <a href="https://www.linkedin.com/in/matheus-mota-44b21a17b/">
                    <LinkedInIcon/>
                </a>
                <a href="https://drive.google.com/file/d/1Z__w6DkRC41-xPhuRh2qkt1jw3qu85gr/view?usp=sharing">
                    <LibraryBooksIcon/>
                </a>
            </div>
        </div>
        
    )
}