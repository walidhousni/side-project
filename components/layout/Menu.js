import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

import dynamic from 'next/dynamic';
import { Close, QuizAgile } from '../common/icons';
import { QuizLink, Copyright, Language } from '../common/content';

const MenuOpen = keyframes`
	0% {
		opacity: 0;
	}

	1% {
		display: block;
		z-index: 999;
	}

	100% {
		opacity: 1;
	}
`;

const MenuContainer = styled.div`
	background: ${({ theme }) => theme.colors.greyishBrown};
	position: fixed;
	right: 0;
	top: 0;
	transition: all 0.3s ease;
	width: 100%;
	height: 100%;
	padding: 80px;
	z-index: -1;

	&.active {
		animation: ${MenuOpen} 0.5s forwards;

		+ [class^='FlexEndContainer'] {
			.logo,
			.menu-toggle {
				display: none;
			}
		}
	}

	&.inactive {
		display: none;
	}
`;

const MenuItemsWrapper = styled.div`
	span {
		font-size: 24px;
		color: #fff;
		margin: 25px;
		padding-right: 90px;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	position: relative;

	.menu-footer {
		grid-column: 3 / 5;
		padding: 40px 0;
		grid-row: 3;
		align-self: flex-end;
		position: absolute;

		a:hover {
			text-decoration: underline;
		}

		span {
			display: inline-block;
			color: ${({ theme }) => theme.colors.white} !important;
		}
	}
`;

const CloseMenuWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	top: 30px;
	right: 42px;

	& span {
		color: #fff;
		font-size: 12px;
		font-weight: 300;
		padding-right: 25px;
	}

	svg {
		cursor: pointer;
	}
`;

const MenuItems = styled.div`
	display: grid;
	justify-items: start;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	a {
		display: block;
		font-size: 40px;
		color: #fff !important;
		-webkit-transition: 0.2s ease;
		-moz-transition: 0.2s ease;
		-o-transition: 0.2s ease;
		transition: 0.2s ease;
		margin: 20px 0;
		padding-left: 0;
		grid-column: 3 / 5;
		z-index: 9999;

		&:hover {
			padding-left: 20px;
		}
	}
`;

const QuizFooter = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	grid-column: 3 / 5;

	.quiz-link {
		span {
			color: #fff;
			font-weight: normal;

			&:last-child {
				font-size: 10px;
			}
		}
	}
`;

const ScreenRightMenu = styled.div`
	transform: rotate(90deg);
	position: absolute;
	right: 32px;
	top: 90px;

	& p {
		color: #fff;
		margin: 0;
	}
`;

const ReadmeContainer = styled.div`
	padding: 50px 0 0;
	grid-column: 3 / 4;

	a {
		color: ${({ theme }) => theme.colors.white} !important;
		font-size: 22px;
		&:hover {
			text-decoration: underline;
		}
	}
`;

const items = [
	{
		text: 'Mafia',
		link: '/mafia'
	},
	{
		text: 'Careers',
		link: '/careers'
	},
	{
		text: 'Join Us',
		link: '/'
	},
	{
		text: 'A Co-op?',
		link: '/'
	}
];

const showMenuItems = () =>
	items.map((item, i) => (
		<Link key={i} href={item.link}>
			<a>{item.text}</a>
		</Link>
	));

const Menu = props => {
	const { toggleMenu } = props;

	const ParticlesComponent = dynamic(() => import('./Particles'));

	return (
		<MenuContainer {...props}>
			<ParticlesComponent className="particals-component" />
			<CloseMenuWrapper>
				<span>Shape your future!</span>
				<Close onClick={toggleMenu} />
			</CloseMenuWrapper>
			<ScreenRightMenu>
				<p>Menu</p>
			</ScreenRightMenu>
			<MenuItemsWrapper>
				<MenuItems>{showMenuItems()}</MenuItems>
			</MenuItemsWrapper>
			<Grid>
				<ReadmeContainer>
					<Link href="/">
						<a>Read Me!</a>
					</Link>
				</ReadmeContainer>
				<QuizFooter>
					<QuizAgile fill="#fff" />
					<QuizLink className="quiz-link">
						<span>Quiz Agile</span>
						<span>It takes 2 mins but it gives a lot.</span>
					</QuizLink>
				</QuizFooter>
				<div className="menu-footer">
					<Language style={{ color: '#fff' }}>French</Language>
					<Copyright style={{ marginRight: '60px' }}>Maltem Africa © 2018. All rights reserved.</Copyright>
				</div>
			</Grid>
		</MenuContainer>
	);
};

export default Menu;
