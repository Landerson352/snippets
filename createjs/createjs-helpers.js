import stage from './stage';

const moveToFront = displayObject => {
	stage.setChildIndex(displayObject, stage.getNumChildren() - 1);
}

const draggable = (object, _dragObject) => {
	const dragObject = _dragObject || object;

	dragObject.on('pressmove', e => {
		moveToFront(object);
		object.x = e.stageX;
		object.y = e.stageY;
	});
}

module.exports = {
	moveToFront,
	draggable,
};