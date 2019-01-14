import styled from 'styled-components';

const ContentContainer = styled.div`
	height: 100vh;
	margin: 0 auto;
	max-width: 100%;
	width: 100%;

	.slick-dots {
		color: ${({ theme, contrast }) => (contrast ? theme.colors.white : theme.colors.primary)};
	}

	.slick-arrow {
		svg g {
			fill: ${({ theme, contrast }) => (contrast ? theme.colors.white : theme.colors.primary)} !important;
		}
	}
`;

export default ContentContainer;
