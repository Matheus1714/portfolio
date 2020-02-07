import  React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ResearchContainer from '../../containers/ResearchContainer';

export default class RoutesResearch extends React.Component {
    render(){
        return(
            <Fragment>
                <Route path="/research" component={ResearchContainer} />
            </Fragment>
        )
    }
}