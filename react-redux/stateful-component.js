import React, { PropTypes } from 'react';

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
