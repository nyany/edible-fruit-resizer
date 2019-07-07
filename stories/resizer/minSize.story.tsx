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

const stories = storiesOf('Resizer', module).addParameters({
	options: {
		panelPosition: 'right',
	},
});

export default () => stories.add('Minimum size', () => rightResizer_minSize);
