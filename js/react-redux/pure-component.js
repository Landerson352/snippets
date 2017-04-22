import React, { PropTypes } from 'react';

const MyComponent = props => {
  return (
    <div>{ title }</div>
  );
};

MyComponent.propTypes = {
  title: PropTypes.string
};

export default MyComponent;
