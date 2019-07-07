## Resizer component

**DEMO:** see Storybook at https://elastic-lichterman-fce1e0.netlify.com/

It's a React component that wraps children with a dragbar that allows user to change its size (height or width) by dragging their mouse.

Component itself is inside `src/lib` folder. Storybook stories are inside `stories` (if worth reading). The rest is boilerplate from CRA.


Usage example:

```xml
<div>
	<Resizer
		draggableAreaPosition={DraggableAreaPosition.LEFT}
		minSize={200}
		maxSize={500}
	>
		<Something />
	</Resizer>

	<SomethingElse />
</div>
```

Props are:

| Prop |  type |  default |  description  | required |
|---|---|---|---|---|
| `minSize`  | number  | 200  |  minimum size in px | no |
| `maxSize` | number | none  |  maximum size in px | no |
| `draggableAreaPosition` | DraggableAreaPosition | RIGHT |  position of the dragbar  | no |
| `children` | --- | --- | React children | --- |

___

## Available Scripts

First, install dependencies by running `yarn`. Then, in the project directory, you can run:

### `yarn run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run storybook`

Runs storybook dev server at [http://localhost:6006](http://localhost:6006)

### `yarn run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

___


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

