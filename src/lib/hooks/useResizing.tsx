import { useReducer } from 'react';

export type ResizingState = {
	startSize: number;
	startPosition: number;
	isDragging?: boolean;
};

type StartResizing = { type: 'start'; startSize: number; startPosition: number };
type StopResizing = { type: 'stop' };

export type ResizingAction = StartResizing | StopResizing;
export type ResizingReducer = (state: ResizingState, action: ResizingAction) => ResizingState;

const initState: ResizingState = { startPosition: 0, startSize: 0, isDragging: false };

const reducer: ResizingReducer = (state: ResizingState, action: ResizingAction) => {
	if (action.type === 'start') {
		return {
			isDragging: true,
			startSize: action.startSize,
			startPosition: action.startPosition,
		};
	}

	if (action.type === 'stop') {
		return {
			isDragging: false,
			startSize: 0,
			startPosition: 0,
		};
	}

	return state;
};

/**
 * Reducer hook that keeps resizing information
 */
const useResizing = function(): [ResizingState, React.Dispatch<ResizingAction>] {
	const [resizingState, dispatch] = useReducer<ResizingReducer, ResizingState>(reducer, initState, () => initState);

	return [resizingState, dispatch];
};

export default useResizing;
