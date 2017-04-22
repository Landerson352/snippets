import createjs from 'createjs-combined';

class SolidCircle extends createjs.Shape {
	constructor(props = {}) {
		super();
		this.set(props);
		const { fill = 'gray', radius = 50 } = props;

		this.graphics
			.beginFill(fill)
			.drawCircle(0, 0, radius);
	}
}

export default SolidCircle;