'use strict';
import React from 'react'
import _ from 'underscore'
import StudentProfileUnit from './student_profile_unit.jsx'
import $ from 'jquery'


export default React.createClass({

  // TODO: add spinner when loading

  getInitialState: function () {
    return {data:{}};
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.params.classID !== this.props.params.classID) {
      this.fetchData(nextProps.params.classID);
    }
  },

  fetchData: function (nextID) {
    var classID = nextID || this.props.params.classID;
    this.setState({currentClassroom: classID, loading: true});
    $.ajax({url: '/profile.json', data: {current_page: 1, current_classroom_id: classID}, format: 'json', success: this.loadProfile});
  },

  loadProfile: function (data) {
    this.setState({data: data});
  },

  render: function () {
    var units = _.mapObject(this.state.data.grouped_scores, function(val, key) {
      return <StudentProfileUnit key={key} data={_.extend(val, {unitName: key})} />;
    });
    return (
      <div className='container'>
        {_.values(units)}
      </div>
    );
  }
});
