import { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../components/common/content';

const Div = styled.div`
	height: 100vh;
	max-width: 100%;
	display: flex;
	padding: 35px;
`;

const Image = styled.img`
	width: 175px;
	height: 200px;
	opacity: 0.3;
`;

const DivError = styled.div`
	max-width: 100%;
	${props => (props.img ? 'width: 100%;' : 'width: 225px;')}
	${props => props.img && 'height: 75%;'}
	${props => props.img && 'display: flex;'}
	${props => props.img && 'justify-content: center;'}
	${props => props.img && 'align-items: center;'}
`;

const Title = styled(Paragraph)`
	font-family: Roboto;
	font-size: 20px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: 0.3px;
`;

const Desc = styled(Paragraph)`
	font-family: Roboto;
	font-size: 12px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: 1.56;
	letter-spacing: 0.5px;
`;

const Span = styled.span`
	position: absolute;
	top: 115px;
	right: 25px;
	transform: rotate(90deg);
	font-family: Roboto;
	font-size: 15px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
`;

export default class Error extends Component {
	static getInitialProps({ res, err }) {
		const errStatuCode = err ? err.statusCode : null;
		const statusCode = res ? res.statusCode : errStatuCode;
		return { statusCode };
	}

	render() {
		// const { statusCode } = this.props;
		return (
			<Fragment>
				<Div>
					<DivError>
						<Title>
							The page you were <br /> looking for doesn't exist.
						</Title>
						<Desc>You may have mistyped the address or the page may have moved.</Desc>
					</DivError>
					<DivError img>
						<Image src="/static/imgs/icons/404.svg" />
					</DivError>
					<Span>404 Error</Span>
				</Div>
			</Fragment>
		);
	}
}
