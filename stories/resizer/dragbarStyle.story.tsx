import React, { useState, useCallback } from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { storiesOf } from '@storybook/react';

import Resizer from '../../src/lib/Resizer';
import { DraggableAreaPosition } from '../../src/lib/interfaces/DraggableAreaPosition';

import '../custom.css';

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

class Rand extends React.PureComponent {
	render() {
		return (
			<div>
				<p>{LI.generateSentences(8)}</p>
			</div>
		);
	}
}

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

			<Rand />
		</div>
	);
}

const stories = storiesOf('Resizer', module).addParameters({
	options: {
		panelPosition: 'right',
	},
});

export default () =>
	stories.add('Dragbar style', () => {
		return <DragbarStyle />;
	});
