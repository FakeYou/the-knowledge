import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Quiz from './components/Quiz';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
`;

class App extends PureComponent {
	render() {
		return (
			<Quiz />
		);
	}
}

export default App;
