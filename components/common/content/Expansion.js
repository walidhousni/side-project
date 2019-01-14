import React, { Component } from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = styled.div`
	overflow: auto;
	height: 87%;

	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-track {
		opacity: 0;
	}
	::-webkit-scrollbar-thumb {
		opacity: 0;
	}
	::-webkit-scrollbar-thumb:hover {
		opacity: 0;
	}

	.panel {
		background: transparent;
		border-radius: initial !important;
		padding-right: 42px;
		display: flex;
		flex-direction: column;
	}

	.panel:before {
		background-color: rgba(0, 0, 0, 0);
	}

	.panel-header {
		justify-content: flex-end;
		width: 40%;
		align-self: flex-end;
	}

	.panel-header div:first-child {
		display: block;
		width: 90%;
		flex-grow: 0;
		margin: 0 0 20px 0;
	}

	.panel-header div:nth-child(2) {
		color: white;
		top: 8px;
		left: 8px;
		right: auto;
	}

	.details {
		color: white;
		opacity: 0.6;
		font-family: Roboto;
		font-size: 14px;
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.5;
		letter-spacing: 0.2px;
	}

	.city {
		color: white;
		font-family: Roboto;
		font-size: 13px;
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.5;
		letter-spacing: 0.2px;
		opacity: 0.8;
	}

	.title {
		color: white;
		opacity: 0.9;
		font-family: Roboto;
		font-size: 26px;
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: 0.3px;
	}

	.date {
		color: white;
		opacity: 0.8;
		font-family: Roboto;
		font-size: 20px;
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: 0.2px;
	}
`;

class Expansion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: null
		};
	}

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};

	render() {
		const { expanded } = this.state;
		const { offers } = this.props;
		return (
			<Accordion>
				{offers.map((offer, index) => (
					<ExpansionPanel
						key={index}
						className="panel"
						expanded={expanded === `panel${index}`}
						onChange={this.handleChange(`panel${index}`)}
					>
						<ExpansionPanelSummary className="panel-header" expandIcon={<ExpandMoreIcon />}>
							<Typography className="date">{offer.date}</Typography>
							<Typography className="title">{offer.title}</Typography>
							<Typography className="city">{offer.country}</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography className="text details">{offer.desc}</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				))}
			</Accordion>
		);
	}
}

export default Expansion;
