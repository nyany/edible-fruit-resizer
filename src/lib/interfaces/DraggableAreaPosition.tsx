/**
 * Position of draggable area
 */
export enum DraggableAreaPosition {
	TOP,
	RIGHT,
	BOTTOM,
	LEFT,
}

/**
 * When dragging direction is LEFT or RIGHT, then it's horizontal.
 * Otherwise it's vertical.
 *
 * @param draggableAreaPosition
 */
export function isHorizontal(draggableAreaPosition: DraggableAreaPosition) {
	return (
		draggableAreaPosition === DraggableAreaPosition.LEFT || draggableAreaPosition === DraggableAreaPosition.RIGHT
	);
}
