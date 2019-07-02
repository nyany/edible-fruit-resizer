import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Resizer from '../Resizer';

describe('Resizer tests', () => {
	it('renders without crashing', () => {
		const d = mount(<Resizer />);

		// const div = document.createElement('div');
		// ReactDOM.render(<Resizer />, div);
		// ReactDOM.unmountComponentAtNode(div);
	});
});
