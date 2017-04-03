import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'underscore';
import Modal from '../modal/modal.jsx';
import { hashToCollection } from '../../libs/hashToCollection';
import C from '../../constants';
import ConceptSelector from '../shared/conceptSelector.jsx';
import ConceptSelectorWithCheckbox from '../shared/conceptSelectorWithCheckbox.jsx';

export default React.createClass({

  propTypes: {
    fp: React.PropTypes.any.isRequired,
    submitFocusPoint: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    const fp = this.props.fp;
    return ({
      modalDisplay: false,
      fpOrder: fp ? fp.order : '',
      fpText: fp ? `${fp.text}|||` : '',
      fpFeedback: fp ? fp.feedback : '',
      fpConcepts: fp ? (fp.conceptResults ? fp.conceptResults : {}) : {},
    });
  },

  addOrEditFocusPoint() {
    return this.props.fp ? 'Edit Focus Point' : 'Add New Focus Point';
  },

  toggleFocusPointForm(fp) {
    let state = { modalDisplay: !this.state.modalDisplay, };
    if (fp) {
      state = Object.assign(state, {
        fpText: fp.text ? `${fp.text}|||` : '',
        fpFeedback: fp.feedback,
        fpConcepts: fp.conceptResults ? fp.conceptResults : {},
      });
    } else {
      state = Object.assign(state, {
        fpText: '',
        fpFeedback: '',
        fpConcepts: {},
      });
    }
    this.setState(state);
  },

  handleChange(stateKey, e) {
    const obj = {};
    let value = e.target.value;
    if (stateKey == 'fpText') {
      value = `${Array.from(document.getElementsByClassName('focus-point-text')).map(i => i.value).filter(val => val !== '').join('|||')}|||`;
    }
    obj[stateKey] = value;
    this.setState(obj);
  },

  handleConceptChange(e) {
    const concepts = this.state.fpConcepts;
    if (!concepts.hasOwnProperty(e.value)) {
      concepts[e.value] = { correct: true, name: e.name, };
      this.setState({
        fpConcepts: concepts,
      });
    }
  },

  submit(focusPoint) {
    const data = {
      text: this.state.fpText.split('|||').filter(val => val !== '').join('|||'),
      feedback: this.state.fpFeedback,
      conceptResults: this.state.fpConcepts,
    };
    this.props.submitFocusPoint(data, focusPoint);
    this.toggleFocusPointForm();
  },

  renderTextInputFields() {
    return this.state.fpText.split('|||').map(text => (
      <input className="input focus-point-text" style={{ marginBottom: 5, }} onChange={this.handleChange.bind(null, 'fpText')} type="text" value={text || ''} />
    ));
  },

  renderConceptSelectorFields(fp) {
    const components = _.mapObject(Object.assign(this.state.fpConcepts, { null: { correct: false, text: 'This is a placeholder', }, }), (val, key) => (
      <ConceptSelectorWithCheckbox
        handleSelectorChange={this.handleConceptChange}
        currentConceptUID={key}
        checked={val.correct}
        onCheckboxChange={() => this.toggleCheckboxCorrect(key)}
      />
    ));
    return _.values(components);
  },

  toggleCheckboxCorrect(key) {
    const data = this.state;
    data.fpConcepts[key].correct = !data.fpConcepts[key].correct;
    this.setState(data);
  },

  modal(focusPoint) {
    const fp = this.props.fp;
    if (this.state.modalDisplay) {
      return (
        <Modal close={this.toggleFocusPointForm}>
          <div className="box">
            <h4 className="title">{this.addOrEditFocusPoint()}</h4>
            <div className="control">
              <label className="label">Focus Point Text</label>
              {this.renderTextInputFields()}
              <label className="label" style={{ marginTop: 10, }}>Feedback</label>
              <input className="input" style={{ marginBottom: 5, }} onChange={this.handleChange.bind(null, 'fpFeedback')} type="text" value={this.state.fpFeedback || ''} />
              <label className="label" style={{ marginTop: 10, }}>Concepts</label>
              {this.renderConceptSelectorFields(focusPoint)}
            </div>
            <p className="control">
              <button className={'button is-primary '} onClick={() => this.submit(focusPoint)}>Submit</button>
            </p>
          </div>
        </Modal>
      );
    }
  },

  render() {
    const fp = this.props.fp;
    if (fp) {
      return (
        <footer className="card-footer">
          <a onClick={() => this.toggleFocusPointForm(fp)} className="card-footer-item">Edit</a>
          <a onClick={() => this.props.deleteFocusPoint(fp.id)} className="card-footer-item">Delete</a>
          {this.modal(fp.id)}
        </footer>
      );
    }
    return (
      <div style={{ display: 'inline-block', float: 'right', }}>
        <button type="button" className="button is-outlined is-primary" onClick={() => this.toggleFocusPointForm(null)}>Add Focus Point</button>
        {this.modal(null)}
      </div>
    );
  },

});
