import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SectionContainer } from '../common/container';
import { Expansion } from '../common/content';
import { getCategories, getSelectedOffers } from '../../actions';

const Categories = styled.div`
	width: 30%;
	height: 100%;
	padding: 20px 0 0 50px;
	h1 {
		color: #4a4a4a;
		opacity: 0.87;
		font-family: Roboto;
		font-size: 8px;
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
		line-height: 1.6;
		letter-spacing: 1.5px;
		text-transform: uppercase;
	}
	ul {
		list-style-type: none;
		margin: 30px 0 0 0;
		padding: 0;
	}
	li {
		cursor: pointer;
		margin-bottom: 30px;
		opacity: 0.87;
		font-family: Roboto;
		font-size: 13px;
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: 0.2px;
	}
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	height: 89%;
	position: absolute;
	top: 0;
	left: 0;
`;

const Offers = styled.div`
	background: #4a4a4a;
	width: 70%;
	height: 100%;
	padding: 80px 64px 0px 50px;
`;

class YourFuture extends Component {
	componentWillMount = () => {
		const { getCategories } = this.props;
		getCategories();
	};

	render() {
		const { categories, getSelectedOffers, offers } = this.props;
		return (
			<SectionContainer className="section section--contact" backgroundColor="#fff">
				<Content>
					<Categories>
						<h1>
							Available
							<br /> carrier paths
						</h1>
						<ul>
							{categories &&
								categories.map((cat, index) => (
									<li key={index} onClick={e => getSelectedOffers(cat.id)}>
										{cat.name}
									</li>
								))}
						</ul>
					</Categories>
					<Offers>
						<Expansion offers={offers} />
					</Offers>
				</Content>
			</SectionContainer>
		);
	}
}

function mapStateToProps({ career, offers }) {
	return {
		categories: career.categories,
		offers: offers.selectedOffers
	};
}

export default connect(
	mapStateToProps,
	{ getCategories, getSelectedOffers }
)(YourFuture);
