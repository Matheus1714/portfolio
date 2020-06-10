import  React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProjectContainer from '../../containers/ProjectContainer';

export default class RoutesAbout extends React.Component {
    render(){
        return(
            <Fragment>
                <Route path="/project" component={ProjectContainer} />
            </Fragment>
        )
    }
}