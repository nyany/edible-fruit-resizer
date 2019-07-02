import React from 'react';
import './App.css';
import Resizer from './lib/Resizer';
import { DraggableAreaPosition } from './lib/interfaces/DraggableAreaPosition';

const App: React.FC = () => {
	return (
		<div className="App">
			<Resizer minSize={200} maxSize={600}>
				<Resizer draggableAreaPosition={DraggableAreaPosition.BOTTOM} minSize={100} maxSize={300}>
					<div
						style={{
							backgroundColor: 'lightgreen',
						}}
					>
						<p>Min 100px. Max 300px (Vertical)</p>

						<p>Content Nested ipsum</p>

						<p>Content Nested ipsum</p>
					</div>

					{(() => {
						return <h3>{Math.random()}</h3>;
					})()}
				</Resizer>

				<Resizer draggableAreaPosition={DraggableAreaPosition.BOTTOM}>
					<div
						style={{
							backgroundColor: 'skyblue',
						}}
					>
						<p>Content Nested 2Lorem ipsum</p>

						<p>Content Nested 2ipsum</p>

						<p>Content Nested 2 ipsum</p>

						{(() => {
							return <h3>{Math.random()}</h3>;
						})()}
					</div>
				</Resizer>

				<p>Horizontal = from 200 to 600 px</p>

				<p>Lorem ipsum</p>

				<p>Lorem ipsum</p>
			</Resizer>

			<div className="filler">
				<div
					style={{
						minHeight: '100vh',
					}}
				>
					{(() => {
						return <h3>{Math.random()}</h3>;
					})()}
					{Array(50)
						.fill(1)
						.map((_, i) => (
							<span
								key={`i--${i}`}
								style={{
									fontSize: '72px',
									margin: '10px',
								}}
							>
								100 vh
							</span>
						))}
				</div>
			</div>

			<Resizer draggableAreaPosition={DraggableAreaPosition.LEFT} minSize={200}>
				<pre>123 321</pre>
			</Resizer>
		</div>
	);
};

export default App;
