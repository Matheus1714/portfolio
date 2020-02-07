import  React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AboutContainer from '../../containers/AboutContainer';

export default class RoutesAbout extends React.Component {
    render(){
        return(
            <Fragment>
                <Route path="/about" component={AboutContainer} />
            </Fragment>
        )
    }
}