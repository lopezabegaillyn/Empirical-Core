import React from 'react'
import StudentProfileUnits from './student_profile_units.jsx'
import NextActivity from './next_activity.jsx'

export default React.createClass({

  render: function() {
    return (
      <div>
        <NextActivity/>
        <StudentProfileUnits classID={this.props.params.classID}/>
      </div>
    );
   }
 });
