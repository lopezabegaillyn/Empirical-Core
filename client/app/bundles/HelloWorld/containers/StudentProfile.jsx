import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import StudentProfileAssignments from '../components/student_profile/student_profile_assignments.jsx'
import StudentProfileUnits from '../components/student_profile/student_profile_units.jsx'
import App from '../components/student_profile/index.jsx'
import createHashHistory from 'history/lib/createHashHistory'
const hashhistory = createHashHistory({ queryKey: false })

export default React.createClass({


  render: function () {

      return (
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path=":classID" component={StudentProfileUnits}/>
            {/*<Route path=":classID" component={StudentProfileAssignments}/>*/}
          </Route>
        </Router>
      );
  }
});
