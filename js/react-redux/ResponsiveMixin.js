import React, { Component } from 'react';
import { throttle } from 'lodash';

// This component depends on "marker" elements whose visibility is
// controlled through CSS media queries.  Add these three marker elements
// to the DOM and toggle each between "display: none" and "display: block"
// at the relevant breakpoint.
const smMarker = document.getElementById('responsive-marker-sm');
const mdMarker = document.getElementById('responsive-marker-md');
const lgMarker = document.getElementById('responsive-marker-lg');

const isActive = (marker) => {
	return window.getComputedStyle(marker).display === 'block';
};

// Use the responsive breakpoints to detect which form factor is in use.
// These four state variable names must not conflict with any state variables
// used by components that use the ResponsiveMixin.
const calculateState = () => {
	if (isActive(smMarker)) {
		return { isSizeXs: false, isSizeSm: true, isSizeMd: false, isSizeLg: false };
	} else if (isActive(mdMarker)) {
		return { isSizeXs: false, isSizeSm: false, isSizeMd: true, isSizeLg: false };
	} else if (isActive(lgMarker)) {
		return { isSizeXs: false, isSizeSm: false, isSizeMd: false, isSizeLg: true };
	}

	return { isSizeXs: true, isSizeSm: false, isSizeMd: false, isSizeLg: false };
};

// Traditional React mixins (specified in the "mixins" property of a React component)
// are phasing out.  Instead this is the "higher-order component" approach from
// https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
// The component to implement this mixin should be passed as a parameter.
const OuterComponent = (InnerComponent) => class ResponsiveMixin extends Component {
	// Detect the proper form factor when the component first loads
	constructor(props) {
		super(props);
		this.state = calculateState();
		this.handleResize = throttle(this.handleResize.bind(this), 200);
	}

	// Keep the form factor up-to-date during resize events
	handleResize() {
		this.setState(calculateState());
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	render() {
		// Convert this component's state to props of the inner component
		return <InnerComponent {...this.props} {...this.state} />;
	}
};

module.exports = OuterComponent;
