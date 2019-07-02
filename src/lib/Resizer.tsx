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

const Resizer: React.FC<ResizerProps> = ({
	children,
	draggableAreaPosition = DraggableAreaPosition.RIGHT,
	minSize = 200,
	maxSize = null,
}) => {
	const resizableElement = useRef<HTMLDivElement>(null);
	const [resizingState, dispatch] = useResizing();
	const [size, setSize] = useState<number>(0);
	const styles = useResizingStyles(draggableAreaPosition, size, minSize, maxSize);

	useMouseDragging(draggableAreaPosition, resizingState, setSize, () => dispatch({ type: 'stop' }));

	const onMouseDown = (e: React.MouseEvent) => {
		if (resizableElement.current) {
			if (isHorizontal(draggableAreaPosition)) {
				dispatch({
					type: 'start',
					startPosition: e.clientX,
					startSize: resizableElement.current.getBoundingClientRect().width,
				});
			} else {
				dispatch({
					type: 'start',
					startPosition: e.clientY,
					startSize: resizableElement.current.getBoundingClientRect().height,
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
