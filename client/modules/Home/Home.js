import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
