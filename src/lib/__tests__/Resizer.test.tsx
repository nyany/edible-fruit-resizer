import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import Resizer from '../Resizer';

describe('Resizer tests', () => {
	it("Doesn't crash", () => {
		const wrapper = mount(<Resizer />);

		expect(wrapper).not.toBeUndefined();
	});

	it('Renders children', () => {
		const wrapper = mount(
			<Resizer>
				<p>Hello, 123!</p>
			</Resizer>,
		);

		expect(wrapper.find('.draggable-content').equals(<p>Hello, 123!</p>));
	});

	it('Default CSS Props', () => {
		const wrapper = mount(
			<Resizer>
				<p>Hello, 123!</p>
			</Resizer>,
		);

		expect(wrapper.find('.Resizer').prop('style')).toEqual({
			minWidth: '200px',
			maxWidth: 'none',
			width: '0px',
		});
	});

	it('Custom CSS Props', () => {
		const wrapper = mount(
			<Resizer minSize={777} maxSize={999}>
				<p>Hello, 123!</p>
			</Resizer>,
		);

		expect(wrapper.find('.Resizer').prop('style')).toEqual({
			minWidth: '777px',
			maxWidth: '999px',
			width: '0px',
		});
	});

	it('Dragging on mousedown', async () => {
		const map: { [key: string]: Function } = {};

		window.addEventListener = jest.fn().mockImplementation((event: string, callback: Function) => {
			map[event] = callback;
		});

		const wrapper = mount(
			<Resizer minSize={777} maxSize={999}>
				<p>Hello, 123!</p>
			</Resizer>,
		);

		expect(wrapper.find('.draggable-area-dragging').exists()).not.toBeTruthy();

		wrapper.find('.draggable-area').simulate('mousedown');
		wrapper.update();

		expect(wrapper.find('.draggable-area-dragging').exists()).toBeTruthy();
	});

	it('Dragging on mousedown and releasing on mouseup', async () => {
		const map: { [key: string]: Function } = {};

		window.addEventListener = jest.fn().mockImplementation((event: string, callback: Function) => {
			map[event] = callback;
		});

		const wrapper = mount(
			<Resizer minSize={777} maxSize={999}>
				<p>Hello, 123!</p>
			</Resizer>,
		);

		expect(wrapper.find('.draggable-area-dragging').exists()).not.toBeTruthy();

		wrapper.find('.draggable-area').simulate('mousedown');
		wrapper.update();

		expect(wrapper.find('.draggable-area-dragging').exists()).toBeTruthy();

		act(() => map.mouseup());
		wrapper.update();

		expect(wrapper.find('.draggable-area-dragging').exists()).not.toBeTruthy();
	});

	it('Changing width on resize', async () => {
		const map: { [key: string]: Function } = {};

		window.addEventListener = jest.fn().mockImplementation((event: string, callback: Function) => {
			map[event] = callback;
		});

		const wrapper = mount(
			<Resizer minSize={0} maxSize={999}>
				<p>Hello, 123!</p>
			</Resizer>,
		);

		expect(wrapper.find('.draggable-area-dragging').exists()).not.toBeTruthy();

		wrapper.find('.draggable-area').simulate('mousedown', { clientX: 100 });

		wrapper.update();

		expect(wrapper.find('.draggable-area-dragging').exists()).toBeTruthy();

		act(() => {
			map.mousemove({
				clientX: 250,
			});
		});

		wrapper.update();

		expect(wrapper.find('.Resizer').prop('style')).toMatchObject({
			width: '150px',
		});
	});
});
