import { useEffect } from 'react';
import { ResizingState } from './useResizing';
import { isHorizontal, DraggableAreaPosition } from '../interfaces/DraggableAreaPosition';

/**
 * Hook to control mouse dragging
 *
 * @param draggableAreaPosition used to determine how to calculate next size
 * @param resizingState current state of resizing
 * @param setSize function that accepts new size as the only parameter
 * @param onStopDragging function called when mouse is released
 */
const useMouseDragging = (
	draggableAreaPosition: DraggableAreaPosition,
	resizingState: ResizingState,
	setSize: (size: number) => void,
	onStopDragging: EventListenerOrEventListenerObject,
) => {
	useEffect(() => {
		// no reason to continue if user is not dragging
		if (!resizingState.isDragging) return () => {};

		// on every mouse move while not released
		function onMouseMove(e: MouseEvent) {
			// current position of cursor
			const { clientX, clientY } = e;

			if (isHorizontal(draggableAreaPosition)) {
				// diff between start position (onMouseDown) and current position
				const diff = resizingState.startPosition - clientX;

				// calculate new size depending on draggable area position
				const width =
					resizingState.startSize - (DraggableAreaPosition.LEFT === draggableAreaPosition ? -diff : diff);

				setSize(width);
			} else {
				const diff = resizingState.startPosition - clientY;
				const height =
					resizingState.startSize - (DraggableAreaPosition.TOP === draggableAreaPosition ? -diff : diff);

				setSize(height);
			}
		}

		/**
		 * class name for document.body that sets dragging cursor on every element.
		 * otherwise there is noticeable "tearing".
		 *
		 * @see `Resizer.css`
		 */
		const cursorClass = isHorizontal(draggableAreaPosition) ? 'dragging-cursor-ew' : 'dragging-cursor-ns';

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseleave', onStopDragging);
		window.addEventListener('mouseup', onStopDragging);

		// disables text selection.
		// otherwise text gets selected when resizing.
		document.body.classList.add('no-user-selection');
		document.body.classList.add(cursorClass);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseleave', onStopDragging);
			window.removeEventListener('mouseup', onStopDragging);

			document.body.classList.remove('no-user-selection');
			document.body.classList.remove(cursorClass);
		};
	}, [resizingState, draggableAreaPosition, setSize, onStopDragging]);
};

export default useMouseDragging;
