import React from 'react';

const KeyboardArrow = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path id="keyboard-arrow_svg__a" d="M3.88 5L10 11.18 16.12 5 18 6.903 10 15 2 6.903z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="keyboard-arrow_svg__b" fill="#fff">
				<use xlinkHref="#keyboard-arrow_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#keyboard-arrow_svg__a" />
			<g fill="#EB2F11" mask="url(#keyboard-arrow_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#keyboard-arrow_svg__b)" transform="rotate(90 10 10)" />
		</g>
	</svg>
);

export default KeyboardArrow;
