import React from 'react';
import StudentProfileHeader from './student_profile_header.jsx';
import $ from 'jquery';
import Setter from '../modules/setter.jsx'

export default React.createClass({
  render: function() {
    return (
      <div id="student-profile">
        <StudentProfileHeader data={{classroom: {teacher: {}}}} fetchData={this.fetchData} />
        { this.props.children }
      </div>
    );
   }
 });
