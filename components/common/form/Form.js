import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled, { keyframes } from 'styled-components';
import { CloseLight } from '../icons';

const classNames = {
	inputStyle: 'MuiInputBase-root-36',
	labelStyle: 'MuiInputLabel-outlined-15',
	InputBorderStyle: 'MuiOutlinedInput-notchedOutline-30'
};

const OpenFormAnimatipn = keyframes`
    50% {
			left: 400px;
			opacity: 0.1;

		}
`;

const QuickFormContainer = styled.div`
	background: ${props => props.expandForm && ' linear-gradient(90deg, rgba(235, 47, 17, 1) 0%, #4a4a4a 100%);'};

	position: absolute;

	opacity: ${props => (props.closeForm ? '0' : '1')};
	max-width: ${props => (props.expandForm ? '73vw' : '0')};
	max-height: ${props => (props.expandForm ? '58.8vh' : '0')};
	padding: ${props => (props.expandForm ? '52px 60px' : '0')};
	left: ${props => (props.expandForm ? '0' : '1400px')};
	-webkit-transition: opacity 500ms ease;
	-moz-transition: opacity 500ms ease;
	-o-transition: opacity 500ms ease;
	transition: opacity 500ms ease;

	-moz-transform: translate3d(100px, 0px, 0px);
	-webkit-transform: translate3d(100px, 0px, 0px);
	-o-transform: translate(100px, 0px);
	-ms-transform: translate(100px, 0px);
	transform: translate3d(100px, 0px, 0px);

	-webkit-transform: translate3d(0, 0, 0);
	-webkit-backface-visibility: hidden;
`;

const FormContainer = styled.form`
	display: grid;
	grid-template-columns: 2fr 2fr 2fr;

	top: 0;
	z-index: 10;
`;

const SpanText = styled.div`
	position: absolute;
	bottom: 32px;

	& span {
		color: #fff;
		font-size: 9px;
		font-weight: 500;
		line-height: 1.6;
		letter-spacing: 1.5px;
	}
`;

const SendButtonDiv = styled.div`
	position: relative;

	& img {
		display: grid;
		bottom: 100px;
		left: 310px;
	}

	& button: {
		cursor: pointer;
	}
`;

const FormControl = styled.div.attrs(classNames)`
	.${classNames.inputStyle} {
		color: #fff;
	}

	.${classNames.labelStyle} {
		color: #fff !important;

		&:focus {
			color: #fff;
		}
	}

	.${classNames.InputBorderStyle} {
		border-color: #fff !important;
		opacity: 0.2;
	}

	&:focus {
		border-color: #fff !important;
	}

	width: 390px;
	position: relative;

	.btn-submit {
		position: absolute;
		right: 70px;
		bottom: 0;
		transform: translate(0, 45%);
		z-index: 10;
	}
`;

const SwitchingMenu = styled.div`
	position: ${props => (props.closeForm ? 'relative' : 'fixed')};
	background: linear-gradient(180deg, rgba(235, 47, 17, 1) 0%, #4a4a4a 100%);
	visibility: ${props => (props.expandForm ? 'hidden' : 'visible')};
	z-index: 999;

	right: 25.8%;
	width: 60px;
	height: 164px;

	& p {
		position: relative;
		color: #fff;
		font-size: 10px;
		font-weight: 500;
		text-align: center;
		margin: 0;
		padding: 0;
		align-items: baseline;
		-ms-writing-mode: tb-rl;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		top: 31%;
		left: 39%;
	}

	& img {
		cursor: pointer;
		position: relative;
		left: 80px;
		top: 39px;
		width: 20px;
		height: 20px;
	}
`;

const CoopContainer = styled.div`
	display: block;
	left: 40px;
	position: relative;

	& span {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		color: #fff;
		font-size: 10px;
		height: 50px;
	}

	& svg {
		width: 18px;
		height: 18px;
		position: relative;
		top: 25px;
		right: 16px;
		cursor: pointer;
	}
`;

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	toggleExpandForm = () => {
		this.setState({ expandForm: !this.state.expandForm });
	};

	toggleCloseForm = () => {
		this.setState({ closeForm: !this.state.closeForm });
	};

	render() {
		const {
			values: { name, phoneNumber },
			errors,
			touched,
			handleChange,
			isValid,
			setFieldTouched
		} = this.props;

		const change = (name, e) => {
			e.persist();
			handleChange(e);
			setFieldTouched(name, true, false);
		};

		return (
			<React.Fragment>
				<QuickFormContainer expandForm={this.state.expandForm}>
					<FormContainer
						onSubmit={() => {
							alert('Submited');
						}}
					>
						<FormControl>
							<TextField
								style={{ width: '380px', height: '60px' }}
								inputStyle={{ color: '#fff' }}
								id="name"
								helperText={touched.name ? errors.name : ''}
								error={touched.name && Boolean(errors.name)}
								onChange={change.bind(null, 'name')}
								label="Full Name"
								value={name}
								variant="outlined"
							/>
						</FormControl>

						<FormControl>
							<TextField
								theme={classNames}
								id="phoneNumber"
								style={{ width: '380px', height: '60px' }}
								helperText={touched.phoneNumber ? errors.phoneNumber : ''}
								error={touched.phoneNumber && Boolean(errors.phoneNumber)}
								onChange={change.bind(null, 'PhoneNumber')}
								label="Phone Number"
								value={phoneNumber}
								variant="outlined"
							/>

							<SendButtonDiv className="btn-submit">
								<Button type="submit" disabled={!isValid}>
									<img src="/static/imgs/send.svg" alt="send button" />
								</Button>
							</SendButtonDiv>
						</FormControl>
						<SpanText>
							<span>48h maximum of of our HR team will calls you to setuspan a meeting.</span>
						</SpanText>
						<CoopContainer>
							<span>A Co-op ?</span>
							<CloseLight onClick={this.toggleCloseForm} />
						</CoopContainer>
					</FormContainer>
				</QuickFormContainer>
				<SwitchingMenu closeForm={this.state.closeForm} onClick={this.toggleExpandForm}>
					<p>A Coop?</p>
					{/* <img src="/static/imgs/close-light.svg" alt="close quick  contact" /> */}
				</SwitchingMenu>
			</React.Fragment>
		);
	}
}
