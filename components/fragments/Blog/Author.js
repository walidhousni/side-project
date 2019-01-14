import Link from 'next/link';
import styled from 'styled-components';

const Profile = styled.div`
	width: 100%;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;

	.author__avatar {
		width: 15%;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.author__infos {
		width: 84%;

		.author__infos__name {
			color: ${({ theme }) => theme.colors.greyishBrown};
			display: block;
			margin: 10px 0 0 0;
			font-size: 14px;
			letter-spacing: 0.3px;
		}

		.author__infos__publication {
			color: ${({ theme }) => theme.colors.greyishBrown};
			display: block;
			margin: 6px 0 0 0;
			font-size: 13px;
			letter-spacing: 0.3px;
			opacity: 0.5;
			display: block;
		}
	}
`;

const Author = () => (
	<Profile className="author">
		<Link href="https://www.google.com">
			<a>
				<img className="author__avatar" src="/static/imgs/blog/back.jpg" alt="" title="" />
			</a>
		</Link>
		<div className="author__infos">
			<Link href="https://www.google.com">
				<a className="author__infos__name">Simon Doherty</a>
			</Link>
			<span className="author__infos__publication">An hour ago. 8 min read</span>
		</div>
	</Profile>
);

export default Author;
