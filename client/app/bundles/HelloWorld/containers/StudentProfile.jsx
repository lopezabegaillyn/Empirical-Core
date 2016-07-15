import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import StudentProfileAssignments from '../components/student_profile/student_profile_assignments.jsx'
import App from '../components/student_profile/index.jsx'
export default React.createClass({


  render: function () {

      return (
        <Router history={browserHistory}>
          <Route path="/profile" component={App}>
            {/*<Route path=":classID" component={StudentProfileUnits}/>*/}
            <Route path=":classID" component={StudentProfileAssignments}/>
          </Route>
        </Router>
      );
  }
});
