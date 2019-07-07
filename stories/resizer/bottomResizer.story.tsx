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

const stories = storiesOf('Resizer', module).addParameters({
	options: {
		panelPosition: 'right',
	},
});

export default () => stories.add('Bottom resizer', () => bottomResizer);
