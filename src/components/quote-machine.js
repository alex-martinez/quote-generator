import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchQuote } from '../actions/index';

class QuoteMachine extends Component {
  componentWillMount() {
    this.props.fetchQuote();
  }

  renderQuotes() {
    return this.props.quote.map( (quote, index) => {
      return (
        <div key={ index }>
        <blockquote style={{ margin: "30px 0" }}>
        <p>&ldquo;{ quote }&rdquo;</p>
        <footer>Ron Swanson</footer>
        </blockquote>
        </div>
        );
    } );
  }

  handleClick() {
    this.props.fetchQuote();
  }

  render() {
    if( !this.props.quote ) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "left" }}>
        <h1>Famous Quotes</h1>

        <button
          className="btn btn-primary"
          onClick={ this.handleClick.bind(this) }>
          Get Another Quote
        </button>

        { this.renderQuotes() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quote: state.quoteInfo.data
  };
}

export default connect(mapStateToProps, { fetchQuote })(QuoteMachine);
