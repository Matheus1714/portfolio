import React from 'react';
import { 
  BrowserRouter as Router
} from 'react-router-dom';
import ProfileRoutes from './routes/profile/index';

export default class App extends React.Component {
  render(){
    return(
      <Router>
        <ProfileRoutes />
      </Router>
    )
  }
}