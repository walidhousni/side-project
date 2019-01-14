import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTestimonials } from '../../actions';
import QuickForm from '../common/form';

import { TestimonalSlider } from '../common/content';

const BuisnessContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	margin: 0;
	grid-gap: 40px;
	padding: 100px 70px;

	& h1 {
		width: 368px;
		font-size: 32px;
		font-weight: normal;
		letter-spacing: 0.3px;
		color: #4a4a4a;
		margin: 0;
	}

	& p {
		width: 180px;
		font-size: 18px;
		font-weight: 500px;
		letter-spacing: 0.2px;
		color: #4a4a4a;
		margin-top: 26%;
	}
`;

const CountingBuisness = styled.div`
	display: grid;
	position: absolute;

	margin-top: 14%;

	& h3 {
		margin: 0;
		color: #4a4a4a;
		font-size: 80px;
		font-weight: 300;
	}
`;

const BuisnessBanking = styled.div`
	max-width: 400px;
	display: block;
	row-gap: 77px;

	& h2 {
		width: 100px;
		font-size: 18px;
		font-weight: 500;
		line-height: normal;
		color: #4a4a4a;
		margin: 0;
	}

	& h4 {
		font-size: 32px;
		color: #4a4a4a;
		font-weight: normal;
		margin: 0;
	}

	& span {
		width: 340px;
		font-size: 12px;
		line-height: 1.43;
		letter-spacing: 0.3px;
		font-weight: normal;
		color: #4a4a4a;
		position: relative;
		top: 25px;
	}
`;

const BuisnessTestimonaisl = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	}
`;

class BuisnessMarket extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount = () => {
		const { getTestimonials } = this.props;
		getTestimonials();
	};

	render() {
		const { testimonials } = this.props;
		return (
			<React.Fragment>
				<QuickForm />
				<BuisnessContent>
					<h1>There are many variations of passages of Lorem Ipsum available, but the majority have.</h1>
					<CountingBuisness>
						<h3>+2.7k</h3>
						<h3>+3.1k h</h3>
					</CountingBuisness>
					<BuisnessBanking>
						<h2>Expertise in industries</h2>
						<div style={{ display: 'grid' }}>
							<h4>Banking</h4>
							<span>
								The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. The
							</span>
							<span> standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</span>
						</div>
					</BuisnessBanking>

					<BuisnessTestimonaisl>
						<div />
						<TestimonalSlider data={this.props.testimonials} type="featured" />
					</BuisnessTestimonaisl>
				</BuisnessContent>
			</React.Fragment>
		);
	}
}

function mapStateToProps({ testimonials }) {
	return {
		testimonials: testimonials.testimonials
	};
}

export default connect(
	mapStateToProps,
	{ getTestimonials }
)(BuisnessMarket);
