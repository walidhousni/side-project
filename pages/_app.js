import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import makeStore from '../stores';
import { Layout } from '../components/layout';

class MAF extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps, store, router } = this.props;

		return (
			<Container>
				<Provider store={store}>
					<Layout path={router.route}>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</Container>
		);
	}
}

export default withRedux(makeStore)(MAF);
