import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { SectionContainer } from '../common/container';
import { Caroussel } from '../common/content';
import { Layout } from '../layout';

const SpinKeyframe = keyframes`
   100% { transform: rotate(180deg) };
`;

const WaveyDiv = styled.div`
	height: 100vh;
	max-width: 100%;

	div:before {
		content: '';
		position: absolute;
		top: 10%;
		width: 250vw;
		height: 250vw;

		transform-origin: 50% 50%;
		background-color: transparent;
		border-radius: 38% 42%;
		box-shadow: inset 0 0 2px rgba(242, 92, 69, 1);
		animation: ${SpinKeyframe} 16s infinite linear;
		-webkit-animaton: ${SpinKeyframe} 16s infinite linear;
		-moz-animaton: ${SpinKeyframe} 16s infinite linear;
	}
`;

const ChunkText = styled.div`
	display: grid !important;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-self: end;

	& h1 {
		width: 390px;
		font-size: 22px;
		font-weight: normal;
		color: #4a4a4a;
		grid-column: 1 / 2;
	}

	& p {
		width: 687px;
		font-size: 44px;
		color: #4a4a4a;
		font-weight: normal;
		grid-column: 1 / 3;
		margin-bottom: 0px;
		margin-top: 0px;
	}
`;

const AmbitionsText = (
	<ChunkText>
		<h1>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</h1>
		<p>
			There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
			form, by injected humour, or randomised words which don&apos;t look even slightly believable.
		</p>
	</ChunkText>
);

const dots = ['Vision', 'Missions', 'Solutions'];

const Ambitions = () => (
	<SectionContainer className="section section--ambitions">
		<WaveyDiv>
			<Caroussel horizontal dots={dots}>
				{AmbitionsText}
				{AmbitionsText}
				{AmbitionsText}
			</Caroussel>
		</WaveyDiv>
	</SectionContainer>
);

export default Ambitions;
