import React from 'react';
import $ from 'jquery';
import LandingPage from '../components/progress_reports/landing_page.jsx';
import LoadingIndicator from '../components/shared/loading_indicator.jsx';

export default React.createClass({

  getInitialState() {
    return { loading: true, };
  },

  componentDidMount() {
    const that = this;
    let loaded = 0;
    $.get('/teachers/onboarding_prerequisites', (prerequisites) => {
      loaded += 1;
      that.setState({ prerequisites, loading: loaded === 2, });
    });
    $.get('/current_user_json', (data) => {
      that.setState({ flag: data.flag, loading: loaded === 2, });
    });
  },

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }
    return <LandingPage flag={this.state.flag} />;
  },
});
