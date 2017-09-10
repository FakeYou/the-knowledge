import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	color: #333;
	display: inline-block;
	padding: 1em 2em;
	border-radius: 5px;
	border: 2px solid red;
`;

const Answer = (props) => <Container {...props} />

export default Answer;
