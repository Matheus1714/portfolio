import  React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProfileContainer from '../../containers/ProfileContainer';

export default class RoutesProfile extends React.Component {
    render(){
        return(
            <Fragment>
                <Route path="/profile" component={ProfileContainer} />
            </Fragment>
        )
    }
}