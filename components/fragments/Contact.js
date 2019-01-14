import { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SectionContainer } from '../common/container';
import { Map, Paragraph } from '../common/content';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;
	height: 100%;

	form {
		grid-row: 1 / 1;
		align-self: flex-start;
	}

	.map {
		grid-row: 1 / 4;
		grid-column: 2 / 5;
		background: white;
	}
`;

const FormDescription = styled(Paragraph)`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.white};
`;

const Input = styled.input`
	background: rgba(255, 255, 255, 0.1);
	border: 0;
	color: ${({ theme }) => theme.colors.white};
	height: 50px;
	font-size: 16px;
	padding: 10px;
	width: 100%;
`;

const FormActions = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 10px;
	width: 100%;

	a {
		color: ${({ theme }) => theme.colors.white} !important;
		font-size: 14px;
		letter-spacing: 0.4px;
		margin-right: 20px;
	}
`;

const Submit = styled.button`
	background-color: ${({ theme }) => theme.colors.white};
	border: none;
	color: ${({ theme }) => theme.colors.black} !important;
	cursor: pointer;
	font-size: 14px;
	padding: 17px 10px;
	width: 135px;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #eee;
	}
`;

const ContactInfos = styled.div`
	grid-row: 3 / 4;
	align-self: flex-end;
`;

const Email = styled(Paragraph)`
	font-size: 22px;
`;

const Phone = styled(Paragraph)`
	font-size: 22px;
`;

const Location = styled.p`
	font-size: 18px;
	letter-spacing: 0.5px;
	margin: 25px 0;

	span {
		color: ${({ theme }) => theme.colors.white};
		display: block;
		opacity: 0.25;
		font-size: 12px;
		font-weight: 500;
		line-height: 1.6;
		margin-bottom: 10px;
	}
`;

const ContactLinks = styled.div`
	> span {
		color: ${({ theme }) => theme.colors.white};
		display: block;
		opacity: 0.25;
		font-size: 12px;
		font-weight: 500;
		line-height: 1.6;
		margin-bottom: 10px;
	}
`;

const ContactIcons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	a {
		text-decoration: none;

		i {
			color: ${({ theme }) => theme.colors.white};
			display: block;
			font-size: 16px;
			vertical-align: middle;
		}

		&:last-child {
			i {
				color: ${({ theme }) => theme.colors.green};
			}
		}
	}

	a > div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

const SocialIcons = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	i {
		font-size: 20px;
		transition: color 0.3s ease;
		color: ${({ theme }) => theme.colors.white};
	}

	> a {
		display: block;

		&:not(:last-child) {
			margin-right: 40px;
		}

		&:nth-child(1):hover {
			i {
				color: ${({ theme }) => theme.colors.youtube};
			}
		}

		&:nth-child(2):hover {
			i {
				color: ${({ theme }) => theme.colors.facebook};
			}
		}

		&:nth-child(3):hover {
			i {
				color: ${({ theme }) => theme.colors.twitter};
			}
		}
	}
`;

const Icon = styled.div`
	opacity: 0.87;
	font-size: 10px;
	line-height: 1.2;
	letter-spacing: 1.5px;
	text-transform: uppercase;

	i {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-right: 10px;
		vertical-align: middle;
		fill: ${({ theme }) => theme.colors.white} !important;
	}
`;

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		const { value } = this.state;
		alert(`A name was submitted: ${value}`);
		event.preventDefault();
	}

	render() {
		const { value } = this.state;

		return (
			<SectionContainer className="section section--contact has-contrast" backgroundColor="#4a4a4a">
				<Grid>
					<form onSubmit={this.handleSubmit}>
						<FormDescription>Stay up. Don’t worry, we’re not SPAM.</FormDescription>
						<Input name="email" type="text" placeholder="Your email" value={value} onChange={this.handleChange} />
						<FormActions>
							<Link href="/">
								<a>Don't mess next events!</a>
							</Link>
							<Submit>GO AHEAD</Submit>
						</FormActions>
					</form>

					<ContactInfos>
						<Email>welcome@maltemafrica.com</Email>
						<Phone>+212 5 22 55 56 57/78</Phone>

						<Location>
							<span>Address</span>
							201, Bd Zerktouni. CASABLANCA
						</Location>

						<ContactLinks>
							<span>Social</span>
							<ContactIcons>
								<Link href="http://www.linkedin.com">
									<a>
										<Icon>
											<i className="fab fa-linkedin-in" />
											<span>Maltem Consulting</span>
										</Icon>
									</a>
								</Link>
								<Link href="http://www.linkedin.com">
									<a>
										<Icon>
											<i className="fab fa-linkedin-in" />
											<span>Maltem Africa</span>
										</Icon>
									</a>
								</Link>
								<Link href="http://www.linkedin.com">
									<a>
										<Icon>
											<i className="fab fa-linkedin-in" />
											<span>Maltem Impact</span>
										</Icon>
									</a>
								</Link>
							</ContactIcons>

							<SocialIcons>
								<Link href="http://www.youtube.com">
									<a>
										<i className="fab fa-youtube" />
									</a>
								</Link>
								<Link href="http://www.facebook.com">
									<a>
										<i className="fab fa-facebook" />
									</a>
								</Link>
								<Link href="http://www.twitter.com">
									<a>
										<i className="fab fa-twitter" />
									</a>
								</Link>
							</SocialIcons>
						</ContactLinks>
					</ContactInfos>

					<Map />
				</Grid>
			</SectionContainer>
		);
	}
}

export default Contact;
