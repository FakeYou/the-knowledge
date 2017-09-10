import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Map from './Map';
import Answer from './Answer';
import { font } from '../theme';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 4fr;
	grid-gap: 1em;
	box-sizing: border-box;
`;

const Title = styled.h1`
	margin: 0;
	font-family: ${font.title};
	grid-column: 1 / span 3;
`;

export default class Quiz extends PureComponent {
	render() {
		const { question, answers, className } = this.props;

		return (
			<Container className={className}>
				<Title>{question}</Title>
				{answers.map(answer => 
					<Answer key={answer.key}>{answer.text}</Answer>
				)}
			</Container>
		)
	}
}