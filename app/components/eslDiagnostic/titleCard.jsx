import React, { Component } from 'react';
import beginArrow from '../../img/begin_arrow.svg';
import translations from '../../libs/translations/index.js';

class TitleCard extends Component {

  getContentHTML() {
    let html = translations.english[this.props.data.content];
    if (this.props.language !== 'english') {
      const textClass = this.props.language === 'arabic' ? 'right-to-left' : '';
      html += `<br/><div class="${textClass}">${translations[this.props.language][this.props.data.content]}</div>`;
    }
    return html;
  }

  render() {
    return (
      <div className="landing-page">
        <div className="landing-page-html" dangerouslySetInnerHTML={{ __html: this.getContentHTML(), }} />
        <button className="button student-begin" onClick={this.props.nextQuestion}>
          Continue
          <img className="begin-arrow" src={beginArrow} />
        </button>
      </div>
    );
  }
}

export default TitleCard;