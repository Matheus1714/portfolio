import  React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from '../../containers/HomeContainer';

export default class RoutesAbout extends React.Component {
    render(){
        return(
            <Fragment>
                <Route path="/" component={HomeContainer} />
            </Fragment>
        )
    }
}