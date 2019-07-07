import React, { useState, useRef } from 'react';

import { DraggableAreaPosition, isHorizontal } from './interfaces/DraggableAreaPosition';

import useResizing from './hooks/useResizing';
import useResizingStyles from './hooks/useResizingStyles';
import useMouseDragging from './hooks/useMouseDragging';

import './css/Resizer.css';

export interface ResizerProps {
	/**
	 *	minimum width/height in pixels. Default is 200.
	 */
	minSize?: number;

	/**
	 *	maximum width/height in pixels. Default is unlimited.
	 */
	maxSize?: number;

	/**
	 * TOP and BOTTOM imply the resizer to be vertically draggable.
	 * LEFT and RIGHT horizontally.
	 */
	draggableAreaPosition?: DraggableAreaPosition;
}

/**
 * React component that implements children resizing by mouse dragging
 *
 * @param {ResizerProps} props - props
 */
const Resizer: React.FC<ResizerProps> = ({
	children,
	draggableAreaPosition = DraggableAreaPosition.RIGHT,
	minSize = 200,
	maxSize = null,
}) => {
	// root resizer element that is used to set width/height
	const resizableElement = useRef<HTMLDivElement>(null);
	// resizingState keeps information about whether user is dragging
	// and the coordinates of the mousedown event
	const [resizingState, resize] = useResizing();
	// size changes on each mouse event
	const [size, setSize] = useState<number>(0);
	// styles for the root resizer element
	const styles = useResizingStyles(draggableAreaPosition, size, minSize, maxSize);

	// keeps away the logic of listening to mouse events and calculating new size
	useMouseDragging(draggableAreaPosition, resizingState, setSize, () => resize({ type: 'stop' }));

	// event assigned to the bar draggable by mouse
	const onMouseDown = (e: React.MouseEvent) => {
		if (resizableElement.current) {
			if (isHorizontal(draggableAreaPosition)) {
				resize({
					type: 'start',
					startPosition: e.clientX, // horizontal -> X
					startSize: resizableElement.current.getBoundingClientRect().width, // horizontal -> width
				});
			} else {
				resize({
					type: 'start',
					startPosition: e.clientY, // vertical -> Y
					startSize: resizableElement.current.getBoundingClientRect().height, // vertical -> height
				});
			}
		}
	};

	return (
		<div ref={resizableElement} style={styles.style} className={`Resizer ${styles.className}`}>
			<div className={`draggable-content`}>{children}</div>
			<div
				className={`draggable-area ${resizingState.isDragging ? 'draggable-area-dragging' : ''}`}
				onMouseDown={onMouseDown}
			/>
		</div>
	);
};

export default Resizer;
