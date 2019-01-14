import styled from 'styled-components';

const QuizLink = styled.a.attrs({
	href: '/',
	className: 'quiz-link'
})`
	opacity: 0.87;
	font-size: 12px;
	line-height: 1.33;
	letter-spacing: 0.4px;

	span {
		font-family: 'PT Sans Narrow', sans-serif;
		font-size: 20px;
		font-weight: 700;
		margin: 0 10px;
		vertical-align: middle;
		text-transform: uppercase;
	}
`;

export default QuizLink;
