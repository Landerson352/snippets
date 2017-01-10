import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
};

MyComponent.propTypes = {
  title: PropTypes.string
};

export default MyComponent;


const mapStateToProps = (state, ownProps) => ({
  // myProp: state.someValue * ownProps.otherValue,
});

const mapDispatchToProps = (dispatch) => ({
  // myFunction: () => dispatch(myActionCreator()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;

  const additionalProps = {
  };

  return assign({}, ownProps, stateProps, dispatchProps, additionalProps);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps, 
  mergeProps
)(MyComponent);