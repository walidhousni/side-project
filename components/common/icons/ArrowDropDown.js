import React from 'react';

const ArrowDropDown = props => (
	<svg width={20} height={20} {...props}>
		<defs>
			<path id="arrow-drop-down_svg__a" d="M5 8l5 5 5-5z" />
		</defs>
		<g fill="none" fillRule="evenodd">
			<mask id="arrow-drop-down_svg__b" fill="#fff">
				<use xlinkHref="#arrow-drop-down_svg__a" />
			</mask>
			<use fill="#000" xlinkHref="#arrow-drop-down_svg__a" />
			<g fill="#000" mask="url(#arrow-drop-down_svg__b)">
				<path d="M0 0h20v20H0z" />
			</g>
			<path d="M0 0h20v20H0z" mask="url(#arrow-drop-down_svg__b)" />
		</g>
	</svg>
);

export default ArrowDropDown;
