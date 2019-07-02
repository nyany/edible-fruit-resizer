import React, { useState, useEffect, useRef, useCallback } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Resizer from '../src/lib/Resizer';
import { DraggableAreaPosition } from '../src/lib/interfaces/DraggableAreaPosition';

import './custom.css';

const LI = new LoremIpsum({
	sentencesPerParagraph: {
		max: 8,
		min: 4,
	},
	wordsPerSentence: {
		max: 16,
		min: 4,
	},
});

const stories = storiesOf('Resizer', module);

const rightResizer = (
	<div style={{ display: 'flex', height: '100%', backgroundColor: 'lightgoldenrodyellow' }}>
		<Resizer draggableAreaPosition={DraggableAreaPosition.RIGHT}>
			<h1>Resizer</h1>
			<h2>draggable from right</h2>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</Resizer>

		<div
			style={{
				backgroundColor: 'lavenderblush',
				padding: '10px',
			}}
		>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</div>
	</div>
);

stories.add('Right resizer', () => rightResizer);

const leftResizer = (
	<div style={{ display: 'flex', height: '100%', backgroundColor: 'lightgoldenrodyellow' }}>
		<div
			style={{
				backgroundColor: 'lavenderblush',
				padding: '10px',
			}}
		>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</div>

		<Resizer draggableAreaPosition={DraggableAreaPosition.LEFT}>
			<h1>Resizer</h1>
			<h2>draggable from left</h2>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</Resizer>
	</div>
);

stories.add('Left resizer', () => leftResizer);

const bottomResizer = (
	<div
		style={{
			display: 'flex',
			height: '100%',
			backgroundColor: 'lightgoldenrodyellow',
			flexDirection: 'column',
		}}
	>
		<Resizer draggableAreaPosition={DraggableAreaPosition.BOTTOM}>
			<h1>Resizer</h1>
			<h2>draggable from bottom</h2>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</Resizer>
		<div
			style={{
				backgroundColor: 'lavenderblush',
				padding: '10px',
			}}
		>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</div>
	</div>
);

stories.add('Bottom resizer', () => bottomResizer);

const topResizer = (
	<div
		style={{
			display: 'flex',
			height: '500px',
			backgroundColor: 'lightgoldenrodyellow',
			flexDirection: 'column-reverse',
		}}
	>
		<Resizer draggableAreaPosition={DraggableAreaPosition.TOP}>
			<h1>Resizer (fixed body height)</h1>
			<h2>draggable from top</h2>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</Resizer>
		<div
			style={{
				backgroundColor: 'lavenderblush',
				padding: '10px',
			}}
		>
			<p>{LI.generateSentences(6)}</p>
			<p>{LI.generateSentences(6)}</p>
			<p>{LI.generateSentences(6)}</p>
		</div>
	</div>
);

stories.add('Top resizer', () => topResizer);

const rightResizer_minSize = (
	<div style={{ display: 'flex', height: '100%', backgroundColor: 'lightgoldenrodyellow' }}>
		<Resizer draggableAreaPosition={DraggableAreaPosition.RIGHT} minSize={500}>
			<h1>Resizer (min 500px)</h1>
			<h2>draggable from right</h2>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</Resizer>

		<div
			style={{
				backgroundColor: 'lavenderblush',
				padding: '10px',
			}}
		>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</div>
	</div>
);

stories.add('Minimum size', () => rightResizer_minSize);

const rightResizer_maxSize = (
	<div style={{ display: 'flex', height: '100%', backgroundColor: 'lightgoldenrodyellow' }}>
		<Resizer draggableAreaPosition={DraggableAreaPosition.RIGHT} maxSize={500} minSize={50}>
			<h1>Resizer (max 500px and minimum 50px)</h1>
			<h2>draggable from right</h2>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</Resizer>

		<div
			style={{
				backgroundColor: 'lavenderblush',
				padding: '10px',
			}}
		>
			<p>{LI.generateSentences(4)}</p>
			<p>{LI.generateSentences(3)}</p>
			<p>{LI.generateSentences(5)}</p>
		</div>
	</div>
);

stories.add('Maximum size', () => rightResizer_maxSize);

const nestedResizers = (
	<div style={{ display: 'flex', height: '100%', backgroundColor: 'lightgoldenrodyellow' }}>
		<Resizer draggableAreaPosition={DraggableAreaPosition.RIGHT} maxSize={500} minSize={200}>
			<div style={{ overflow: 'hidden' }}>
				<Resizer draggableAreaPosition={DraggableAreaPosition.BOTTOM} minSize={200}>
					<div style={{ color: 'blueviolet' }}>
						<h1>Resizer (minimum 200px)</h1>
						<h2>draggable from bottom</h2>
						<p>{LI.generateSentences(4)}</p>
						<p>{LI.generateSentences(3)}</p>
						<p>{LI.generateSentences(5)}</p>
					</div>
				</Resizer>

				<Resizer draggableAreaPosition={DraggableAreaPosition.BOTTOM} minSize={200}>
					<div style={{ color: 'salmon' }}>
						<h1>Resizer (minimum 200px)</h1>
						<h2>draggable from bottom</h2>
						<p>{LI.generateSentences(4)}</p>
						<p>{LI.generateSentences(3)}</p>
						<p>{LI.generateSentences(5)}</p>
					</div>
				</Resizer>

				<Resizer draggableAreaPosition={DraggableAreaPosition.BOTTOM} minSize={200}>
					<div style={{ color: 'dodgerblue' }}>
						<h1>Resizer (minimum 200px)</h1>
						<h2>draggable from bottom</h2>
						<p>{LI.generateSentences(4)}</p>
						<p>{LI.generateSentences(3)}</p>
						<p>{LI.generateSentences(5)}</p>
					</div>
				</Resizer>
			</div>
		</Resizer>

		<div>
			<Resizer draggableAreaPosition={DraggableAreaPosition.BOTTOM} minSize={400}>
				<div style={{ color: 'teal' }}>
					<h1>Resizer (minimum 400px)</h1>
					<h2>draggable from bottom</h2>
					<p>{LI.generateSentences(4)}</p>
					<p>{LI.generateSentences(3)}</p>
					<p>{LI.generateSentences(5)}</p>
				</div>
			</Resizer>
		</div>
	</div>
);

stories.add('Nested resizers', () => nestedResizers);

function DragbarStyle() {
	const [hoverColor, setHoverColor] = useState<string>('rgb(240, 80, 150)');
	const [backgroundColor, setBackgroundColor] = useState<string>('lime');

	const ref = useCallback(
		(node: HTMLDivElement) => {
			if (node) {
				node.style.setProperty('--draggable-hover-color', hoverColor);
				node.style.setProperty('--draggable-background-color', backgroundColor);
			}
		},
		[hoverColor, backgroundColor],
	);

	return (
		<div style={{ display: 'flex', height: '100%' }} ref={ref}>
			<Resizer draggableAreaPosition={DraggableAreaPosition.RIGHT} minSize={400}>
				<h1>Resizer</h1>
				<p>Dragbar style (background-color) can be customized using CSS variables:</p>

				<div
					style={{
						backgroundColor: '#EEE',
						padding: '10px',
						margin: '10px',
					}}
				>
					<pre>--draggable-hover-color</pre>
					<input
						value={hoverColor}
						onChange={e => {
							setHoverColor(e.target.value);
						}}
						style={{
							fontFamily: 'monospace',
							width: '100%',
						}}
					/>
				</div>

				<div
					style={{
						backgroundColor: '#EEE',
						padding: '10px',
						margin: '10px',
					}}
				>
					<pre>--draggable-background-color</pre>
					<input
						value={backgroundColor}
						onChange={e => {
							setBackgroundColor(e.target.value);
						}}
						style={{
							fontFamily: 'monospace',
							width: '100%',
						}}
					/>
				</div>

				<p>It can be made transparent by setting both variables to "none".</p>
			</Resizer>

			<div>
				<p>{LI.generateSentences(8)}</p>
			</div>
		</div>
	);
}

stories.add('Dragbar style', () => {
	return <DragbarStyle />;
});
//
