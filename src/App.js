import React, { Component } from 'react';
import { Container, Segment, Card, Header, Input, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import Map from './Map';

const Content = styled(Container)`
	display: flex !important;
	flex-direction: column;
	min-height: 100vh;
`;

const Hero = styled(Segment)`
	margin-top: 80px !important;
	flex: 0;
`;

const Push = styled.div`
	flex: 1 1;
`;

const Options = styled(Card.Group)`
	padding: 0 0 40px 0;
	flex: 0
`

class App extends Component {
	render() {
		return (
			<div>
				<Content>
					<Hero padded>
						<Header as="h1" textAlign="center">
							the Knowledge
						</Header>
						<Input placeholder="search" huge fluid action="Search" />
					</Hero>

					<Push />

					<Options itemsPerRow={3}>
						<Card>
							<Card.Content>
								<Card.Header>Easy</Card.Header>
								<Card.Meta>Just getting to know each other</Card.Meta>
								<Card.Description>
									Aspernatur natus repellendus aut quia voluptates animi eaque porro.
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<Button fluid color='green'>Start</Button>
							</Card.Content>
						</Card>

						<Card>
							<Card.Content>
								<Card.Header>Medium</Card.Header>
								<Card.Meta>Started dating a few months back</Card.Meta>
								<Card.Description>
									Reprehenderit veritatis et quod delectus.
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<Button fluid color='orange'>Start</Button>
							</Card.Content>
						</Card>

						<Card>
							<Card.Content>
								<Card.Header>Hard</Card.Header>
								<Card.Meta>Life time partners</Card.Meta>
								<Card.Description>
									Sit vero quam sunt tenetur nihil est et corrupti.
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<Button fluid color='red'>Start</Button>
							</Card.Content>
						</Card>
					</Options>
				</Content>
				<Map />
			</div>
		);
	}
}

export default App;
