import styled, { keyframes } from 'styled-components';

const show = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`;

export const Timeline = styled.div`
	position: absolute;
	height: 100%;
	display: flex !important;
	flex-direction: row;
	top: 0;
`;

export const TimeSpot = styled.section`
	color: ${({ theme }) => theme.colors.greyishBrown};
	min-width: 80px;
	max-width: 270px;
	width: 80px;
	padding: 65px 10px;
	position: relative;
	transition: all 0.3s ease-in-out;
	overflow: hidden;
	height: 100%;

	&:not(:first-child) {
		border-left: 1px solid #ccc;
	}

	&:hover {
		border-color: ${({ theme }) => theme.colors.primary};
		cursor: pointer;
		width: 270px;

		.content {
			animation: ${show} 0.5s linear;
			animation-fill-mode: forwards;
		}
	}

	.label {
		opacity: 0.87;
		font-size: 10px;
		font-weight: 500;
		line-height: 1.6;
		letter-spacing: 1.5px;
		text-transform: uppercase;
	}

	.date {
		position: absolute;
		left: -6px;
		transform: rotate(90deg);
		top: 110px;
		opacity: 0.87;
		font-size: 22px;
	}

	.content {
		box-sizing: border-box;
		opacity: 0;
		padding: 0 20px 0 40px;
		width: 270px;

		.title {
			opacity: 0.87;
			font-size: 18px;
			font-weight: 500;
			letter-spacing: 0.2px;
		}

		.description {
			font-size: 16px;
			line-height: 1.56;
			letter-spacing: 0.5px;
		}
	}
`;
