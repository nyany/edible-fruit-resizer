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

const stories = storiesOf('Resizer', module).addParameters({
	options: {
		panelPosition: 'right',
	},
});

export default () => stories.add('Top resizer', () => topResizer);
