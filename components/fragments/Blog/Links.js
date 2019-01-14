import Link from 'next/link';
import styled from 'styled-components';

const Content = styled.div`
	width: 100%;
	display: flex;
`;

const LastestPosts = styled.div`
	width: 30%;

	h3 {
		margin: 6px 0 0 0;
		text-transform: uppercase;
		font-size: 10px;
		letter-spacing: 0.3px;
		margin-bottom: 20px;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.greyishBrown};
	}

	a {
		font-size: 15px;
		line-height: 1.56;
		letter-spacing: 0.5px;
		${'' /* margin: 6px 0 0 0;	 */}
		display: block;

		&:hover {
			color: ${({ theme }) => theme.colors.greyishBrown};
		}
	}
`;

const MoreInfos = styled.div`
	width: 70%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	a {
		color: ${({ theme }) => theme.colors.primary};
		text-transform: uppercase;
		opacity: 0.87;
		margin: 0 10px 0 0;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.8px;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
			text-decoration: underline !important;
		}

		img {
			width: 40px;
			height: 40px;
			display: inline-block;
			vertical-align: middle;
			margin-left: 20px;
		}
	}
`;

const Links = () => (
	<Content className="medium__links">
		<LastestPosts>
			<h3>3 last posts</h3>

			{[1, 2, 3].map((e, i) => (
				<Link href="https://www.google.com" key={i}>
					<a>Internal chunk of Lorem Ipsum.</a>
				</Link>
			))}
		</LastestPosts>

		<MoreInfos>
			<Link href="https://www.google.com">
				<a>
					Check more at Medium <img src="/static/imgs/icons/More.png" alt="" title="" />
				</a>
			</Link>
		</MoreInfos>
	</Content>
);

export default Links;
