import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';

import Map from './Map';
import Question from './Question';
import { font } from '../theme';

const Container = styled.div`
	display: grid;
  grid-template-columns: 1fr 5fr 1fr;
	grid-template-rows: 0.2fr 3fr 1fr;
	width: 100vw;
	height: 100vh;
`

Container.Map = styled(Map)`
	grid-column: 1 / span 3;
	grid-row: 1 / span 3;
	z-index: 1;
`;

Container.Search = styled.input`
	border: 2px solid red;
	grid-column: 2;
	grid-row: 1;
	z-index: 20;
	border-radius: 20px;
	font-size: 40px;
`

Container.Question = styled(Question)`
	background-color: #eee;
	padding: 20px;
	z-index: 2;
	display: grid;
  box-sizing: border-box;
	grid-column: 2;
	grid-row: 3;
`;


export default class Quiz extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
		};

		this.updateTerm = this.updateTerm.bind(this);
	}

	updateTerm(e) {
		this.setState({ term: e.target.value });
	}

	render() {
		const { term } = this.state;

		return (
			<Container>
				<Container.Map term={term} />
				<Container.Search value={term} onChange={this.updateTerm} />
				{/* <Container.Question
					question="Amet numquam nam atque?"
					answers={[
						{ id: 1, text: 'Minima velit aliquam' },
						{ id: 2, text: 'Non' },
						{ id: 3, text: 'Dolores omnis deserunt' },
					]}
				/> */}
			</Container>
		)
	}
}