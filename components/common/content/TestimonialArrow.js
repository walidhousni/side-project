import styled from 'styled-components';

const TestimonialArrow = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 30px;
	background-color: rgba(235, 47, 17, 0.7);
	position: relative;

	right: 25%;

	& img {
		margin: 0 auto;
		transform: rotate(-90deg);
		cursor: pointer;
		position: relative;
		top: 15px;

		&::after,
		&::before {
			display: none;
		}
	}
`;

export default TestimonialArrow;
