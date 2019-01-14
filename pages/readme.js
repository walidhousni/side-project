import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleContrast } from '../actions';
import { Paragraph, Caroussel } from '../components/common/content';
import { SectionContainer } from '../components/common/container';

const Div = styled.div`
	height: 100vh;
	max-width: 100%;
`;

const Cookies = styled.div`
	display: flex !important;
	justify-content: space-around;
	height: 75%;
`;

const ScrolText = styled.div`
	width: 68%;
	overflow-x: hidden;
	overflow-y: scroll;
	padding: 0 40px;
	max-height: 550px;

	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #eb2f11;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

const Text = styled(Paragraph)`
	font-family: Roboto;
	font-size: 15px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.56;
	letter-spacing: 0.5px;
	color: #4a4a4a;
	width: 30%;
`;

const Title = styled(Paragraph)`
	font-family: Roboto;
	font-size: 18px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.56;
	letter-spacing: 0.5px;
	color: #4a4a4a;
`;

const Paragr = styled(Paragraph)`
	font-family: Roboto;
	font-size: 13px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.56;
	letter-spacing: 0.5px;
	color: #4a4a4a;
	opacity: 0.67;
`;

const Span = styled.span`
	position: absolute;
	top: 23px;
	right: -55px;
	transform: rotate(90deg);
	font-family: Roboto;
	font-size: 15px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
`;

const Link = styled.a`
	color: #eb2f11 !important;
`;

const dots = ['Cookies policy', 'Legal terms', 'Privacy policy'];

const ReadmeText = (
	<Cookies>
		<Text>
			As is common practice with almost all professional websites this site uses cookies, which are tiny files that are
			downloaded to your computer, to improve your experience. This page describes what information they gather, how we
			use it and why we sometimes need to store these cookies.
		</Text>
		<ScrolText>
			<Title>What Are Cookies</Title>
			<Paragr>
				As is common practice with almost all professional websites this site uses cookies, which are tiny files that
				are downloaded to your computer, to improve your experience. This page describes what information they gather,
				how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these
				cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
			</Paragr>
			<Paragr>
				For more general information on cookies see the Wikipedia article on HTTP Cookies
				<Link href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">
					https://en.wikipedia.org/wiki/HTTP_cookie
				</Link>
			</Paragr>
			<Title>How We Use Cookies</Title>
			<Paragr>
				We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry
				standard options for disabling cookies without completely disabling the functionality and features they add to
				this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in
				case they are used to provide a service that you use.
			</Paragr>
			<Title>Disabling Cookies</Title>
			<Paragr>
				You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how
				to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that
				you visit. Disabling cookies will usually result in also disabling certain functionality and features of the
				this site. Therefore it is recommended that you do not disable cookies.
			</Paragr>
			<Title>What Are Cookies</Title>
			<Paragr>
				As is common practice with almost all professional websites this site uses cookies, which are tiny files that
				are downloaded to your computer, to improve your experience. This page describes what information they gather,
				how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these
				cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
			</Paragr>
			<Paragr>
				For more general information on cookies see the Wikipedia article on HTTP Cookies
				<Link href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank">
					https://en.wikipedia.org/wiki/HTTP_cookie
				</Link>
			</Paragr>
			<Title>How We Use Cookies</Title>
			<Paragr>
				We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry
				standard options for disabling cookies without completely disabling the functionality and features they add to
				this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in
				case they are used to provide a service that you use.
			</Paragr>
			<Title>Disabling Cookies</Title>
			<Paragr>
				You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how
				to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that
				you visit. Disabling cookies will usually result in also disabling certain functionality and features of the
				this site. Therefore it is recommended that you do not disable cookies.
			</Paragr>
		</ScrolText>
		<Span>Read Me!</Span>
	</Cookies>
);

const Readme = () => (
	<Caroussel vertical dots={dots}>
		<Div>
			<SectionContainer>
				<Caroussel horizontal dots={dots}>
					<div>{ReadmeText}</div>
					<div>{ReadmeText}</div>
					<div>{ReadmeText}</div>
				</Caroussel>
			</SectionContainer>
		</Div>
	</Caroussel>
);

const mapDispatchToProps = dispatch => ({
	onContrast: contrast => dispatch(toggleContrast(contrast))
});

export default connect(
	null,
	mapDispatchToProps
)(Readme);
