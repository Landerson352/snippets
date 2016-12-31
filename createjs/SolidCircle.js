import createjs from 'createjs-combined';

class SolidCircle extends createjs.Shape {
	constructor({ fill, radius }) {
		super();

		this.graphics
			.beginFill(fill || 'white')
			.drawCircle(0, 0, radius || 9);
	}
}

export default SolidCircle;