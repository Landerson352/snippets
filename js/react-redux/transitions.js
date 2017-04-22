import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default () => (
	<ReactCSSTransitionGroup
		transitionName="myTransitionName"
		transitionEnterTimeout={300}
		transitionLeaveTimeout={300}
	>
		<div key="uniqueKey"></div>
	</ReactCSSTransitionGroup>
);

