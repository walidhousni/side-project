import styled from 'styled-components';
import Link from 'next/link';
import Author from './Author';

const Content = styled.div`
	max-width: 390px;
	padding: 0 15px;

	.card__vid {
		width: 100%;
	}

	.card__title {
		color: ${({ theme }) => theme.colors.greyishBrown};
		margin: 10px 0 0 0;
		font-size: 25px;
		font-weight: normal;
		letter-spacing: 0.3px;
		opacity: 0.87;
	}
`;

const Card = () => (
	<Content className="card">
		<Link href="https://www.google.com">
			<a>
				<img className="card__vid" src="/static/imgs/blog/back.jpg" alt="" title="" />
			</a>
		</Link>
		<Link href="https://www.google.com">
			<a>
				<h2 className="card__title">The Anarchist Street Artists Taking on Corporate Ads</h2>
			</a>
		</Link>
		<Author />
	</Content>
);

export default Card;
