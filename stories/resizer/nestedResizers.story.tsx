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

const stories = storiesOf('Resizer', module).addParameters({
	options: {
		panelPosition: 'right',
	},
});

export default () => stories.add('Nested resizers', () => nestedResizers);
