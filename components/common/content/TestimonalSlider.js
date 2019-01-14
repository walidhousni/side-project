import React, { Component } from 'react';
import styled from 'styled-components';
import Slick from 'react-slick';
import TestimonialArrow from './TestimonialArrow';

import { ArrowTest } from '../icons';

const NextArrow = props => {
	const { slideCount, currentSlide } = props;

	return (
		<TestimonialArrow next hidden={slideCount === currentSlide + 1} {...props}>
			<ArrowTest />
		</TestimonialArrow>
	);
};

const PrevArrow = props => {
	const { currentSlide } = props;

	return (
		<TestimonialArrow prev hidden={currentSlide === 0} {...props}>
			<ArrowTest />
		</TestimonialArrow>
	);
};

const TestimonialCarousel = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	& div:nth-child(1) {
		border-radius: 50%;
		border: 1px dashed #4a4a4a;
		width: 390px;
		height: 390px;
		position: absolute;
	}

	& div:nth-child(2) {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(235, 47, 17, 0.7);
		width: 60px;
		height: 60px;
		border-radius: 30px;
		position: absolute;
		margin-top: 280px;
	}

	& div:nth-child(3) {
		position: absolute;
		top: 45%;
		left: 220px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		& span {
			writing-mode: vertical-rl;
			text-orientation: mixed;
			font-size: 15px;
			font-weight: 300;
		}

		& img {
			width: 50px;
			height: 50px;
			border-radius: 50px;
		}

		& h5 {
			width: 294px;
			height: 112px;
			opacity: 0.87;
			font-size: 24px;
			font-weight: normal;
			font-style: normal;
			font-stretch: normal;
			line-height: normal;
			letter-spacing: normal;
		}
	}
`;

const ItemsSliderContainer = styled.div`
	display: block;
`;

class TestimonialTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 1
		};
	}

	render() {
		const { children, horizontal, dots } = this.props;
		const { currentSlide, before } = this.state;

		let template = null;

		const { type, data } = this.props;

		switch (type) {
			case 'featured':
				template = data.map((item, i) => (
					<TestimonialCarousel key={i}>
						<div />
						<div>
							<ArrowTest style={{ cursor: 'pointer' }} />
						</div>
						<div>
							<span>Some of our clients</span>
							<img src={item.avatar} alt="avatar" />
							<h5>{item.name}</h5>
							<h6>{item.review}</h6>
						</div>
					</TestimonialCarousel>
				));
				break;
			default:
		}

		const settings = {
			dots: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />
		};

		return <Slick {...settings}>{template}</Slick>;
	}
}

export default TestimonialTemplate;
