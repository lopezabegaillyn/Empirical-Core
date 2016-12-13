import React from 'react';
import TextEditor from '../renderForQuestions/renderTextEditor.jsx';
import _ from 'underscore';
import ReactTransition from 'react-addons-css-transition-group';
import POSMatcher from '../../libs/sentenceFragment.js';
import { hashToCollection } from '../../libs/hashToCollection.js';
import {
  submitNewResponse,
  incrementResponseCount
} from '../../actions/responses';
import icon from '../../img/question_icon.svg';

const PlaySentenceFragment = React.createClass({
  getInitialState() {
    return {
      response: this.props.question.prompt,
      checkAnswerEnabled: true,
    };
  },

  showNextQuestionButton() {
    const { question, } = this.props;
    const latestAttempt = this.getLatestAttempt();
    const readyForNext =
      question.attempts.length > 2 ||
      (
        latestAttempt && (
          latestAttempt.response.optimal ||
          latestAttempt.found === false
        )
      );
    if (readyForNext) {
      return true;
    } else {
      return false;
    }
  },

  getLatestAttempt() {
    return _.last(this.props.question.attempts || []);
  },

  getQuestion() {
    return this.props.question;
  },

  getResponses() {
    return this.props.responses.data[this.props.question.key];
  },

  checkChoice(choice) {
    const questionType = this.props.question.isFragment ? 'Fragment' : 'Sentence';
    this.props.markIdentify(choice === questionType);
  },

  renderSentenceOrFragmentButtons() {
    return (
      <div className="sf-button-group">
        <button className="button sf-button" value="Sentence" onClick={() => { this.checkChoice('Sentence'); }}>Complete Sentence</button>
        <button className="button sf-button" value="Fragment" onClick={() => { this.checkChoice('Fragment'); }}>Incomplete Sentence</button>
      </div>
    );
  },

  choosingSentenceOrFragment() {
    const { question, } = this.props;
    return question.identified === undefined && (question.needsIdentification === undefined || question.needsIdentification === true);
    // The case for question.needsIdentification===undefined is for sentenceFragments that were created before the needsIdentification field was put in
  },

  handleChange(e) {
    this.setState({ response: e, });
  },

  checkAnswer() {
    if (this.state.checkAnswerEnabled) {
      const key = this.props.currentKey;
      this.setState({ checkAnswerEnabled: false, }, () => {
        const fragment = this.props.sentenceFragments.data[key];
        const { prompt, wordCountChange, } = this.getQuestion();
        const fields = {
          prompt,
          responses: hashToCollection(this.getResponses()),
          questionUID: key,
          wordCountChange,
        };
        const responseMatcher = new POSMatcher(fields);
        const matched = responseMatcher.checkMatch(this.state.response);
        console.log('Matched: ', matched);
        if (matched.found && matched.response.key) {
          this.props.dispatch(
            incrementResponseCount(key, matched.response.key)
          );
        } else {
          this.props.dispatch(
            submitNewResponse(matched.response)
          );
        }
        this.props.updateAttempts(matched);
        this.setState({ checkAnswerEnabled: true, });
        this.props.handleAttemptSubmission();
      });
    }
  },

  renderSentenceOrFragmentMode() {
    return (
      <div className="container">
        <ReactTransition transitionName={'sentence-fragment-buttons'} transitionLeave transitionLeaveTimeout={2000}>
          <div className="feedback-row">
            <img className="info" src={icon} />
            <p>Is this a complete or an incomplete sentence?</p>
          </div>
          {this.renderSentenceOrFragmentButtons()}
        </ReactTransition>
      </div>
    );
  },

  renderButton() {
    if (this.showNextQuestionButton()) {
      return (
        <button className="button student-submit" onClick={this.props.nextQuestion}>Next</button>
      );
    } else {
      return (
        <button className="button student-submit" onClick={this.checkAnswer}>Submit</button>
      );
    }
  },

  renderPlaySentenceFragmentMode() {
    const fragment = this.props.question;
    const button = this.renderButton();
    let instructions;
    const latestAttempt = this.getLatestAttempt();
    if (latestAttempt) {
      instructions = latestAttempt.response.feedback ||
      'Good work. A complete sentence always has a person or thing completing an action.';
    } else if (fragment.instructions && fragment.instructions !== '') {
      instructions = this.props.question.instructions;
    } else {
      instructions = 'If it is a complete sentence, press submit. If it is an incomplete sentence, make it complete.';
    }
    // dangerously set some html in here
    return (
      <div className="container">
        <ReactTransition
          transitionName={'text-editor'} transitionAppear transitionAppearTimeout={1200}
          transitionLeaveTimeout={300}
        >
          <div className="feedback-row">
            <img className="info" src={icon} />
            <p>{instructions}</p>
          </div>
          <TextEditor value={this.state.response} handleChange={this.handleChange} disabled={this.showNextQuestionButton()} checkAnswer={this.checkAnswer} />
          <div className="question-button-group">
            {this.renderButton()}
          </div>
        </ReactTransition>
      </div>
    );
  },

  renderInteractiveComponent() {
    if (this.choosingSentenceOrFragment()) {
      return this.renderSentenceOrFragmentMode();
    } else {
      return this.renderPlaySentenceFragmentMode();
    }
  },

  render() {
    if (this.props.sentenceFragments.hasreceiveddata) {
      return (
        <div className="student-container-inner-diagnostic">
          <div className="draft-js sentence-fragments prevent-selection">
            <p>{this.getQuestion().prompt}</p>
          </div>
          {this.renderInteractiveComponent()}
        </div>
      );
    } else {
      return (<div className="container">Loading...</div>);
    }
  },
});

export default PlaySentenceFragment;