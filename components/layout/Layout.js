import { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { LayoutContainer, ContentContainer } from '../common/container';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
		color: #000;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;

		#__next,
		.main {
			min-height: 723px;
		}

		* {
			box-sizing: border-box;
			outline: none !important;
			box-shadow: none !important;
		}

		img {
			display: block;
			max-width: 100%;
		}

		a,
		a:focus,
		a:active,
		a:visited {
			text-decoration: none;
			color: #000;
		}

		a:hover {
			color: #eb2f11;
			text-decoration: none !important;
		}

		.header {
			z-index: 5;
		}

		.slick-slider {
			user-select: initial;
		}

		.slick-slider .slick-list,
		.slick-slider .slick-track,
		.slick-slider .slick-slide,
		.slick-slider .slick-slide > div {
			height: 100vh !important;
		}

		.slick-slide.slick-active.slick-current {
			z-index: 9;
		}

		.slick-slider .slick-slide {
			border: 0;
		}

		.slick-slider .slick-list {
			overflow: visible !important;
		}

		.slick-slider .slick-dots {
			bottom: auto;
		}

		.slick-slider .slick-dots li {
			margin-right: 20px !important;
			width: auto !important;
		}

		.slick-slider .slick-dots li.slick-active div {
			color: black;
		}

		.slick-slider .slick-dots li div {
			color: gray;
		}
  }
`;

const MAFTheme = {
	colors: {
		primary: '#eb2f11',
		black: '#000',
		white: '#fff',
		green: '#00b342',
		facebook: '#3b5998',
		twitter: '#55acee',
		youtube: '#b31217',
		linkedin: '#0077b5',
		greyishBrown: '#4a4a4a'
	}
};

// const dots = ['Cookies policy', 'Legal terms', 'Privacy policy', 'Ambitions'];

class Layout extends Component {
	constructor(props) {
		super(props);

		this.handleContrast = this.handleContrast.bind(this);
		this.handlePageTitles = this.handlePageTitles.bind(this);
	}

	handleContrast(contrast) {
		const { onContrast } = this.props;

		onContrast(contrast);
	}

	handlePageTitles() {
		const { path } = this.props;
		const titles = {
			home: 'Home',
			readme: 'Legal documents',
			careers: 'Shape your future',
			mafia: 'Mafia',
			error: 'Sorry we cannot find what you are looking for'
		};

		switch (path) {
			case '/':
				return titles.home;
			case '/readme':
				return titles.readme;
			case '/careers':
				return titles.careers;
			case '/mafia':
				return titles.mafia;
			default:
				return titles.error;
		}
	}

	render() {
		const { children, layout, menu } = this.props;

		return (
			<ThemeProvider theme={MAFTheme}>
				<LayoutContainer className="main">
					<Head>
						<meta charSet="utf-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
						<meta name="description" content="Maltem Africa Official Portal" />
						<meta name="author" content="Maltem Africa" />

						<title>Maltem Africa - {this.handlePageTitles()}</title>

						<link rel="shortcut icon" type="image/png" href="/static/imgs/icon.png" />
						<link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700" rel="stylesheet" />
						<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
						<link
							rel="stylesheet"
							href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
							integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
							crossOrigin="anonymous"
						/>
						<link href="/static/css/vendor/normalize.css" rel="stylesheet" />
						<link
							rel="stylesheet"
							href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
							type="text/css"
							media="screen"
						/>
						<link
							rel="stylesheet"
							type="text/css"
							charset="UTF-8"
							href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
						/>
						<link
							rel="stylesheet"
							type="text/css"
							href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
						/>
					</Head>

					<GlobalStyle />

					<Header className="header" contrast={layout.hasContrast} menu={menu} />

					<ContentContainer contrast={layout.hasContrast}>{children}</ContentContainer>

					<Footer className="footer" contrast={layout.hasContrast} />
				</LayoutContainer>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = state => ({
	layout: state.layout,
	menu: state.menu
});

export default connect(mapStateToProps)(Layout);
