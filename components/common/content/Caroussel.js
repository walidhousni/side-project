import React, { Component } from 'react';
import Slider from 'react-slick';

import List from './List';
import Arrow from './Arrow';
import SubTitle from './SubTitle';

import { ArrowForward } from '../icons';

const NextArrow = props => {
	const { slideCount, currentSlide } = props;

	return (
		<Arrow next hidden={slideCount === currentSlide + 1} {...props}>
			<ArrowForward />
		</Arrow>
	);
};

const PrevArrow = props => {
	const { currentSlide } = props;

	return (
		<Arrow prev hidden={currentSlide === 0} {...props}>
			<ArrowForward />
		</Arrow>
	);
};

class Caroussel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 1
		};
	}

	render() {
		const { children, horizontal, dots, vertical, handleContrast } = this.props;
		const { currentSlide, before } = this.state;
		const settings = {
			dots: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			vertical: !horizontal,
			verticalSwiping: !horizontal,
			arrows: !horizontal,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
			fade: true,
			appendDots: points =>
				horizontal ? (
					<List>{points}</List>
				) : (
					<List vertical length={children.length}>
						<span>{`${currentSlide}/${children.length}`}</span> {dots[currentSlide - 1]}
					</List>
				),
			customPaging: i => <SubTitle>{dots[i]}</SubTitle>,
			afterChange: current => this.setState({ currentSlide: current + 1 }),
			beforeChange: (oldIdx, newIdx) => {
				const section = document.querySelector(`.slick-slide:nth-child(${newIdx + 1}) section`);

				if (section && vertical) {
					const classes = section.classList.value;

					const hasContrast = /has-contrast/.test(classes);

					handleContrast(hasContrast);
				}
			}
		};
		return <Slider {...settings}>{children}</Slider>;
	}
}

export default Caroussel;
