import styled from 'styled-components';
import Link from 'next/link';
import { SectionContainer } from '../common/container';
import { PrimaryTitle } from '../common/content';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;
	height: 100%;
`;

const Description = styled.p`
	color: ${({ theme }) => theme.colors.black};
	font-size: 22px;
	grid-row: 4;
	grid-column: 1;
	align-self: flex-end;
	margin: 0;
`;

const LatestOffers = styled.div`
	grid-row: 1 / 5;
	grid-column: 4 / 4;
	align-self: flex-end;
	color: ${({ theme }) => theme.colors.white};
`;

const OffersTitle = styled(PrimaryTitle)`
	font-size: 60px;
	font-weight: 300;
	margin: 0 0 30px;
	padding-right: 30px;
	position: relative;

	img {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(0, -50%);
	}
`;

const Offer = styled.a`
	color: ${({ theme }) => theme.colors.white} !important;
	display: block;
	font-size: 22px;
	font-weight: normal;
	margin: 0 0 30px;

	&:last-child {
		margin-bottom: 0;
	}

	&:hover {
		text-decoration: underline !important;
	}

	span {
		display: block;
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 1.5px;
		margin-bottom: 10px;
		text-transform: uppercase;
	}
`;

const Home = () => (
	<SectionContainer className="section section--home" backgroundImage="/static/imgs/bgs/home-bg.jpg">
		<Grid className="grid">
			<Description>
				Whether in life or business, the words of successful and innovative people can be deeply inspiring.
			</Description>
			<LatestOffers>
				<OffersTitle>
					Carrers
					<Link href="/careers">
						<a>
							<img src="/static/imgs/icons/arrow-forward.svg" alt="See all offers" title="See all offers" />
						</a>
					</Link>
				</OffersTitle>
				<Offer href="/">
					<span>02 August. Developement. Casa</span>
					Spontaneous Application
				</Offer>
				<Offer href="/">
					<span>07 August. Developement. Casa</span>
					Outsystems Developers Internal
				</Offer>
				<Offer href="/">
					<span>11 August. Agile. Rabat</span>
					Coach Agile
				</Offer>
			</LatestOffers>
		</Grid>
	</SectionContainer>
);

export default Home;
