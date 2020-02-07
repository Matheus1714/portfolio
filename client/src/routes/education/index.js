import  React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import EducationContainer from '../../containers/EducationContainer';

export default class RoutesEducation extends React.Component {
    render(){
        return(
            <Fragment>
                <Route path="/education" component={EducationContainer} />
            </Fragment>
        )
    }
}