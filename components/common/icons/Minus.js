import React from 'react';

const Minus = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path id="minus_svg__a" d="M20 11.429H0V8.57h20z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="minus_svg__b" fill="#fff">
				<use xlinkHref="#minus_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#minus_svg__a" />
			<g fill="#000" mask="url(#minus_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#minus_svg__b)" />
		</g>
	</svg>
);

export default Minus;
