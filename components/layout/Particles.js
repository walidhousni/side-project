import React, { Component } from 'react';
import Particles from 'react-particles-js';

import styled from 'styled-components';

const ParticlesContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	canvas {
		width: 100vw !important;
		height: 100vh !important;
	}
`;

const particleEffectOptions = {
	particles: {
		number: {
			value: 200
		},
		size: {
			value: 1
		}
	},
	interactivity: {
		events: {
			onhover: {
				enable: false
			}
		}
	}
};

class ParticlesEffect extends Component {
	render() {
		return (
			<ParticlesContainer>
				<Particles params={particleEffectOptions} />
			</ParticlesContainer>
		);
	}
}

export default ParticlesEffect;
