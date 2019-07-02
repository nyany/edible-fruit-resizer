import { isHorizontal, DraggableAreaPosition } from '../interfaces/DraggableAreaPosition';
import { useMemo } from 'react';

interface ResizingStyles {
	className: string;
	style: React.CSSProperties;
}

/**
 * @see `Resizer.css`
 * @param pos position of draggable area
 */
const classNames = (pos: DraggableAreaPosition): string => {
	switch (pos) {
		case DraggableAreaPosition.TOP:
			return 'draggable-from-top';
		case DraggableAreaPosition.RIGHT:
			return 'draggable-from-right';
		case DraggableAreaPosition.BOTTOM:
			return 'draggable-from-bottom';
		case DraggableAreaPosition.LEFT:
			return 'draggable-from-left';
	}
};

/**
 * Returns size accepted by CSS
 *
 * @param size if null (default value) then returns `none`
 */
const widthInPx = (size: number | null) => (size !== null ? `${size}px` : 'none');

/**
 * Styles for React element
 *
 * @param draggableAreaPosition
 * @param size
 * @param minSize
 * @param maxSize
 */
const styles = (
	draggableAreaPosition: DraggableAreaPosition,
	size: number,
	minSize: number | null,
	maxSize: number | null,
) =>
	isHorizontal(draggableAreaPosition)
		? { width: widthInPx(size), minWidth: widthInPx(minSize), maxWidth: widthInPx(maxSize) }
		: { height: widthInPx(size), minHeight: widthInPx(minSize), maxHeight: widthInPx(maxSize) };

/**
 * React hook
 *
 * @param draggableAreaPosition
 * @param size actual size
 * @param minSize (Nullable) min size in px
 * @param maxSize (Nullable) max size in px
 */
const useResizingStyles = (
	draggableAreaPosition: DraggableAreaPosition,
	size: number,
	minSize: number | null,
	maxSize: number | null,
): ResizingStyles => {
	return useMemo(
		() => ({
			className: classNames(draggableAreaPosition),
			style: styles(draggableAreaPosition, size, minSize, maxSize),
		}),
		[draggableAreaPosition, size, minSize, maxSize],
	);
};

export default useResizingStyles;
