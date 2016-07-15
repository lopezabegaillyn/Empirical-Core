import React from 'react';
import StudentProfileHeader from './student_profile_header.jsx';
import $ from 'jquery';
import Setter from '../modules/setter.jsx'

export default React.createClass({
  getInitialState: function () {
    this.modules = {
      setter: new Setter(),
    };
    return {
      next_activity_session: {activity: {}},
      student: {classroom: {teacher: {}}},
      grouped_scores: {},
      is_last_page: false,
      currentPage: 0,
      firstBatchLoaded: false,
      loading: false
    };
  },



  render: function() {
    return (
      <div id="student-profile">
        <StudentProfileHeader data={this.state.student} fetchData={this.fetchData} />
        { this.props.children }
      </div>
    );
   }
 });
