'use strict'
import React from 'react'
import $ from 'jquery'
import _ from 'underscore'
import {Link} from 'react-router';


export default React.createClass({


  getInitialState: function() {
    return {classrooms: null};
  },

  componentDidMount: function() {
    $.ajax({url: '/students_classrooms_json', format: 'json', success: this.updateClassrooms});
  },

  updateClassrooms: function(data) {
    this.setState({classrooms: data.classrooms});
  },

  isActive: function(id, index) {
    if (id === this.props.currentClassroomId) {
     return 'active';
     }
  },

  mapClassrooms: function() {
    var classrooms = _.map(this.state.classrooms, (classroom, index) => {
      return (
        <Link key={classroom.id} to={"/profile/" + classroom.id} activeClassName={"active"}>
          <div className={this.isActive(classroom.id, index) + ' classroom-box'} key={classroom.id}>
            <div>{classroom.teacher}</div>
            <div>{classroom.name}</div>
          </div>
        </Link>
    );
    });
    return classrooms;
  },

  render: function() {
    return(<div>{this.mapClassrooms()}</div>);
  }
});
